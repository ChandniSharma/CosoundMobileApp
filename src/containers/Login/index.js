import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { isSuccess } from "../../utils";

import { authActions } from "../../actions";

import Validator from "../../validator";

import Login from "../../views/Login";


class LoginContainer extends React.PureComponent {
  state = {
    data: {
      email: "",
      password: "",
      rememberMe: true
    },
    fetching: false,
    errors: {}
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
        password: ["required", "minLength|6"]
      },
      this.state.data,
      field
    );

    const { isValid, errors } = validate;
    this.setState({ errors });
    return isValid;
  };

  /**
   * Input change handlers
   *
   */
  _handleChange = (name, value) => {
    const { data } = this.state;
    if (name === "rememberMe") {
      data[name] = !data[name];
    } else {
      data[name] = value;
    }

    this.setState(
      {
        data
      },
      () => this._isValid(name)
    );
  };

  /**
   * On Login
   */
  _login = e => {
    e.preventDefault();
    const valid = this._isValid();
    if (valid) {
      const { data } = this.state;
      return this.props.authActions.login(data).then(() => {
        alert("login successfully");
        alert(JSON.stringify(this.props));
        console.log("login success ",this.props);
        if (isSuccess(this.props.login)) {
          this._navigateToDashboard();
        }
      });
    }
  };

  /**
   * Navigate to dashboard on login
   */
  _navigateToDashboard = () => {
    this.setState({ fetching: true }, () => {
      return this.props.userActions.fetchCartCount().then(() => {
        return this.props.notificationActions.fetchCount().then(() => {
          this.setState(
            {
              fetching: false
            },
            () => {
              return history.push("/");
            }
          );
        });
      });
    });
  };

  _navigateToForgotPassword =() =>{
        this.props.navigation.navigate("RecoverPwd");
  }
  _navigateToGetStartedView =() =>{
    this.props.navigation.navigate("GetStartedView");
}
  render() {
    const { data, errors, fetching } = this.state;
    const { login } = this.props;

    return (
      <Login
        data={data}
        login={login}
        errors={errors}
        fetching={fetching}
        onSubmit={this._login}
        handleChange={this._handleChange}
        navigateToForgotPassword={this._navigateToForgotPassword}
        navigateToGetStartedView={this._navigateToGetStartedView}
      />
    );
  }
}

// eslint-disable-next-line
const mapStateToProps = state => {
  return {
    login: state.login
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
)(LoginContainer);
