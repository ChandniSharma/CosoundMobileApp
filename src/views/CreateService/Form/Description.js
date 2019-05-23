import React from "react";

// import { ErrorMsg, SubmitButtonDiv } from "../../Commons";
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import styles from '../../../stylesheet/createservice.style';

class DescriptionForm extends React.PureComponent {
  render() {
    const { data, errors, handleChange, submitDescription } = this.props;
    return (
      <View>
          <View>
            <Text>
              Nice… describe your service in more detail! (give as much
              information as possible!)
            </Text>
            <TextInput
              placeholder={'Write a brief description of your service'}
              onChangeText={val => handleChange('description', val)}
              value={data.description}
              name={"description"}
              numberOfLines="4"
            />
           { /*  <TextInput
              style={styles.inputStyle}
              placeholder={'Artist Name'}
              onChangeText={val => handleChange('artist_name', val)}
              value={data.artist_name}
              name={"artist_name"}
            />  */} 
        
            {errors.description && <Text>{errors.description} </Text>}
          </View>
          <View>
            <TextInput
              placeholder={'Write about your service'}
              onChangeText={val => handleChange('about', val)}
              value={data.about}
              name={"about"}
              numberOfLines="4"
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
            {errors.about && <Text>{errors.about} </Text>}
          </View>
          <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center', marginTop: '5%', width: '40%', height: '15%', borderRadius: 10, backgroundColor: '#ff277b' }}
          onPress={()=> submitDescription()}
           >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

export default DescriptionForm;
