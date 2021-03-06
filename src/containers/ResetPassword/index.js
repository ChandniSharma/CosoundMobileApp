import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { arrayToObject } from "../../utils";
import { authActions } from "../../actions";
import Validator from "../../validator";
import RecoverPwd from "../../views/RecoverPwd";

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        token: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      errors: {},
      error: false,
      errorMsg: null
    };
  }

  componentDidMount() {
    const { location } = this.props;
  }

  _performAction = search => {
    const searchQuery = search.replace("?", "");
    const searchArr = searchQuery.split("&");
    const searchObj = arrayToObject(searchArr);
    if (searchObj.hasOwnProperty("error")) {
      this.setState({
        error: true,
        errorMsg: decodeURIComponent(searchObj.message)
      });
    }
    if (searchObj.hasOwnProperty("token")) {
      const { data } = this.state;
      data.token = searchObj.token;
      this.setState({
        data
      });
    }
  };
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
        email: ["required", "email"],
     },
      this.state.data,
      field
    );

    const { isValid, errors } = validate;
    this.setState({ errors });
    return isValid;
  };

  /**
   * Input handlers
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
      const { data } = this.state;
      this._callReset(data).then(() => {
      });
    }else{
    }
  };

  /**
   * Call Reset Password api
   */
  _callReset = data => {
    const { authActions } = this.props;
    return authActions.resetPassword(data);
  };

  render() {
    const { data, errors, error } = this.state;
    const { resetPassword } = this.props;
    return (
      <RecoverPwd
        data={data}
        errors={errors}
        onSubmit={this._onSubmit}
        resetPassword={resetPassword}
        handleChange={this._handleChange}
        error={error}
        navigation={this.props.navigation}
      />
    );
  }
}

// eslint-disable-next-line
const mapStateToProps = state => {
  return {
    resetPassword: state.resetPassword
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
)(ResetPassword);
