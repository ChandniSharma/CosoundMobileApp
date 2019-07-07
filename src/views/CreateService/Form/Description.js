import React from "react";
import * as Animatable from 'react-native-animatable';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from '../../../stylesheet/createservice.style';

class DescriptionForm extends React.PureComponent {

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
    const { data, errors, handleChange, submitDescription } = this.props;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View>
        <Animatable.View ref={"viewTxtInput1"}>
          <Text style={[styles.subTitle, { marginLeft: '5%', marginRight: '5%', textAlign: 'center', }]}>
            Nice… describe your service in more detail! (give as much
            information as possible!)
            </Text>
          <TextInput
            placeholder={'Write a brief description of your service'}
            onChangeText={val => handleChange('description', val)}
            value={data.description}
            name={"description"}
            multiline={true}
            numberOfLines = {5}
            style={styles.inputTextAreaStyle}
          />
          {errors.description && <Text style={styles.errorText}>{errors.description} </Text>}
        </Animatable.View>
        <Animatable.View ref={"viewTxtInput2"}>
          <TextInput
            placeholder={'Write about your service'}
            onChangeText={val => handleChange('about', val)}
            value={data.about}
            name={"about"}
            multiline={true}
            numberOfLines = {5}
            style={styles.inputTextAreaStyle}
          />
          {errors.about && <Text style={styles.errorText}>{errors.about} </Text>}
          <View style={styles.viewContainButton}>
            <TouchableOpacity style={styles.nextButton}
              onPress={() => submitDescription()}
            >
              <Text style={[styles.nextButtonTitle]}>Next</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default DescriptionForm;
