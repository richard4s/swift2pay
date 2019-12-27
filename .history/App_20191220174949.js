import React, {Component} from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Register from './screens/Register';
import Browse from './screens/Browse';
import Airtime from './screens/Airtime';
import Data from './screens/Data';
import BillPayment from './screens/BillPayment';
import WalletTransfer from './screens/WalletTransfer';
import BankTransfer from './screens/BankTransfer';
import Insurance from './screens/Insurance';
import FundWallet from './screens/FundWallet';
import Transactions from './screens/Transactions';

console.disableYellowBox = true;

// Import all the screens we are going to switch 

const App = createStackNavigator({
  // Constant which holds all the screens like index of any book 
    Welcome: { screen: Welcome }, 
    // First entry by default be our first screen if we do not define initialRouteName
    Login: { screen: Login }, 
    Register: { screen: Register }, 
    Browse: { screen: Browse }, 
    Airtime: { screen: Airtime }, 
    Data: { screen: Data }, 
    BillPayment: { screen: BillPayment }, 
    WalletTransfer: { screen: WalletTransfer }, 
    BankTransfer: { screen: BankTransfer }, 
    Insurance: { screen: Insurance }, 
    FundWallet: { screen: FundWallet }, 
    Transactions: { screen: Transactions }, 
  },
  {
    initialRouteName: 'Welcome',
  }
);

export default createAppContainer(App);