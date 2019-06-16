import React, {useEffect} from "react";
import OptionComponent from "./OptionComponent";
import { View, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
//import console = require("console");

fadeInUpPopup = () => this.refs.viewpopup.fadeInUp(1000);



const CardOptions = ({

  className,
  toggleVisible,
  ...rest
}) => {

  
  return (
    <View style={{ flex: 1, position: 'absolute', marginTop: 40, right: '2%', width: 100, height: 50}}>
      <TouchableOpacity onPress={() => toggleVisible()}>
        { /* style={styles.postDescription} */}
      </TouchableOpacity>
      <Animatable.View  style={{ backgroundColor: 'rgb(245, 245, 245)' , borderRadius:10, alignItems:'center', justifyContent:'center'}}>
        <OptionComponent {...rest} />
      </Animatable.View>
    </View>
  );
}
export default CardOptions;
