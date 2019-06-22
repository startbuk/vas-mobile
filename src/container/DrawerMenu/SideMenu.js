import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, Platform, Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
export default class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View>
              <View style={{ width: '17%', height: 'auto' }}>
                <Image source={{ uri: ''}} style={styles.avatar} />
              </View>
            </View>
            <Text style={styles.sectionHeadingStyle}>
              Home
            </Text>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('BarcodePayment')}>
                <Icon name='qrcode' style={styles.iconText} size={20} /> PAYMENT
              </Text>
            </View>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('QRCodeScanner')}>
                <Icon name='qrcode' style={styles.iconText} size={20} /> QRCode
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.sectionHeadingStyle}>
              System
            </Text>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page3')}>
                <Icon name='sign-out' style={styles.iconText} size={20} /> LOGOUT
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>This is my fixed footer</Text>
        </View>
      </View>
    );
  }
}
SideMenu.propTypes = {
  navigation: PropTypes.object
};

const styles= {
    container: {
      paddingTop: 20,
      flex: 1
    },
    navItemStyle: {
      padding: 10
    },
    navSectionStyle: {
      // borderBottomColor: 'black',
      // borderBottomWidth: 1,
    },
    sectionHeadingStyle: {
      paddingVertical: 10,
      paddingHorizontal: 5,
      backgroundColor: '#f1f1f1'
    },
    footerContainer: {
      padding: 20,
      backgroundColor: 'lightgrey'
    },
    iconText:{
      marginLeft: 5,
      marginRight: 30
    },
    avatar :{
      marginTop: 15,
      width: 50,
      height: 50
    }
  };