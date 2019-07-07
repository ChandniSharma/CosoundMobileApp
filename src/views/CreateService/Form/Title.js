import React from "react";

import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../../stylesheet/createservice.style';
import * as Animatable from 'react-native-animatable';

class Title extends React.PureComponent {
  moveTextUp1 = () => this.refs.viewTxtInput1.fadeInUp(1000);

  componentDidMount() {
    this.moveTextUp1();
  }
  render() {
    const { data, errors, handleChange, submitTitle } = this.props;
     return (
      <Animatable.View ref={"viewTxtInput1"}>
          <View>
            <Text style={styles.subTitle}>Name your service</Text>
            <TextInput
              placeholder={'Service name'}
              onChangeText={val => handleChange("title", val)}
              value={data.title}
              name={"title"}
              style={styles.inputStyle}
            />
            {errors.title && <Text style={styles.errorText}>{errors.title} </Text>}
          </View>
          <View style={styles.viewContainButton}>
          <TouchableOpacity style={styles.nextButton}
          onPress={()=> submitTitle()}
           >
            <Text style={[styles.nextButtonTitle]}>Next</Text>
          </TouchableOpacity>
          </View>
        </Animatable.View>
    );
  }
}

export default Title;
