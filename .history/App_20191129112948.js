import React from 'react';
import { StyleSheet, ImageBackground, Text } from 'react-native';

export default function App() {
  return (
    <ImageBackground source={require('./assets/images/bg/background.png')} style={styles.backgroundImage}>
      <Text style={styles.login}>Login</Text>
      <Text style={styles.signup}>SignUp</Text>
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
    fontSize: 25,
    fontWeight: "500",
    marginVertical: 10,
    paddingLeft: 45,
    paddingBottom: 30,
    paddingTop: 25
   },
   signup: {
    fontSize: 25,
    fontWeight: "500",
    position: "relative",
    marginVertical: 10,
    paddingLeft: 195,
    paddingBottom: 30,
    paddingTop: 530
   }
});
