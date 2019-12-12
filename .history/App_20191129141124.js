import React from 'react';
import { StyleSheet, ImageBackground, Text, View, Button } from 'react-native';

import Card from './components/Card';

export default function App() {
  return (
    <ImageBackground source={require('./assets/images/bg/background.png')} style={styles.backgroundImage}>
    <View style={styles.screen}>
      <Card style={styles.inputContainer}>
        
      </Card>
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
   login: {
    fontSize: 25,
    fontWeight: "500",
    marginVertical: 10,
    paddingRight: 195,
    paddingTop: 25,
    paddingBottom: 25
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
