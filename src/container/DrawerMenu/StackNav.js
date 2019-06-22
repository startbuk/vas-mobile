import React, {
    Component
  }
    from 'react';
  import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ActivityIndicator,
    FlatList,
    Button
  }
    from 'react-native';
  
  import {
    StackNavigator
  }
from 'react-navigation';
import IOSIcon from "react-native-vector-icons/Ionicons";
import AndIcon from "react-native-vector-icons/FontAwesome";
import Home from '../Home/Home';
import DetailHome from '../Home/DetailHome';
import BarcodePayment from '../Barcode/BarcodePayment';
import QRCodeScanner from 'react-native-qrcode-scanner';
  const Icon = Platform.OS === 'ios' ? IOSIcon : AndIcon;
  const stackNav = StackNavigator({
    Main: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        title: "Main",
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")} >
            <Icon name='bars' style={{ marginLeft: 5, color: '#fff' }} size={25} />
          </TouchableOpacity>
        ),
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#2962FF'
        }
      })
    },
    Detail: {
      screen: DetailHome,
      navigationOptions: ({ navigation }) => ({
        title: "Detail",
      })
    },
    BarcodePayment: {
        screen: BarcodePayment,
        navigationOptions: ({ navigation }) => ({
          title: "BARCODE SCANNER",
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#2962FF'
          }
        })
      },
    QRCodeScanner: {
      screen: QRCodeScanner,
      navigationOptions: ({ navigation }) => ({
        title: "QRCode",
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#2962FF'
        }
      })
    }
  });
  
  export default stackNav;
  