import React, { Component } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
} from "react-native";

import FirstComponent from "./FirstComponent";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Resul Yağ",
      year: 1999,
    };
  }

  changeState = () => {
    this.setState({
      name: "ali veli",
      year: 1875,
    },()=>alert('Bilgiler Güncellendi'));
  };

  render() {
    const { name, year } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View style={[{ marginTop: 100 }]}>
          <Text style={{ fontSize: 25 }}>{name + " " + year}</Text>
        </View>
        <View style={[{ marginTop: 100 }]}>
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={() => this.changeState()}>
            <Text style={{ fontSize: 25 }}>Değiştir</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome_area: {
    flex: 1,
  },
});
