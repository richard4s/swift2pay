import React from 'react';
import { StyleSheet, ImageBackground, Text, View, Image } from 'react-native';


export default function App() {
  return (
    <ImageBackground source={require('./assets/images/bg/background.png')} style={styles.backgroundImage}>
    <View style={styles.screen}>
    <Image
          source={require('./assets/images/welcome/wel.png')}
          style={styles.inputContainer}
          />
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
   inputContainer: {
    width: 80,
    maxWidth: '80%',
    position: "relative",
    paddingTop: 45,
    marginTop: 105,
    alignItems: 'center'
  },
});
