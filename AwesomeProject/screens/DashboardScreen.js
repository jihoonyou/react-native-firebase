import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import firebase from 'firebase';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class Screen2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      username: ""
    });
  }

  componentDidMount() {
    //추후에 async storage로 
    let user = firebase.auth().currentUser.uid;
    
    firebase.database().ref('users').on('value', (data) => {
      this.setState({username: data.toJSON()[user].username});
    })
  }
  
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{this.state.username ? this.state.username : 'updating' }</Text>
        <Text>Screen2!</Text>
      </View>
    );
  }
}

class Screen3 extends React.Component {

  updateProfile = () => {
    //추후에 async storage로
    let user = firebase.auth().currentUser.uid;
    firebase.database().ref('users/' + user).update({
      username: "testing",
    });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile</Text>
        <Button title='checking' onPress={() => {
          this.updateProfile();
        }}></Button>
      </View>
    );
  }
}
class SettingsScreen extends React.Component {

  userSignOut = () => {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button title='logout' onPress={ (e)=> { this.userSignOut()} }></Button>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Screen2AY: Screen2,
  Screen3AY: Screen3,
  Settings: SettingsScreen,
  
});

export default createAppContainer(TabNavigator);
