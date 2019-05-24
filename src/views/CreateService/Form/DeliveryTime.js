import React from "react";
import * as Animatable from 'react-native-animatable';
import SelectInput from 'react-native-select-input-ios'

// import { Select, ErrorMsg, SubmitButtonDiv } from "../../Commons";

import { deliveryTimes } from "../../../constants/commons";
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import styles from '../../../stylesheet/createservice.style';

class DeliveryTime extends React.PureComponent {

  moveTextUp1 = () => this.refs.viewTxtInput1.fadeInUp(1000).then(this.moveSecondViewUp());

  moveTextUp2 = () => this.refs.viewTxtInput2.fadeInUp(2000).then(endState => endState.finished ? "finish " : console.log('finish not'));

  componentDidMount() {
    this.moveTextUp1();
  }
  moveSecondViewUp() {
    setTimeout(() => {
      this.moveTextUp2();
    }, 100);
  }

  render() {
    const {
      data,
      errors,
      handleSelect,
      handleChange,
      submitDeliveryTime
    } = this.props;


    console.log(" Delivery times ===", deliveryTimes);
    return (
      <View>
       
          <Animatable.View ref={"viewTxtInput1"}>
            <Text style={styles.subTitle}>What would be the delivery time of your service ?</Text>
            <TextInput
              placeholder={'Delivery Time'}
              onChangeText={val => handleChange('delivery_time', val)}
              value={data.delivery_time}
              name={"delivery_time"}
              style={styles.inputStyle}
            />
            {errors.delivery_time && (
              <Text style={styles.errorText}>{errors.delivery_time} </Text>
            )}
          </Animatable.View>

          <Animatable.View ref={"viewTxtInput2"}>
          <SelectInput style={styles.inputStyle}  placeholder={"Select Delivery Time Unit"} labelStyle={styles.locationLabel} value={data.delivery_time_unit} options={deliveryTimes.data} onSubmitEditing={val => handleSelect(val, 'label')} />
        
            { /* <Select
              name={"delivery_time_unit"}
              resource={deliveryTimes}
              placeholder={"Select Delivery Time Unit"}
              handleSelect={handleSelect}
              selectedId={data.delivery_time_unit}
            /> */ }
            {errors.delivery_time_unit && (
              <Text style={styles.errorText}>{errors.delivery_time_unit}</Text>
            )}
          </Animatable.View>

          <TouchableOpacity style={[styles.loginButton, { marginTop: '15%', justifyContent: 'center', }]}
          onPress={()=> submitDeliveryTime()}
           >
              <Text style={styles.loginText}>Next</Text>
          </TouchableOpacity> 
        
      </View>
    );
  }
}

export default DeliveryTime;
