import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, Image, Button, ScrollView, Picker, 
  Keyboard, TouchableWithoutFeedback, ActivityIndicator, Platform } from 'react-native';

import  Modal, { ModalTitle, ModalContent, SlideAnimation, ModalFooter, ModalButton } from 'react-native-modals';

import FeatherIcons from 'react-native-vector-icons/Feather';

import Spinner from 'react-native-loading-spinner-overlay';

import Card from '../components/Card';

// import RNPickerSelect from 'react-native-picker-select';
import RNPickerSelect from 'react-native-selector';

export default class BuyData extends Component {
  static navigationOptions = {
    title: 'Data Service',
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

  constructor(){
    super();
    this.state={
      PickerValue: '',
      pickerSelection: 'Click to select a network!',
      pickerDisplayed: false,
      dataValue: '',
      phoneNumber: '',
      visible: false,
      isLoading: false,
      spinner: false,
      successLog: null,
      ErrorLog: false,
      ErrorVisible: false
    }
  }; 

  
  hideSpinner = () => {
    this.setState({
      spinner: false
    }); 
  }

  setPickerValue(newValue) {
    this.setState({
      pickerSelection: newValue
    })
  }

  setDataValue(newValue) {
    this.setState({
      dataValue: newValue
    })
  }


  buyData = async () => {
    const grabUserId = await AsyncStorage.getItem('userId')
    
    fetch('https://swift2pay.com/account/api/request?action=walletDataGet&phone='+this.state.phone+'&product_id='+this.state.pickerSelection+'@'+this.state.amount+'&serviceID=mtn-data&userID='+grabUserId+'&apiKey=JFJHFJJ38388739949HFGDJ     https://swift2pay.com/account/api/request?action=walletAirtimePurchase&amount='+this.state.amount+'&mobileNetwork='+this.state.pickerSelection+'&apiKey=JFJHFJJ38388739949HFGDJ&phone='+this.state.phone+'&user_id='+ grabUserId +'&service_name=Airtime%20Purchase', {
      method: 'GET',
    })
    .then(response => response.json())
    .then((json) => {
      user = JSON.stringify(json)
      console.log('Response: ' , user, json.message)
      this.setState({
        message: json.message,
      });

      if(json.status == 200){
        console.log(json.message)
        alert(json.message)
        
      }
    })
    .catch((error) => {
      console.error(error);
      alert(error)
    });
  }

  moveToData = () => {
    
    
    this.render(
      
        <View>
          <FeatherIcons style={{ textAlign: "center"}} name="x" size={30} color="red" />
          <Text>Please check all fields</Text>
        </View>   
      
    )
      
      //  alert('Please wait...')
      //  alert('Please fill all required fields')
       
     
   }


 render() {
  const { navigate } = this.props.navigation;

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

  const dataBundles = [
    {
      label: '50MB - 1 day - N50',
      value: '50MB',
    },
    {
      label: '75MB - 1 day - N100',
      value: '75MB',
    },
    {
      label: '1GB - 1 day - N350',
      value: '1GB',
    },
    {
      label: '150MB - 2 days - N200',
      value: '150MB',
    },
    {
      label: '350MB - 7 days - N300',
      value: '350MB',
    },
    {
      label: '750MB - 7 days - N500',
      value: '750MB',
    },
    {
      label: '1.5GB - 30 days - N1000',
      value: '1.5GB',
    },
    {
      label: '3GB - 30 days - N1500',
      value: '3GB',
    },
  ];

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
        <Text>Please check all fields</Text>
      </View>   
    )
  }

  const _data = async() => {

    this.setState({ isLoading: true, spinner: true });
  
     if (this.state.phoneNumber === '' || this.state.phoneNumber <= 10 || this.state.pickerSelection === '' ) {
        
        this.setState({ isLoading: false, spinner: false, ErrorLog: true, ErrorVisible: true });

        this.moveToData() 

     } else {

      this.setState({ isLoading: false, spinner: false });

      this.props.navigation.navigate('BuyData', {
        phoneNumber: this.state.phoneNumber,
        network: this.state.pickerSelection
      })
     }
   }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
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
      
            <View style={{margin: 15}} >
              <Card>
                <TextInput style={{ width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} returnKeyType={'done'} onChangeText={(phoneNumber)=>this.setState({phoneNumber})} value={this.state.phoneNumber} keyboardType="number-pad" placeholder="Phone number" />
              </Card>
            </View>
            
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

            

              <Modal
                visible={this.state.ErrorVisible}
                modalAnimation={new SlideAnimation({
                  slideFrom: 'bottom',
                })}
                onSwipeOut={(event) => {
                  this.setState({ ErrorVisible: false });
                }}
                footer={
                  <ModalFooter>
                    <ModalButton
                      text="OK"
                      onPress={() => {
                        this.setState({ ErrorVisible: false });
                      }}
                    />
                  </ModalFooter>
                }
              >
              <ModalContent>
                {
                  this.state.ErrorLog == true ? <ErrorDialog /> : <Text></Text>
                }
              </ModalContent>
            </Modal>

            {
            Platform.OS === 'android' ?
              <Spinner
              visible={this.state.spinner}
              textContent={'Loading...'}
              textStyle={{color: '#fff'}}
            /> :
            <ActivityIndicator size="large" animating={this.state.isLoading} color="purple" />
          }  

            <View style={{margin: 15, marginTop: 85}} >
              <Text style={styles.submit} onPress={() => _data()}>Proceed</Text>
            </View>

      </ImageBackground>  
    </TouchableWithoutFeedback>
   
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
    paddingTop: 15,
    paddingLeft: 45,
    marginTop: 35,
    marginLeft: 135,
   },
});
