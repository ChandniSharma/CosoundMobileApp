/* eslint-disable */
import React from "react";
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions, FlatList, ActivityIndicator } from 'react-native';
import styles from "../../../stylesheet/Account.style";
import * as Animatable from 'react-native-animatable';

import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/EvilIcons";
import Icon3 from "react-native-vector-icons/Ionicons";

import Validator from "../../../validator";

// import { ErrorMsg, UpdateButton } from "../../Commons";
import { isSuccess, isError } from "../../../utils";

class ChangePassword extends React.PureComponent {
  state = {
    data: {
      old_password: "",
      new_password: "",
      password_confirmation: ""
    },
    errors: {}
  };

  _resetState = () => {
    this.setState({
      data: {
        old_password: "",
        new_password: "",
        password_confirmation: ""
      },
      errors: {}
    });
  };

  _isValid = (field = null) => {
    const validate = Validator.createValidator(
      {
        old_password: ["required", "minLength|6"],
        new_password: ["required", "minLength|6"],
        password_confirmation: ["required", "match|new_password"]
      },
      this.state.data,
      field
    );

    const { isValid, errors } = validate;
    this.setState({ errors });
    return isValid;
  };

  _submit = e => {
    //e.preventDefault();
    if (this._isValid()) {
      const { _changePassword } = this.props;
      const { data } = this.state;
      changePassword.isRequesting
      _changePassword(data).then(() => {
        this._resetState();
        const { changePassword } = this.props;
        if (isSuccess(changePassword)) {
          alert(changePassword.data.message);
        }

        if (isError(changePassword)) {
          alert(changePassword.error.message)
        }
      });
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
    const { changePassword } = this.props;
    return (
      <View>
        <TextInput
          style={styles.inputStyle}
          placeholder={'Current Password'}
          name={"old_password"}
          value={data.old_password}
          onChangeText={val => this.handleChange('old_password', val)}
        />
        {errors.old_password?<Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.old_password}</Animatable.Text>:null}
      
        <TextInput
          style={styles.inputStyle}
          placeholder={'Password'}
          name={"new_password"}
          value={data.new_password}
          onChangeText={val =>this.handleChange('new_password', val)}
        />
        {errors.new_password?<Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.new_password}</Animatable.Text>:null}  

        <TextInput
          style={styles.inputStyle}
          placeholder={'Password'}
          name={"password_confirmation"}
          value={data.password_confirmation}
          onChangeText={val =>this.handleChange('password_confirmation', val)}
        />
        {errors.password_confirmation?<Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.password_confirmation}</Animatable.Text>:null} 
        
        <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center', marginTop: '5%', width: '40%', height: '15%', borderRadius: 10, backgroundColor: '#ff277b' }}
          onPress={()=> !changePassword.isRequesting && this._submit()}

          // disabled={changePassword.isRequesting}
        >
          {changePassword.isRequesting ? (
            <ActivityIndicator color='gray' />
          ) : (
            <Text style={styles.loginText}>Update</Text>
          )}
        </TouchableOpacity>                  
      </View>
    )
    // return (
    //   <form className="profile-tabs__tab is-active">
    //     <div className={"ui-group wow fadeInUp"} data-wow-delay={"0.4s"}>
    //       <input
    //         type={"password"}
    //         name={"old_password"}
    //         placeholder={"Current Password"}
    //         value={data.old_password}
    //         onChange={e => this._handleChange(e)}
    //         autoComplete={"old_password"}
    //       />
    //       {errors.old_password && <ErrorMsg message={errors.old_password} />}
    //     </div>
    //     <div className={"ui-group wow fadeInUp"} data-wow-delay={"0.4s"}>
    //       <input
    //         type={"password"}
    //         name={"new_password"}
    //         placeholder={"Password"}
    //         value={data.new_password}
    //         onChange={e => this._handleChange(e)}
    //         autoComplete={"new_password"}
    //       />
    //       {errors.new_password && <ErrorMsg message={errors.new_password} />}
    //     </div>
    //     <div className={"ui-group wow fadeInUp"} data-wow-delay={"0.4s"}>
    //       <input
    //         type={"text"}
    //         name={"password_confirmation"}
    //         placeholder={"Confirm Password"}
    //         value={data.password_confirmation}
    //         onChange={e => this._handleChange(e)}
    //       />
    //       {errors.password_confirmation && (
    //         <ErrorMsg message={errors.password_confirmation} />
    //       )}
    //     </div>
    //     <UpdateButton
    //       onClick={this._submit}
    //       loading={changePassword.isRequesting}
    //     />
    //   </form>
    // );
  }
}

export default ChangePassword;
