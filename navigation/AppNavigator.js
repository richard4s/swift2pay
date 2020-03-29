import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AuthLoadingScreen from './AuthLoadingScreen';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Browse from '../screens/Browse';
import Airtime from '../screens/Airtime';
import Data from '../screens/Data';
import BuyData from '../screens/BuyData';
import BillPayment from '../screens/BillPayment';
import WalletTransfer from '../screens/WalletTransfer';
import BankTransfer from '../screens/BankTransfer';
import Insurance from '../screens/Insurance';
import FundWallet from '../screens/FundWallet';
import Transactions from '../screens/Transactions';
import Electricity from '../screens/Electricity';
import Television from '../screens/Television';

import RavePay from '../screens/ravePay';
import tvSubscription from '../screens/tvSubscription';
import ForgotPassword from '../screens/ForgotPassword';
import ConfirmTransfer from '../screens/ConfirmTransfer';
import ElectricityConfirm from '../screens/ElectricityConfirm';
 
console.disableYellowBox = true;

const AppStack = createStackNavigator({ 
        // Constant which holds all the screens like index of any book 
        Welcome: { screen: Welcome }, 
        // First entry by default be our first screen if we do not define initialRouteName
         
        Browse: { screen: Browse }, 
        Airtime: { screen: Airtime }, 
        Data: { screen: Data }, 
        BillPayment: { screen: BillPayment }, 
        WalletTransfer: { screen: WalletTransfer }, 
        BankTransfer: { screen: BankTransfer }, 
        Insurance: { screen: Insurance }, 
        FundWallet: { screen: FundWallet }, 
        Transactions: { screen: Transactions }, 
        Electricity: { screen: Electricity }, 
        Television: { screen: Television }, 
        RavePay: {screen: RavePay},
        tvSubscription: {screen: tvSubscription},
        BuyData: {screen: BuyData},
        
        ConfirmTransfer: {screen: ConfirmTransfer},
        ElectricityConfirm: {screen: ElectricityConfirm}
    },
    // {
    //     initialRouteName: 'Welcome',
    // }
);

const AuthStack = createStackNavigator(
  { 
    Login: { screen: Login }, 
    Register: { screen: Register },
    ForgotPassword: {screen: ForgotPassword},
  }, 
//   {
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: '#fab20b',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontFamily: 'AvenirMedium',
//         fontWeight: '200',
//       },
//     },
//   }
);

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
    // BestPrices: BestPricesScreen,
    // MainDrawer: MainDrawerNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
// export default createAppContainer(createSwitchNavigator({
//   // You could add another route here for authentication.
//   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//   Main: MainTabNavigator,
// }));