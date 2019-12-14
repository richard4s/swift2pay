import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class FundWallet extends Component {
  static navigationOptions = {
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
    return (
        <WebView 
          source={{uri: 'https://github.com/facebook/react-native'}}
          style={{marginTop: 20}}
        />
    )
  }
};

