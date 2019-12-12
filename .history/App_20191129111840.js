import React from 'react';
import { StyleSheet, ImageBackground, Text } from 'react-native';

export default function App() {
  return (
    <ImageBackground source={require('./assets/images/bg/background.png')} style={styles.backgroundImage}>
      <Text>Login</Text>
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
   login: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
   },
   signup: {
     
   }
});
