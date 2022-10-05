import React from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';

const ItemList = ({text}) => {
  return (
    <View style={styles.card}>
      <Text style={{fontSize: 20, color: 'blue', fontWeight: 'bold'}}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: '#ddd',
    margin: 5,
    borderRadius: 8,
    alignItems: 'center',
  },
});

export default ItemList;
