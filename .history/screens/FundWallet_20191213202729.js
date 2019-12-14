import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class FundWallet extends Component {
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
    return (
        <WebView 
          source={{uri: 'https://github.com/facebook/react-native'}}
          style={{marginTop: 20}}
        />
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
   imageContainer: {
     width: '80%',
     height: '40%',
     position: "absolute",
     marginTop: 105,
    alignItems: 'center'
  },
  space: {
    marginBottom: 15
  },
  login: {
    width: 190,
    height: 60,
    fontSize: 25,
    fontWeight: "500",
    position: "absolute",
    color: "purple",
    borderWidth: 2,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderRadius: 10,
    borderColor: "purple",
    alignItems: 'center',
    paddingTop: 15,
    padding: 5,
    paddingLeft: 55,
    marginTop: 363
   },
   signup: {
    width: 190,
    height: 60,
    fontSize: 25,
    fontWeight: "500",
    position: "relative",
    color: "purple",
    borderWidth: 2,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRadius: 10,
    borderColor: "purple",
    alignItems: 'center',
    padding: 5,
    paddingTop: 15,
    paddingLeft: 55,
    marginTop: 375
   },
  iconContainer: {
    width: '100%',
    height: '100%',
    position: "absolute",
    marginTop: 105,
   alignItems: 'center'
 },
 paragraph: {
   width: '80%',
   textAlign: "center",
   margin: 25,
   fontWeight: "normal",
   fontSize: 12,
 }
});
