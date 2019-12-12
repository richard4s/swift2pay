import React, {Component} from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import Login from './screens/Login';
import Welcome from './screens/Welcome';

//import all the screens we are going to switch 
const App = createStackNavigator({
  //Constant which holds all the screens like index of any book 
    FirstPage: { screen: FirstPage }, 
    //First entry by default be our first screen if we do not define initialRouteName
    SecondPage: { screen: SecondPage }, 
  },
  {
    initialRouteName: 'FirstPage',
  }
);
export default createAppContainer(App);