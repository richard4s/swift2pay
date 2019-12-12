import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, Image, Button, } from 'react-native';

import Card from '../components/Card';

const userInfo = {firstName: 'Akanda', lastName: 'Ara', phone: '08136266387', email: 'akadanzara@gmail.com', password: 'damond'}

export default class Register extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'rgb(147, 43, 173)',
    },
    headerTintColor: '#fff',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      //Sets Header text style
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
    }
  }


 render() {
  const { navigate } = this.props.navigation;
  return (
    
      <ImageBackground source={require('../assets/images/bg/background.png')} style={styles.backgroundImage}>
        <View style={styles.screen}>
        <Button color="#932BAD" onPress={() => navigate('Browse')} title="Submit" />
        <Text style={styles.signup}>SignUp</Text>
          <Card style={styles.inputContainer}>
            <TextInput style={{ width: '90%', height: 40, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="First Name" onChangeText={(firstName)=>this.setState({firstName})} value={this.state.firstName} />
            <TextInput style={{ width: '90%', height: 40, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Last Name" onChangeText={(lastName)=>this.setState({lastName})} value={this.state.lastName} />
            <TextInput style={{ width: '90%', height: 40, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Phone number" keyboardType="number-pad" onChangeText={(phone)=>this.setState({phone})} value={this.state.phone} />
            <TextInput style={{ width: '90%', height: 40, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Email" onChangeText={(email)=>this.setState({email})} value={this.state.email} />
            <TextInput style={{ width: '90%', height: 40, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Password" secureTextEntry={true} onChangeText={(password)=>this.setState({password})} value={this.state.password} />
          </Card>
            <Text style={styles.submit} onPress={this._register}>Submit</Text>
          <Text style={styles.login} onPress={() => navigate('Login')}>LogIn</Text>
        </View>
      </ImageBackground>
 )
 }
 _register = async() => {
   if (this.state.firstName === '' && this.state.lastName === '' && this.state.phone === '' && this.state.email === '' && this.state.password === '') {
     alert('Kindly fill all fields in the form');
   }
   else if(userInfo.firstName === this.state.firstName && userInfo.LastName === this.state.lastName && userInfo.phone === this.state.phone && userInfo.email === this.state.email && userInfo.password === this.state.password) {
    this.props.navigation.navigate('Browse');
   } else {
    alert('You should look into your data provided and correct or fill all fields ');
   }
 }
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
   signup: {
    fontSize: 25,
    fontWeight: "500",
    position: "relative",
    paddingRight: 195,
    color: '#932BAD',
    marginTop: 35,
    marginBottom: 25
   },
   login: {
    fontSize: 25,
    fontWeight: "500",
    position: "relative",
    marginVertical: 10,
    marginLeft: 195,
    marginBottom: 25,
    marginTop: 40
   },
   inputContainer: {
    width: 600,
    maxWidth: '80%',
    alignItems: 'center'
  },
  submit: {
    width: 190,
    height: 60,
    fontSize: 25,
    fontWeight: "500",
    color: "purple",
    borderWidth: 2,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderRadius: 10,
    borderColor: "purple",
    alignContent: 'center',
    paddingTop: 15,
    paddingLeft: 45,
    padding: 5,
    marginTop: 35
   },
});
