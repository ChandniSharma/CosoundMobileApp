import React from "react";

import { Svg } from "../index";
import OptionComponent from "./OptionComponent";
import { FlatList, Image, ImageBackground, Text, TextInput, Modal, TouchableHighlight, View, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import styles from "../../../stylesheet/Cart.style";

const CardOptions = ({
  ...rest,
  className,
  toggleVisible
}) => (
  <View>
    <TouchableOpacity onPress={() => toggleVisible()}>
      <Text>...</Text>
      { /* style={styles.postDescription} */ }
      
    </TouchableOpacity>
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

export default CardOptions;
