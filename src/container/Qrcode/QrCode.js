import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  Alert,
  View
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { FlatHeader, Group } from 'react-native-flat-header';
import { Actions } from 'react-native-router-flux';
import Icon from "react-native-vector-icons/FontAwesome";
import Server from '../../api/Config';
import Styles from './BarcodeStyle';

export default class ScanScreen extends Component {
  goBack() {
    Actions.pop();
  }
  barcodeAuth(e) {
    return fetch(Server + '/voucher/VTRX-884766-938571', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-API-Key': 'AAk3i9ThQ4QhEZcqfPvN/MXmeuiSr3BJfSniwmtja2yIuFN2cctjJnTgNeU5nLYg',
        'token': '0329cb5f-c79b-4948-a2c9-fc659914b853'
      }
    }).then((response) => response.json()).then((responseJson) => {
      Alert.alert("Success Voucher Number : "+e.data)
    }).catch((error) => {
      Alert.alert("Invalid voucher !")
    });
  }
  onSuccess(e) {
    Alert.alert(e.data)
    // Linking
    //   .openURL(e.data)
    //   .catch(err => console.error('An error occured', err));
  }
  render() {
    return (
      <View style={Styles.container}>
        <FlatHeader
          leftIcon={<Icon name="close" size={30} color="#FFC107" />}
          leftIconHandler={() => {
            this.goBack();
          }}
          leftText="Barcode Scanner"
          style={{ backgroundColor: '#455a64' }}
        />
        <QRCodeScanner  onRead={this.barcodeAuth.bind(this)}
        // topContent={
        //   <Text style={styles.centerText}>
        //     Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
        //   </Text>
        // }
        // bottomContent={
        //   <TouchableOpacity style={styles.buttonTouchable}>
        //     <Text style={styles.buttonText}>OK. Got it!</Text>
        //   </TouchableOpacity>
        // }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
})
