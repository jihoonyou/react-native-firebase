import React, {Component} from 'react';
import { StyleSheet,View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import firebase from 'firebase';

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      email: '',
      password: ''
    });
  }
  
  signupUser = (email, password) => {
    //once input fields defined, add input data here.
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user) {
      let currUser = firebase.auth().currentUser;
      firebase.database().ref('users/' + currUser.uid).set({
        username: "name",
        email: currUser.email,
        profile_picture : "imageUrl"
      });
      //send verification email here
      var user = firebase.auth().currentUser;
      user.sendEmailVerification().then(function() {
      // Email sent.
      }).catch(function(error) {
      // An error happened.
      });
  })
    .catch(function(error) {
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
      <Button title="Signup" 
      onPress={() => this.signupUser(this.state.email, this.state.password)}/>
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