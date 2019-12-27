import React from 'react';
import { StyleSheet, ImageBackground, Text, ActivityIndicator, View, Image, FlatList } from 'react-native';

import Card from '../components/Card';

export default class Transactions extends React.Component {
 constructor(){
  super();
  this.state = {
   data: [],
   page: 1,
   isLoading: false
  }
 }

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

  componentDidMount(){
   this.setState({isLoading:true}, this.getData)
  }

  getData = async () => {
   const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10&_page='+this.state.page);
   const json = await response.json();
    this.setState({
     data: [...this.state.data],
     isLoading: false
    })
  }

  renderRow = ({item}) => {
   return(
    <View style={styles.item}>
     <Image source={{uri:item.url}} style={styles.itemImage} />
     <Text style={styles.itemText}>{item.title}</Text>
     <Text style={styles.itemText}>{item.id}</Text>
    </View>
    
   )
  }

  handleLoadMore = () => {
   this.setState(
    state => ({page: state.page + 1, isLoading: true}),
    () => this.getData()
   );
  }

  renderFooter = () => {
   return(
    this.state.isLoading ?
    <View style={styles.loader}>
     <ActivityIndicator size="large" />
    </View> : null
   )
  }

 render() {
  const { navigate } = this.props.navigation;
  return (
    
         <FlatList 
          contentContainerStyle={styles.screen} 
          data={this.state.data}
          renderItem={this.renderRow}
          keyExtractor={(item,index)=>index.toString()}
          onEndReach={this.handleLoadMore}
          onEndReachedThreshold={0}
          ListFooterComponent={this.renderFooter}
         />
   
  )
 }
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: null,
    height: null,
    resizeMode: 'cover'
   },
   screen: {
    marginTop: 20,
    backgroundColor: '#F5FCFF'
   },
   item: {
    borderBottomColor: '#ccc',
    borderBottomWidth:1,
    marginBottom: 10
   },
   itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
   },
   itemText: {
    fontSize: 16,
    padding: 5
   },
   loader:{
    marginTop:10,
    alignItems:'center'
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
    justifyContent: "center",
    width: '100%'
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
});
