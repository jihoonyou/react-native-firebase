import React, {Component} from 'react';
import { StyleSheet,View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import firebase from 'firebase';
export default class Form extends Component {
  
  constructor(props) {
    super(props);
    this.state = ({
      email: '',
      password: ''
    });
  }

  userLogin = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }
  
  render() {
    return (
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
        <Button title="Login" 
        onPress={() => this.userLogin(this.state.email, this.state.password)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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