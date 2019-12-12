import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, Image, Button, ScrollView } from 'react-native';

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
     <Card>
       <Text style={styles.textTwo} >Wallet Balance: NGN595,000</Text>
       <View style={styles.view}>
        <Card style={styles.card}>
          <View>
            <Image source={require('../assets/images/browse-icons/scan-qr.png')} style={styles.image} />
            <Text>Scan QR</Text>
          </View>
        </Card>
        <Card style={styles.card}>
          <View>
            <Image source={require('../assets/images/browse-icons/transaction.png')} style={styles.image} />
            <Text>Transactions</Text>
          </View>
        </Card>
        <Card style={styles.card}>
          <View>
            <Image source={require('../assets/images/browse-icons/transfer.png')} style={styles.image} />
            <Text>Transfer</Text>
          </View>
        </Card>
        <Card style={styles.card}>
          <View>
            <Image source={require('../assets/images/browse-icons/wallet.png')} style={styles.image} />
            <Text>Fund Wallet</Text>
          </View>
        </Card>
       </View>
     </Card>
   </View>
    <View style={styles.screen}>
     <Text style={styles.browse}>Browse</Text>
     <ScrollView style={{width: '80%'}} >
      <View style={styles.view}>
       <Card style={styles.card}>
        <Image source={require('../assets/images/browse-icons/airtime.png')} style={styles.image} />
        <Text style={styles.text}>Airtime</Text>
       </Card>
       <Card style={styles.card}>
        <Image source={require('../assets/images/browse-icons/data-service.png')} style={styles.image} />
        <Text style={styles.text}>Data Service</Text>
       </Card>        
      </View>
      <View style={styles.view}>
       <Card style={styles.card}>
        <Image source={require('../assets/images/browse-icons/bill-payment.png')} style={styles.image} />
        <Text style={styles.text}>Bill Payment</Text>
       </Card>
       <Card style={styles.card}>
        <Image source={require('../assets/images/browse-icons/wallet-transfer.png')} style={styles.image} />
        <Text style={styles.text}>Wallet Transfer</Text>
       </Card>           
      </View>
      <View style={styles.view}>
       <Card style={styles.card}>
        <Image source={require('../assets/images/browse-icons/bank-transfer.png')} style={styles.image} />
        <Text style={styles.text}>Bank Transfer</Text>
       </Card>
       <Card style={styles.card}>
        <Image source={require('../assets/images/browse-icons/insurance.png')} style={styles.image} />
        <Text style={styles.text}>Insurance</Text>
       </Card>                       
      </View>
      <View style={styles.view}>
       <Card style={styles.card}>
        <Image source={require('../assets/images/browse-icons/scan-pay.png')} style={styles.image} />
        <Text style={styles.text}>Scan Pay</Text>
       </Card>
       <Card style={styles.card}>
        <Image source={require('../assets/images/browse-icons/profile.png')} style={styles.image} />
        <Text style={styles.text}>Profile</Text>
       </Card>                             
       </View>
      <View style={styles.view}>
       <Card style={styles.card}>
        <Image source={require('../assets/images/browse-icons/settings.png')} style={styles.image} />
        <Text style={styles.text}>Settings</Text>
       </Card>
       <Card style={styles.card}>
        <Image source={require('../assets/images/browse-icons/logout.png')} style={styles.image} />
        <Text style={styles.text}>Logout</Text>
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
    marginTop: 15,
    marginBottom: 15
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
    margin: 5,
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
    margin: 5,
   },
   image: {
    width: '50%',
    height: '50%',
    margin: 5,
    alignContent: 'center'
   },
   imageTwo: {
    width: '50%',
    height: '50%',
    margin: 5,
    alignContent: 'center'
   },
});
