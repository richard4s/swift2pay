import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, Image, Button, ScrollView, TouchableOpacity } from 'react-native';

import Card from '../components/Card';

export default class Browse extends Component {
  static navigationOptions = {
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
   <View style={{margin: 25}}>

     <Text style={[styles.textTwo, {marginBottom: 15, color: 'black'}]}> Hi $(Firstname),</Text> 

     <Card style={{height: 135, marginBottom: 5}}>
       <Text style={styles.textTwo} >Wallet Balance: ₦595,000.75</Text>
       <View style={[styles.view, {width: '100%'}]} >

          <TouchableOpacity>
            <Card style={styles.cardTwo}>
              <Image source={require('../assets/images/browse-icons/wallet.png')} style={styles.imageTwo} />
              <Text style={{fontSize: 8, fontWeight: 'bold', textAlign: "center", padding: 2,}} >Fund Wallet</Text>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity>
            <Card style={styles.cardTwo}>
              <Image source={require('../assets/images/browse-icons/transaction.png')} style={styles.imageTwo} />
              <Text style={{fontSize: 8, fontWeight: 'bold', textAlign: "center", padding: 2,}} >Transactions</Text>
            </Card>
          </TouchableOpacity>
          
       </View>
     </Card>
   </View>
    <View style={styles.screen}>

     <Text style={styles.browse}>Browse</Text>

     <ScrollView style={{width: '100%'}} >

      <View style={styles.view} >

        <TouchableOpacity onPress={() => navigate('Airtime')}  >
          <Card style={styles.card} >
            <Image source={require('../assets/images/browse-icons/airtime.png')} style={styles.image} />
            <Text style={styles.text}>Airtime</Text>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('Data')} >
          <Card style={styles.card}>
            <Image source={require('../assets/images/browse-icons/data-service.png')} style={styles.image} />
            <Text style={styles.text}>Data Service</Text>
          </Card> 
        </TouchableOpacity>

      </View>

      <View style={styles.view}>

       <TouchableOpacity onPress={() => navigate('BillPayment')}>
        <Card style={styles.card}>
          <Image source={require('../assets/images/browse-icons/bill-payment.png')} style={styles.image} />
          <Text style={styles.text}>Bill Payment</Text>
        </Card>
       </TouchableOpacity>

       <TouchableOpacity onPress={() => navigate('WalletTransfer')}>
        <Card style={styles.card} >
          <Image  source={require('../assets/images/browse-icons/wallet-transfer.png')} style={styles.image} />
          <Text style={styles.text}>Wallet Transfer</Text>
        </Card>
       </TouchableOpacity>

      </View>

      <View style={styles.view}>

       <TouchableOpacity onPress={() => navigate('BankTransfer')}>
        <Card style={styles.card}>
          <Image source={require('../assets/images/browse-icons/bank-transfer.png')} style={styles.image} />
          <Text style={styles.text}>Bank Transfer</Text>
        </Card>
       </TouchableOpacity>

       <TouchableOpacity onPress={() => navigate('Insurance')}>
        <Card style={styles.card}>
          <Image source={require('../assets/images/browse-icons/insurance.png')} style={styles.image} />
          <Text style={styles.text}>Insurance</Text>
        </Card>
       </TouchableOpacity>
                              
      </View>

      <View style={styles.view}>
       
       <TouchableOpacity onPress={() => navigate('')}>
        <Card style={styles.card}>
          <Image source={require('../assets/images/browse-icons/scan-pay.png')} style={styles.image} />
          <Text style={styles.text}>Scan Pay</Text>
        </Card>
       </TouchableOpacity>

       <TouchableOpacity>
        <Card style={styles.card}>
          <Image source={require('../assets/images/browse-icons/profile.png')} style={styles.image} />
          <Text style={styles.text}>Profile</Text>
        </Card>
       </TouchableOpacity>
       
       </View>
       
      <View style={styles.view}>
       
       <TouchableOpacity>
        <Card style={styles.card}>
          <Image source={require('../assets/images/browse-icons/settings.png')} style={styles.image} />
          <Text style={styles.text}>Settings</Text>
        </Card>
       </TouchableOpacity>

       <TouchableOpacity  onPress={() => navigate('Welcome')}>
        <Card style={styles.card}>
          <Image source={require('../assets/images/browse-icons/logout.png')} style={styles.image} />
          <Text style={styles.text}>Logout</Text>
        </Card> 
       </TouchableOpacity>
                                  
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
    width: 130,
    height: 80,
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
});
