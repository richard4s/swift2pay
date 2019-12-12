import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// style={{width: '100%', height: '100%'}}

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/images/bg/background.png')} > 
        <Text>Swift2Pay</Text>
        <Text>Login | SignUp</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
