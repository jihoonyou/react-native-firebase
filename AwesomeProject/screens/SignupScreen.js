import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Logo from './components/Logo';
import SignupForm from './components/SignupForm';
import firebase from 'firebase';


export default class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      email: '',
      password: ''
    })
  }

  signupUser = (email, password) => {
  
    
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
  }

  // loginUser = (email, password) => {
    
  // }

  render() {
    return (
      <View style={styles.container}>
        <Logo/>
        <Text style={styles.welcome}>SignupScreen</Text>
        {/* <SignupForm signupUser = {}/> */}
        <View style={styles.form}>
        <TextInput style={styles.textinput} placeholder="Email"
        underlineColorAndroid='rgba(0, 0, 0, 0)'
        placeholderTextColor= "#fff"
        onChangeText={(email) => this.setState({ email })}
        ></TextInput>
        <TextInput style={styles.textinput} placeholder="Password"
        secureTextEntry
        underlineColorAndroid='rgba(0, 0, 0, 0)'
        placeholderTextColor= "#fff"
        onChangeText={(password) => this.setState({ password })}
        ></TextInput>
        <Button title="Signup" 
        onPress={() => this.signupUser(this.state.email, this.state.password)}/>
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
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginVertical: 10,
  },
textinput: {
  width: 300,
  backgroundColor: '#000',
  borderRadius: 25,
  paddingHorizontal: 16,
  fontSize: 16,
  color: '#fff',
  marginVertical: 10
},
});
