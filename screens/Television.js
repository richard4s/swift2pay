import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, Image, Button, ScrollView, Picker, AsyncStorage, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';

import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';

import Card from '../components/Card';

export default class Television extends Component {
  static navigationOptions = {
    title: 'Television',
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
     meterNumber: '',
     amount: '',
     cardNumber: '',
     value: null,
     pickerSelection: 'Click to select a Provider!',
     pickerDisplayed: false,
     pickerVariationSelection: 'Click to select a Variation Code!',
     pickerVariationDisplayed: false,
     mobileNetwork: undefined,
     data: [],
     meterName: ''
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

  televisionResolve = async () => {
    const grabUserId = await AsyncStorage.getItem('userId')

    console.log('serviceId', this.state.pickerSelection)
    console.log('cardNumber', this.state.cardNumber)
    

    fetch('https://swift2pay.com/account/api/request?action=validateMeter&billersCode='+this.state.cardNumber+'&serviceID='+this.state.pickerSelection+'&variation_code=prepaid&apiKey=JFJHFJJ38388739949HFGDJ', {
      method: 'GET',
    })
    .then(response => response.json())
    .then((json) => {
      tv = JSON.stringify(json)

      this.props.navigation.navigate('tvSubscription', {
        serviceID: this.state.pickerSelection,
        cardNumber: this.state.cardNumber,
        meterName: json.meterName
      })

    })
    .catch((error) => {
      console.error(error);
      alert(error)
    });

  }

 render() {

  const networkValues = [
   {
     label: 'DSTV',
     value: 'dstv',
   },
   {
     label: 'GOTV',
     value: 'gotv',
   },
   {
     label: 'Startimes',
     value: 'startimes',
   },
 ];

 const networkPlaceholder = {
   label: 'Select a Provider...',
   value: null,
   color: '#9EA0A4',
 };

 
  const { navigate } = this.props.navigation;
  let toggleStyle = this.state.isClicked ? styles.cardTwo : styles.button;

  let toggleColor = this.state.buttonColor

  return (
   <ImageBackground source={require('../assets/images/bg/background.png')} style={styles.backgroundImage}>
   
      <View style={{margin: 15, marginTop: 75,}} >
        <Card>

        <TouchableOpacity onPress={() => {this.togglePicker()}} >
          <Text style={{width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5, }} placeholder={networkPlaceholder} >{this.state.pickerSelection}</Text>
        </TouchableOpacity>

        <Modal visible={this.state.pickerDisplayed} animationType={"slide"} transparent={true} >
         <View style={{ margin: 20, padding: 20,
           backgroundColor: '#efefef',
           bottom: 20,
           left: 20,
           right: 20,
           alignItems: 'center',
           position: 'absolute' }}>
           <Text style={{fontWeight: 'bold'}}>Please select a Provider</Text>
           { networkValues.map((value, index) => {
             return <TouchableHighlight key={index} onPress={() => this.setPickerValue(value.value)} style={{ paddingTop: 4, paddingBottom: 4 }}>
                 <Text>{ value.label }</Text>
               </TouchableHighlight>
           })}

           
           <TouchableHighlight onPress={() => this.togglePicker()} style={{ paddingTop: 4, paddingBottom: 4 }}>
             <Text style={{ color: '#999' }}>Cancel</Text>
           </TouchableHighlight>
         </View>
       </Modal>
          {/* <TextInput style={{ width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Select Meter Provider" onChangeText={(email)=>this.setState({email})} value={this.state.email} /> */}
        </Card>
      </View>

      <View style={{margin: 15}} >
        <Card>
          <TextInput style={{ width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Smart Card Number" onChangeText={(cardNumber)=>this.setState({cardNumber})} value={this.state.cardNumber} />
        </Card>
      </View>
      
      <View style={{margin: 15, marginTop: 35}} >
        <TouchableOpacity style={styles.submit} onPress={this.televisionResolve}>
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
