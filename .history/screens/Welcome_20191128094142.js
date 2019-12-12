import React from 'react';
import { Button, View, Text } from 'react-native';
class Home extends React.Component {
  static navigationOptions = {
    title: 'Home'
   };
render() {
 return (
  <View style={{ 
   flex: 1,
   alignItems:'center',
   justifyContent:'center'
  }}>
<Button title="Go to Profile screen"
    onPress={() => this.props.navigation.navigate('Profile')}
   />
  </View>