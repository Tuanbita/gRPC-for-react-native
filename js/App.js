// @flow
import React, { Component } from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import { Greeter } from './helloworld'

export default class App extends Component {
  state: { name: string } = { name: '' };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textInputWrap}>
          <TextInput
            style={styles.textInput}
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
          />
        </View>
        <Button title="Call to connect to Server" onPress={() => this.onButtonPress()}/>
      </View>
    );
  }

  async onButtonPress() {
    try {
      const response = await Greeter.sayHello({ name: this.state.name })
      Alert.alert('response', response.message);
    } catch (e) {
      Alert.alert('error from ', e.message);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  textInputWrap: {
    flexDirection: 'row'
  },
  textInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
  }
});
