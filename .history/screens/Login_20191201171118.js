import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput } from 'react-native';

import Card from '../components/Card';

// onPress={() => navigate('Welcome')}

export default class Login extends Component {
 render() {
  const { navigate } = this.props.navigation;
  return (
   <ImageBackground source={require('../assets/images/bg/background.png')} style={styles.backgroundImage}>
    <View style={styles.screen}>
     <Text style={styles.login}>Login</Text>
      <Card style={styles.inputContainer}>
        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} />
      </Card>
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
   },
   signup: {
    fontSize: 25,
    fontWeight: "500",
    position: "relative",
    marginVertical: 10,
    paddingLeft: 195,
    paddingBottom: 30,
    paddingTop: 430
   },
   inputContainer: {
    width: 600,
    maxWidth: '80%',
    paddingLeft: 45,
    alignItems: 'center'
  },
});
