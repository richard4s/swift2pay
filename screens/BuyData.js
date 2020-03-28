import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, AsyncStorage, TouchableOpacity,
  Button, ScrollView, Picker, Keyboard, TouchableWithoutFeedback, TouchableHighlight, Platform, ActivityIndicator } from 'react-native';

import { Modal as NativeModal} from 'react-native'

import Card from '../components/Card';
import  Modal, { ModalTitle, ModalContent, SlideAnimation, ModalFooter, ModalButton } from 'react-native-modals';

import RNPickerSelect from 'react-native-selector';

import FeatherIcons from 'react-native-vector-icons/Feather';

import Spinner from 'react-native-loading-spinner-overlay';

export default class BuyData extends Component {
  static navigationOptions = {
    title: 'Buy Data Service',
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
      dataAmount: '',
      phoneNumber: '',
      getVariation: '',
      isLoading: true,

      visible: false,
      isAnimating: false,
      spinner: false,
      successLog: null,

      getUserId: '',
      bundleArr: {
        label: '',
        value: ''
      }
    }
  }; 


  setPickerValue(newValue, amount) {
    this.setState({
      dataValue: newValue,
      dataAmount: amount
    })
  }

  hideSpinner = () => {
    this.setState({
      spinner: false
    }); 
  }

  setDataValue(newValue) {
    // let amounter = newValue.split('-')

    this.setState({
      dataValue: newValue
    }, 
      
      console.log(this.state.dataValue)
    )
  }


  getDataBundles = async () => {
    const grabUserId = await AsyncStorage.getItem('userId')
    
    fetch('https://swift2pay.com/account/api/request?action=getData&mobileNetwork='+this.props.navigation.state.params.network+'-data', {
      method: 'GET',
    })
    .then(response => response.json())
    .then((json) => {
      user = JSON.stringify(json)
      // console.log('Response Json: ', json.content)
      // console.log('Response user: ' , user.content.varations)
      
      this.setState({
        getVariation: json.content.varations,
        getUserId: grabUserId,
        isLoading: false
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

  togglePicker() {
    this.setState({
      pickerDisplayed: !this.state.pickerDisplayed
    })
   }

  buyData = () => {

    this.setState({ isAnimating: true, spinner: true });
    
    fetch('https://swift2pay.com/account/api/request?action=walletDataGet&phone='+this.props.navigation.state.params.phoneNumber+'&product_id='+this.state.dataValue+'@'+this.state.dataAmount+'&serviceID='+this.props.navigation.state.params.network+'-data&userID='+this.state.getUserId+'&apiKey=JFJHFJJ38388739949HFGDJ', {
      method: 'GET',
    })
    .then(response => response.json())
    .then((json) => {
      user = JSON.stringify(json)
      console.log('Response Json: ', json)

      this.setState({
        message: json.message,
        visible: true,
        isAnimating: false,
        spinner: false,
        successLog: true
      });

      if(json.status == 200){
        console.log(json.message)
        // alert(json.message)
        
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

  componentDidMount = () => {
      this.getDataBundles();
  }


 render() {

  // console.log('navigation params: ', this.props.navigation.state.params)
  // console.log('getVariation 123: ', this.state.getVariation)

  
  // console.log('getVariation 123: ', this.state.getVariation[0].name)
  // console.log('getVariation 1: ', this.state.getVariation['name'])
 

  const { navigate } = this.props.navigation;

  // const { itemValue, itemLabel } = this.state.getVariation;

  // console.log('ANother var:', itemValue, itemLabel)

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

  // const dataBundles = !this.state.isLoading && this.state.getVariation.map((item) => {
  //   console.log('items 1:', item)
  //   console.log('items 2:', item.name)
  //   const dataArr = {label: item.name, value: item.variation_code}
  //   return <RNPickerSelect
  //             style={{width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5, }}
  //             onValueChange={(value) => {
  //                 console.log(value)
  //                 this.setDataValue(value)
  //               }}
  //               itemKey={item} value={item.variation_code}
  //           />
  // })

  // {
  //   !this.state.isLoading ? this.state.getVariation.map((item) => 
  //   console.log('itemss: ', item)
  // ) :
  // console.log('nothing')
  // }

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
                        this.props.navigation.navigate('Browse', {
                          userId: this.state.getUserId
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
      
        <View style={{margin: 15}} >
          <Text>Data bundles</Text>
              
                {/* {!this.state.isLoading &&
                  <RNPickerSelect 
                  style={{width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5, }}
                  onValueChange={(value) => {
                      console.log('changed value: ', value)
                      // if (!value || value === this.props.screenProps.locale) return;
							        // this.props.screenProps.setLocale(value);
                      this.setDataValue(value)
                    }}
                    // placeholder={{label: 'Select plan', value: 'disabled'}}
                    items={this.state.getVariation} value={this.state.dataValue}
                /> */}

              {!this.state.isLoading &&
              <Card >
              <TouchableOpacity onPress={() => {this.togglePicker()}} >
                <Text style={{width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5, }} placeholder={'select a plan'} >{this.state.dataValue || 'Select a bundle'}</Text>
              </TouchableOpacity>

              <NativeModal visible={this.state.pickerDisplayed} animationType={"slide"} transparent={true} >
                <View style={{ margin: 20, padding: 20,
                  backgroundColor: '#efefef',
                  bottom: 20,
                  left: 20,
                  right: 20,
                  alignItems: 'center',
                  position: 'absolute' }}>
                  <Text style={{fontWeight: 'bold'}}>Please pick a network</Text>
                  { this.state.getVariation.map((value, index) => {
                    return <TouchableHighlight key={index} onPress={() => this.setPickerValue(value.variation_code, value.amount)} style={{ paddingTop: 4, paddingBottom: 4 }}>
                        <Text>{ value.name }</Text>
                      </TouchableHighlight>
                  })}

                  
                  <TouchableHighlight onPress={() => this.togglePicker()} style={{ paddingTop: 4, paddingBottom: 4 }}>
                    <Text style={{ color: '#999' }}>Cancel</Text>
                  </TouchableHighlight>
                </View>
              </NativeModal>

              </Card>

                }


          {
            Platform.OS === 'android' ?
              <Spinner
              visible={this.state.spinner}
              textContent={'Loading...'}
              textStyle={{color: '#fff'}}
            /> :
            <ActivityIndicator size="large" animating={this.state.isAnimating} color="purple" />
          }    
                

                
                
              
            </View>            

            <View style={{margin: 15, marginTop: 85}} >
              <Text style={styles.submit} onPress={() => this.buyData()}>Buy Data</Text>
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
