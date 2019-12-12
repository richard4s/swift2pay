import React from 'react';
import { Text, ImageBackground, StyleSheet } from 'react-native';

const Login = props => {
 return (
  <ImageBackground source={require('../assets/images/bg/background.png')} style={styles.backgroundImage}>
      <Text>Login</Text>
      <Text>SignUp</Text>
    </ImageBackground>
 )
}

const styles = StyleSheet.create({
backgroundImage: {
 flex: 1,
 width: null,
 height: null,
 resizeMode: 'cover'
},
});

export default Login;
