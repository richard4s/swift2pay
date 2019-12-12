import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, Image, Button } from 'react-native';

import Card from '../components/Card';

export default class Register extends Component {
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
     <Text style={styles.signup}>SignUp</Text>
     <Button color="#932BAD" onPress={() => navigate('')} title="Submit" />
      <Card style={styles.inputContainer}>
        <TextInput style={{ width: '90%', height: 40, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="FirstName" />
        <TextInput style={{ width: '90%', height: 40, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="LastName" />
        <TextInput style={{ width: '90%', height: 40, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Email" />
        <TextInput style={{ width: '90%', height: 40, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Username" />
        <TextInput style={{ width: '90%', height: 40, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Phone" />
        <TextInput style={{ width: '90%', height: 40, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Password" />
      </Card>
      <Text style={styles.submit} onPress={() => navigate('')}>Submit</Text>
      <Text style={styles.login}>LogIn</Text>
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
   signup: {
    fontSize: 25,
    fontWeight: "500",
    position: "relative",
    paddingRight: 195,
    color: '#932BAD',
    marginTop: 55,
    marginBottom: 25
   },
   login: {
    fontSize: 25,
    fontWeight: "500",
    position: "relative",
    marginVertical: 10,
    marginLeft: 195,
    marginBottom: 30,
    marginTop: 50
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
 submit: {
  width: 190,
  height: 60,
  fontSize: 25,
  fontWeight: "500",
  position: "relative",
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
  marginTop: 475
  
 },
});
