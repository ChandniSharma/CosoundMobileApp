import React from "react";
import { Link } from "react-router-dom";
import { FlatList, Image, ImageBackground, Text, TextInput, TouchableHighlight, TouchableWithoutFeedback, View, TouchableOpacity, Clipboard, AlertIOS, Platform, ActivityIndicator } from "react-native";

import { getServiceLink, getServiceThumbnail } from "../../../utils";

const ServiceListingCard = ({ item }) => (
  <View>
    <View>{item.title}</View>
    <View>{item.category.name}</View>
    <View>
      <p>{item.description}</p>
    </View>
  </View>
);

// const ServiceListingCard = ({ item }) => (
//   <Link to={getServiceLink(item, item.service_id)} className="services-item">
//     <div className="avatar avatar--shad">
//       <img src={getServiceThumbnail(item.media)} alt="avatar" />
//     </div>
//     <div className="services-item__content">
//       <div className="services-item__name">{item.title}</div>
//       <div className="services-item__category">{item.category.name}</div>
//       <div className="services-item__desc">
//         <p>{item.description}</p>
//       </div>
//     </div>
//   </Link>
// );

export default ServiceListingCard;
