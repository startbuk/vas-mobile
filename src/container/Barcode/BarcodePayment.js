import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import BarcodeScanner, { 
    Exception,
    FocusMode,
    TorchMode,
    CameraFillMode,
    BarcodeType,
    pauseScanner,
    resumeScanner
} from 'react-native-barcode-scanner-google';
import { FlatHeader, Group } from 'react-native-flat-header';
import { Actions } from 'react-native-router-flux';
import Icon from "react-native-vector-icons/FontAwesome";
import Styles from './BarcodeStyle';
import Server from '../../api/Config';
export default class BarcodePayment extends Component {
    goBack() {
        Actions.pop();
    }
    barcodeAuth(){
        return fetch(Server+'/voucher/VTRX-884766-938571',{
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-API-Key': 'AAk3i9ThQ4QhEZcqfPvN/MXmeuiSr3BJfSniwmtja2yIuFN2cctjJnTgNeU5nLYg',
                'token': '0329cb5f-c79b-4948-a2c9-fc659914b853'
            }
          }).then((response) => response.json()).then((responseJson) => {
            Alert.alert(
                responseJson.status
            )
          }).catch((error) => {
            Alert.alert(
                error
            )
        });
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
                <BarcodeScanner style={{ flex: 3 }}
                    onBarcodeRead={({ data, type }) => {            
                       
                    }}
                    // focusMode={FocusMode.AUTO}
                    // torchMode={TorchMode.ON}
                />
            </View>
        );
    }
}