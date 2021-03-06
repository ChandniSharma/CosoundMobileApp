import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { isNull } from "lodash";
import { getValueFromParams } from "../../utils";
import { serviceActions, cartActions } from "../../actions";
import ServiceComponent from "../../views/ServiceComponent";

class Service extends React.PureComponent {
  componentDidMount() {
    this._restCalls();
  }

  componentDidUpdate(prevProps) {   
    if (
      getValueFromParams(prevProps.navigation.state.params, "id") !==
      getValueFromParams(this.props.navigation.state.params, "id")
    ) {
      this._restCalls();
    }
  }

  /**
   * Rest api calls
   */
  _restCalls = () => {
    if (!isNull(this._getServiceId())) {
      this._fetchService(this._getServiceId()).then(() => {
      this._fetchReviews(1);
      });
    }
  };

  /**
   * Get service_id from params
   */
  _getServiceId = () => {
    return getValueFromParams(this.props.navigation.state.params, "id");
  };

  /**
   * Fetch service details
   */
  _fetchService = id => {
    return this.props.serviceActions.fetch(id);
  };

  /**
   * Fetch paginated reviews
   */
  _fetchReviews = pageNo => {
    return this.props.serviceActions.fetchReviews(this._getServiceId(), pageNo);
  };

  _addToCart = () => {
    if (!isNull(this._getServiceId())) {
      this.props.cartActions.toggle(this._getServiceId()).then(() => {
      this.props.navigation.navigate("Cart");
      });
    }
  };

  render() {
    const { navigation, service, reviews, addToCart } = this.props;
    const { params } = navigation.state;
    return (
      <ServiceComponent
        id={params.id}
        service={service}
        reviews={reviews}
        addToCart={addToCart}
        _addToCart={this._addToCart}
        fetchReviews={this._fetchReviews}
        navigation={this.props.navigation}
      />
    );
  }
}

// eslint-disable-next-line
const mapStateToProps = state => {
  return {
    reviews: state.reviews,
    service: state.service,
    addToCart: state.addToCart
  };
};

// eslint-disable-next-line
const mapDispatchToProps = dispatch => {
  return {
    cartActions: bindActionCreators(cartActions, dispatch),
    serviceActions: bindActionCreators(serviceActions, dispatch)
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Service);
