import React from "react";

// import { Select, ErrorMsg, SubmitButtonDiv } from "../../Commons";

import { deliveryTimes } from "../../../constants/commons";
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import styles from '../../../stylesheet/createservice.style';

class DeliveryTime extends React.PureComponent {
  render() {
    const {
      data,
      errors,
      handleSelect,
      handleChange,
      submitDeliveryTime
    } = this.props;
    return (
      <View>
        <View>
          <View>
            <Text>What would be the delivery time of your service ?</Text>
            <TextInput
              placeholder={'Password'}
              onChangeText={val => handleChange('delivery_time', val)}
              value={data.delivery_time}
              name={"password"}
            />
            {errors.delivery_time && (
              <Text>{errors.delivery_time} </Text>
            )}
          </View>
          <View>
            { /* <Select
              name={"delivery_time_unit"}
              resource={deliveryTimes}
              placeholder={"Select Delivery Time Unit"}
              handleSelect={handleSelect}
              selectedId={data.delivery_time_unit}
            /> */ }
            {errors.delivery_time_unit && (
              <Text>{errors.delivery_time_unit}</Text>
            )}
          </View>
          <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center', marginTop: '5%', width: '40%', height: '15%', borderRadius: 10, backgroundColor: '#ff277b' }}
          onPress={()=> submitDeliveryTime()}
           >
              <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity> 
        </View>
      </View>
    );
  }
}

export default DeliveryTime;
