import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, Image, Button, ScrollView, TouchableOpacity } from 'react-native';

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

  registerUser = () => {
    
    fetch('https://swift2pay.com/account/api/request?action=register&email=' + this.state.email + '&password='+this.state.password+'&apiKey=JFJHFJJ38388739949HFGDJ&phone='+this.state.phone+'&first_name='+this.state.firstName+'&last_name='+this.state.lastName, {
      method: 'GET',
    })
    .then(response => response.json())
    .then((json) => {
      user = JSON.stringify(json)
      console.log('Response: ' , user, json.message)
      this.setState({
        message: json.message,
      });

      if(json.status == 201){
        console.log(json.message)
        alert('please wait...')
        alert(json.message) 
        this.props.navigation.navigate('Browse', {
          userId: json.userID
        })
      } else if (json.status == 204){
        alert('please wait...')
        alert(json.message)
      }
    })
    .catch((error) => {
      console.error(error);
      alert(error)
    });
  }


 render() {
  const { navigate } = this.props.navigation;
  return (
    
      <ImageBackground source={require('../assets/images/bg/background.png')} style={styles.backgroundImage}>
        <View style={styles.screen}>
        <Text style={styles.signup}>SignUp</Text>
          <Card style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder="First Name" onChangeText={(firstName)=>this.setState({firstName})} value={this.state.firstName} />
            <TextInput style={styles.textInput} placeholder="Last Name" onChangeText={(lastName)=>this.setState({lastName})} value={this.state.lastName} />
            <TextInput style={styles.textInput} placeholder="Phone number" keyboardType="number-pad" onChangeText={(phone)=>this.setState({phone})} value={this.state.phone} />
            <TextInput style={styles.textInput} placeholder="Email" onChangeText={(email)=>this.setState({email})} value={this.state.email} />
            <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true} onChangeText={(password)=>this.setState({password})} value={this.state.password} />
          </Card>

          <ScrollView >
            <TouchableOpacity style={styles.submit} onPress={this._register} >
              <Text style={styles.textTwo} >Submit</Text>
            </TouchableOpacity>
          </ScrollView>
            
          <Text style={styles.login} onPress={() => navigate('Login')}>LogIn</Text>
        </View>
      </ImageBackground>
 )
 }
 _register = async () => {
   if (this.state.firstName === '' && this.state.lastName === '' && this.state.phone === '' && this.state.email === '' && this.state.password === '') {
     alert('please wait...')
     alert('Kindly fill all fields in the form');
   }else { 
    alert('please wait...')
    this.registerUser()
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
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    padding: 5,
    margin: 2,
    height: 15,
    width: 15,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  textInput: {
    width: '90%', 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    borderTopWidth: 0, 
    borderLeftWidth: 0, 
    borderRightWidth: 0, 
    alignItems: "center", 
    padding: 5, 
    margin: 5
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
   textTwo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'rgb(147, 43, 173)',
  },
});
