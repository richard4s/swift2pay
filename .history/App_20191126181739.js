import React from 'react';
import { StyleSheet, ImageBackground, } from 'react-native';

import Login from './screens/Login'; 

export default function App() {
  return (
    <ImageBackground source={require('./assets/images/bg/background.png')} style={styles.backgroundImage}>
      
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
