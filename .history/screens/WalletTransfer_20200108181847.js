import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, Image, Button, ScrollView, Picker, AsyncStorage } from 'react-native';

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
    }
  }; 

  walletTransfer = async () => {
    const grabUserId = await AsyncStorage.getItem('userId')

    alert('Wallet Transfer')

    fetch('https://swift2pay.com/account/api/request?action=resolveWalletAccount&recipient='+this.state.email, {
      method: 'GET',
    })
    .then(response => response.json())
    .then((json) => {
      user = JSON.stringify(json)
      console.log('Response: ' , user, json.message)

      this.setState({
        status: json.status,
        userID: json.userID,
        name: json.name,
        message: json.message
      });

    })
    .catch((error) => {
      console.error(error);
      alert(error)
    });

    fetch('https://swift2pay.com/account/api/request?action=walletTransfer&recipientID='+this.state.recipientUserID+'&userID='+grabUserId+'&amount='+this.state.amount+'&apiKey=JFJHFJJ38388739949HFGDJ', {
      method: 'GET',
    })
    .then(response => response.json())
    .then((json) => {
      user = JSON.stringify(json)
      console.log('Response: ', user, json.message)
      alert('Response: ', json.message )
      this.setState({
        message: json.message,
      });

      if(json.status === 200){
        console.log(json.message)
        console.log(this.state.amount)
        alert('Please wait...')
        alert(json.message)
      } else if(json.status === 400){
        alert(json.message)
      }
    })
    .catch((error) => {
      console.error(error);
      alert('Insufficient Wallet Fund')
      alert(error)
    });
  }

 render() {
  const { navigate } = this.props.navigation;
  return (
   <ImageBackground source={require('../assets/images/bg/background.png')} style={styles.backgroundImage}>
   
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
      
      <View style={{margin: 15}} >
        <Card>
          <TextInput style={{ width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Enter message (optional)" />
        </Card>
      </View>
      
      <View style={{margin: 15, marginTop: 35}} >
        <Text style={styles.submit} onPress={this.walletTransfer}>Payment</Text>
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
