import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Server from '../api/Config'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
    }
  }
  handleEmail = (text) => {
    this.setState({ email: text })
  }
  handlePassword = (text) => {
    this.setState({ password: text })
  }
  login = (email, pass) => {
    this.setState({
      isLoading: true
    });
    let param = {
      username: email,
      password: pass
    }
    try {
      return fetch(Server+'/user/login/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-API-Key': 'AAk3i9ThQ4QhEZcqfPvN/MXmeuiSr3BJfSniwmtja2yIuFN2cctjJnTgNeU5nLYg',
          'token': '0329cb5f-c79b-4948-a2c9-fc659914b853'
        },
        body: JSON.stringify(param),
      }).then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false
          });
          if (responseJson.status === 'true') {
            Actions.home();
          } else {
            Alert.alert(
              responseJson.message
            )
          }
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

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Username"
          placeholderTextColor="#ffffff"
          selectionColor="#fff"
          // keyboardType="email-address"
          onChangeText={this.handleEmail}
          onSubmitEditing={() => this.password.focus()}
        />
        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
          onChangeText={this.handlePassword}
          ref={(input) => this.password = input}
        />
        <TouchableOpacity
          onPress={
            () => this.login(this.state.email, this.state.password)
          }
          style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10
  },
  button: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  }

});