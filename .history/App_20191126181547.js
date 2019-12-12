import React from 'react';
import { StyleSheet, View } from 'react-native';

import Login from './screens/Login'; 

export default function App() {
  return (
    <View>
      <Login />
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
