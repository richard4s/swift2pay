import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, Image, Button, ScrollView, Picker, Keyboard, TouchableWithoutFeedback } from 'react-native';

import Card from '../components/Card';

export default class Data extends Component {
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
      PickerValue:''
    }
  }; 


 render() {
  const { navigate } = this.props.navigation;
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
        <ImageBackground source={require('../assets/images/bg/background.png')} style={styles.backgroundImage}>
      
            <View style={{margin: 15}} >
              <Card>
                <TextInput style={{ width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Phone number" />
              </Card>
            </View>
            
            <View style={{margin: 15}} >
              <Card >
                <Picker
                  style={{width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5, }}
                  selectedValue={this.state.PickerValue}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({PickerValue: itemValue})
                  }>
                  <Picker.Item label="Select phone operator" value="select" />
                  <Picker.Item label="MTN Nigeria" value="mtn" />
                  <Picker.Item label="Globacom" value="glo" />
                  <Picker.Item label="Airtel Nigeria" value="airtel" />
                  <Picker.Item label="9Mobile" value="etisalat" />
                </Picker>
              </Card>
            </View>
      

            <View style={{margin: 25}}>
                <Text>Data bundles</Text>
                <View style={styles.view}>
                    <Card style={styles.cardTwo}>
                      <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: "center", padding: 2, margin: 3, marginTop: 12,}} >50MB</Text>
                      <Text style={{fontSize: 8, fontWeight: '100', textAlign: "center", margin: 1, }} >1 day</Text>
                      <Text style={{fontSize: 8, fontWeight: 'bold', textAlign: "center", padding: 2, margin: 1,}} >NGN50</Text>
                    </Card>
                    <Card style={styles.cardTwo}>
                      <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: "center", padding: 2, margin: 3, marginTop: 12, }} >75MB</Text>
                      <Text style={{fontSize: 8, fontWeight: '100', textAlign: "center", margin: 1, }} >1 day</Text>
                      <Text style={{fontSize: 8, fontWeight: 'bold', textAlign: "center", padding: 2, margin: 1,}} >NGN100</Text>
                    </Card>
                    <Card style={styles.cardTwo}>
                      <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: "center", padding: 2, margin: 3, marginTop: 12, }} >1GB</Text>
                      <Text style={{fontSize: 8, fontWeight: '100', textAlign: "center", margin: 1, }} >1 day</Text>
                      <Text style={{fontSize: 8, fontWeight: 'bold', textAlign: "center", padding: 2, margin: 1, }} >NGN350</Text>
                    </Card>
                    <Card style={styles.cardTwo}>
                      <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: "center", padding: 2, margin: 3, marginTop: 12, }} >150MB</Text>
                      <Text style={{fontSize: 8, fontWeight: '100', textAlign: "center", margin: 1, }} >2 days</Text>
                      <Text style={{fontSize: 8, fontWeight: 'bold', textAlign: "center", padding: 2, margin: 1,}} >NGN200</Text>
                    </Card>
                </View>
            </View>

            <View style={{margin: 25, marginTop: 65}}>
                <View style={styles.view}>
                    <Card style={styles.cardTwo}>
                      <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: "center", padding: 2, margin: 3, marginTop: 12,}} >350MB</Text>
                      <Text style={{fontSize: 8, fontWeight: '100', textAlign: "center", margin: 1, }} >7 days</Text>
                      <Text style={{fontSize: 8, fontWeight: 'bold', textAlign: "center", padding: 2, margin: 1,}} >NGN300</Text>
                    </Card>
                    <Card style={styles.cardTwo}>
                      <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: "center", padding: 2, margin: 3, marginTop: 12, }} >750MB</Text>
                      <Text style={{fontSize: 8, fontWeight: '100', textAlign: "center", margin: 1, }} >7 days</Text>
                      <Text style={{fontSize: 8, fontWeight: 'bold', textAlign: "center", padding: 2, margin: 1,}} >NGN500</Text>
                    </Card>
                    <Card style={styles.cardTwo}>
                      <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: "center", padding: 2, margin: 3, marginTop: 12, }} >1.5GB</Text>
                      <Text style={{fontSize: 8, fontWeight: '100', textAlign: "center", margin: 1, }} >30 days</Text>
                      <Text style={{fontSize: 8, fontWeight: 'bold', textAlign: "center", padding: 2, margin: 1, }} >NGN1,000</Text>
                    </Card>
                    <Card style={styles.cardTwo}>
                      <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: "center", padding: 2, margin: 3, marginTop: 12, }} >3GB</Text>
                      <Text style={{fontSize: 8, fontWeight: '100', textAlign: "center",  margin: 1,}} >30 days</Text>
                      <Text style={{fontSize: 8, fontWeight: 'bold', textAlign: "center", padding: 2, margin: 1,}} >NGN1,500</Text>
                    </Card>
                </View>
            </View>

            <View style={{margin: 15, marginTop: 85}} >
              <Text style={styles.submit} onPress={() => navigate('Browse')}>Payment</Text>
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
