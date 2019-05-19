import React from "react";
import { AsyncStorage } from 'react-native';
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

  componentDidMount() {
    this._getStorageValue();
  }

  async _getStorageValue() {

    let email = await AsyncStorage.getItem('email');
    let password = await AsyncStorage.getItem('password');

    let data = this.state.data;
    data.email = email;
    data.password = password;

    this.setState({
      data
    });
    this.forceUpdate()
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

  _onClickRememberMe = () => {
    console.log("_onClickRememberMe");
    let data = this.state.data;
    data.rememberMe = !data.rememberMe;

    this.setState({
      data
    })
    this.forceUpdate();
  }

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

  saveCredentials = async () => {
    const { data } = this.state;
    console.log(" data from loign veiw ", data);

    if (data.rememberMe) {
      await AsyncStorage.setItem('email', data.email);
      await AsyncStorage.setItem('password', data.password);
    } else {
      await AsyncStorage.setItem('email', "");
      await AsyncStorage.setItem('password', "");
    }

  }
  /**
   * On Login
   */
  _login = e => {
    e.preventDefault();
    const valid = this._isValid();
    if (valid) {
      const { data } = this.state;
      return this.props.authActions.login(data).then(() => {
        console.log("login success ", this.props);
        if (isSuccess(this.props.login)) {

          this.saveCredentials();
          this._navigateToProfileview();
          //this._navigateToDashboard();
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

  _navigateToForgotPassword = () => {
    this.props.navigation.navigate("ForgotPassword");
  }
  _navigateToGetStartedView = () => {
    //this.props.navigation.navigate("SignupStep1");
    this.props.navigation.navigate("Signup");
  }
  _navigateToProfileview = () => {
  //  this.props.navigation.navigate("Profile");
    //this.props.navigation.navigate("Dashboard");
    this.props.navigation.navigate("AccountSettings");

  }
  // _navigateBack =()=>{
  //   this.props.navigation.goBack();

  // }
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
        onClickRememberMe={this._onClickRememberMe}
        navigation={this.props.navigation}
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
