import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
export default class index extends React.Component {
  render() {
    const {name, age} = this.props;
    return (
      <View>
        <Text>Hoşgeldiniz: {name}</Text>
        <Text>Yaşınız: {age}</Text>
      </View>
    );
  }
}

index.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

index.defaultProps = {
  name: 'Resul Yağ',
  age: 18,
};
