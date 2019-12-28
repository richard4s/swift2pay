import React from 'react';
import {
  ScrollView,
  RefreshControl,
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';
import Constants from 'expo-constants';


export default function App() {
 const [refreshing, setRefreshing] = React.useState(false);

 const onRefresh = React.useCallback(() => {
   setRefreshing(true);

   wait(2000).then(() => setRefreshing(false));
 }, [refreshing]);
}