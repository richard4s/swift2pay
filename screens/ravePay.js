import React, { Component } from 'react';
import { StyleSheet, ImageBackground, TouchableHighlight, Text, View, TextInput, Image, Button, ScrollView, AsyncStorage, TouchableOpacity } from 'react-native';

import MyWebView from 'react-native-webview-autoheight';

import RavePaymentModal from 'react-ravepayment'

import Rave from 'react-native-rave';


console.disableYellowBox = true;

import Card from '../components/Card';

export default class RavePay extends Component {
  constructor(props) {
    super(props)

    this.state = {
      txtRef: '',
      amount: '',
      message: '',
      last_name: '',
      first_name: '',
      email: '',
    }

    this.onSuccess = this.onSuccess.bind(this);
    this.onFailure = this.onFailure.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  static navigationOptions = {
    title: 'Fund Wallet',
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

  // componentDidMount() {
  //   this.grabUserInfo()
  // }

  callback = (response) => {
    console.log(response);

  }

  close = () => {
    console.log("Payment closed");
  }

  getReference = () => {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    for( let i=0; i < 10; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
  }

  grabUserInfo =  async () => {

    const grabUserId = await AsyncStorage.getItem('userId')

    fetch('https://swift2pay.com/account/api/request.php?action=profile&userID='+grabUserId+'&apiKey=JFJHFJJ38388739949HFGDJ', {
      method: 'GET',
    }) 
    .then(response => response.json())
    .then((json) => {
      user = JSON.stringify(json)
      console.log('Response: ' , user, json.message)
      this.setState({
        message: json.message,
        first_name: json.first_name,
        last_name: json.last_name,
        email: json.email
      });

    })
    .catch((err) => {
      console.log(err)
    })
  }

   onSuccess = async (data) => {
    console.log("success", data);
    // You can get the transaction reference from successful transaction charge response returned and handle your transaction verification here
    console.log('data 1', data.data.tx.txRef)

    const grabUserId = await AsyncStorage.getItem('userId')

    console.log(grabUserId)

    let transReference = data.data.tx.txRef.slice(6)
    console.log(transReference)

    fetch('http://swift2pay.com/account/api/request?action=walletFunding&apiKey=JFJHFJJ38388739949HFGDJ&userID='+grabUserId+'&txref='+data.data.tx.txRef, {
      method: 'GET',
    }) 
    .then(response => response.json())
    .then((json) => {
      user = JSON.stringify(json)
      console.log('Response: ' , user, json.message)
      this.setState({
        message: json.message,
        first_name: json.first_name,
        last_name: json.last_name,
        email: json.email
      });

      this.props.navigation.navigate('Browse', {
        userId: grabUserId
      })

    })
    .catch((err) => {
      console.log(err)
    })

  }
 
  onFailure(data) {
    console.log("error", data);
  }
 
  onClose() {
    //navigate to the desired screen on rave close
    console.log("Payment closed");
    // this.props.navigation.navigate('Browse', {
    //   userId: json.userID
    // })
  }

  raveModal = () => {
    return (<Rave
      amount={this.state.amount} 
      country="NG" 
      currency="NGN"
      paymentOption="card,account"
      email={this.state.email} 
      firstname={this.state.first_name} 
      lastname={this.state.last_name}
      publickey="FLWPUBK-ad71471b648438d621c9411ff917410d-X" 
      encryptionkey="408d9cfd87970bbb5851ec4f"
      meta={[{ metaname: "color", metavalue: "red" }, { metaname: "storelocation", metavalue: "ikeja" }]}
      onSuccess={res => this.onSuccess(res)} 
      onFailure={e => this.onFailure(e)}
      onClose={e => this.onClose(e)}
    />)
  }

  render() {
      const { navigate } = this.props.navigation;

      return (

        <Rave
            amount={this.state.amount} 
            country="NG" 
            currency="NGN"
            paymentOption="card,account"
            email={this.state.email} 
            firstname={this.state.first_name} 
            lastname={this.state.last_name}
            publickey="FLWPUBK-ad71471b648438d621c9411ff917410d-X" 
            encryptionkey="408d9cfd87970bbb5851ec4f"
            meta={[{ metaname: "color", metavalue: "red" }, { metaname: "storelocation", metavalue: "ikeja" }]}
            onSuccess={res => this.onSuccess(res)} 
            onFailure={e => this.onFailure(e)}
            onClose={e => this.onClose(e)}
        />      
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
       submit: {
        width: 180,
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
        paddingTop: 15,
        paddingLeft: 45,
        padding: 5,
        marginTop: 35
       },
      textTwo: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'rgb(147, 43, 173)',
      },
       cardStyle: { 
        width: '90%',
        height: 25,
        borderColor: 'gray',
        borderWidth: 1, 
        borderTopWidth: 0, 
        borderLeftWidth: 0, 
        borderRightWidth: 0,
        alignItems: "center",
        padding: 5,
        margin: 5 
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
        justifyContent: "center",
        width: '100%'
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
        marginTop: 35,
        marginLeft: 135,
       },
    });
    
    