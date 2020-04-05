import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, Image, Button, ScrollView, Picker,
  ActivityIndicator, Platform, AsyncStorage, TouchableOpacity } from 'react-native';

import Modal, { ModalTitle, ModalContent, SlideAnimation, ModalFooter, ModalButton } from 'react-native-modals';

import FeatherIcons from 'react-native-vector-icons/Feather';

import Spinner from 'react-native-loading-spinner-overlay';


import Card from '../components/Card';

export default class WalletTransfer extends Component {
  static navigationOptions = {
    title: 'Wallet Transfer',
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
    this.state={
      email: '',
      amount: '',
      recipientID: '',
      userID: '',
      visible: false,
      isLoading: false,
      spinner: false,
      successLog: null
    }
  }; 

  hideSpinner = () => {
    this.setState({
      spinner: false
    }); 
  }

  walletTransfer = async () => {

    this.setState({ isLoading: true, spinner: true });

    const grabUserId = await AsyncStorage.getItem('userId')

    // alert('Please wait...')

    // alert('Wallet Transfer')


    fetch('https://swift2pay.com/account/api/request?action=resolveWalletAccount&recipient='+this.state.email, {
      method: 'GET',
    })
    .then(response => response.json())
    .then((json) => {
      user = JSON.stringify(json)
      console.log('Response: ' , user, json)
      // alert('Full name: ' + json.name + ' Amount: ' +this.state.amount + ' Message: ' +this.state.optionalMessage)
      this.setState({
        status: json.status,
        userID: grabUserId,
        name: json.name,
        message: json.message,
        recipientID: json.recipientID,
        isLoading: true,
        // visible: true,
        isLoading: false,
        spinner: false,
      });

      if(!json.name) {
        this.setState({
          visible: true
        })
      }

      this.props.navigation.navigate('WalletTransferConfirm', {
        recipientID: this.state.recipientID,
        userID: grabUserId,
        amount: this.state.amount,
        userName: this.state.name,
        userEmail: this.state.email
      })

      // this.initiateTransfer();

    })
    .catch((error) => {
      console.error(error);
      alert(error)
    });

    
  }

  // initiateTransfer = () => {
  //   // console.log('Statees: ', this.state)

  //   fetch('https://swift2pay.com/account/api/request?action=walletTransfer&recipientID='+this.state.recipientID+'&userID='+this.state.userID+'&amount='+this.state.amount+'&apiKey=JFJHFJJ38388739949HFG', {
  //     method: 'GET',
  //   })
  //   .then(response => response.json())
  //   .then((json) => {
  //     user = JSON.stringify(json)
  //     console.log('Response: ', user, json.message)
  //     // alert(json.message)

  //     this.setState({
  //       message: json.message,
  //       visible: true,
  //       isLoading: false,
  //       spinner: false,
  //       successLog: true
  //     });

  //     if(json.status == 200) {
  //       this.setState({
  //         successLog: true
  //       })
  //     } else {
  //       this.setState({
  //         successLog: false
  //       })
  //     }
  
  //   }).catch((err) => {
  
  //     console.log(err)
      
  //     this.setState({
  //       successLog: false
  //     })
  //   })
  // }

 render() {

  const { navigate } = this.props.navigation;

  const SuccessDialog = () => {
    return(
      <View>
        <FeatherIcons style={{ textAlign: "center"}} name="check-circle" size={30} color="green" />
        <Text>Your money is on its way</Text>
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
   <ImageBackground source={require('../assets/images/bg/background.png')} style={styles.backgroundImage}>

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
                this.props.navigation.navigate('Browse', {
                  userId: this.state.userID
                })
              }}
            />
          </ModalFooter>
        }
      >
      <ModalContent>
          { 
            this.state.successLog == true ? <SuccessDialog /> : <ErrorDialog />
          }
      </ModalContent>
    </Modal>
   
      <View style={{margin: 15, marginTop: 75,}} >
        <Card>
          <TextInput style={{ width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Recipient email address" onChangeText={(email)=>this.setState({email})} value={this.state.email} />
        </Card>
      </View>
      
      <View style={{margin: 15}} >
        <Card>
          <TextInput style={{ width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Enter amount" keyboardType="number-pad" onChangeText={(amount)=>this.setState({amount})} value={this.state.amount} />
        </Card>
      </View>
      
      {/* <View style={{margin: 15}} >
        <Card>
          <TextInput style={{ width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Enter message (optional)" onChangeText={(optionalMessage)=>this.setState({optionalMessage})} value={this.state.optionalMessage} />
        </Card>
      </View> */}

          {
            Platform.OS === 'android' ?
              <Spinner
              visible={this.state.spinner}
              textContent={'Loading...'}
              textStyle={{color: '#purple'}}
            /> :
            <ActivityIndicator size="large" animating={this.state.isLoading} color="purple" />
          } 
      
      <View style={{margin: 15, marginTop: 35}} >
        <TouchableOpacity style={styles.submit} onPress={this.walletTransfer}>
          <Text style={styles.textTwo} >Payment</Text>
        </TouchableOpacity>
      </View>

    </ImageBackground>
  )
 }
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
   },
   screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
   },
   browse: {
    fontSize: 25,
    fontWeight: "500",
    position: "relative",
    paddingRight: 195,
    color: '#932BAD',
    marginTop: 5,
    marginBottom: 5
   },
   view: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
   },
   card: {
    flex: 1,
    width: 150,
    height: 100,
    alignItems: 'center',
    margin: 10,
   },
   cardTwo: {
    flex: 1,
    width: 70,
    height: 70,
    alignItems: 'center',
    margin: 3,
    marginTop: 9,
    padding: null,
   },
   text: {
    fontSize: 11,
    fontWeight: 'bold',
    margin: 5,
    alignContent: 'center',
   },
   textTwo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#932BAD',
   },
   image: {
    width: '50%',
    height: '50%',
    margin: 5,
    alignContent: 'center'
   },
   imageTwo: {
    width: 15,
    height: 15,
    alignContent: "center",
    padding: null,
    margin: 2,
    marginTop: 12,
   },
   submit: {
    width: 190,
    height: 60,
    fontSize: 25,
    fontWeight: "500",
    color: "purple",
    borderWidth: 2,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderRadius: 10,
    borderColor: "purple",
    alignContent: 'center',
    padding: 5,
    paddingLeft: 45,
    paddingTop: 15,
    marginTop: 15,
    marginLeft: 135,
   },
});
