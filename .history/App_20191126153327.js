import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={./assets/images/bg/background} style={{width: '100%', height: '100%'}}>
        <Text>Swift2Pay</Text>
        <Text>Login | SignUp</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
