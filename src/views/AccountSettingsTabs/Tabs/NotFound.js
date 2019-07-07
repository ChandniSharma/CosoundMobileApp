import React from "react";
import { View, Text } from 'react-native';

class NotFound extends React.PureComponent {
  render() {
    return (
      <View>
        <Text style={{textAlign: "center"}}>The page you are looking for couldn't be found</Text>
      </View>
    );
  }
}

export default NotFound;
