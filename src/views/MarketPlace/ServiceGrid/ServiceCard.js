import React from "react";

/*import { RatingStars, Svg } from "../../Commons";
*/
import {
  getUsername,
  getThumbnail,
  getServiceLink,
  getServiceNormalImage
} from "../../../utils";

import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import styles from '../../../stylesheet/createservice.style';

const ServiceCard = ({ item }) => (
  <View>
    <View>
      {/*<Link to={getServiceLink(item)} className="m-card__cover">
        <img src={getServiceNormalImage(item.media)} alt="product_image" />
      </Link>*/}
      <View>
        <View>
          {/*<View>
            <View>
              <img src={getThumbnail(item.user)} alt="avatar" />
            </View>
          </View>*/}
          <View>
            {/*<Link to={getServiceLink(item)} className="m-card__name">
              {item.description}
            </Link>*/}
            <View>
             <Text>
              {getUsername(item.user)}
              </Text>
            </View>
            <View>
              {/*<RatingStars rating={item.rating} />*/}
              <Text>{item.review_count}</Text>
            </View>
          </View>
        </View>
        <View>
          <View><Text>{item.price}</Text></View>
         {/* <View>
            <Svg name="ico-heart-outline" />
          </View>*/}
        </View>
      </View>
    </View>
  </View>
);

export default ServiceCard;
