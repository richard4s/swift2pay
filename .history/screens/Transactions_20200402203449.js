import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image, ActivityIndicator, AsyncStorage, SafeAreaView,
Platform } from 'react-native';

import Modal, { ModalTitle, ModalContent, SlideAnimation, ModalFooter, ModalButton } from 'react-native-modals';

// import { ListItem } from "react-native-elements"
import Card from '../components/Card';

import FeatherIcons from 'react-native-vector-icons/Feather';

import Spinner from 'react-native-loading-spinner-overlay';

export default class Transactions extends Component {
  static navigationOptions = {
    title: 'Transactions',
     headerStyle: {
       backgroundColor: 'rgb(147, 43, 173)',
     },
     headerTintColor: '#fff',
     //Sets Header text color
     headerTitleStyle: {
       fontWeight: 'bold',
       //Sets Header text style
     },
   };

   constructor(props){
     super(props);
     this.state = { 
       data: null,
       page: 1,
       isLoading: false,
       visible: false,
      // isLoading: false,
      spinner: false,
      successLog: null
      };
   }

   componentDidMount = async () => {
    //  this.setState({isLoading: true}, this.getData)
    this.setState({ isLoading: true, spinner: true });
    this.getData()
   }

   hideSpinner = () => {
    this.setState({
      spinner: false
    }); 
  }

   getData = async () => {
    //  const apiURL = "https://jsonplaceholder.typicode.com/photos?_limit=5&_page=" + this.state.page
    const grabUserId = await AsyncStorage.getItem('userId')

    console.log('Gott hereeeeee', grabUserId)

    const apiURL = 'https://swift2pay.com/account/api/request.php?action=getTransactions&userID='+ grabUserId +'&apiKey=JFJHFJJ38388739949HFGDJ'
     fetch(apiURL).then((res) => res.json())
     .then((resJson) => {
      // JSON.stringify(resJson)
      //  console.log('transactions ---' , JSON.stringify(resJson))
      console.log('Log: ', resJson)

      this.setState({
        data: resJson,
        visible: true,
        isLoading: false,
        spinner: false,
        successLog: true
      });

     })
     .catch((err) => {
      console.error(err);

      this.setState({
        successLog: false
      })
     })
   }

   renderRow = ({item}) => {
      return (
        <View style={styles.itemRow}>
          <Card>
            {item.service_name ? <Text style={styles.itemText}>Service Name: {item.service_name}</Text> : null}
            {item.service_value ? <Text style={styles.itemText}>Service Value: {item.service_value}</Text> : null}
            {item.amount ? <Text style={styles.itemText}>Amount: {item.amount}</Text> : null}
            {item.date ? <Text style={styles.itemText}>Date: {item.date}</Text> : null}
            {item.value_number ? <Text style={styles.itemText}>Value Number: {item.value_number}</Text> : null}
          </Card>
        </View>
      )
   }

   renderFooter = () => {
     return (
       this.state.isLoading ?
       <View style={styles.loader}>
         <ActivityIndicator size="large" />
       </View>: null
     )
   }

   handleLoadMore = () => {
     this.setState({page: this.state.page + 1, isLoading: true}, this.getData)
   }

  render() {

    const SuccessDialog = () => {
      return(
        <View>
          <FeatherIcons style={{ textAlign: "center"}} name="check-circle" size={30} color="green" />
          <Text>Your airtime is on its way</Text>
        </View>   
      )
    }
  
    const ErrorDialog = () => {
      return(
        <View>
          <FeatherIcons style={{ textAlign: "center"}} name="x" size={30} color="red" />
          <Text>Failed. Try again later</Text>
        </View>   
      )
    }

    return (
      <SafeAreaView>

      {this.state.successLog == false && 
            <Modal
            visible={this.state.visible}
            modalAnimation={new SlideAnimation({
              slideFrom: 'bottom',
            })}
            onSwipeOut={(event) => {
              this.setState({ visible: false });
            }}
            footer={
              <ModalFooter>
                <ModalButton
                  text="OK"
                  onPress={() => {
                    this.setState({ visible: false });
                  }}
                />
              </ModalFooter>
            }
          >
          <ModalContent>
              { 
                this.state.successLog == false && <ErrorDialog />
              }
          </ModalContent>
        </Modal>
        }

        <Card>
          <FlatList 
            style={styles.screen}
            data={this.state.data}
            renderItem={this.renderRow}
            keyExtractor={(item) => item.date}
            // onEndReached={this.handleLoadMore}
            // onEndReachedThreshold={0}
            // ListFooterComponent={this.renderFooter}
          />
        </Card>

        {
            Platform.OS === 'android' ?
              <Spinner
              visible={this.state.spinner}
              textContent={'Loading...'}
              textStyle={{color: '#purple'}}
            /> :
            <ActivityIndicator size="large" animating={this.state.isLoading} color="purple" />
          }  

      </SafeAreaView>

      
      
    )
  }
};

const styles = StyleSheet.create({
  screen: {
    marginTop: 20,
  },
  itemRow: {
    borderBottomColor: '#ccc',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderRightColor: '#ccc',
    borderLeftColor: '#ccc'
  },
  itemText: {
    fontSize: 16,
    padding: 5,
  },
  itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  },
  loader: {
    marginTop: 10,
    alignItems: 'center'
  }
});