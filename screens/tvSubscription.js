import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Modal, TouchableHighlight, Text, View, TextInput, Image, Button, ScrollView, AsyncStorage, TouchableOpacity } from 'react-native';

import RavePaymentModal from 'react-ravepayment'




console.disableYellowBox = true;

import Card from '../components/Card';



export default class TvSubsription extends Component {
  constructor(props) {
    super(props)

    this.state = {
      serviceID: '',
      cardNumber: '',
      meterName: '',
      billinCode: null,
      variations: {},
      pickerSelection: 'Click to select a Provider!',
      pickerDisplayed: false,
      isLoading: true,
      variation_code: '',
      variation_amount: '',
      wallet: ''
    }

  }

  static navigationOptions = {
    title: 'Select Plan',
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

  componentDidMount = () => {
    this.getTvInfo();
  }

  setPickerValue(variation_code, variation_amount) {
    this.setState({
      pickerSelection: variation_code,
      variation_amount
    })
 
    this.togglePicker();
  }
 
  togglePicker() {
    this.setState({
      pickerDisplayed: !this.state.pickerDisplayed
    })
   }

  getTvInfo = async () => {
    const { navigation } = this.props;

    const grabUserId = await AsyncStorage.getItem('userId')

    const serviceID = this.props.navigation.state.params.serviceID
    const cardNumber = this.props.navigation.state.params.cardNumber
    const meterName = this.props.navigation.state.params.meterName    
    console.log('Lol: ',serviceID, cardNumber, meterName)

    this.setState({
        serviceID,
        cardNumber,
        meterName
    })

    fetch('https://swift2pay.com/account/api/request?action=tvService&serviceID='+ serviceID +'&apiKey=JFJHFJJ38388739949HFGDJ', {
      method: 'GET',
    }) 
    .then(response => response.json())
    .then((json) => {
        billers = JSON.stringify(json)
    //   console.log('Response: ' , billers, json.message)
    //   console.log('Response22: ' , json.content)
    //   console.log('Response23: ' , json.content.varations)

      this.setState({
        variations: json.content.varations,
        isLoading: false
      });

      this.state.variations.map((value) => {
        console.log('State: ', value.name)
      })
      
    })
    .catch((err) => {
      console.log(err)
    })

    fetch('https://swift2pay.com/account/api/request.php?action=profile&userID='+ grabUserId +'&apiKey=JFJHFJJ38388739949HFGDJ', {
      method: 'GET',
    }) 
    .then(response => response.json())
    .then((json) => {
      user = JSON.stringify(json)
      console.log('Response: ' , user, json.message)

      this.setState({
        
        wallet: json.wallet
      });

      
    })
    .catch((error) => {
      console.error(error);
      alert(error)
    });

  }

  payTvSub =  async () => {

    const grabUserId = await AsyncStorage.getItem('userId')

    fetch('https://swift2pay.com/account/api/request?action=buyTV&billersCode='+ this.state.cardNumber +'&serviceID='+ this.state.serviceID +'&variation_code='+ this.state.pickerSelection +'&amount='+ this.state.variation_amount +'&userID='+ grabUserId +'&apiKey=JFJHFJJ38388739949HFGDJ', {
      method: 'GET',
    }) 
    .then(response => response.json())
    .then((json) => {
      user = JSON.stringify(json)
      console.log('Response: ' , user, json.message)


    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
      const { navigate } = this.props.navigation;

      const networkPlaceholder = {
        label: 'Select a Provider...',
        value: null,
        color: '#9EA0A4',
      };

      const tvValues = this.state.variations;

      return (

        <View style={{margin: 15}} >
          <Card>
                <Text>{this.state.serviceID}</Text>
                <Text>{this.state.meterName} - {this.state.cardNumber}</Text>
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
                { !this.state.isLoading && this.state.variations.map((value, index) => {
                    return <TouchableHighlight key={index} onPress={() => this.setPickerValue(value.variation_code, value.variation_amount)} style={{ paddingTop: 4, paddingBottom: 4 }}>
                        <Text>{ value.name }</Text>
                    </TouchableHighlight>
                    
                })  } 
                
                <TouchableHighlight onPress={() => this.togglePicker()} style={{ paddingTop: 4, paddingBottom: 4 }}>
                <Text style={{ color: '#999' }}>Cancel</Text>
            </TouchableHighlight>
            </View>
            </Modal>
          </Card>

          <TouchableOpacity style={styles.submit} onPress={() => this.payTvSub()}>
            <Text style={styles.textTwo}>Wallet Pay- ₦{this.state.wallet}</Text>
            </TouchableOpacity>
        </View>        
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
       submit: {
        width: 300,
        height: 60,
        fontSize: 25,
        fontWeight: "500",
        color: "purple",
        borderWidth: 2,
        borderTopWidth: 0,
        borderRightWidth: 10,
        borderRadius: 10,
        borderColor: "purple",
        // alignContent: 'center',
        paddingTop: 15,
        // paddingLeft: 15,
        paddingHorizontal: 5,
        marginTop: 35
       },
      textTwo: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'rgb(147, 43, 173)',
      },
       cardStyle: { 
        width: '90%',
        height: 25,
        borderColor: 'gray',
        borderWidth: 1, 
        borderTopWidth: 0, 
        borderLeftWidth: 0, 
        borderRightWidth: 0,
        alignItems: "center",
        padding: 5,
        margin: 5 
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
    });
    
    