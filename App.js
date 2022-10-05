import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  TextInput,
  View,
  FlatList,
} from 'react-native';

import ItemList from './ItemList';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      data: [],
    };
  }

  handleSave = () => {
    const {text, data} = this.state;
    {
      text != '' && data.push({text});
    }
    this.setState({data, text: ''});
  };

  render() {
    const {text, data} = this.state;
    return (
      <View style={{flex: 1}}>
        <View style={styles.title}>
          <Text style={styles.title_text}>To-Do Application</Text>
        </View>
        <View
          style={{backgroundColor: '#ccc', padding: 10, flexDirection: 'row'}}>
          <TextInput
            style={styles.inpt}
            value={text}
            onChangeText={text => {
              this.setState({text});
            }}
          />
          <TouchableOpacity onPress={this.handleSave} style={styles.btn}>
            <Text style={styles.title_text}>Ekle</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{height: 100, maxHeight: '70%'}}>
          {data.map(item => {
            return <ItemList text={item.text} />;
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {backgroundColor: 'blue', padding: 10},
  title_text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
  inpt: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  btn: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    marginLeft: 10,
  },
});
