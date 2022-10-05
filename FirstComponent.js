import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// const FirstComponent = ({name, year, changeState}) => {
//   return (
//     <View>
//       <Text style={{fontSize: 25}}>
//         Hoşgeldin {name} {year}
//       </Text>
//       <TouchableOpacity
//         onPress={changeState}
//         style={{alignItems: 'center', marginTop: 25}}>
//         <Text style={{fontSize: 25}}>Değiştir</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
//
// export default FirstComponent;

export default class FirstComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      address: '',
    };
  }

  changeAddress = () => {
    this.setState({address: 'İstanbul'});
  };

  render() {
    const {name, year, changeState} = this.props;
    const {address} = this.state;
    return (
      <View>
        <Text style={{fontSize: 25}}>
          Hoşgeldin {name} {year} {address}
        </Text>
        <TouchableOpacity
          onPress={() => {
            this.changeAddress();
            changeState();
          }}
          style={{alignItems: 'center', marginTop: 25}}>
          <Text style={{fontSize: 25, color: 'black'}}>Değiştir</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
