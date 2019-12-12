import React, {Component} from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Register from './screens/Register';
import Browse from './screens/Browse';
import Airtime from './screens/Airtime';

// Import all the screens we are going to switch 

const App = createStackNavigator({
  // Constant which holds all the screens like index of any book 
    Welcome: { screen: Welcome }, 
    // First entry by default be our first screen if we do not define initialRouteName
    Login: { screen: Login }, 
    Register: { screen: Register }, 
    Browse: { screen: Browse }, 
    Airtime: { screen: Airtime }, 
  },
  {
    initialRouteName: 'Welcome',
  }
);

export default createAppContainer(App);