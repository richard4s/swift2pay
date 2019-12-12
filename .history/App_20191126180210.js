import React from 'react';
import { StyleSheet, View } from 'react-native';

import theme from './constants/theme'; 

export default function App() {
  return (
    <View>
      <Login />
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
});
