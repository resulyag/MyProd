import React from "react";
import { View, Text } from "react-native";

const FirstComponent = ({ name, namiss }) => {
  return (
    <View>
      <Text style={{ fontSize: 25 }}>Hoşgeldin {name} {namiss}</Text>
    </View>
  );
};

export default FirstComponent;

// export default class FirstComponent extends React.Component {
//   render() {
//     return(
//       <View>
//         <Text style={{fontSize:25}}>First Component</Text>
//       </View>
//     );
//   }
// }
