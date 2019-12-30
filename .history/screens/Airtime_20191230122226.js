import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, Image, Button, ScrollView, AsyncStorage, TouchableOpacity } from 'react-native';

import ReactNativePickerModule from 'react-native-picker-module';

import Card from '../components/Card';

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

  constructor(){
    super();
    this.state={
      phone: '',
      selectedValue: null,
      data: [
        "mtn",
        "glo",
        "etisalat",
        "airtel"
      ], 
    }
  }; 

  buyAirtime = async () => {
    const grabUserId = await AsyncStorage.getItem('userId')

    alert('you are about to buy airtime')

    fetch('https://swift2pay.com/account/api/request.php?action=profile&userID='+grabUserId+'&apiKey=JFJHFJJ38388739949HFGDJ', {
      method: 'GET',
    }) 
    .then(response => response.json())
    .then((json) => {
      user = JSON.stringify(json)
      console.log('Response: ' , user, json.message)

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

    fetch('https://swift2pay.com/account/api/request?action=walletAirtimePurchase&amount='+this.state.amount+'&mobileNetwork='+this.state.mobileNetwork+'&apiKey=JFJHFJJ38388739949HFGDJ&phone='+this.state.phone+'&user_id='+ grabUserId +'&service_name=Airtime%20Purchase', {
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


 render() {
  const { navigate } = this.props.navigation;
  return (
    
        <ImageBackground source={require('../assets/images/bg/background.png')} style={styles.backgroundImage}>
    
          <View style={{margin: 15}} >
            <Card>
              <TextInput style={{ width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Phone number" keyboardType="number-pad" onChangeText={(phone)=>this.setState({phone})} value={this.state.phone} />
            </Card>
          </View>
          
          {/* <View style={{margin: 15}} >
            <Card >
              <TouchableOpacity onPress={() => {this.pickerRef.show()}} >
                <Text style={{width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5, }} >Click to select a network</Text>
              </TouchableOpacity>

              <ReactNativePickerModule
                pickerRef={e => this.pickerRef = e}
                value={this.state.selectedValue}
                title={"Select a network"}
                items={this.state.data}
                onValueChange={(network) =>
                  this.setState({
                    selectedValue: network
                    })
                }
                
              />
            </Card>
          </View> */}
          

          <View style={{margin: 25}}>

          <Card >
              <TouchableOpacity onPress={() => {this.pickerRef.show()}} >
                <Text style={{width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5, }} >Click to select a network</Text>
              </TouchableOpacity>

              <ReactNativePickerModule
                pickerRef={e => this.pickerRef = e}
                value={this.state.selectedValue}
                title={"Select a network"}
                items={this.state.data}
                onValueChange={(network) =>
                  this.setState({
                    selectedValue: network
                    })
                }
                
              />
            </Card>          

              {/* <Text>Input airtime network</Text>
                <ScrollView style={{width: '100%'}} >

                  <View style={styles.view}>

                    <TouchableOpacity onPress={() => console.log('mtn')} >
                      <Card style={styles.cardTwo}>
                        <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: "center", padding: 2, margin: 1, marginTop: 18,}} value >MTN</Text>
                        <Text style={{fontSize: 8, fontWeight: 'bold', textAlign: "center", padding: 2, margin: 1,}} >Nigeria</Text>
                      </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log('glo')} >
                      <Card style={styles.cardTwo}>
                        <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: "center", padding: 2, margin: 1, marginTop: 18, }} >Glo</Text>
                        <Text style={{fontSize: 8, fontWeight: 'bold', textAlign: "center", padding: 2, margin: 1,}} >Globacom</Text>
                      </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log('etisalat')} >
                      <Card style={styles.cardTwo}>
                        <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: "center", padding: 2, margin: 1, marginTop: 18, }} >9Mobile</Text>
                        <Text style={{fontSize: 8, fontWeight: 'bold', textAlign: "center", padding: 2, margin: 1, }} >(Etisalat)</Text>
                      </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log('airtel')} >
                      <Card style={styles.cardTwo}>
                        <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: "center", padding: 2, margin: 1, marginTop: 18, }} >Airtel</Text>
                        <Text style={{fontSize: 8, fontWeight: 'bold', textAlign: "center", padding: 2, margin: 1,}} >Nigeria</Text>
                      </Card>
                    </TouchableOpacity>

                  </View>
                </ScrollView> */}
              
          </View>
          

          <View style={{margin: 15, marginTop: 15}}>
              <Text>Select amount (NGN)</Text>

                <ScrollView>
                  <View style={styles.view}>

                    <TouchableOpacity onPress={() => console.log('100')} >
                      <Card style={styles.cardTwo}>
                        <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: "center", padding: 2, margin: 1, marginTop: 18,}} >100</Text>
                        <Text style={{fontSize: 8, fontWeight: 'bold', textAlign: "center", padding: 2, margin: 1,}} >NGN</Text>
                      </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log('500')} >
                      <Card style={styles.cardTwo}>
                        <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: "center", padding: 2, margin: 1, marginTop: 18, }} >500</Text>
                        <Text style={{fontSize: 8, fontWeight: 'bold', textAlign: "center", padding: 2, margin: 1,}} >NGN</Text>
                      </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log('1000')} >
                      <Card style={styles.cardTwo}>
                        <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: "center", padding: 2, margin: 1, marginTop: 18, }} >1000</Text>
                        <Text style={{fontSize: 8, fontWeight: 'bold', textAlign: "center", padding: 2, margin: 1, }} >NGN</Text>
                      </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log('5000')} >
                      <Card style={styles.cardTwo}>
                        <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: "center", padding: 2, margin: 1, marginTop: 18, }} >5000</Text>
                        <Text style={{fontSize: 8, fontWeight: 'bold', textAlign: "center", padding: 2, margin: 1,}} >NGN</Text>
                      </Card>
                    </TouchableOpacity>

                  </View>
                </ScrollView>

          </View>

          {/* <View style={{margin: 15, marginTop: 25}} >
          <Text style={{margin: 3}}>Input airtime network</Text>
            <Card>
              <TextInput style={{ width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Write mtn, glo, airtel, etisalat" onChangeText={(mobileNetwork)=>this.setState({mobileNetwork})} value={this.state.mobileNetwork} />
            </Card>
          </View> */}

          <View style={{margin: 15, marginTop: 25}} >
          <Text style={{margin: 3}}>Enter amount (NGN50 - NGN50,000)</Text>
            <Card>
              <TextInput style={{ width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Enter amount" keyboardType="number-pad" onChangeText={(amount)=>this.setState({amount})} value={this.state.amount} />
            </Card>
            <Text style={styles.submit} onPress={this.buyAirtime}>Payment</Text>
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
