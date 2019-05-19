import React from "react";
//import { Link } from "react-router-dom";
import { FlatList, Image, ImageBackground, Text, TextInput, Modal, TouchableHighlight, View, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import styles from "../../../stylesheet/Cart.style";

const OptionComponent = ({
  id,
  _delete,
  className,
  isVisible,
  deleteState,
  postedBySelf,
  visitorLinks
}) => {
  let arrayPostOptions = ["All", "Copy Link", "Unfollow User", 'Share', 'Report Post'];
  let arrayBtn = []
  if(postedBySelf){
      let btn = <TouchableHighlight onPress={() => _delete(id)} underlayColor="#8e8e8e" style={{ marginTop: '2%', height: 40 }}>
          <Text style={styles.postOptionText}>{deleteState.isRequesting === id ? "Deleting.." : "Delete"}
      </Text>
      </TouchableHighlight>
      arrayBtn.push(btn);
      
  }else{
  for (let i = 0; i < arrayPostOptions.length; i++) {
      let btn = <TouchableHighlight underlayColor="#8e8e8e" style={{ marginTop: '2%', height: 40 }}>
          <Text style={styles.postOptionText}>  {arrayPostOptions[i]} </Text>
      </TouchableHighlight>
      arrayBtn.push(btn);
  }
  }
  return arrayBtn;
  // switch (postedBySelf) {
  //   case false:
  //     return (
  //       <ul
  //         className={`${className}__options-list ${
  //           isVisible ? "is-visible" : ""
  //         }`}
  //       >
  //         {visitorLinks.map((item, index) => {
  //           return (
  //             <li key={index}>
  //               <Link to={item.link}>{item.name}</Link>
  //             </li>
  //           );
  //         })}
  //       </ul>
  //     );
  //   case true:
  //     return (
  //       <ul
  //         className={`${className}__options-list ${
  //           isVisible ? "is-visible" : ""
  //         }`}
  //       >
  //         <li>
  //           <a onClick={() => _delete(id)}>
  //             {deleteState.isRequesting === id ? "Deleting.." : "Delete"}
  //           </a>
  //         </li>
  //       </ul>
  //     );
  //   default:
  //     return null;
  // }
};

export default OptionComponent;
