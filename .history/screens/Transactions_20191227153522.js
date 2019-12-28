import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

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

   constructor(){
     super();
     this.state={ };
     this.getTransactions();
   };

    getTransactions = () => {
      const url = "https://swift2pay.com/account/api/request.php?action=getTransactions&userID=1&apiKey=JFJHFJJ38388739949HFGDJ"

      fetch(url) 
      .then(response => response.json())
      .then((json) => {
        user = JSON.stringify(json)
        console.log('Response: ' , user, json.message)

      })
      .catch((error) => {
        console.error(error);
        alert(error)
      });

      
      fetch('https://swift2pay.com/account/api/request.php?action=getTransactions&userID='+grabUserId+'&apiKey=JFJHFJJ38388739949HFGDJ', {
        method: 'GET',
      })
      
    };
    
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.getTransactions}</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: null,
    width: null,
  }
});