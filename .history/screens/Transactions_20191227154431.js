import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

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

   constructor(){
     super();
     this.state={ };
     this.getTransactions();
   };

    getTransactions = () => {
      const url = "https://swift2pay.com/account/api/request.php?action=getTransactions&userID=1&apiKey=JFJHFJJ38388739949HFGDJ"

      fetch(url) 
      .then(response => response.json())
      .then(response => {
        this.setState({
          data: response.results
        });
      })
      .catch((error) => {
        console.log("get data error:" + error);   
        console.error(error);
        alert(error)
      });

      
      fetch('https://swift2pay.com/account/api/request.php?action=getTransactions&userID='+grabUserId+'&apiKey=JFJHFJJ38388739949HFGDJ', {
        method: 'GET',
      })
      
    };
    
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