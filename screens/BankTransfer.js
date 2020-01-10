import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, Image, Button, ScrollView, Picker, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';

import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';

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
     modalVisible: false
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
  this.resolveBankData(this.state.accountNumber, this.state.pickerSelection)
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
        accName: json.accname,
        
      });

      return <PayConfirm />

      // this.setModalVisible(true)
      // return  this.paymentConfirmModal()

    })
    .catch((error) => {
      console.error(error);
      alert(error)
    });
}

 render() {

  const bankValues = [
    {
      label: 'Access Bank',
      value: 'Access Bank',
    },
    {
      label: 'Alat By Wema',
      value: 'Wema',
    },
    {
      label: 'Ecobank Nigeria Plc',
      value: 'Ecobank',
    },
    {
      label: 'First Bank of Nigeria',
      value: 'airtel',
    },
    {
      label: 'First City Monument Bank',
      value: 'FCMB',
    },
    {
      label: 'Guaranty Trust Bank',
      value: 'GTB',
    },
    {
      label: 'Heritage Banking',
      value: 'Heritage',
    },
    {
      label: 'Polaris Bank Plc',
      value: 'Polaris',
    },
    {
      label: 'Stanbic-ibtc Bank Plc',
      value: 'Stanbic',
    },
    {
      label: 'Sterling Bank',
      value: 'Sterling',
    },
    {
      label: 'Union Bank of Nigeria',
      value: 'Union Bank',
    },
    {
      label: 'United Bank for Africa',
      value: 'UBA',
    },
    {
      label: 'Unity Bank Plc',
      value: 'Unity',
    },
    {
      label: 'Zenith Bank',
      value: 'Zenith',
    },
  ];

  const bankPlaceholder = {
    label: 'Select your Bank...',
    value: null,
    color: '#9EA0A4',
  };

  const { navigate } = this.props.navigation;
  return (
   <ImageBackground source={require('../assets/images/bg/background.png')} style={styles.backgroundImage}>

     <View style={{margin: 15, marginTop: 75, }} >
        <Card >

          <TouchableOpacity onPress={() => {this.togglePicker()}} >
            <Text style={{width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5, }} placeholder={bankPlaceholder} >{this.state.pickerSelection}</Text>
          </TouchableOpacity>

          <Modal visible={this.state.pickerDisplayed} animationType={"slide"} transparent={true} >
            <View style={{ margin: 20, padding: 20,
              backgroundColor: '#efefef',
              bottom: 20,
              left: 20,
              right: 20,
              alignItems: 'center',
              position: 'absolute' }}>
              <Text style={{fontWeight: 'bold'}}>Please select your bank</Text>
              { this.state.banksLoading ?  <Text>Loading...</Text>
              
              :
              
              this.state.banksList.map((value, index) => {
                return <TouchableHighlight key={index} onPress={() => this.setPickerValue(value.code)} style={{ paddingTop: 4, paddingBottom: 4 }}>
                    <ScrollView> <Text>{ value.name }</Text> </ScrollView>
                  </TouchableHighlight>
              })}

              
              <TouchableHighlight onPress={() => this.togglePicker()} style={{ paddingTop: 4, paddingBottom: 4 }}>
                <ScrollView> <Text style={{ color: '#999' }}>Cancel</Text> </ScrollView>
              </TouchableHighlight>
            </View>
          </Modal>

          {/* <Picker
            style={{width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5, }}
            selectedValue={this.state.PickerValue}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({PickerValue: itemValue})
            }>
            <Picker.Item label="Select bank" value="select" />
            <Picker.Item label="Access Bank" value="Access Bank" />
            <Picker.Item label="Alat By Wema" value="Wema" />
            <Picker.Item label="Ecobank Nigeria Plc" value="Ecobank" />
            <Picker.Item label="First Bank of Nigeria" value="FBN" />
            <Picker.Item label="Fidelity Bank" value="Fidelity" />
            <Picker.Item label="First City Monument Bank" value="FCMB" />
            <Picker.Item label="Guaranty Trust Bank" value="GTB" />
            <Picker.Item label="Heritage Banking" value="Heritage" />
            <Picker.Item label="Polaris Bank Plc" value="Polaris" />
            <Picker.Item label="Stanbic-ibtc Bank Plc" value="Stanbic" />
            <Picker.Item label="Sterling Bank" value="Sterling" />
            <Picker.Item label="Union Bank of Nigeria" value="Union Bank" />
            <Picker.Item label="United Bank for Africa" value="UBA" />
            <Picker.Item label="Unity Bank Plc" value="Unity" />
            <Picker.Item label="Zenith Bank" value="Zenith" />
          </Picker> */}
        </Card>
      </View>
   
      <View style={{margin: 15, }} >
        <Card>
          <TextInput style={{ width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Enter account number" onChangeText={(accountNumber)=>this.setState({accountNumber})} value={this.state.accountNumber} />
        </Card>
      </View>
      
      <View style={{margin: 15}} >
        <Card>
          <TextInput style={{ width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Enter amount" />
        </Card>
      </View>
      
      <View style={{margin: 15}} >
        <Card>
          <TextInput style={{ width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Enter message (optional)" />
        </Card>
      </View>
      
      <View style={{margin: 15, marginTop: 35}} >
        <Text style={styles.submit} onPress={() => this.payment()}>Payment</Text>
      </View>

      <Modal
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
