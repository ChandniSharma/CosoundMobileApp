import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { isEmpty } from "lodash";

import {
  //history,
  fileReader,
  performWow,
  formatLinks,
  enterPressed,
  formatLinksState,
  validateKeypoints,
  getRemainingArray,
  formatLinksSelect,
  formatPublishServicedata
} from "../../utils";

import Validator from "../../validator";

import { marketPlaceActions, userServicesActions } from "../../actions";

import CreateServiceComponent from "../../views/CreateService";
//import { toast } from "react-toastify";

class CreateService extends React.Component {
  state = {
    tabIndex: 0,
    data: {
      url: null,
      title: "",
      about: "",
      price: "",
      image: null,
      description: "",
      delivery_time: "",
      category_id: null,
      sub_category_id: null,
      featuredImage_1: null,
      featuredImage_2: null,
      featuredImage_3: null,
      featuredImage_4: null,
      featuredImage_1Url: null,
      featuredImage_2Url: null,
      featuredImage_3Url: null,
      featuredImage_4Url: null,
      delivery_time_unit: null,
      key_points: formatLinks([], getRemainingArray(3, 0))
    },
    errors: {}
  };

  componentDidMount() {
    this._restCalls();
  }

  /**
   * Rest api calls
   */
  _restCalls = () => {
    this._fetchCategories().then(() => {});
  };

