import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, Image, Button, ScrollView, AsyncStorage, TouchableOpacity } from 'react-native';

import MyWebView from 'react-native-webview-autoheight';

console.disableYellowBox = true;

import Card from '../components/Card';

export default class FundWallet extends Component {
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

  render() {
      const { navigate } = this.props.navigation;
      return (
        
            <ImageBackground source={require('../assets/images/bg/background.png')} style={styles.backgroundImage}>
        
              {/* <View style={{margin: 15, marginTop: 55}} >
              <Text style={{margin: 3}}>Enter amount (NGN50 - NGN50,000)</Text>
                <Card>
                  <TextInput style={{ width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Enter amount" keyboardType="number-pad" />
                </Card>
                <Text style={styles.submit} onPress={()=>navigate('Browse')}>Payment</Text>
              </View> */}

              <MyWebView 
                source={{uri: ''}}
                startInLoadingState={true}
              />

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
    
    