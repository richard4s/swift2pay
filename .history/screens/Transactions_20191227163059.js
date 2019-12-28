import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import { ListItem } from "react-native-elements"

export default class Transactions extends Component {
  static navigationOptions = {
    title: 'Transactions',
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
     this.state={ 
       data: [{title: '1'}, {title: '2'}, {title: '3'}]
      };
   }

  render() {
    return (
      <FlatList 
        style={}
      />
    )
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#cecece'
  },
  text: {
    fontSize: 24
  }
});