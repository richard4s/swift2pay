import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, Image, Button,  ActivityIndicator, Platform,
  ScrollView, Picker, AsyncStorage, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';

// import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
// import RNPickerSelect from 'react-native-selector';

import Card from '../components/Card';

// import  Modal, { ModalTitle, ModalContent, SlideAnimation, ModalFooter, ModalButton } from 'react-native-modals';

import FeatherIcons from 'react-native-vector-icons/Feather';

import Spinner from 'react-native-loading-spinner-overlay';
import RNPickerSelect from 'react-native-selector';

export default class Electricity extends Component {
  static navigationOptions = {
    title: 'Electricity',
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

    this.state = {
     meterNumber: '',
     amount: '',
     value: null,
     pickerSelection: 'Click to select a Meter Provider!',
     pickerDisplayed: false,
     pickerVariationSelection: 'Click to select a Variation Code!',
     pickerVariationDisplayed: false,
     mobileNetwork: undefined,
     data: [],
     recipientUserID: ''
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
 


  setVariationPickerValue(newValue) {
   this.setState({
     pickerVariationSelection: newValue
   })

   this.toggleVariationPicker();
 }

 toggleVariationPicker() {
   this.setState({
     pickerVariationDisplayed: !this.state.pickerVariationDisplayed
   })
 }

  electricPay = async () => {
    const grabUserId = await AsyncStorage.getItem('userId')

    console.log('States: ', this.state)

    // alert('Please wait...')
    
    fetch('https://swift2pay.com/account/api/request?action=validateMeter&billersCode='+this.state.meterNumber+'&serviceID='+this.state.pickerSelection+'&variation_code='+this.state.pickerVariationSelection+'&apiKey=JFJHFJJ38388739949HFGDJ', {
      method: 'GET',
    })
    .then(response => response.json())
    .then((json) => {

      console.log('Response: ' , json)

      this.setState({
        status: json.status,
        meterName: json.meterName,
        message: json.message
      });

      this.props.navigation.navigate('ElectricityConfirm', {
        meterName: this.state.meterName,
        billersCode: this.state.meterNumber,
        serviceID: this.state.pickerSelection,
        variation_code: this.state.pickerVariationSelection,
        amount: this.state.amount,
      })

    })
    .catch((error) => {
      console.error(error);
      alert(error)
    });

    
  }

  // confirmPayment = () => {
  //   fetch('https://swift2pay.com/account/api/request?action=walletTransfer&recipientID='+this.state.recipientUserID+'&userID='+grabUserId+'&amount='+this.state.amount+'&apiKey=JFJHFJJ38388739949HFGDJ', {
  //     method: 'GET',
  //   })
  //   .then(response => response.json())
  //   .then((json) => {
  //     user = JSON.stringify(json)
  //     console.log('Response: ', user, json.message)
  //     alert(json.message)
  //     this.setState({
  //       message: json.message,
  //     });

  //     if(json.status === 200){
  //       console.log(json.message)
  //       console.log(this.state.amount)
  //       alert('Please wait...')
  //       alert(json.message)
  //     } else if(json.status === 400){
  //       alert(json.message)
  //     }
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //     alert('Insufficient Wallet Fund')
  //     alert(error)
  //   });
  // }

 render() {

  const networkValues = [
   {
     label: 'Eko Electric',
     value: 'eko-electric',
   },
   {
     label: 'Kano Electric - KEDCO',
     value: 'kano-electric',
   },
   {
     label: 'Jos Electric - JED',
     value: 'jos-electric',
   },
   {
     label: 'Ikeja Electric',
     value: 'ikeja-electric',
   },
 ];

 const networkPlaceholder = {
   label: 'Select a Meter Provider...',
   value: null,
   color: '#9EA0A4',
 };

  const variationValues = [
   {
     label: 'Postpaid',
     value: 'postpaid',
   },
   {
     label: 'Prepaid',
     value: 'prepaid',
   },
 ];

 const variationPlaceholder = {
   label: 'Select a Variation Code...',
   value: null,
   color: '#9EA0A4',
 };
 
  const { navigate } = this.props.navigation;
  let toggleStyle = this.state.isClicked ? styles.cardTwo : styles.button;

  let toggleColor = this.state.buttonColor

  return (
   <ImageBackground source={require('../assets/images/bg/background.png')} style={styles.backgroundImage}>
   
   <View style={{margin: 15}} >
      <Card >
        <RNPickerSelect
          style={{width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5, }}
          onValueChange={(value) => {
              console.log(value)
              this.setPickerValue(value)
            }}
          items={networkValues}
        />
      </Card>
    </View>

      <View style={{margin: 15}} >
        <Card >
          <RNPickerSelect
            style={{width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5, }}
            onValueChange={(value) => {
                console.log(value)
                this.setVariationPickerValue(value)
              }}
            items={variationValues}
          />
        </Card>
      </View>

      <View style={{margin: 15}} >
        <Card>
          <TextInput style={{ width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Meter Number" keyboardType="number-pad" returnKeyType={'done'} onChangeText={(meterNumber)=>this.setState({meterNumber})} value={this.state.meterNumber} />
        </Card>
      </View>

      <View style={{margin: 15}} >
        <Card>
          <TextInput style={{ width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Amount" keyboardType="number-pad" returnKeyType={'done'} onChangeText={(amount)=>this.setState({amount})} value={this.state.amount} />
        </Card>
      </View>
      
      <View style={{margin: 15, marginTop: 35}} >
        <TouchableOpacity style={styles.submit} onPress={this.electricPay}>
          <Text style={styles.textTwo} >Payment</Text>
        </TouchableOpacity>
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