  /**
   * Fetch all categories
   */
  _fetchCategories = () => {
    return this.props.marketPlaceActions.fetchCategories();
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
        image: ["file"],
        title: ["required"],
        about: ["required"],
        description: ["required"],
        category_id: ["required"],
        sub_category_id: ["required"],
        price: ["required", "float"],
        delivery_time_unit: ["required"],
        delivery_time: ["required", "float"]
      },
      this.state.data,
      field
    );

    const { isValid, errors } = validate;
    this.setState({ errors });
    return isValid;
  };

  /**
   * Select Handler
   *
   * @param Object selectedOption
   * @param String name
   */
  _handleSelect = (value, name) => {
    //const { value } = selectedOption;
    const { data } = this.state;
    data[name] = value;
    if (name === "category_id") {
      data.sub_category_id = null;
    }
    this.setState(
      {
        data
      },
      () => this._isValid(name)
    );
  };

  /**
   * Input Handler
   *
   * @param event
   */
  _handleChange = (name,value) => {
    // const { name, value } = event.target;

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
   * Social links handler
   */
  _handleKeypoints = (name,value) => {
    // const { name, value } = e.target;
    const { data } = this.state;
    const id = Number(name);
    const keypoints = formatLinksState(data.key_points, id, value);
    data.key_points = keypoints;
    this.setState({ data });
  };

  /**
   * Social Links custom validator
   */
  _isValidKeypoint = id => {
    const { data, errors } = this.state;
    const { err, isValid } = validateKeypoints(id, data.key_points, errors);
    this.setState({ errors: err });
    return isValid;
  };

  /**
   * Add Socials on keypress/click
   */
  _addMoreKeypoints = id => {
    id = Number(id);
    const valid = this._isValidKeypoint(id);

    if (valid) {
      const { data } = this.state;
      const keypoints = formatLinksSelect(data.key_points, id);
      data.key_points = keypoints;
      this.setState({ data });
    }
  };

  /* validate all keypoints */
  _isValidKeypoints = () => {
    const { data } = this.state;
    let isValid = true;
    for (let i = data.key_points.length; i > 0; i--) {
      if (i > 1 && isEmpty(data.key_points[i - 1].value)) continue;
      const valid = this._isValidKeypoint(i);
      if (!valid) {
        isValid = false;
        break;
      }
    }
    return isValid;
  };

  /**
   * Key press handler for Social Links
   *
   */
  _handleKeyPress = e => {
    if (enterPressed(e)) {
     
      this._addMoreKeypoints(e.target.name);
    }
  };

  /**
   * File handler
   *
   */
  _handleFileChange = (name, files) => {
   // const { name, files } = event.target;
    if (files) {
      const { data } = this.state;
      data[name] = files;
      this.setState(
        {
          data
        },
        () => {
          if (name === "image") {
            return this._setUrl(files, "url");
          }
          return this._setUrl(files, `${name}Url`);
        }
      );
    }
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
   * Submit type of service
   *
   * @param Event e
   */
  _submitCategory = e => {
   
    if (!this._isValid("category_id") || !this._isValid("sub_category_id")) {
      return false;
    }
    return this._goToTabIndex(this.state.tabIndex + 1);
  };

  /**
   * Submit service description
   *
   * @param Event e
   */
  _submitDescription = e => {
   
    if (!this._isValid("about") || !this._isValid("description")) {
      return false;
    }
    return this._goToTabIndex(this.state.tabIndex + 1);
  };

  /**
   * Submit service keypoints
   *
   * @param Event e
   */
  _submitKeypoints = e => {
   
    if (!this._isValidKeypoints()) return false;
    return this._goToTabIndex(this.state.tabIndex + 1);
  };

  /**
   * Submit delivery time
   *
   * @param Event e
   */
  _submitDeliveryTime = () => {
    if (!this._isValid("delivery_time") || !this._isValid("delivery_time_unit"))
      return false;
    return this._goToTabIndex(this.state.tabIndex + 1);
  };

  /**
   * Submit price
   *
   * @param Event e
   */
  _submitPrice = e => {
   
    if (!this._isValid("price")) return false;
    return this._goToTabIndex(this.state.tabIndex + 1);
  };

  /**
   * Submit title
   *
   * @param Event e
   */
  _submitTitle = e => {
   
    if (!this._isValid("title")) return false;
    return this._goToTabIndex(this.state.tabIndex + 1);
  };

  /**
   * Publish Service
   *
   * @param Event e
   */
  _publishService = () => {
    if (!this._isValid()) 
    return false;
    const publishData = formatPublishServicedata(this.state.data);
    this.props.userServicesActions.publishService(publishData).then(() => {
      const { publishService } = this.props;
      const { error, data, isRequesting } = publishService;

      if (!isEmpty(error) && error.message && !isRequesting) {
        alert(error.message);
        // return toast.error(error.message);
      }

      if (isEmpty(error) && !isEmpty(data) && !isRequesting) {
        //return history.push("/offered-services");
        this.props.navigation.navigate('NoService');
      }
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
        performWow(this.props.wowActions);
      }
    );
  };

  render() {
    const { user, categories, publishService } = this.props;
    const { tabIndex, data, errors } = this.state;

    return (
      <CreateServiceComponent
        user={user}
        data={data}
        errors={errors}
        tabIndex={tabIndex}
        categories={categories}
        submitTitle={this._submitTitle}
        publishService={publishService}
        submitPrice={this._submitPrice}
        handleSelect={this._handleSelect}
        handleChange={this._handleChange}
        submitCategory={this._submitCategory}
        handleKeyPress={this._handleKeyPress}
        _publishService={this._publishService}
        submitKeypoints={this._submitKeypoints}
        handleKeypoints={this._handleKeypoints}
        addMoreKeypoints={this._addMoreKeypoints}
        handleFileChange={this._handleFileChange}
        submitDescription={this._submitDescription}
        submitDeliveryTime={this._submitDeliveryTime}
        navigation={this.props.navigation}
        notificationCount ={this.props.notificationCount}
      />
    );
  }
}

// eslint-disable-next-line
const mapStateToProps = state => {
  return { categories: state.categories, 
    publishService: state.publishService, 
    user: state.user,
    notificationCount:state.notificationCount
  };
};

// eslint-disable-next-line
const mapDispatchToProps = dispatch => {
  return {
    marketPlaceActions: bindActionCreators(marketPlaceActions, dispatch),
    userServicesActions: bindActionCreators(userServicesActions, dispatch)
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateService);
