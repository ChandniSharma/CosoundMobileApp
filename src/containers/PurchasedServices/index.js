import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSortString } from "../../utils";
import { userServicesActions } from "../../actions";
import PurchasedServicesComponent from "../../views/PurchasedServices";

class PurchasedServices extends React.PureComponent {
  state = {};
  componentDidMount() {
    this._restCalls();
  }

  /**
   * Rest api calls
   */
  _restCalls = () => {
    this._fetchPurchasedServices(1).then(() => {
    });
  };

  /**
   * Sort
   *
   * @param string type
   */
  _sort = type => {
    this._fetchPurchasedServices(1, type).then(() => {
    });
  };

  /**
   * Fetch sorted paginated purchased servicews
   */
  _fetchPurchasedServices = (pageNo, type = null) => {
    const sort = getSortString(this.props.purchasedServices.sortType, type);
    return this.props.userServicesActions.purchasedServices(pageNo, sort);
  };

  render() {
    const { user, purchasedServices } = this.props;

    return (
      <PurchasedServicesComponent
        user={user}
        sort={this._sort}
        purchasedServices={purchasedServices}
        fetchPurchasedServices={this._fetchPurchasedServices}
        navigation={this.props.navigation}
      />
    );
  }
}

// eslint-disable-next-line
const mapStateToProps = state => {
  return { 
    purchasedServices: state.purchasedServices,
    user: state.user 
  };
};

// eslint-disable-next-line
const mapDispatchToProps = dispatch => {
  return {
    userServicesActions: bindActionCreators(userServicesActions, dispatch)
  };
};

export default (
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PurchasedServices)
);
