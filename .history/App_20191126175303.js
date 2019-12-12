import React from 'react';
import { StyleSheet, Text, ImageBackground } from 'react-native';

import theme from './constants/theme' 

export default function App() {
  return (
    <ImageBackground source={require('./assets/images/bg/background.png')} style={styles.backgroundImage}>
      <Text style={theme.sizes.}>Login</Text>
      <Text>SignUp</Text>
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
});
