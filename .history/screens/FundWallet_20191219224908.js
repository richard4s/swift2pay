import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  AppRegistry
} from 'react-native';
import LabelSelect from './LabelSelect';

export default class checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [{
        name: 'Aspirin',
        isSelected: false,
        value: 1
      }, {
        name: 'MarginTop',
        isSelected: true,
        value: 2
      }, {
        name: 'Dooper',
        isSelected: true,
        value: 3
      }, {
        name: 'Young Skywalker',
        isSelected: false,
        value: 4
      }, {
        name: 'Jedi Master',
        isSelected: true,
        value: 5
      }, {
        name: 'Anakin',
        isSelected: false,
        value: 6
      }, {
        name: 'ナウシカ',
        isSelected: false,
        value: 7
      }, {
        name: '你好',
        isSelected: false,
        value: 8
      }]
    };
    this.selectConfirm = this.selectConfirm.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  selectConfirm(list) {
    let {arr} = this.state;
    for (let item of list) {
      let index = arr.findIndex(ele => ele === item);
      if (~index) arr[index].isSelected = true;
      else continue;
    }
    this.setState({arr: arr});
  }
  deleteItem(item) {
    let {arr} = this.state;
    let index = arr.findIndex(a => a === item);
    arr[index].isSelected = false;
    this.setState({arr: arr});
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Normal LabelSelect</Text>
        <LabelSelect
          title="Checkbox"
          ref="select"
          style={styles.labelSelect}
          onConfirm={this.selectConfirm}
        >
          {this.state.arr.filter(item => item.isSelected).map((item, index) =>
            <LabelSelect.Label
              key={'label-' + index}
              data={item}
              onCancel={() => {this.deleteItem(item);}}
            >{item.name}</LabelSelect.Label>
          )}
          {this.state.arr.filter(item => !item.isSelected).map((item, index) =>
            <LabelSelect.ModalItem
              key={'modal-item-' + index}
              data={item}
            >{item.name}</LabelSelect.ModalItem>
          )}
        </LabelSelect>
        <Text style={styles.text}>ReadOnly LabelSelect</Text>
        <LabelSelect
          style={styles.labelSelect}
          title="Checkbox"
          readOnly={true}
          onConfirm={this.selectConfirm}
        >
          {this.state.arr.filter(item => item.isSelected).map((item, index) =>
            <LabelSelect.Label
              key={'label-' + index}
              data={item}
              onCancel={() => {this.deleteItem(item);}}
            >{item.name}</LabelSelect.Label>
          )}
        </LabelSelect>
        <Text style={styles.text}>Disabled LabelSelect</Text>
        <LabelSelect
          style={styles.labelSelect}
          title="Checkbox"
          enable={false}
          onConfirm={this.selectConfirm}
        >
          {this.state.arr.filter(item => item.isSelected).map((item, index) =>
            <LabelSelect.Label
              key={'label-' + index}
              data={item}
              onCancel={() => {this.deleteItem(item);}}
            >{item.name}</LabelSelect.Label>
          )}
        </LabelSelect>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#e3eeee'
  },
  labelSelect: {
    marginTop: 5,
    marginBottom: 20,
    padding: 5,
    borderWidth: 1,
    borderRadius: 6,
    borderStyle: 'dashed',
    borderColor: '#6dc2a2'
  },
  text: {
    fontSize: 16,
    color: 'rgb(13, 131, 144)'
  }
});

// import React, { Component } from 'react';
// import { StyleSheet, ImageBackground, Text, View, TextInput, Image, Button, ScrollView, AsyncStorage, TouchableOpacity } from 'react-native';
// import Rave from 'react-native-rave';

// console.disableYellowBox = true;

// import Card from '../components/Card';

// export default class FundWallet extends Component {
//   static navigationOptions = {
//     title: 'Fund Wallet',
//     headerStyle: {
//       backgroundColor: 'rgb(147, 43, 173)',
//     },
//     headerTintColor: '#fff',
//     //Sets Header text color
//     headerTitleStyle: {
//       fontWeight: 'bold',
//       //Sets Header text style
//     },
//   };

