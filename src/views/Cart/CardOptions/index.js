import React from "react";
import OptionComponent from "./OptionComponent";
import { View, TouchableOpacity } from "react-native";

const CardOptions = ({
  className,
  toggleVisible,
  ...rest
}) => {

  return (
    <View style={{ flex: 1, position: 'absolute', marginTop: 0, right: '2%', width: 100, height: 50, }}>
      <TouchableOpacity onPress={() => toggleVisible()}>
        { /* style={styles.postDescription} */}
      </TouchableOpacity>
      <View style={{ backgroundColor: 'rgb(245, 245, 245)' }}>
        <OptionComponent {...rest} />
      </View>
    </View>
  );
}
export default CardOptions;
