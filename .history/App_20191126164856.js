import React from 'react';
import { StyleSheet, Text, ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground source={require('./assets/images/bg/background.png')} style={styles.backgroundImage}>
      <Text>Swift2Pay</Text>
      <Text>Login | SignUp</Text>
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'stretch'
  },
});
