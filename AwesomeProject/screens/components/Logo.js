import React, {Component} from 'react';
import { Text, View, Image} from 'react-native';

export default class Logo extends Component {
    render() {
      return (
        <View style={{alignItems: 'center', justifyContent: 'flex-end'}}>
          <Image source={require('../../airbnb.png')}
            style={{width: 50, height: 50}} 
          />
          <Text style={{marginVertical: 15}}>something goes here</Text>
        </View>
      );
    }
  }