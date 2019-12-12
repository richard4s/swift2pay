import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Swift2Pay</Text>
      <Text>Login | SignUp</Text>
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
