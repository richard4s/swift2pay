import React from 'react';
import { StyleSheet, Text, ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground>
      <Text>Swift2Pay</Text>
      <Text>Login | SignUp</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
