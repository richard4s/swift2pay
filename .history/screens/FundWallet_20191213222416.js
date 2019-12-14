import React, { Component } from 'react';
import { AppRegistry, WebView, StyleSheet, View } from 'react-native';

console.disableYellowBox = true;

export default class FundWallet extends Component {

  render() {
    return (
      <View style={styles.container} >
        <WebView
          style={styles.WebViewStyle}
          source={{ uri: 'https://www.facebook.com' }}
          javaScriptEnabled={true}
          domStorageEnabled={true} />
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
    },
  });