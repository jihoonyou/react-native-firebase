import React, {Component} from 'react';
import { StyleSheet,View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class Form extends Component {
  render() {
    return (
      <View style={styles.form}>
        <TextInput style={styles.textinput} placeholder="Email"
        underlineColorAndroid='rgba(0, 0, 0, 0)'
        placeholderTextColor= "#fff"
        ></TextInput>
        <TextInput style={styles.textinput} placeholder="Password"
        secureTextEntry
        underlineColorAndroid='rgba(0, 0, 0, 0)'
        placeholderTextColor= "#fff"
        ></TextInput>
        <Button title="Login" 
        onPress={() => alert('button pressed')}/>
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