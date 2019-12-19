import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, Image, Button, TouchableOpacity, ScrollView } from 'react-native';

import Card from '../components/Card';

export default class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      message: ''
    }
  }

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

  state = {
    email: '',
    password: '',
  };

  componentDidMount(){
    
  }


  loginUsers = () => {
    
    console.log('User details',this.state.email, this.state.password)

    fetch('https://swift2pay.com/account/api/request.php?action=login&email='+this.state.email+'&password='+this.state.password+'&apiKey=JFJHFJJ38388739949HFGDJ', {
      method: 'GET',
    })
    .then(response => response.json())
    .then((json) => {
      user = JSON.stringify(json)
      console.log('Response: ' , user, json.message)
      this.setState({
        message: json.message,
      });

      if(_login){
        alert('Please wait...')
      }

      if(json.status == 200){
        console.log(json.message)
        alert(json.message)
        // alert(json.userID) 
        this.props.navigation.navigate('Browse', {
          userId: json.userID
        })
      } else if (json.status == 400){
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
        <Text style={styles.login}>Login</Text>
          <Card style={styles.inputContainer}>
            <TextInput style={{ width: '90%', height: 40, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Email address" onChangeText={(email)=>this.setState({email})} value={this.state.email} />
            <TextInput style={{ width: '90%', height: 40, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Password" secureTextEntry onChangeText={(password)=>this.setState({password})} value={this.state.password} />
          </Card>
          <ScrollView style={styles.submit}>
            <TouchableOpacity onPress={this._login}>
              <Text>Submit</Text>
            </TouchableOpacity>
          </ScrollView>
          <Text style={styles.signup} onPress={() => navigate('Register')}>SignUp</Text>
        </View>
      </ImageBackground>
  
 )
 }
 _login = async() => {
   if (this.state.email === '' && this.state.password === '') {
     alert('Please insert email or password');
   } else {
     this.loginUsers()
     alert('Please now...')
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
   login: {
    fontSize: 25,
    fontWeight: "500",
    position: "relative",
    paddingRight: 195,
    color: '#932BAD',
    marginTop: 95,
    marginBottom: 35
   },
   signup: {
    fontSize: 25,
    fontWeight: "500",
    position: "relative",
    marginVertical: 10,
    marginLeft: 195,
    marginBottom: 30,
    marginTop: 150
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
    position: "absolute",
    color: "purple",
    borderWidth: 2,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderRadius: 10,
    borderColor: "purple",
    alignContent: 'center',
    paddingTop: 15,
    padding: 5,
    paddingLeft: 55,
    marginTop: 375
  },
});
