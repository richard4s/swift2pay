import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, Image, Button, ScrollView, AsyncStorage, TouchableOpacity } from 'react-native';

import MyWebView from 'react-native-webview-autoheight';

import RavePaymentModal from 'react-ravepayment'

import Rave from 'react-native-rave';


console.disableYellowBox = true;

import Card from '../components/Card';

export default class FundWallet extends Component {
  constructor(props) {
    super(props)

    this.state = {
      txtRef: ''
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

  onSuccess(data) {
    console.log("success", data);
    // You can get the transaction reference from successful transaction charge response returned and handle your transaction verification here
    console.log(data.data)
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

  render() {
      const { navigate } = this.props.navigation;

      return (

          <Rave 
            amount="100" 
            country="NG" 
            currency="NGN"
            paymentOption="card,account"
            email="test@mail.com" 
            firstname="Oluwole" 
            lastname="Adebiyi"
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
    
    