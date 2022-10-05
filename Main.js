import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Welcome from './Welcome';

export default class index extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Welcome name={'Ali Veli Yağ'} age={22} />
      </SafeAreaView>
    );
  }
}
