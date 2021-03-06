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
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => this.renderNativeItem(item) }
        />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24
  }
});