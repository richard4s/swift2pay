import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, Image, Button } from 'react-native';

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
     <Button color="#932BAD" onPress={() => navigate('Browse')} title="Submit" />
     <Text style={styles.login}>Login</Text>
      <Card style={styles.inputContainer}>
        <TextInput style={{ width: '90%', height: 40, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Email address"  />
        <TextInput style={{ width: '90%', height: 40, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Password" />
      </Card>
      <Text style={styles.submit} onPress={() => navigate('Browse')}>Submit</Text>
      <Text style={styles.signup} onPress={() => navigate('Register')}>SignUp</Text>
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
    position: "relative",
    paddingRight: 195,
    color: '#932BAD',
    marginTop: 95,
    marginBottom: 35
   },
   signup: {
    fontSize: 25,
    fontWeight: "500",
    position: "relative",
    marginVertical: 10,
    marginLeft: 195,
    marginBottom: 30,
    marginTop: 150
   },
   inputContainer: {
    width: 600,
    maxWidth: '80%',
    alignItems: 'center'
  },
 submit: {
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
  alignContent: 'center',
  paddingTop: 15,
  padding: 5,
  paddingLeft: 55,
  marginTop: 375
 },
});
