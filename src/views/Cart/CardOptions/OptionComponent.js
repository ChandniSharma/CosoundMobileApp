import React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import styles from "../../../stylesheet/Cart.style";

const OptionComponent = ({
  id,
  _delete,
  deleteState,
  postedBySelf,
}) => {
  let arrayPostOptions = ["All", "Copy Link", "Unfollow User", 'Share', 'Report Post'];
  let arrayBtn = []
  if (postedBySelf) {
    let btn = <View style={{ marginTop: '15%', height: 40 }}>
      <TouchableHighlight onPress={() => _delete(id)} underlayColor="#8e8e8e" >
        <Text style={styles.postOptionText}>{deleteState.isRequesting === id ? "Deleting.." : "Delete"}
        </Text>
      </TouchableHighlight>
    </View>


    arrayBtn.push(btn);

  } else {
    for (let i = 0; i < arrayPostOptions.length; i++) {
      let btn = <TouchableHighlight underlayColor="#8e8e8e" style={{ marginTop: '2%', height: 40 }}>
        <Text style={styles.postOptionText}>  {arrayPostOptions[i]} </Text>
      </TouchableHighlight>
      arrayBtn.push(btn);
    }
  }
  return arrayBtn;
};

export default OptionComponent;
