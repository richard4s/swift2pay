import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, Image, Button, AsyncStorage, 
  ScrollView, Picker, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';

// import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import RNPickerSelect from 'react-native-selector';

import Card from '../components/Card';

class PayConfirm extends Component {
  render() {
    return(
      <Text>Guyssss</Text>
    )
  }
}

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
     dataValue: ''
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

initiateTranfer = async() => {

  const grabUserId = await AsyncStorage.getItem('userId')

  fetch('http://swift2pay.com/account/api/request?action=createTransfer&accountNo='+this.props.navigation.state.params.accountNumber+'&userID='+grabUserId+'&amount='+this.props.navigation.state.params.amount+'&bank='+this.props.navigation.state.params.bankCode+'&narration='+this.props.navigation.state.params.tansferMessage+'&apiKey=JFJHFJJ38388739949HFGDJ', {
    method: 'GET',
  })
  .then(response => response.json())
  .then((json) => {
    banks = JSON.stringify(json)

    console.log('Response: ', banks)
    alert(json.message)

  })
}

 render() {
    
  const { navigate } = this.props.navigation;
  console.log(this.state.navigation)
  return (
   <ImageBackground source={require('../assets/images/bg/background.png')} style={styles.backgroundImage}>
   
      <View style={{margin: 15 }} >
        <Card>
            <Text>{this.props.navigation.state.params.accountNumber}</Text>
            {/* <Text>{this.props.navigation.state.params.amount}</Text> */}
            <Text>{this.props.navigation.state.params.accountName}</Text>
            {/* <Text>{this.props.navigation.state.params.bankCode}</Text> */}
        </Card>
      </View>
      
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