//   constructor(props) {
//     super(props);

//   }

//   onSuccess(data) {
//     console.log("success", data);
//     alert("success", data);
//     // You get the complete response returned from FlutterWave,
//     // just incase you need more than the reference number

//   }

//   onCancel() {
//     console.log("error", 'Transaction was Cancelled!');
//     alert("error", 'Transaction was Cancelled!');
//   }

//   onError() {
//     //an error occoured
//     alert("an error occurred");

//   }

//   render() {
//       const { navigate } = this.props.navigation;
//       return (
        
//             <ImageBackground source={require('../assets/images/bg/background.png')} style={styles.backgroundImage}>
        
//               {/* <View style={{margin: 15, marginTop: 55}} >
//               <Text style={{margin: 3}}>Enter amount (NGN50 - NGN50,000)</Text>
//                 <Card>
//                   <TextInput style={{ width: '90%', height: 25, borderColor: 'gray', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, alignItems: "center", padding: 5, margin: 5 }} placeholder="Enter amount" keyboardType="number-pad" />
//                 </Card>
//                 <Text style={styles.submit} onPress={()=>navigate('Browse')}>Payment</Text>
//               </View> */}

//               <View>
//                 <Rave
//                   buttonText=  "Pay Now"
//                   raveKey="FLWPUBK-350fb586bc32b05ca501d5889f2ee555-X"
//                   amount={20000}
//                   billingEmail="chidiebere_chukwuma@yahoo.com"
//                   billingMobile="08136266387"
//                   billingName="Chidiebere Chukwuma"
//                   ActivityIndicatorColor="green"
//                   onCancel={()=>this.onCancel()}
//                   onSuccess={(tranRef)=>{alert(tranRef)}}
//                   btnStyles={{backgroundColor:'purple'}}
//                   textStyles={{ color:'white'}}
//                   onError={()=>{alert('error')}}
//                   txref="1234"
//                 />
//               </View>
    
//           </ImageBackground>
       
//       )
//      }
//     };
    
//     const styles = StyleSheet.create({
//       backgroundImage: {
//         flex: 1,
//         width: null,
//         height: null,
//         resizeMode: 'cover'
//        },
//        screen: {
//         flex: 1,
//         padding: 10,
//         alignItems: 'center'
//        },
//        browse: {
//         fontSize: 25,
//         fontWeight: "500",
//         position: "relative",
//         paddingRight: 195,
//         color: '#932BAD',
//         marginTop: 5,
//         marginBottom: 5
//        },
//        view: {
//         flex: 1,
//         flexDirection: "row",
//         justifyContent: "center",
//         width: '100%'
//        },
//        card: {
//         flex: 1,
//         width: 150,
//         height: 100,
//         alignItems: 'center',
//         margin: 10,
//        },
//        cardTwo: {
//         flex: 1,
//         width: 70,
//         height: 70,
//         alignItems: 'center',
//         margin: 3,
//         marginTop: 9,
//         padding: null,
//        },
//        text: {
//         fontSize: 11,
//         fontWeight: 'bold',
//         margin: 5,
//         alignContent: 'center',
//        },
//        textTwo: {
//         fontSize: 17,
//         fontWeight: 'bold',
//         color: '#932BAD',
//        },
//        image: {
//         width: '50%',
//         height: '50%',
//         margin: 5,
//         alignContent: 'center'
//        },
//        imageTwo: {
//         width: 15,
//         height: 15,
//         alignContent: "center",
//         padding: null,
//         margin: 2,
//         marginTop: 12,
//        },
//        submit: {
//         width: 190,
//         height: 60,
//         fontSize: 25,
//         fontWeight: "500",
//         color: "purple",
//         borderWidth: 2,
//         borderTopWidth: 0,
//         borderRightWidth: 0,
//         borderRadius: 10,
//         borderColor: "purple",
//         alignContent: 'center',
//         padding: 5,
//         paddingLeft: 45,
//         paddingTop: 15,
//         marginTop: 35,
//         marginLeft: 135,
//        },
//     });
    