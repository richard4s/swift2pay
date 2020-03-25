import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, 
  TextInput, Image, Button, TouchableOpacity, ActivityIndicator, Platform,
  ScrollView } from 'react-native';

import Card from '../components/Card';

import Loader from 'react-native-modal-loader';

import FeatherIcons from 'react-native-vector-icons/Feather';

import Spinner from 'react-native-loading-spinner-overlay';

import Modal, { ModalTitle, ModalContent, SlideAnimation, ModalFooter, ModalButton } from 'react-native-modals';

export default class ForgotPassword extends Component {

  constructor(props) {
    super(props)

    this.state = {
      message: '',
      visible: false,
      isLoading: false,
      spinner: false,
      successLog: null
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

  showLoader = () => {
    this.setState({ isLoading: true });
  };

  hideLoader = () => {
    this.setState({
      isLoading: !this.state.isLoading
    });
  }

  hideSpinner = () => {
    this.setState({
      spinner: false
    }); 
  }

  componentDidMount(){
    
  }


  loginUsers = () => {
    
    console.log('User details',this.state.email, this.state.password)

    fetch('https://swift2pay.com/account/api/request?action=reset_password&email='+this.state.email+'&&apiKey=JFJHFJJ38388739949HFGDJ', {
      method: 'GET',
    })
    .then(response => response.json())
    .then((json) => {
      user = JSON.stringify(json)

      console.log('Response: ' , user, json.message)

      this.setState({
        message: json.message,
        visible: true,
        isLoading: false,
        spinner: false,
        successLog: true
      });

      if(json.status == 200) {

        // this.hideLoader();
        // this.hideSpinner();

        console.log(json.message, '---' + this.state.isLoading)
        
        this.props.navigation.navigate('Browse', {
          userId: json.userID
        })

        

      } else {
        this.setState({
          successLog: false
        })
      }
    })
    .catch((error) => {
      console.error(error);

      this.setState({
        successLog: false
      })

    });
  }

  


 render() {

  const { navigate } = this.props.navigation;

  const SuccessDialog = () => {
    return(
      <View>
        <FeatherIcons style={{ textAlign: "center"}} name="check-circle" size={30} color="green" />
        <Text>Welcome back!</Text>
      </View>   
    )
  }

  const ErrorDialog = () => {
    return(
      <View>
        <FeatherIcons style={{ textAlign: "center"}} name="x" size={30} color="red" />
        <Text>Invalid Credentials. Try again later</Text>
      </View>   
    )
  }

  return (
      <ImageBackground source={require('../assets/images/bg/background.png')} style={styles.backgroundImage}>

<Modal
                visible={this.state.visible}
                modalAnimation={new SlideAnimation({
                  slideFrom: 'bottom',
                })}
                onSwipeOut={(event) => {
                  this.setState({ visible: false });
                }}
                footer={
                  <ModalFooter>
                    <ModalButton
                      text="OK"
                      onPress={() => {
                        this.setState({ visible: false });
                      }}
                    />
                  </ModalFooter>
                }
              >
              <ModalContent>
                  { 
                    this.state.successLog == true ? <SuccessDialog /> : <ErrorDialog />
                  }
              </ModalContent>
            </Modal>

            
        <View style={styles.screen}>
        <Text style={styles.login}>Reset Password</Text>
          <Card style={styles.inputContainer}>

            <View style={styles.sectionStyle}>
              <Image style={styles.imageStyle} source={require('../assets/images/icons/login/email.png')} />
              <TextInput style={styles.textInput} placeholder="Email address" onChangeText={(email)=>this.setState({email})} value={this.state.email} />
            </View>
            
          </Card>

          {
            Platform.OS === 'android' ?
              <Spinner
              visible={this.state.spinner}
              textContent={'Loading...'}
              textStyle={{color: '#fff'}}
            /> :
            <ActivityIndicator size="large" animating={this.state.isLoading} color="purple" />
          }
        
            <TouchableOpacity style={styles.submit} onPress={this._login}>
              <Text style={styles.textTwo}>Reset</Text>
            </TouchableOpacity>

          

        </View>

      </ImageBackground>
  
 )
 }

 _login = async() => {
  
  this.setState({ isLoading: true, spinner: true });

   if (this.state.email === '' || this.state.password === '') {
     
     this.setState({ isLoading: false, spinner: false });
     alert('Please insert email or password');
   } else {
    //  alert('Please wait...')
     this.loginUsers()
     
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
    marginBottom: 40,
    marginTop: 5
   },
   inputContainer: {
    width: 600,
    maxWidth: '80%',
    alignItems: 'center'
  },
  submit: {
    width: 180,
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
    marginTop: 30
   },
  textTwo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'rgb(147, 43, 173)',
  },
});