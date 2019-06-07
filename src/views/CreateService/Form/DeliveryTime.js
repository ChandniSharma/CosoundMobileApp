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

    console.log(" Delivery times ===", deliveryTimes.data);
    let deliveryTimesData = [{value:null,label:"Select Delivery Time Unit"}].concat(deliveryTimes.data);
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
            keyboardType="number-pad"
          />
          {errors.delivery_time && (
            <Text style={styles.errorText}>{errors.delivery_time} </Text>
          )}
        </Animatable.View>

        <Animatable.View ref={"viewTxtInput2"}>

         <SelectInput style={ styles.inputStyle} placeholder={"Select Delivery Time Unit"} labelStyle={data.delivery_time_unit ? styles.locationLabel: styles.placeholderLabel} value={data.delivery_time_unit} options={deliveryTimesData} onSubmitEditing={val => handleSelect(val, "delivery_time_unit")} />

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

          <View style={styles.viewContainButton}>
            <TouchableOpacity style={[styles.nextButton]}
              onPress={() => submitDeliveryTime()}>
              <Text style={styles.nextButtonTitle}>Next</Text>
            </TouchableOpacity>
          </View>

        </Animatable.View>
      </View>
    );
  }
}

export default DeliveryTime;
