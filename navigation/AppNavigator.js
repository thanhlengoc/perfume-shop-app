import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

//import MainTabNavigator from './MainTabNavigator';
import MyDrawerTabNavigator from './DrawerNavigator';

export default createSwitchNavigator({
  //Main: MainTabNavigator,
  Main: MyDrawerTabNavigator,

});