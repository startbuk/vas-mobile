import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { FlatHeader } from 'react-native-flat-header';
import { Actions } from 'react-native-router-flux';
import Icon from "react-native-vector-icons/FontAwesome";
import styles from './HomeStyle';
import Barcode from 'react-native-barcode-builder';
export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: this.props.details.staus = "O" ? "OPEN" : "USE"
        }
    }
    goBack() {
        Actions.pop();
    }
    render() {
        return (
            <View>
                <FlatHeader
                    leftIcon={<Icon name="arrow-left" size={30} color="#FFC107" />}
                    leftIconHandler={() => {
                        this.goBack();
                    }}
                    leftText="Barcode Scanner"
                    style={{ backgroundColor: '#455a64' }}
                />
                <View style={styles.moadalContainer}>
                    <View style={styles.barcodeContianer}>
                        <Barcode value={this.props.details.voucherCode} format="CODE128" />
                    </View>
                    <View style={styles.barcodeContianer}>
                        <Text style={styles.textDetail}>{this.props.details.voucherCode}</Text>
                        <Text style={styles.textDetail}>Rp. {this.props.details.amount}</Text>
                        <Text style={styles.textDetail}>Rp. {this.props.details.description}</Text>
                        <Text style={styles.textDetail}>Ex {this.props.details.expiredDate} {this.state.status}</Text>
                    </View>
                </View>
            </View>
        );
    }
}