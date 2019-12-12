import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, Image, Button, ScrollView } from 'react-native';

import Card from '../components/Card';

export default class BillPayment extends Component {
  static navigationOptions = {
   title: 'Bill Payment',
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


 render() {
  const { navigate } = this.props.navigation;
  return (
   <ImageBackground source={require('../assets/images/bg/background.png')} style={styles.backgroundImage}>
   
    <View style={styles.screen}>
     <ScrollView style={{width: '90%', marginTop: 31,}} >
      <View style={styles.view}>
       <Card onPress={() => navigate('Airtime')} style={styles.card} >
        <Image onPress={() => navigate('Airtime')} source={require('../assets/images/bill-payment/tv.png')} style={styles.image} />
        <Text onPress={() => navigate('Airtime')} style={styles.text}>TV Subscription</Text>
       </Card>
       <Card onPress={() => navigate('Data')} style={styles.card}>
        <Image onPress={() => navigate('Data')} source={require('../assets/images/bill-payment/electricity.png')} style={styles.image} />
        <Text onPress={() => navigate('Data')} style={styles.text}>Electricity</Text>
       </Card>        
      </View>
      <View style={styles.view}>
       <Card style={styles.card}>
        <Image source={require('../assets/images/bill-payment/education.png')} style={styles.image} />
        <Text style={styles.text}>Education</Text>
       </Card>
       <Card style={styles.card}>
        <Image source={require('../assets/images/bill-payment/internet.png')} style={styles.image} />
        <Text style={styles.text}>Internet</Text>
       </Card>           
      </View>
      
     </ScrollView>
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
    marginTop: 35,
    marginBottom: 5
   },
   view: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
   },
   card: {
    flex: 1,
    width: 200,
    height: 200,
    alignItems: 'center',
    margin: 15,
    marginTop: 29,
    padding: null,
   },
   cardTwo: {
    flex: 1,
    width: 50,
    height: 50,
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
    width: 55,
    height: 55,
    margin: 15,
    alignContent: 'center',
    marginTop: 57,
   },
   imageTwo: {
    width: 15,
    height: 15,
    alignContent: "center",
    padding: null,
    margin: 2,
    marginTop: 12,
   },
});
