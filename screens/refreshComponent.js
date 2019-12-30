import React from 'react';
import {
  ScrollView,
  RefreshControl,
  StyleSheet,
  Text,
  SafeAreaView,
  AsyncStorage
} from 'react-native';
import Constants from 'expo-constants';
import grabInfo from './grabInfo'



wait = (timeout) => {
 return new Promise(resolve => {
   setTimeout(resolve, timeout);
 });
}

showInfo = (userId) => {
  return grabInfo(userId).then(response => response.json())
  .then((json) => {
    user = JSON.stringify(json)
    console.log('Functional response: ' , user, json.message)
  });
}

export default function App() {
 const [refreshing, setRefreshing] = React.useState(false);

 const onRefresh = React.useCallback( async () => {
  //  setRefreshing(true)

   const userID = await AsyncStorage.getItem('userId');

   grabInfo(userID)
  //  setRefreshing(false)
 }, [refreshing]);
}