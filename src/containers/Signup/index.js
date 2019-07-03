import React from "react";
import { isEmpty, each } from "lodash";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  history,
  isSuccess,
  fileReader,
 // performWow,
  formatLinks,
  enterPressed,
  extractValue,
  validateLinks,
  formatLinksState,
  formatLinksSelect,
  fixRotationOfFile,
  getRemainingArray
} from "../../utils";

import Validator from "../../validator";

import { authActions, genreActions } from "../../actions";

import Signup from "../../views/Signup";



class SignUpContainer extends React.Component {
  state = {
    tabIndex: 1,
    data: {
      country_code: "AL",
      address: "India",
      pinCode: "452010",
      longitude: 37.090240,
      latitude: -95.712891,
      type: "",
      postal_code:"",
      avatar: null,
      url: null,
    //  email: this.props.navigation.state.params.email?this.props.navigation.state.params.email:'',
      email: '',

      password: "",
      // first_name: this.props.navigation.state.params.givenName?this.props.navigation.state.params.givenName:'',
      // last_name: this.props.navigation.state.params.familyName?this.props.navigation.state.params.familyName:'',
      first_name: '',
      last_name: '',

      dob: null,
      artist_name: "",
      genres: [],
      social_links: formatLinks([], getRemainingArray(5, 0)),
      country_id: ''
    },
    errors: {}
  };

  componentDidMount() {

   // console.log(" Navigation param====", this.state.navigation.state);
    const { socialUserData } = this.props;

    if (!isEmpty(socialUserData.data)) {
      this._setSocialData(socialUserData.data);
    }
  }

  /**
   * Set social data into state
   */
  _setSocialData = data => {
    const { email, first_name, last_name } = data;
    this.setState({
      data: Object.assign({}, this.state.data, {
        email,
        first_name,
        last_name
      })
    });
  };

  /**
   * Fetch Genres
   */
  _fetchGenres = () => {
    const { genreActions } = this.props;
    genreActions.fetchGenres();
  };

  /**
   * Validation
   *
   *  @param String field
   *
   *  @return Boolean
   */
  _isValid = (field = null) => {
    const validate = Validator.createValidator(
      {
        country_id: ["required"],
        address: ["required"],
        postal_code: ["required", "zipcode|pinCode"],
        type: ["required"],
        email: ["required", "email"],
        password: ["required", "minLength|6"],
        first_name: ["required"],
        artist_name: ["required"],
        dob: ["onlyPast"],
        genres: ["maxArrayLength|3"],
        social_links: ["maxArrayLength|5"]
      },
      this.state.data,
      field
    );
    const { isValid, errors } = validate;
    this.setState({ errors });
    return isValid;
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
      data.postal_code = postal_code;
      const fields = ["address", "postal_code"];
      this.setState({ data }, () => {
        each(fields, item => {
          this._isValid(item);
        });
      });
    }
  };

  /**
   * Input Handler
   *
   * @param event
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
    if (this._isValid("type") && name === "type") {
      const { tabIndex } = this.state;
      this._goToTabIndex(tabIndex + 1);
    }
  };

  /**
   * Multi Select Handler
   *
   * @param Object selectedOption
   * @param String name
   */
  _handleMultiSelect = (selectedOption, name) => {
    const { data } = this.state;
    data[name] = selectedOption;
    this.setState(
      {
        data
      },
      () => this._isValid(name)
    );
  };

  /**
   * File handler
   *
   */
  _handleFileChange = (name, file) => {
    // const { name, files } = event.target;
    if (file) {
      const { data } = this.state;
      data[name] = file;
      data['url'] = file;
      this.setState({ data });
    }
  };

  /**
   * Date Pciker handler
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
   * Social links handler
   */
  _handleSocialLinks = (name, value) => {
    const { data } = this.state;
    const id = Number(name);
    const socialLinks = formatLinksState(data.social_links, id, value);
    data.social_links = socialLinks;
    this.setState({ data });
  };

  /**
   * Social Links custom validator
   */
  _isValidSocial = id => {
    const { data, errors } = this.state;
    const { err, isValid } = validateLinks(id, data.social_links, errors);
    this.setState({ errors: err });
    return isValid;
  };

  /**
   * Add Socials on keypress/click
   */
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
  _handleKeyPress = (name) => {
      this._addMoreSocials(name);
  };

  /**
   * Set file uri from temp
   *
   */
  _setUrl = (file, name) => {

    fileReader(file).then(url => {
      const { data } = this.state;
      data[name] = url;
      this.setState({ data });
    });
  };

  /**
   * Dispatch action to switch tabs
   *
   * @param Integer tabIndex
   */
  _goToTabIndex = tabIndex => {
    this.setState(
      {
        tabIndex
      },
      () => {
       //this.props.navigation.navigate("SignupStep2");
       // performWow(this.props.wowActions);
      }
    );
  };

  /**
   * Confirm Location | First Step
   *
   */
  _confirmLocation = event => {
    event.preventDefault();
    if (!this._isValid("country_id") || !this._isValid("address") || !this._isValid("postal_code")) {
      return false;
    }
    const { tabIndex } = this.state;
    this._goToTabIndex(tabIndex + 1);
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

  /**
   * On Signup
   */
  _signUp = () => {
    const valid = this._isValid();
      if (valid && this._isValidSocials()) {
      const { data } = this.state;
     // return fixRotationOfFile(data.avatar).then(blob => {
     //   data.avatar = blob;
       // const genres = JSON.stringify(extractValue(data.genres));
        const genres = data.genres;
        const social_links = JSON.stringify(extractValue(data.social_links));
        const signUpData = Object.assign({}, data, {
          genres,
          social_links
        });
        return this.props.authActions.signup(signUpData).then(() => {
          if (isSuccess(this.props.signup)) {
            this.props.navigation.navigate("Suggestions");
            //return history.push("/suggestions");
          }
        });
     // });
    }
  };

  render() {
    const { errors, data, tabIndex } = this.state;
    const { genres, signup } = this.props;

    return (
      <Signup
        data={data}
        navigation={this.props.navigation}
        signup={signup}
        genres={genres}
        errors={errors}
        tabIndex={tabIndex}
        signUp={this._signUp}
        fetchGenres={this._fetchGenres}
        goToTabIndex={this._goToTabIndex}
        handleChange={this._handleChange}
        handleKeyPress={this._handleKeyPress}
        addMoreSocials={this._addMoreSocials}
        confirmLocation={this._confirmLocation}
        handleDateChange={this._handleDateChange}
        retrieveLocation={this._retrieveLocation}
        handleFileChange={this._handleFileChange}
        handleMultiSelect={this._handleMultiSelect}
        handleSocialLinks={this._handleSocialLinks}
      />
    );
  }
}

// eslint-disable-next-line
const mapStateToProps = state => {
  return {
    signup: state.signup,
    genres: state.genres,
    suggestions: state.suggestions,
    socialUserData: state.socialUserData
  };
};

// eslint-disable-next-line
const mapDispatchToProps = dispatch => {
  return {
    authActions: bindActionCreators(authActions, dispatch),
    genreActions: bindActionCreators(genreActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpContainer);
