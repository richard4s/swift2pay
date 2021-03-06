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
     transferMessage: '',
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

componentDidMount() {
  this.getBankList()
  
}

setModalVisible(visible) {
  this.setState({modalVisible: visible});
}

paymentConfirmModal() {
  return <Modal
  animationType="slide"
  transparent={false}
  visible={this.state.modalVisible}
  onRequestClose={() => {
    Alert.alert('Modal has been closed.');
  }}>
  <View style={{marginTop: 22}}>
    <View>
      <Text>Hello World!</Text>

      <TouchableHighlight
        onPress={() => {
          this.setModalVisible(!this.state.modalVisible);
        }}>
        <Text>Hide Modal</Text>
      </TouchableHighlight>
    </View>
  </View>
  </Modal>
}

getBankList() {
  fetch('https://swift2pay.com/account/api/request?action=bankList&apiKey=JFJHFJJ38388739949HFGDJ', {
      method: 'GET',
    })
    .then(response => response.json())
    .then((json) => {
      banks = JSON.stringify(json)

      // console.log('Response: ' , banks, json)

      this.setState({
        banksList: json,
        banksLoading: false
      });

    })
    .catch((error) => {
      console.error(error);
      alert(error)
    });
}

payment() {
  this.resolveBankData(this.state.accountNumber, this.state.dataValue)
}

setDataValue(newValue) {
  // let amounter = newValue.split('-')

  this.setState({
    dataValue: newValue
  }, 
    
    console.log(this.state.dataValue)
  )
}

resolveBankData(accNumber, code) {
  fetch('https://swift2pay.com/account/api/request?action=resolveBankAccount&accountNo='+accNumber+'&bank='+code, {
      method: 'GET',
    })
    .then(response => response.json())
    .then((json) => {
      banks = JSON.stringify(json)

      console.log('Response: ' , banks, json)

      this.setState({
        accNumber: json.accountnumber,
        accName: json.account_name, 
      });

      this.props.navigation.navigate('ConfirmTransfer', {
        accountNumber: this.state.accountNumber,
        amount: this.state.amount,
        bankCode: this.state.dataValue,
        transferMessage: this.state.transferMessage,
        accountName: this.state.accName
      })

    })
    .catch((error) => {
      console.error(error);
      alert(error)
    });
}

initiateTranfer = async() => {

  const grabUserId = await AsyncStorage.getItem('userId')

  fetch('http://swift2pay.com/account/api/request?action=createTransfer&accountNo='+this.state.accountNumber+'&userID='+grabUserId+'&amount='+this.state.amount+'&bank='+this.state.dataValue+'&narration='+this.state.transferMessage+'&apiKey=JFJHFJJ38388739949HFGDJ', {
    method: 'GET',
  })
  .then(response => response.json())
  .then((json) => {
    banks = JSON.stringify(json)

    console.log('Response: ' , banks, json)

    // this.setState({
    //   accNumber: json.accountnumber,
    //   accName: json.accname,
      
    // });
  })
}

 render() {


  const { navigate } = this.props.navigation;

  return (
    <ScrollView>
   <ImageBackground source={require('../assets/images/bg/background.png')} style={styles.backgroundImage}>

     <View style={{margin: 15, marginTop: 75, }} >
        <Card >

          <TouchableOpacity onPress={() => {this.togglePicker()}} >
          { this.state.banksLoading ?  
              <View>
                <Text>Loading...</Text>
              </View>
              :
              <RNPickerSelect 
                  style={{width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5, }}
                  onValueChange={(value) => {
                      console.log('changed value: ', value)
                      this.setDataValue(value)
                    }}
                    items={this.state.banksList} value={this.state.banksList.code}
                />
              }
          </TouchableOpacity>
        </Card>
      </View>
   
      <View style={{margin: 15, }} >
        <Card>
          <TextInput style={{ width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Enter account number" onChangeText={(accountNumber)=>this.setState({accountNumber})} value={this.state.accountNumber} />
        </Card>
      </View>
      
      <View style={{margin: 15}} >
        <Card>
          <TextInput style={{ width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} keyboardType={'number-pad'} placeholder="Enter amount" onChangeText={(amount)=>this.setState({amount})} value={this.state.amount} />
        </Card>
      </View>
      
      <View style={{margin: 15}} >
        <Card>
          <TextInput style={{ width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Enter message (optional)" onChangeText={(transferMessage)=>this.setState({transferMessage})} value={this.state.transferMessage} />
        </Card>
      </View>
      
      <View style={{margin: 15, marginTop: 35}} >
        <Text style={styles.submit} onPress={() => this.payment()}>Confirm</Text>
      </View>

    </ImageBackground>
    </ScrollView>
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
