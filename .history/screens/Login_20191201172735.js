import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, Image } from 'react-native';

import Card from '../components/Card';

export default class Login extends Component {
  static navigationOptions = {
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
     <Text style={styles.login}>Login</Text>
      <Card style={styles.inputContainer}>
        <TextInput style={{ width: '90%', height: 40, borderColor: 'gray', borderWidth: 2, alignItems: "center", padding: 5 }} />
      </Card>
      <Image style={styles.iconContainer} source={require('../assets/images/welcome/log.png')} />
      <Text style={styles.signup}>SignUp</Text>
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
   login: {
    fontSize: 25,
    fontWeight: "500",
    paddingRight: 195,
    color: '#932BAD',
    marginTop: 5,
    marginBottom: 35
   },
   signup: {
    fontSize: 25,
    fontWeight: "500",
    position: "relative",
    marginVertical: 10,
    paddingLeft: 195,
    paddingBottom: 30,
    paddingTop: 400
   },
   inputContainer: {
    width: 600,
    maxWidth: '80%',
    alignItems: 'center'
  },
  iconContainer: {
    width: '100%',
    height: '100%',
    position: "absolute",
    marginTop: 105,
   alignItems: 'center'
 },
});
