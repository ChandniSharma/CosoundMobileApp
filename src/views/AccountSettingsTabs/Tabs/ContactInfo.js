import React from "react";
//import { toast } from "react-toastify";
import { isEmpty } from "lodash";
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions, FlatList, ActivityIndicator } from 'react-native';
import styles from "../../../stylesheet/Account.style";
import * as Animatable from 'react-native-animatable';
import MultiSelect from 'react-native-multiple-select';
import { Icon } from "native-base";
import Icon1 from "react-native-vector-icons/AntDesign";

//import { Svg, UpdateButton, CreatableSelect } from "../../Commons";
import {
  isError,
  isSuccess,
  extractIds,
  formatLinks,
  extractValue,
  enterPressed,
  validateLinks,
  formatLinksState,
  formatLinksSelect,
  getRemainingArray,
  formatPhoneNumbers
} from "../../../utils";


class ContactInfo extends React.Component {
  state = {
    data: {
      phone_numbers: [],
      social_links: []
    },
    errors: {}
  };

  componentDidMount() {
    this._setLocalState();
  }

  /* Set state on mount */
  _setLocalState = () => {
    const { user } = this.props;
    const remainingArray = getRemainingArray(5, user.data.social_links.length);
    this.setState({
      data: {
        phone_numbers: formatPhoneNumbers(user.data.phone_numbers),
        social_links: formatLinks(user.data.social_links, remainingArray)
      }
    });
  };

  _submit = ()=> {
    // e.preventDefault();

    console.log(" Submit =========", this.state.data);
    if (this._isValidSocials()) {
      this.setState({ errors: {} });
      const { _updateUser, user } = this.props;
      const { data } = this.state;

      const requestBody = Object.assign({}, user.data, {
        phone_numbers: extractValue(data.phone_numbers),
        social_links: extractValue(data.social_links),
        genres: extractIds(user.data.genres)
      });

      _updateUser(requestBody, "isUpdatingContactInfo").then(() => {
        this._setLocalState();
        const { contactInfo } = this.props;
        if (isSuccess(contactInfo)) {
          alert("Contact info updated");
          // return toast.info("Contact info updated");
        }

        if (isError(contactInfo)) {
          alert(contactInfo.error.message);
          // return toast.error(contactInfo.error.message);
        }
      });
    }
  };

  /* creatable handler | phone_numbers */
  _handleCreatable = ( name,value) => {
    const { data } = this.state;
    data[name] = value;
    this.setState({
      data
    });
  };

  /* social_links handler */
  handlePhoneNumber = (index,value) => {
    const { data } = this.state;
    data.phone_numbers[index].label = value;
    data.phone_numbers[index].value = value;
    this.setState({ data });
  };

  /* validate all socials */
  _isValidSocials = () => {
    const { data } = this.state;
    let isValid = true;
    for (let i = data.social_links.length; i > 0; i--) {
      if (isEmpty(data.social_links[i - 1].value)) continue;
      const valid = this._isValidSocial(i);
      if (!valid) {
        isValid = false;
        break;
      }
    }
    return isValid;
  };

  /* social links custom validator */
  _isValidSocial = id => {
    const { data, errors } = this.state;
    const { err, isValid } = validateLinks(id, data.social_links, errors);
    this.setState({ errors: err });
    return isValid;
  };

  /* Add social links */
  _addMorePhoneNumbers = index => {
    const { data } = this.state;
     
   if(index + 1 === this.state.data.phone_numbers.length){
    data.phone_numbers.push({label: "", value: ""})
   }else{
    data.phone_numbers.splice(index, 1);
   }
      this.setState({ data });
  };

  /**
   * Key press handler for Social Links
   *
   */
  _handleKeyPress = (itemid) => {
    // if (enterPressed(e))
     {
      this._addMorePhoneNumbers(itemid);
    }
  };
  handleChange = (name, value)=> {
    const { data } = this.state;
    data[name] = value;
    this.setState(
      {
        data
      },
      () => this._isValid(name)
    );
  };

  render() {
    const { data, errors } = this.state;
    const { user, contactInfo } = this.props;
    return (
      <View style={{ flex: 1, marginBottom:'20%' }}>
        <TextInput
          style={styles.inputStyle}
          placeholder={'Email'}
          value={user.data.email}
          editable={false} selectTextOnFocus={false}
          name={"email"}
        />
        { data.phone_numbers.map((item, index) => {
            return (
              <View
                key={index}
                style={[styles.viewSocial, { flexDirection: 'row', flex: 1 }]}
              >
                <TextInput
                  style={[styles.socialInput, { flex: 0.85 }]}
                  placeholder={'Phone Numbers'}
                  onSubmitEditing={() => this._handleKeyPress(index)}
                  onChangeText={val => this.handlePhoneNumber(index, val)}
                  value={item.value}
                  name={index}
                  keyboardType='phone-pad'
                />
                {/* {!item.isReady && ( */}
                <TouchableHighlight onPress={() => this._addMorePhoneNumbers(index)} underlayColor="#25b6ad" style={[styles.plusCircleBtn]}>
                  {index + 1 === data.phone_numbers.length  ? <Icon name="ios-add-circle-outline" size={30} color="gray" style={styles.plusCircle} /> :<Icon1 name = "close" size={25} color="gray" style={styles.plusCircle} />}
                </TouchableHighlight>
                {/* )} */}
              </View>
            );
          
          
        }) 
        }

        <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center', marginTop: '5%', width: '40%', height: '15%', borderRadius: 10, backgroundColor: '#ff277b' }}
          onPress={() => !contactInfo.isRequesting && this._submit()}
        // disabled={changePassword.isRequesting}
        >
          {contactInfo.isRequesting ? (
            <ActivityIndicator color='white' />
          ) : (
              <Text style={styles.loginText}>Update</Text>
            )}
        </TouchableOpacity>
      </View>
    )
   
  }
}

export default ContactInfo;
