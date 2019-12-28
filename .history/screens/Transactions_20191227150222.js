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

   getTransactions = async () => {
    const grabUserId = await AsyncStorage.getItem('userId')

    fetch('https://swift2pay.com/account/api/request.php?action=profile&userID='+grabUserId+'&apiKey=JFJHFJJ38388739949HFGDJ', {
      method: 'GET',
    }) 
    .then(response => response.json())
    .then((json) => {
      user = JSON.stringify(json)
      console.log('Response: ' , user, json.message)

      this.setState({
        phone: json.phone,
        mobileNetwork: json.mobileNetwork,
        amount: json.amount,
      });

      
    })
    .catch((error) => {
      console.error(error);
      alert(error)
    });

    fetch('https://swift2pay.com/account/api/request?action=walletAirtimePurchase&amount='+this.state.amount+'&mobileNetwork='+this.state.mobileNetwork+'&apiKey=JFJHFJJ38388739949HFGDJ&phone='+this.state.phone+'&user_id='+ grabUserId +'&service_name=Airtime%20Purchase', {
      method: 'GET',
    })
    .then(response => response.json())
    .then((json) => {
      user = JSON.stringify(json)
      console.log('Response: ' , user, json.message)
      this.setState({
        message: json.message,
      });

      if(json.status == 200){
        console.log(json.message)
        alert(json.message)
        
      }
    })
    .catch((error) => {
      console.error(error);
      alert(error)
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Transactions List</Text>
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