import React from "react";
//import { toast } from "react-toastify";
import { isEmpty } from "lodash";
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions, FlatList, ActivityIndicator } from 'react-native';
import styles from "../../../stylesheet/Account.style";
import * as Animatable from 'react-native-animatable';
import MultiSelect from 'react-native-multiple-select';
import { Icon } from "native-base";

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
  handleSocialLinks = (name,value) => {
    const { data } = this.state;
    const id = Number(name);
    const socialLinks = formatLinksState(data.social_links, id, value);
    data.social_links = socialLinks;
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
  _addMoreSocials = id => {
    id = Number(id);
    const valid = this._isValidSocial(id);

    if (valid) {
      const { data } = this.state;
      const socialLinks = formatLinksSelect(data.social_links, id);
      data.social_links = socialLinks;
      this.setState({ data });
    }
  };

  /**
   * Key press handler for Social Links
   *
   */
  _handleKeyPress = e => {
    if (enterPressed(e)) {
      this._addMoreSocials(e);
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
      <View style={{ flex: 1 }}>

        <TextInput
          style={styles.inputStyle}
          placeholder={'Email'}
          value={user.data.email}
          editable={false} selectTextOnFocus={false}
          name={"email"}
        />

        <TextInput
          style={styles.inputStyle}
          placeholder={'Phones'}
          onChangeText={val => this._handleCreatable('phone_numbers', val)}
          value={data.phone_numbers}
          name={"phone_numbers"}
        />

        {/* Multiselect  */}
        {/* <MultiSelect
              styleDropdownMenu={styles.multiSelectDownStyle}
              styleInputGroup={styles.multiSelectStyle}
              styleMainWrapper={{ marginLeft: '5%', marginRight: '5%', marginTop: '5%' }}
              styleListContainer={styles.multiSelectListStyle}
              hideTags
              items={genres.data}
              uniqueKey="value"
              ref={(component) => { this.multiSelect = component }}
              onSelectedItemsChange={(selectedItems) => handleMultiSelect(selectedItems, 'genres')}
              selectedItems={data.genres}
              selectText="Select Genres"
              searchInputPlaceholderText="Select Genres"
              onChangeInput={(text) => console.log(text)}
              altFontFamily="Montserrat-light"
              tagRemoveIconColor="black"
              tagBorderColor="#CCC"
              tagTextColor="#black"
              selectedItemTextColor="rgb(60, 205, 53)"
              selectedItemIconColor="rgb(60, 205, 53)"
              itemTextColor="#000"
              displayKey="label"
              searchInputStyle={{ color: '#CCC' }}
              submitButtonColor="#ff277b"
              submitButtonText="Submit"
              name="genres"
            />
            <View>
              {this.multiSelect && this.multiSelect.getSelectedItemsExt(data.genres)}
            </View> */}

        {data.social_links.map((item, index) => {
          if (item.isVisible) {
            return (
              <View
                key={index}
                style={[styles.viewSocial, { flexDirection: 'row', flex: 1 }]}
              >
                <TextInput
                  style={[styles.socialInput, { flex: 0.85 }]}
                  placeholder={'Social Links'}
                  onSubmitEditing={() => this._handleKeyPress(item.id)}
                  onChangeText={val => this.handleSocialLinks(item.id, val)}
                  value={item.value}
                  name={item.id}
                />

                {/* {!item.isReady && ( */}
                <TouchableHighlight onPress={() => this._addMoreSocials(item.id)} underlayColor="#25b6ad" style={[styles.plusCircleBtn]}>
                  <Icon name="ios-add-circle-outline" size={30} color="gray" style={styles.plusCircle} />
                </TouchableHighlight>

                {/* )} */}
                {errors[item.id] ? <Animatable.Text animation="fadeIn" style={styles.errorText}> {errors[item.id]}</Animatable.Text> : null}
              </View>
            );
          }
          return null;
        })}
        <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center', marginTop: '5%', width: '40%', height: '15%', borderRadius: 10, backgroundColor: '#ff277b' }}
          onPress={() => !contactInfo.isRequesting && this._submit()}

        // disabled={changePassword.isRequesting}
        >
          {contactInfo.isRequesting ? (
            <ActivityIndicator color='gray' />
          ) : (
              <Text style={styles.loginText}>Update</Text>
            )}
        </TouchableOpacity>
      </View>
    )
    // return (
    //   <div className="profile-tabs__tab is-active">
    //     <div className="ui-group">
    //       <input
    //         type="email"
    //         name="email"
    //         placeholder="Email"
    //         defaultValue={user.data.email}
    //         disabled
    //         style={!user.data.isConfirmed ? styles.emailNotVerified : null}
    //       />
    //     </div>
    //     <div className="ui-group">
    //       <CreatableSelect
    //         name="phone_numbers"
    //         placeholder={"Phones"}
    //         selectedOption={data.phone_numbers}
    //         handleCreatable={this._handleCreatable}
    //       />
    //     </div>
    //     {data.social_links.map((item, index) => {
    //       if (item.isVisible) {
    //         return (
    //           <div className={"ui-group"} data-wow-delay=".4s" key={index}>
    //             <input
    //               type="text"
    //               name={item.id}
    //               placeholder="Social Links"
    //               onKeyPress={e => this._handleKeyPress(e)}
    //               onChange={e => this._handleSocialLinks(e)}
    //               value={item.value}
    //             />
    //             {!item.isReady && (
    //               <Svg
    //                 name="ico-plus"
    //                 modClass="js-multiple-inputs-plus"
    //                 handleClick={() => this._addMoreSocials(item.id)}
    //               />
    //             )}
    //             {errors[item.id] && (
    //               <label
    //                 id="socialLinks-error"
    //                 className="error ui-input__validation"
    //                 htmlFor="socialLinks"
    //               >
    //                 {errors[item.id]}
    //               </label>
    //             )}
    //           </div>
    //         );
    //       }
    //       return null;
    //     })}
    // <UpdateButton
    //   onClick={this._submit}
    //   loading={contactInfo.isRequesting}
    // />
    //   </div>
    // );
  }
}

export default ContactInfo;

// const styles = {
//   emailNotVerified: { border: "1px solid #d5628c" }
// };
