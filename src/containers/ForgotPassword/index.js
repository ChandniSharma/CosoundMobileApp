import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//import { performWow } from "../../utils";

import { authActions } from "../../actions";

import Validator from "../../validator";

import ForgotPasswordComponent from "../../views/ForgotPassword";

class ForgotPassword extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: "",
        isShowLoader:false,
      },
      errors: {}
    };
  }

  /**
   * Validation Location
   *
   *  @param String field
   *
   *  @return Boolean
   */
  _isValid = (field = null) => {
    const validate = Validator.createValidator(
      {
        email: ["required", "email"]
      },
      this.state.data,
      field
    );

    const { isValid, errors } = validate;
    this.setState({ errors });
    return isValid;
  };

  /**
   * Email input handler
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
   * On Submit
   */
  _onSubmit = e => {
    const valid = this._isValid();
    if (valid) {
      this.setState({isShowLoader:true})

      const { data } = this.state;
      this._callForgot(data).then(() => {
       // performWow(this.props.wowActions);
      });
    }
  };

  /**
   * Call forgot password apiß
   */
  _callForgot = data => {
    const { authActions } = this.props;
    this.setState({isShowLoader:false})

    return authActions.forgotPassword(data);
  };

  render() {
    const { data, errors,isShowLoader } = this.state;
    const { forgotPassword } = this.props;
    return (
      <ForgotPasswordComponent
        data={data}
        navigation={this.props.navigation}
        errors={errors}
        onSubmit={this._onSubmit}
        forgotPassword={forgotPassword}
        handleChange={this._handleChange}
        isShowLoader ={isShowLoader}
      />
    );
  }
}

// eslint-disable-next-line
const mapStateToProps = state => {
  return {
    forgotPassword: state.forgotPassword
  };
};

// eslint-disable-next-line
const mapDispatchToProps = dispatch => {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword);
