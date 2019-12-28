import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

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
     this.state={

     }
   };

    getTransactions = () => {
      
      fetch('https://swift2pay.com/account/api/request.php?action=getTransactions&userID='+this.state.userId+'&apiKey=JFJHFJJ38388739949HFGDJ', {
        method: 'GET',
      })
      .then(response => response.json())
      .then((json) => {
        user = JSON.stringify(json)
        console.log('Response: ' , user, json.message)
        this.setState({
          message: json.message,
        });
  
      }
    };
    
      
    

  render() {
    return (
      <View style={styles.container}>
        <Text>{{getTransactions}}</Text>
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