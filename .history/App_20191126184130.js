import React from 'react';
import { StyleSheet, ImageBackground, Text } from 'react-native';

import Card from './components/Card';

export default function App() {
  return (
    <ImageBackground source={require('./assets/images/bg/background.png')} style={styles.backgroundImage}>
      <Card style={styles.inputContainer}>
        <Text>Swift2Pay</Text>
      </Card>
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
   inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
});
