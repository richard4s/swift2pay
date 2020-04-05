import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, Image, Button, AsyncStorage, 
  ScrollView, Picker, TouchableOpacity, TouchableHighlight, ActivityIndicator, Platform } from 'react-native';

import Modal, { ModalTitle, ModalContent, SlideAnimation, ModalFooter, ModalButton } from 'react-native-modals';

// import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import RNPickerSelect from 'react-native-selector';

import Card from '../components/Card';


import FeatherIcons from 'react-native-vector-icons/Feather';

import Spinner from 'react-native-loading-spinner-overlay';

export default class BankTransfer extends Component {
  static navigationOptions = {
    title: 'Bank Transfer',
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

  constructor(props){
   super(props);
   this.state={
     PickerValue:'',
     value: null,
     pickerSelection: 'Click to select a Bank Name!',
     pickerDisplayed: false,
     banksList: null,
     banksLoading: true,
     accName: '',
     accNumber: '',
     accountNumber: '',
     amount: '',
     tansferMessage: '',
     modalVisible: false,
     dataValue: '',
     message: '',
     userID: '',
     visible: false,
      isLoading: false,
      spinner: false,
      successLog: null
   }
 }; 

 setPickerValue(newValue) {
  this.setState({
    pickerSelection: newValue
  })

  this.togglePicker();
}

togglePicker() {
  this.setState({
    pickerDisplayed: !this.state.pickerDisplayed
  })
}

hideSpinner = () => {
  this.setState({
    spinner: false
  }); 
}

initiateTransfer = () => {
    // console.log('Statees: ', this.state)
    this.setState({ isLoading: true, spinner: true });

    fetch('https://swift2pay.com/account/api/request?action=walletTransfer&recipientID='+this.props.navigation.state.params.recipientID+'&userID='+this.props.navigation.state.params.userID+'&amount='+this.props.navigation.state.params.amount+'&apiKey=JFJHFJJ38388739949HFG', {
      method: 'GET',
    })
    .then(response => response.json())
    .then((json) => {
      user = JSON.stringify(json)
      console.log('Response: ', user, json.message)
      // alert(json.message)

      this.setState({
        message: json.message,
        visible: true,
        isLoading: false,
        spinner: false,
        successLog: true
      });

      if(json.status == 200) {
        this.setState({
          successLog: true
        })
      } else {
        this.setState({
          successLog: false
        })
      }
  
    }).catch((err) => {
  
      console.log(err)
      
      this.setState({
        successLog: false
      })
    })
  }

 render() {
    
  const { navigate } = this.props.navigation;
  console.log(this.state.navigation)

  const SuccessDialog = () => {
    return(
      <View>
        <FeatherIcons style={{ textAlign: "center"}} name="check-circle" size={30} color="green" />
        <Text>Your money is on its way</Text>
      </View>   
    )
  }

  const ErrorDialog = () => {
    return(
      <View>
        <FeatherIcons style={{ textAlign: "center"}} name="x" size={30} color="red" />
        <Text>Failed. Try again later</Text>
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
                        this.props.navigation.navigate('Browse', {
                          userId: this.state.userID
                        })
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
   
      <View style={{margin: 15 }} >
        <Card>
            <Text>Name: {this.props.navigation.state.params.userName}</Text>
            <Text>Email: {this.props.navigation.state.params.userEmail}</Text>
            <Text>Amount: NGN{this.props.navigation.state.params.amount}</Text>
        </Card>
      </View>

      {
            Platform.OS === 'android' ?
              <Spinner
              visible={this.state.spinner}
              textContent={'Loading...'}
              textStyle={{color: '#purple'}}
            /> :
            <ActivityIndicator size="large" animating={this.state.isLoading} color="purple" />
          } 
      
      <View style={{margin: 15, marginTop: 35}} >
        <Text style={styles.submit} onPress={() => this.initiateTranfer()}>Transfer</Text>
      </View>

    </ImageBackground>
  )
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
   browse: {
    fontSize: 25,
    fontWeight: "500",
    position: "relative",
    paddingRight: 195,
    color: '#932BAD',
    marginTop: 5,
    marginBottom: 5
   },
   view: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
   },
   card: {
    flex: 1,
    width: 150,
    height: 100,
    alignItems: 'center',
    margin: 10,
   },
   cardTwo: {
    flex: 1,
    width: 70,
    height: 70,
    alignItems: 'center',
    margin: 3,
    marginTop: 9,
    padding: null,
   },
   text: {
    fontSize: 11,
    fontWeight: 'bold',
    margin: 5,
    alignContent: 'center',
   },
   textTwo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#932BAD',
   },
   image: {
    width: '50%',
    height: '50%',
    margin: 5,
    alignContent: 'center'
   },
   imageTwo: {
    width: 15,
    height: 15,
    alignContent: "center",
    padding: null,
    margin: 2,
    marginTop: 12,
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
    padding: 5,
    paddingLeft: 45,
    paddingTop: 15,
    marginTop: 15,
    marginLeft: 135,
   },
});
