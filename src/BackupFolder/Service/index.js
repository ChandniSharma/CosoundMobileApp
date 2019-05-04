import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { isNull } from "lodash";

import { performWow, history, getValueFromParams } from "../../utils";

import { serviceActions, cartActions } from "../../actions";

import { ServiceComponent } from "../../components";

class Service extends React.PureComponent {
  componentDidMount() {
    this._restCalls();
  }

  componentDidUpdate(prevProps) {
    if (
      getValueFromParams(prevProps.match.params, "id") !==
      getValueFromParams(this.props.match.params, "id")
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
        performWow(this.props.wowActions);
        this._fetchReviews(1);
      });
    }
  };

  /**
   * Get service_id from params
   */
  _getServiceId = () => {
    return getValueFromParams(this.props.match.params, "id");
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
        return history.push("/cart");
      });
    }
  };

  render() {
    const { match, service, reviews, addToCart } = this.props;
    const { params } = match;
    return (
      <ServiceComponent
        id={params.id}
        service={service}
        reviews={reviews}
        addToCart={addToCart}
        _addToCart={this._addToCart}
        fetchReviews={this._fetchReviews}
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Service)
);