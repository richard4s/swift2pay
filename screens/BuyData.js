import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, AsyncStorage, Button, ScrollView, Picker, Keyboard, TouchableWithoutFeedback } from 'react-native';

import Card from '../components/Card';

import RNPickerSelect from 'react-native-picker-select';

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
      phoneNumber: '',
      getVariation: '',
      isLoading: true,
      getUserId: ''
    }
  }; 


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


  getDataBundles = async () => {
    const grabUserId = await AsyncStorage.getItem('userId')
    
    fetch('https://swift2pay.com/account/api/request?action=getData&mobileNetwork='+this.props.navigation.state.params.network+'-data', {
      method: 'GET',
    })
    .then(response => response.json())
    .then((json) => {
      user = JSON.stringify(json)
      console.log('Response Json: ', json.content)
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

  buyData = () => {
    
    fetch('https://swift2pay.com/account/api/request?action=getData&mobileNetwork='+this.props.navigation.state.params.network+'-data', {
      method: 'GET',
    })
    .then(response => response.json())
    .then((json) => {
      user = JSON.stringify(json)
      console.log('Response Json: ', json.content)
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

  componentDidMount = () => {
      this.getDataBundles();
      // console.log('another variation: ', this.state.getVariation)
       
  }


 render() {

  console.log('navigation params: ', this.props.navigation.state.params)
  // console.log('getVariation 123: ', this.state.getVariation)
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
      
        <View style={{margin: 15}} >
          <Text>Data bundles</Text>
              <Card >
                {!this.state.isLoading &&
                  <RNPickerSelect
                  style={{width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5, }}
                  onValueChange={(value) => {
                      console.log('changed value: ', value)
                      this.setDataValue(value)
                    }}
                    items={this.state.getVariation}
                />
                }

                
                
              </Card>
            </View>            

            <View style={{margin: 15, marginTop: 85}} >
              <Text style={styles.submit} onPress={() => alert('proceed')}>Buy Data</Text>
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
