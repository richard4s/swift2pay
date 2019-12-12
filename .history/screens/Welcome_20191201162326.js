import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, Image, Button, TouchableOpacity } from 'react-native';

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
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground source={require('../assets/images/bg/background.png')} style={styles.backgroundImage}>
      <View style={styles.screen}>
        <Image source={require('../assets/images/welcome/wel.png')} style={styles.imageContainer} />
        <Text style={styles.paragraph}>Welcome to Swift2Pay! Your most trusted and reliable app for online transactions and bill payments.</Text>
        <Button color="#932BAD" title='SIGN IN' onPress={() =>navigate('Login')} />
        <View style={styles.space}></View>
        <Button color="#932BAD" title='SIGN UP' onPress={() =>navigate('Login')} />
        <Image style={styles.iconContainer} source={require('../assets/images/welcome/log.png')} />
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
  space: {
    marginTop: 15,
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
   position: "relative",
   marginTop: 355,
   marginBottom: 15,
   fontWeight: "normal",
   fontSize: 12,
 }
});
