import React from 'react';
import { Text, View, StyleSheet } from react-native;

const Login = props => {
 return (
  <ImageBackground source={require('./assets/images/bg/background.png')} style={styles.backgroundImage}>
      <Text>Login</Text>
      <Text>SignUp</Text>
    </ImageBackground>
 )
}
const styles = StyleSheet.create({
 screen: {
  flex: 1,
  padding: 10,
  alignItems: 'center'
},
});

export default Login;
