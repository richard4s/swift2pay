import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image, ActivityIndicator, AsyncStorage } from 'react-native';

// import { ListItem } from "react-native-elements"

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
     this.state={ 
       data: [],
       page: 1,
       isLoading: false
      };
   }

   componentDidMount() {
     this.setState({isLoading: true}, this.getData)
   }

   getData = async () => {
    //  const apiURL = "https://jsonplaceholder.typicode.com/photos?_limit=5&_page=" + this.state.page
    const grabUserId = await AsyncStorage.getItem('userId')
    const apiURL = 'https://swift2pay.com/account/api/request.php?action=getTransactions&userID='+ grabUserId +'&apiKey=JFJHFJJ38388739949HFGDJ'
     fetch(apiURL).then((res) => res.json())
     .then((resJson) => {
       this.setState({
         data: resJson,
         isLoading: false
       })
     })
   }

   renderRow = ({item}) => {
      return (
        <View style={styles.itemRow}>
          <Text style={styles.itemText}>{item.service_name}</Text>
          <Text style={styles.itemText}>{item.service_value}</Text>
          <Text style={styles.itemText}>{item.amount}</Text>
          <Text style={styles.itemText}>{item.date}</Text>
          <Text style={styles.itemText}>{item.value_number}</Text>
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
    return (
      <FlatList 
        style={styles.screen}
        data={this.state.data}
        renderItem={this.renderRow}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={this.handleLoadMore}
        onEndReachedThreshold={0}
        ListFooterComponent={this.renderFooter}
      />
    )
  }
};

const styles = StyleSheet.create({
  screen: {
    marginTop: 20,
  },
  itemRow: {
    borderBottomColor: '#ccc',
    marginBottom: 10,
    borderBottomWidth: 1
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