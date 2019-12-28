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

   getData = async () => {
     const apiURL = "https://jsonplaceholder.typicode.com/photos?_limit=10"
     fetch(apiURL).then({res} => res.json)
   }

   renderRow = ({item}) => {
     return (
       <View style={styles.itemRow}>
         <Text style={styles.itemText}>{item.title}</Text>
       </View>
     )
   }

  render() {
    return (
      <FlatList 
        style={styles.screen}
        data={this.state.data}
        renderItem={this.renderRow}
        keyExtractor={(item, index) => index.toString() }
      />
    )
  }
};

const styles = StyleSheet.create({
  screen: {
    marginTop: 20,
  },
  itemRow: {
    borderBottomColor: '#ccc',
    marginBottom: 10,
    borderBottomWidth: 1
  },
  itemText: {
    fontSize: 16,
    padding: 5,
  }
});