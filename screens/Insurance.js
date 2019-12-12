import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, Image, Button, ScrollView } from 'react-native';

import Card from '../components/Card';

export default class Insurance extends Component {
  static navigationOptions = {
   title: 'Insurance',
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
        <Image onPress={() => navigate('Airtime')} source={require('../assets/images/insurance/third-party.png')} style={styles.image} />
        <Text onPress={() => navigate('Airtime')} style={styles.text}>Third Party Auto Insurance</Text>
       </Card>
       <Card onPress={() => navigate('Data')} style={styles.card}>
        <Image onPress={() => navigate('Data')} source={require('../assets/images/insurance/group-personal.png')} style={styles.image} />
        <Text onPress={() => navigate('Data')} style={styles.text}>Group Personal Accident Insurance</Text>
       </Card>        
      </View>
      <View style={styles.view}>
       <Card style={styles.card}>
        <Image source={require('../assets/images/insurance/group-senior.png')} style={styles.image} />
        <Text style={styles.text}>Group Senior Citizen Plan</Text>
       </Card>
       <Card style={styles.card}>
        <Image source={require('../assets/images/insurance/personal-accident.png')} style={styles.image} />
        <Text style={styles.text}>Personal Accident Insurance(Adult) </Text>
       </Card>           
      </View>
      <View style={styles.view}>
       <Card style={styles.card}>
        <Image source={require('../assets/images/insurance/teen-personal.png')} style={styles.image} />
        <Text style={styles.text}>Teen Personal Accident (TPA)</Text>
       </Card>
       <Card style={styles.card}>
        <Image source={require('../assets/images/insurance/combine-fire.png')} style={styles.image} />
        <Text style={styles.text}>Combined Fire & Burglary</Text>
       </Card>           
      </View>
      <View style={styles.view}>
       <Card style={styles.card}>
        <Image source={require('../assets/images/insurance/personal-children.png')} style={styles.image} />
        <Text style={styles.text}>Personal Accident Insurance (Children)</Text>
       </Card>
       <Card style={styles.card}>
        <Image source={require('../assets/images/insurance/auto-comprehension.png')} style={styles.image} />
        <Text style={styles.text}>Auto Comprehensive Insurance</Text>
       </Card>           
      </View>

      <Text style={styles.submit} onPress={() => navigate('Browse')}>Create Group</Text>
      
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
    textAlign: 'center',
   },
   textTwo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#932BAD',
   },
   image: {
    width: 50,
    height: 50,
    margin: 15,
    alignContent: 'center',
    padding: null,
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
   submit: {
    width: 190,
    height: 60,
    fontSize: 15,
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
