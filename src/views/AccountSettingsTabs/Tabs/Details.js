import React from "react";
import moment from "moment";
import { each, isNull } from "lodash";
//import DatePicker from "react-datepicker";
//import { toast } from "react-toastify";
import DatePicker from 'react-native-datepicker';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions, FlatList, ActivityIndicator } from 'react-native';
import styles from "../../../stylesheet/Account.style";
import MultiSelect from 'react-native-multiple-select';
import * as Animatable from 'react-native-animatable';
import SelectInput from 'react-native-select-input-ios'
import { countries } from '../../../utils/countries';

import Validator from "../../../validator";

// import {
//   ErrorMsg,
//   MultiSelect,
//   UpdateButton,
//   PlacesAutocomplete
// } from "../../Commons";
import { extractValue, checkError, isError, isSuccess } from "../../../utils";

class Details extends React.PureComponent {
  constructor(props) {
    super(props);
    this.options = countries;
  }
  state = {
    data: {
      bio: "",
      address: "",
      latitude: "",
      longitude: "",
      pinCode: "",
      postal_code: "",
      first_name: "",
      last_name: "",
      dob: null,
      artist_name: "",
      genres: []
    },
    errors: {}
  };
 
  componentDidMount() {
    this._initializeState();
  }

  /**
   * Initialize state for details update form
   */
  _initializeState = () => {
    const { user } = this.props;
    this.setState({
      data: {
        bio: !isNull(user.data.bio) ? user.data.bio : "",
        address: user.data.address,
        latitude: user.data.latitude,
        longitude: user.data.longitude,
        pinCode: user.data.postal_code,
        postal_code: user.data.postal_code,
        first_name: user.data.first_name,
        last_name: !isNull(user.data.last_name) ? user.data.last_name : "",
        dob: !isNull(user.data.dob) ? moment.utc(user.data.dob) : null,
        artist_name: user.data.artist_name,
        country_id:user.data.country_id,
        genres: user.data.genres.map(item => {
          const newItem = { value: "", label: "" };
          newItem.value = item.id;
          newItem.label = item.name;
          return newItem;
        })
      }
    });
  };

  /**
   * Update form validator
   */
  _isValid = (field = null) => {
    const validate = Validator.createValidator(
      {
        // address: ["required"],
        postal_code: ["required", "zipcode|pinCode"],
        first_name: ["required"],
        artist_name: ["required"],
        dob: ["onlyPast"],
        genres: ["maxArrayLength|3"]
      },
      this.state.data,
      field
    );

    const { isValid, errors } = validate;
    this.setState({ errors });
    return isValid;
  };

  /**
   * On Submit
   */
  _submit = () => {
    //  e.preventDefault();

    if (this._isValid()) {
      const { _updateUser, user } = this.props;
      const { data } = this.state;
      const requestBody = Object.assign({}, user.data, {
        bio: data.bio,
        dob: data.dob,
        address: data.address,
        latitude: data.latitude,
        last_name: data.last_name,
        longitude: data.longitude,
        first_name: data.first_name,
        postal_code: data.postal_code,
        artist_name: data.artist_name,
        genres: extractValue(data.genres)
      });

      return _updateUser(requestBody, "isUpdatingDetails").then(() => {
        const { details } = this.props;
        if (isSuccess(details)) {
          alert("Details updated");
          //return toast.info("Details updated");
        }

        if (isError(details)) {
          alert(details.error.message);
          //return toast.error(details.error.message);
        }
      });
    }
  };

  /**
   * Date picker handler
   */
  _handleDateChange = date => {
    this.setState(
      {
        data: Object.assign({}, this.state.data, {
          dob: date
        })
      },
      () => this._isValid("dob")
    );
  };

  /**
   * Text input handler
   */
  _handleChange = (name, value) => {
    const { data } = this.state;
    data[name] = value;
    this.setState(
      {
        data
      },
      () => this._isValid(name)
    );
  };

  /**
   * Multi Select handler
   */
  _handleMultiSelect = (value, name) => {
    const { data } = this.state;
    data[name] = value;
    this.setState(
      {
        data
      },
      () => this._isValid(name)
    );
  };

  /**
   * Handle Location Change with autocomplete api
   */
  _retrieveLocation = location => {
    const { latitude, longitude, pinCode, query } = location;
    if (latitude && longitude && pinCode && query) {
      const { data } = this.state;
      data.address = query;
      data.latitude = latitude;
      data.pinCode = pinCode;
      data.longitude = longitude;
      data.postal_code = pinCode;
      const fields = ["address", "postal_code"];
      this.setState({ data }, () => {
        each(fields, item => {
          this._isValid(item);
        });
      });
    }
  };

