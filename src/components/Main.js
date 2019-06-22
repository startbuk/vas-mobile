import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import stackNav from './src/container/DrawerMenu/StackNav';
import SideMenu from './src/container/DrawerMenu/SideMenu';

const RootStack = DrawerNavigator({
    Item1: {
      screen: stackNav,
    }
  },
    {
      contentComponent: SideMenu
    }
  );
  
  export default class Main extends Component {
    render() {
      return <RootStack />;
    }
  }
  
