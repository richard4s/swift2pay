import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, Image, Button, ScrollView, AsyncStorage, TouchableOpacity } from 'react-native';

console.disableYellowBox = true;

export default class FundWallet extends Component {

  render() {
    return (
      <View style={styles.container} >
        <Text>Fund Wallet</Text>
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