import React, {Component} from 'react';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation-stack';

import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Register from './screens/Register';
import Browse from './screens/Browse';
import Dashboard from './screens/Dashboard';

// Import all the screens we are going to switch 

const App = createStackNavigator({
  // Constant which holds all the screens like index of any book 
    Welcome: { screen: Welcome }, 
    // First entry by default be our first screen if we do not define initialRouteName
    Login: { screen: Login }, 
    Register: { screen: Register }, 
    Browse: { screen: Browse }, 
    Dashboard: { screen: Dashboard }, 
  },
  {
    initialRouteName: 'Welcome',
  }
);

const AppContainer = createBottomTabNavigator({
  Welcome: { screen: Welcome },
  Login: { screen: Login },
  Register: { screen: Register },
  Browse: { screen: Browse },
  Dashboard: { screen: Dashboard }
})

export default createAppContainer(App);