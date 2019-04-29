import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Logo from './components/Logo';
import Form from './components/Form';


export default class LoginScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Logo/>
        <Text style={styles.welcome}>LoginScreen</Text>
        <Form/>

        <View style={styles.signupText}>
          <Text>Don't have an account yet?</Text>
          <Text style={styles.signupButton}> Signup</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  signupText: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginVertical:16,
    flexDirection: 'row'
  },
  signupButton: {
    color: 'blue', 
    fontSize:16
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
