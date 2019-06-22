import React, { Component } from 'react';
import {
    Platform,
    Alert,
    ActivityIndicator,
    View,
    ListView,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Modal,
    TouchableHighlight
} from 'react-native';
import FAB from 'react-native-fab';
import Icon from "react-native-vector-icons/FontAwesome";
import { FlatHeader, Group } from 'react-native-flat-header';
import styles from './HomeStyle';
import { Actions } from 'react-native-router-flux';
import Server from '../../api/Config'
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            modalVisible: false,
            name: '',
            amount: 0
        }
    }
    load(){
        this.setState({
            isLoading: true
        });
        try {
            return fetch(Server+'/voucher/', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'X-API-Key': 'AAk3i9ThQ4QhEZcqfPvN/MXmeuiSr3BJfSniwmtja2yIuFN2cctjJnTgNeU5nLYg',
                    'token': '0329cb5f-c79b-4948-a2c9-fc659914b853'
                }
            }).then((response) => response.json())
                .then((responseJson) => {
                    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                    this.setState({
                        isLoading: false,
                        dataSource: ds.cloneWithRows(responseJson.content),
                    }, function () {

                    });
                })
                .catch((error) => {
                    this.setState({
                        isLoading: false
                    });
                    Alert.alert(
                        error
                    )
                });
        } catch (error) {
            this.setState({
                isLoading: false
            });
            Alert.alert(
                error
            )
        }
    }
    componentDidMount() {
        this.load();
    }
    ListViewItemSeparator = () => {
        return (
            <View
                style={{
                    height: .5,
                    width: "100%",
                    backgroundColor: '#f1f1f1',
                }}
            />
        );
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    GetItem = (_details) => {
        Actions.detail({ details:_details});
    }
    onBarcode() {
        Actions.barcode();
    }
    onLogout() {
        Actions.reset("login");
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
        }
        return (
            <View style={styles.MainContainer}>
                <FlatHeader
                    rightIcon={<Icon name="refresh" size={30} color="#FFC107" />}
                    rightIconHandler={() => {
                        this.load();
                    }}
                    leftText="Voucher Auth System"
                    leftIcon={<Icon name="user" size={30} color="#FFC107" />}
                    leftIconHandler={() => {
                        Alert.alert(
                            'Alert',
                            'Are You sure to logout?',
                            [
                              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                              {text: 'OK', onPress: () => this.onLogout() },
                            ],
                            { cancelable: false }
                          )
                    }}
                    style={{ backgroundColor: '#455a64' }}
                />
                <ListView
                    vertical={true}
                    dataSource={this.state.dataSource}
                    renderSeparator={this.ListViewItemSeparator}
                    renderRow={(rowData) =>
                        <View style={{ flex: 1, flexDirection: 'row', margin: 5, padding: 5 }}>
                            <View style={{ width: '17%', height: 'auto' }}>
                                <Image source={require('../../assets/images/barcode.png')} style={styles.avatar} />
                            </View>
                            <TouchableOpacity style={{ width: '83%', height: 'auto' }} onPress={() => this.GetItem(rowData)}>
                                <View>
                                    <Text style={styles.textViewContainer} >{rowData.voucherCode}</Text>
                                    <Text style={styles.textView} >Rp. {rowData.amount}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    }
                />
                <FAB buttonColor="#455a64" iconTextColor="#FFC107" onClickAction={this.onBarcode} iconTextComponent={<Icon name='qrcode' />} />
            </View>
        )
    }
}
