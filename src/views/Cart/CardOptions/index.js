import React from "react";

import { Svg } from "../index";
import OptionComponent from "./OptionComponent";
import { FlatList, Image, ImageBackground, Text, TextInput, Modal, TouchableHighlight, View, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import styles from "../../../stylesheet/Cart.style";

const CardOptions = ({
  className,
  toggleVisible,
  ...rest
}) => {
  console.log(" ion card options***************")
  
  return (
    <View style={{flex: 1,backgroundColor:'pink'}}>
    <TouchableOpacity onPress={() => toggleVisible()}>
      <Text>...</Text>
      { /* style={styles.postDescription} */ }
      
    </TouchableOpacity>
    <View style={{backgroundColor:'orange'}}>
    <OptionComponent {...rest} />
    </View>
  </View>
  // <div className={`${className}__options`}>
  //   <div className={`${className}__options-wrap`}>
  //     <div
  //       className={`${className}__options-toggle`}
  //       onClick={() => toggleVisible()}
  //     >
  //       <Svg name="ico-more" />
  //     </div>
  //     <OptionComponent {...rest} />
  //   </div>
  // </div>
 );
  }
export default CardOptions;
