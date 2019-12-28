import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, Image, Button, ScrollView, TouchableOpacity, AsyncStorage, WebView, RefreshControl, SafeAreaView } from 'react-native';

import Card from '../components/Card';
import Constants from 'expo-constants';

import refreshComponent from './refreshComponent'

export default class Browse extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userId: '',
      message: '',
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      wallet: '',
      commission: ''
    }

  }

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

  componentDidMount() {

    const { navigation } = this.props;

    this.setState({
      userId: this.props.navigation.state.params.userId
    })

    console.log('userId: '+this.props.navigation.state.params.userId)

    fetch('https://swift2pay.com/account/api/request.php?action=profile&userID='+this.props.navigation.state.params.userId+'&apiKey=JFJHFJJ38388739949HFGDJ', {
      method: 'GET',
    }) 
    .then(response => response.json())
    .then((json) => {
      user = JSON.stringify(json)
      console.log('Response: ' , user, json.message)
      this.setState({
        message: json.message,
        first_name: json.first_name,
        last_name: json.last_name,
        phone: json.phone,
        wallet: json.wallet,
        commission: json.commission
      });

      if(json.status == 200){
        console.log(json.message)
        alert('Data successfully updated') 
        this._storeData(json.userID)  
      }
    })
    .catch((error) => {
      console.error(error);
      alert(error)
    });
  }

  _storeData = async (userId) => {
    try {
      await AsyncStorage.setItem('userId', userId);
    } catch (error) {
      // Error saving data
      alert('there was an error saving data'+error)
    }
  }

  wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }
  
 render() {
  const { navigate } = this.props.navigation;
  const { navigation } = this.props;

  


  return (
    <SafeAreaView style={styles.container}>
    <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
   <ImageBackground source={require('../assets/images/bg/background.png')} style={styles.backgroundImage}>
   <View style={{margin: 25}}>

     <Text style={[styles.textTwo, {marginBottom: 15, color: 'black'}]}> Hi, {this.state.first_name} {this.state.last_name}</Text> 

     <Card style={{height: 185, marginBottom: 5}}>
       <Text style={styles.textTwo} >Wallet Balance: ₦{this.state.wallet}</Text>
       
       <View style={[styles.view, {width: '100%', height: '50%'}]} >

          <TouchableOpacity onPress={() => navigate('FundWallet')} >
            <Card style={styles.cardTwo}>
              <Image source={require('../assets/images/browse-icons/wallet.png')} style={styles.imageTwo} />
              <Text style={{fontSize: 8, fontWeight: 'bold', textAlign: "center", padding: 7, margin: 5,}} >Fund Wallet</Text>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate('Transactions')} >
            <Card style={styles.cardTwo}>
              <Image source={require('../assets/images/browse-icons/transaction.png')} style={styles.imageTwo} />
              <Text style={{fontSize: 8, fontWeight: 'bold', textAlign: "center", padding: 7, margin: 5}} >Transactions</Text>
            </Card>
          </TouchableOpacity>

       </View>

       <Text style={styles.textThree} >Commission Earned: ₦{this.state.commission}</Text>
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
   </ScrollView>
   </SafeAreaView>
 )
 }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
   textThree: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'rgb(50, 50, 50)',
    paddingTop: 1,
    marginTop: 15,
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
    marginTop: 25,
   },
});
