import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, Image, Button, TouchableOpacity } from 'react-native';

import Hyperlink from 'react-native-hyperlink';

export default class Welcome extends Component {
  static navigationOptions = {
    title: 'Swift2Pay',
    headerStyle: {
      backgroundColor: 'rgb(147, 43, 173)',
    },
    headerTintColor: '#fff',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      //Sets Header text style
    },
  };

  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground source={require('../assets/images/bg/background.png')} style={styles.backgroundImage}>
      <View style={styles.screen}>
        <Image source={require('../assets/images/welcome/wel.png')} style={styles.imageContainer} />
        <Button  color="#932BAD" title='Login' onPress={() => navigation.navigate('Login')}  />
        <Text style={styles.login} onPress={() => navigation.navigate('Login')} >Login</Text>
        <TouchableOpacity style={styles.signup} onPress={() =>navigate('Login')} >SignUp</TouchableOpacity>
        <Image style={styles.iconContainer} source={require('../assets/images/welcome/log.png')} />
        <Text style={styles.paragraph}>Welcome to Swift2Pay! Your most trusted and reliable app for online transactions and bill payments.</Text>
      </View>
      </ImageBackground>
    )
  }
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
    marginTop: 355
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
    marginTop: 400
   },
   iconContainer: {
    width: '100%',
    height: '100%',
    position: "absolute",
    marginTop: 105,
   alignItems: 'center'
 },
 paragraph: {
   width: '80%',
   textAlign: "center",
   margin: 25,
   fontWeight: "normal",
   fontSize: 12,
 }
});