  render() {
    const {
      details,
      genres,
    } = this.props;

    const { data, errors } = this.state;

    console.log(" Errors =====", errors);
    // const { details, genres } = this.props;
    const error = checkError(details.error);

    return (
      <View style={{ height: '100%', marginBottom: '15%' }}>

        <TextInput
          style={styles.inputStyle}
          placeholder={'Bio'}
          onChangeText={val => this._handleChange('bio', val)}
          value={data.bio}
          name={"bio"}
        />

        <TextInput
          style={styles.inputStyle}
          placeholder={'First Name'}
          onChangeText={val => this._handleChange('first_name', val)}
          value={data.first_name}
          name={"first_name"}
        />
        {errors.first_name ? <Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.first_name}</Animatable.Text> : null}
        {error &&
          error.error &&
          error.error.first_name &&
          error.error.first_name.map((item, index) => {
            return <Animatable.Text animation="fadeIn" style={styles.errorText} key={index}> {item}</Animatable.Text>;
          })}

        <TextInput
          style={styles.inputStyle}
          placeholder={'Last Name'}
          onChangeText={val => this._handleChange('last_name', val)}
          value={data.last_name}
          name={"last_name"}
        />

        <DatePicker
          style={styles.datePickerStyle}
          date={data.dob}
          mode="date"
          placeholder="Date of Birth"
          format="DD-MM-YYYY"
          //minDate="2016-05-01"
          maxDate={new Date()}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: -20,
              top: -1,
              marginLeft: -20,
              width: 35,
              height: 35
            },
            dateInput: {
              // marginLeft: 36,
              marginBottom: 15,
              shadowColor: 'rgba(0,0,0,0.7)',
              shadowOffset: {
                width: 2,
                height: 4
              },
              shadowOpacity: 0.5,
              shadowRadius: 1,
              borderRadius: 8,
              backgroundColor: 'white',
              // marginLeft: '5%',
              // marginRight:'5%',
              height: 60,
              // width: deviceWidth,
              fontFamily: 'Montserrat-Regular',
              fontWeight: '300',
              fontSize: 16,
              color: '#262626',

            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) =>
            this._handleDateChange(date)
          }
        />
        {errors.dob && <ErrorMsg message={errors.dob} />}
        <TextInput
          style={styles.inputStyle}
          placeholder={'Artist Name'}
          onChangeText={val => this._handleChange('artist_name', val)}
          value={data.artist_name}
          name={"artist_name"}
        />
        {errors.artist_name ? <Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.artist_name}</Animatable.Text> : null}
        {error &&
          error.error &&
          error.error.artist_name &&
          error.error.artist_name.map((item, index) => {
            return <Animatable.Text animation="fadeIn" style={styles.errorText} key={index}> {item}</Animatable.Text>;
          })}

        <MultiSelect
          styleDropdownMenu={styles.multiSelectDownStyle}
          styleInputGroup={styles.multiSelectStyle}
          styleMainWrapper={{ marginLeft: '5%', marginRight: '5%', marginTop: '5%' }}
          styleListContainer={styles.multiSelectListStyle}
          hideTags
          items={genres.data}
          uniqueKey="value"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={(selectedItems) => this._handleMultiSelect(selectedItems, 'genres')}
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
        </View>
      
        <Animatable.View ref={"viewTxtInput"}>

         {/* for location selection  */}
          <SelectInput style={styles.inputStyle} labelStyle={styles.locationLabel} value={data.country_id} options={this.options} onSubmitEditing={val =>this._handleChange('country_id', val)} />
          {errors.country_id ? <Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.country_id}</Animatable.Text> : null}
          {errors.address ? <Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.address}</Animatable.Text> : null}
          <TextInput
            style={styles.inputStyle}
            placeholder={'Postal Code'}
            onChangeText={val => this._handleChange('postal_code', val)}
            value={data.postal_code}
            name={"postal_code"}
          />
        </Animatable.View>
        {errors.postal_code ? <Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.postal_code}</Animatable.Text> : null}

        <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center', marginTop: '5%', width: '40%', height: '15%', borderRadius: 10, backgroundColor: '#ff277b', marginBottom: '5%' , height:60}}
          onPress={() => !details.isRequesting && this._submit()}

        // disabled={changePassword.isRequesting}
        >
          {details.isRequesting ? (
            <ActivityIndicator color='gray' />
          ) : (
              <Text style={styles.loginText}>Update</Text>
            )}
        </TouchableOpacity>

      </View>
    );
    // return (
    //   <div className="profile-tabs__tab is-active">
    //     <div className="ui-group wow fadeInUp">
    //       <input
    //         type="text"
    //         name="bio"
    //         placeholder="Bio"
    //         value={data.bio}
    //         onChange={e => this._handleChange(e)}
    //       />
    //     </div>
    //     <div className="ui-group wow fadeInUp">
    //       <input
    //         type="text"
    //         name="first_name"
    //         placeholder="First Name"
    //         value={data.first_name}
    //         onChange={e => this._handleChange(e)}
    //       />
    //       {errors.first_name && <ErrorMsg message={errors.first_name} />}
    //       {error &&
    //         error.error &&
    //         error.error.first_name &&
    //         error.error.first_name.map((item, index) => {
    //           return <ErrorMsg key={index} message={item} />;
    //         })}
    //     </div>

    //     <div className="ui-group wow fadeInUp">
    //       <input
    //         type="text"
    //         name="last_name"
    //         placeholder="Last Name"
    //         value={data.last_name}
    //         onChange={e => this._handleChange(e)}
    //       />
    //     </div>

    //     <div
    //       className="ui-group wow fadeInUp"
    //       data-wow-delay=".4s"
    //       style={{ zIndex: 9999 }}
    //     >
    //       <DatePicker
    //         selected={data.dob}
    //         onChange={this._handleDateChange}
    //         showYearDropdown
    //         placeholderText="Date of Birth"
    //       />

    // {errors.dob && <ErrorMsg message={errors.dob} />}
    //     </div>

    //     <div className="ui-group wow fadeInUp" data-wow-delay=".4s">
    //       <input
    //         type="text"
    //         name="artist_name"
    //         placeholder="Artist Name"
    //         value={data.artist_name}
    //         onChange={e => this._handleChange(e)}
    //       />
    //       {errors.artist_name && <ErrorMsg message={errors.artist_name} />}
    //       {error &&
    //         error.error &&
    //         error.error.artist_name &&
    //         error.error.artist_name.map((item, index) => {
    //           return <ErrorMsg key={index} message={item} />;
    //         })}
    //     </div>
    //     <div
    //       className="ui-group wow fadeInUp"
    //       data-wow-delay=".5s"
    //       style={{ zIndex: 1000 }}
    //     >
    //       <MultiSelect
    //         name="genres"
    //         resource={genres}
    //         placeholder={"Select Genres"}
    //         selectedOption={data.genres}
    //         handleMultiSelect={this._handleMultiSelect}
    //       />
    //       {errors.genres && (
    //         <label
    //           id="genres-error"
    //           className="error ui-input__validation"
    //           htmlFor="genres"
    //         >
    //           {errors.genres}
    //         </label>
    //       )}
    //     </div>
    //     <div
    //       className="ui-group wow fadeInUp"
    //       data-wow-delay=".6s"
    //       style={{ zIndex: 3 }}
    //     >
    //       <PlacesAutocomplete
    //         setData={true}
    //         query={data.address}
    //         latitude={data.latitude}
    //         longitude={data.longitude}
    //         retrieveLocation={this._retrieveLocation}
    //       />
    //       {errors.address && <ErrorMsg message={errors.address} />}
    //       {errors.country_id && (
    //         <label
    //           id="country_id-error"
    //           className="error ui-input__validation"
    //           htmlFor="country_id"
    //         >
    //           {errors.country_id}
    //         </label>
    //       )}
    //       {error &&
    //         error.error &&
    //         error.error.country_id &&
    //         error.error.country_id.map((item, index) => {
    //           return <ErrorMsg key={index} message={item} />;
    //         })}
    //     </div>
    //     <div className="ui-group wow fadeInUp" data-wow-delay=".7s">
    //       <input
    //         type="text"
    //         name="postal_code"
    //         placeholder="Zip code"
    //         value={data.postal_code}
    //         onChange={e => this._handleChange(e)}
    //       />
    //       {errors.postal_code && (
    //         <label
    //           id="postal_code-error"
    //           className="error ui-input__validation"
    //           htmlFor="postal_code"
    //         >
    //           {errors.postal_code}
    //         </label>
    //       )}
    //       {error &&
    //         error.error &&
    //         error.error.postal_code &&
    //         error.error.postal_code.map((item, index) => {
    //           return <ErrorMsg key={index} message={item} />;
    //         })}
    //     </div>
    //     <UpdateButton onClick={this._submit} loading={details.isRequesting} />
    //   </div>
    // );
  }
}

export default Details;
