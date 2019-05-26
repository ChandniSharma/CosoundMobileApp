import React from "react";
import * as Animatable from 'react-native-animatable';

// import { ErrorMsg, SubmitButtonDiv } from "../../Commons";
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
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
      <View>
        <Animatable.View ref={"viewTxtInput1"}>
          <Text style={[styles.subTitle, {marginLeft: '5%', marginRight:'5%', textAlign:'center', } ]}>
            Nice… describe your service in more detail! (give as much
            information as possible!)
            </Text>
          <TextInput
            placeholder={'Write a brief description of your service'}
            onChangeText={val => handleChange('description', val)}
            value={data.description}
            name={"description"}
            numberOfLines="4"
            style={styles.inputStyle} 
          />
          { /*  <TextInput
              style={styles.inputStyle}
              placeholder={'Artist Name'}
              onChangeText={val => handleChange('artist_name', val)}
              value={data.artist_name}
              name={"artist_name"}
            />  */}

          {errors.description && <Text style={styles.errorText}>{errors.description} </Text>}
        </Animatable.View>
        <Animatable.View ref={"viewTxtInput2"}>
          <TextInput
            placeholder={'Write about your service'}
            onChangeText={val => handleChange('about', val)}
            value={data.about}
            name={"about"}
            numberOfLines="4"
            style={styles.inputStyle} 
          />
          { /* <textarea
              type="text"
              name="about"
              placeholder="Write about your service"
              autoexpand={"true"}
              rows="7"
              data-min-rows="7"
              value={data.about}
              onChange={e => handleChange(e)}
            /> */ }
          {errors.about && <Text style={styles.errorText}>{errors.about} </Text>}

        <TouchableOpacity style={[styles.loginButton, { marginTop: '15%', justifyContent: 'center', }]}
          onPress={() => submitDescription()}
        >
          <Text style={[styles.textButtonTitle, {marginBottom:'15%'}]}>Next</Text>
        </TouchableOpacity>
        </Animatable.View>
      </View>
    );
  }
}

export default DescriptionForm;
