import React from 'react';
import {
  ScrollView,
  RefreshControl,
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';
import Constants from 'expo-constants';


export default class React extends React.Component {
 constructor(props) {
   super(props)

  
 }
 fetch('https://swift2pay.com/account/api/request.php?action=profile&userID='+this.props.navigation.state.params.userId+'&apiKey=JFJHFJJ38388739949HFGDJ', {
      method: 'GET',
    })
}