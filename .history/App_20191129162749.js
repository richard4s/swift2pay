import React from 'react';
import { StyleSheet, ImageBackground, Text, View, Image } from 'react-native';

import { Button } from './components/Button';

export default function App() {
  return (
    <ImageBackground source={require('./assets/images/bg/background.png')} style={styles.backgroundImage}>
    <View style={styles.screen}>
      <Image source={require('./assets/images/welcome/wel.png')} style={styles.imageContainer} />
      <Button
        full
        style={{ marginBottom: 12 }}
        backgroundColor="purple"
        onPress={() => navigation.navigate('Login')}>
        <Text button>Sign in</Text>
      </Button>
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
});
