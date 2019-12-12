import React from 'react';
import { StyleSheet, Text, ImageBackground } from 'react-native';

import theme from './constants/theme'; 

export default function App() {
  return (
    <Login />
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
});
