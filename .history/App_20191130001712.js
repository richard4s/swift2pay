import React from 'react';
import { StyleSheet, ImageBackground, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <ImageBackground source={require('./assets/images/bg/background.png')} style={styles.backgroundImage}>
    <View style={styles.screen}>
      <Image source={require('./assets/images/welcome/wel.png')} style={styles.imageContainer} />
      <Text style={styles.login}>Login</Text>
      <Text style={styles.signup}>SignUp</Text>
      <Image style={styles.iconContainer} source={require('./assets/images/welcome/log.png')} />
      <Text>Welcome to Swift2Pay! Your most trusted and reliable source of online transfer and bill payments. If you've created an account </Text>
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
    width: 190,
    height: 60,
    fontSize: 25,
    fontWeight: "500",
    position: "absolute",
    color: "purple",
    borderWidth: 2,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderRadius: 10,
    borderColor: "purple",
    alignItems: 'center',
    paddingTop: 15,
    padding: 5,
    paddingLeft: 55,
    marginTop: 395
   },
   signup: {
    width: 190,
    height: 60,
    fontSize: 25,
    fontWeight: "500",
    position: "relative",
    color: "purple",
    borderWidth: 2,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRadius: 10,
    borderColor: "purple",
    alignItems: 'center',
    padding: 5,
    paddingTop: 15,
    paddingLeft: 55,
    marginTop: 475
   },
   iconContainer: {
    width: '80%',
    height: '80%',
    position: "absolute",
    marginTop: 105,
   alignItems: 'center'
 },
});
