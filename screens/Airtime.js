import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, Image, Button, ScrollView, Platform,
  AsyncStorage, TouchableOpacity, TouchableHighlight, KeyboardAvoidingView, ActivityIndicator } from 'react-native';

import Modal, { ModalTitle, ModalContent, SlideAnimation, ModalFooter, ModalButton } from 'react-native-modals';

// import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';

// import RNPickerSelect from 'react-native-picker-select'; 
import RNPickerSelect from 'react-native-selector';

import Card from '../components/Card';

import FeatherIcons from 'react-native-vector-icons/Feather';

import Spinner from 'react-native-loading-spinner-overlay';

export default class Airtime extends Component {
  static navigationOptions = {
    title: 'Airtime',
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
      phone: '',
      value: null,
      pickerSelection: 'Click to select a network!',
      pickerDisplayed: false,
      mobileNetwork: undefined,
      data: [], 
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

  buyAirtime = async () => {
    const grabUserId = await AsyncStorage.getItem('userId')

    // alert('Please wait...')

    fetch('https://swift2pay.com/account/api/request.php?action=profile&userID='+grabUserId+'&apiKey=JFJHFJJ38388739949HFGDJ', {
      method: 'GET',
    }) 
    .then(response => response.json())
    .then((json) => {
      user = JSON.stringify(json)
      console.log('Response: ' , user, json.message)

      // alert(json.message)

      this.setState({
        phone: json.phone,
        mobileNetwork: json.mobileNetwork,
        amount: json.amount,
      });

      
    })
    .catch((error) => {
      console.error(error);
      alert(error)
    });

    fetch('https://swift2pay.com/account/api/request?action=walletAirtimePurchase&amount='+this.state.amount+'&mobileNetwork='+this.state.pickerSelection+'&apiKey=JFJHFJJ38388739949HFGDJ&phone='+this.state.phone+'&user_id='+ grabUserId +'&service_name=Airtime%20Purchase', {
      method: 'GET',
    })
    .then(response => response.json())
    .then((json) => {
      user = JSON.stringify(json)
      console.log('Response: ' , user, json.message)
      // alert(json.message)

      this.setState({
        message: json.message,
        visible: true,
        isLoading: false,
        spinner: false,
        successLog: true
      });

      // console.log(this.state)

      if(json.status == 200){
        console.log(json.message)
        console.log(this.state.amount)
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

  const networkValues = [
    {
      label: 'MTN Nigeria',
      value: 'mtn',
    },
    {
      label: 'Globacom',
      value: 'glo',
    },
    {
      label: '9 Mobile',
      value: 'etisalat',
    },
    {
      label: 'Airtel Nigeria',
      value: 'airtel',
    },
  ];

  const networkPlaceholder = {
    label: 'Click to select a network...',
    value: null,
    color: '#9EA0A4',
  };

  // const amountPlaceholder = {
  //   label: 'Select an amount...',
  //   amountValue: null,
  //   color: '#9EA0A4',
  // };

  const { navigate } = this.props.navigation;
  let toggleStyle = this.state.isClicked ? styles.cardTwo : styles.button;

  let toggleColor = this.state.buttonColor

  const SuccessDialog = () => {
    return(
      <View>
        <FeatherIcons style={{ textAlign: "center"}} name="check-circle" size={30} color="green" />
        <Text>Your airtime is on its way</Text>
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
          <KeyboardAvoidingView style={{ flex: 1}}
            behavior="padding">

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
    
          <View style={{margin: 15}} >
            <Card>
              <TextInput style={{ width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Phone number" keyboardType="number-pad" onChangeText={(phone)=>this.setState({phone})} value={this.state.phone} />
            </Card>
          </View>          

          <View style={{margin: 25}}>

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


            {
            Platform.OS === 'android' ?
              <Spinner
              visible={this.state.spinner}
              textContent={'Loading...'}
              textStyle={{color: '#purple'}}
            /> :
            <ActivityIndicator size="large" animating={this.state.isLoading} color="purple" />
          }       

              
          </View>


          <View style={{margin: 15, marginTop: 25}} >
          <Text style={{margin: 3}}>Enter amount (NGN50 - NGN50,000)</Text>
            <Card>
              <TextInput returnKeyType={'done'} style={{ width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Enter amount" keyboardType="number-pad" onChangeText={(amount)=>this.setState({amount})} value={this.state.amount} />
            </Card>
            <Text style={styles.submit} onPress={this._airtime}>Payment</Text>
          </View>
          </KeyboardAvoidingView>
      </ImageBackground>
   
  )
 }

 _airtime = async() => {

  this.setState({ isLoading: true, spinner: true });

   if (this.state.phone === '' || this.state.pickerSelection === '' ) {
    this.setState({ isLoading: false, spinner: false });
    //  alert('Please wait...')
    //  alert('Please fill all required fields')
     
   } else {
    //  alert('Please wait...')
     this.buyAirtime()
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
    justifyContent: "center",
    width: '100%'
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
    backgroundColor: '#333',
    color: '#fff'
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
    marginTop: 35,
    marginLeft: 135,
   },
   buttonPress: {
     backgroundColor: '#333',
     color: '#fff'
   },
   button: {
    flex: 1,
    width: 70,
    height: 70,
    alignItems: 'center',
    margin: 3,
    marginTop: 9,
    padding: null,
    backgroundColor: '#fff',
    color: '#333'
   }
});
