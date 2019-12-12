import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, Image, Button, TouchableOpacity } from 'react-native';

import Card from '../components/Card';

export default class Airtime extends Component {
  static navigationOptions = {
    title: 'ScanPay',
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

  constructor(props){
    super(props);
    this.handleTourch = this.handleTourch.bind(this);
    this.state = {
     torchOn: false;
    }
  }; 

  onBarCodeRead = (e) => {
   Alert.alert("Barcode value is " + e.data, "Barcode type is " + e.type);
  }


 render() {
  const { navigate } = this.props.navigation;
  return (
   <ImageBackground source={require('../assets/images/bg/background.png')} style={styles.backgroundImage}>
            
      <View style={{margin: 15}} >
        <Card style={{ height: 75, }} >
          <Camera torchMode={this.state.torchOn ? Camera.constants.TorchMode.on : Camera.constants.TorchMode.off}
          onBarCodeRead={this.onBarCodeRead}
          ref={cam => this.camera = cam}
          aspect={Camera.constants.Aspect.fill} >
           <Text>BARCODE SCANNER</Text>
          </Camera>
        </Card>

        <View style={styles.bottomOverlay}>
         <TouchableOpacity onPress={ () => this.handleTouch(this.state.torchOn)}>
          <Image style={styles.cameraIcon}
          source={this.state.torchOn === true  ? 
          require('../assets/images/scan-pay/flash_on.png') :
          require('../assets/images/scan-pay/flash_off.png') }
           />
         </TouchableOpacity>
        </View>

      </View>

      
      
    </ImageBackground>
  )
 }

 handleTourch(value) {
  if (value === true) {
   this.setState({ torchOn: false });
  } else  {
   this.setState({ torchOn: true });
  }
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
    paddingLeft: 45,
    paddingTop: 15,
    marginTop: 35,
    marginLeft: 135,
   },
   bottomOverlay: {
    position: "absolute",
    width: "100%",
    flex: 20,
    flexDirection: "row",
    justifyContent: "space-between"
   },
   cameraIcon: {
    margin: 5,
    height: 40,
    width: 40
    },
});
