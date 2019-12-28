import React from 'react';
import {
  ScrollView,
  RefreshControl,
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';
import Constants from 'expo-constants';
import grabInfo from './grabInfo'



wait = (timeout) => {
 return new Promise(resolve => {
   setTimeout(resolve, timeout);
 });
}

export default function App() {
 const [refreshing, setRefreshing] = React.useState(false);

 const onRefresh = React.useCallback(() => {
   setRefreshing(true);

   grabInfo(1).then(response => response.json())
  .then((json) => {
    user = JSON.stringify(json)
    setRefreshing(false)
    console.log('Functional response: ' , user, json.message)
  });
   // wait(2000).then(() => setRefreshing(false));
 }, [refreshing]);
}