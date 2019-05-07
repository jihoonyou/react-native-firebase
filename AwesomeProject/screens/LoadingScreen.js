import React, {Component} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import firebase from 'firebase';

export default class LoadingScreen extends Component {

  componentDidMount() {
    this.checkedIfLoggedIn();
  }
  
  checkedIfLoggedIn = () => {
      firebase.auth().onAuthStateChanged((user) => {
        
        if(user) {
          this.props.navigation.navigate('DashboardScreen');
        }
        else {
          this.props.navigation.navigate('LoginScreen');
        }
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator/>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
