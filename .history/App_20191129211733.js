import React from 'react';
import { StyleSheet, ImageBackground, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <ImageBackground source={require('./assets/images/bg/background.png')} style={styles.backgroundImage}>
    <View style={styles.screen}>
      <Image source={require('./assets/images/welcome/wel.png')} style={styles.imageContainer} />
      <Text style={styles.login}>Login</Text>
      <Text style={styles.signup}>SignUp</Text>
    </View>
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
   screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
   imageContainer: {
     width: '80%',
     height: '40%',
     position: "absolute",
     marginTop: 105,
    alignItems: 'center'
  },
  login: {
    fontSize: 25,
    fontWeight: "500",
    position: "relative",
    color: "purple",
    marginVertical: 10,
    paddingRight: 195,
    paddingTop: 25,
    paddingBottom: 125
   },
   signup: {
    fontSize: 25,
    fontWeight: "500",
    position: "relative",
    color: "purple",
    marginVertical: 10,
    paddingLeft: 195,
    paddingBottom: 30,
    paddingTop: 130
   },
});
