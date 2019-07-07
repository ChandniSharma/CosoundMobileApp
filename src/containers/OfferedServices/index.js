import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSortString } from "../../utils";
import { userServicesActions } from "../../actions";
import OfferedServicesComponent from "../../views/OfferedServices";

class OfferedServices extends React.PureComponent {
  componentDidMount() {
    this._restCalls();
  }

  /**
   * Sort
   *
   * @param string type
   */
  _sort = type => {
    this._fetchOfferedServices(1, type).then(() => {
    });
  };

  /**
   * Rest api calls
   */
  _restCalls = () => {
    this._fetchOfferedServices(1).then(() => {
    });
  };

  /**
   * Fetch paginated offered servicews
   */
  _fetchOfferedServices = (pageNo, type = null) => {
    const sort = getSortString(this.props.offeredServices.sortType, type);
    return this.props.userServicesActions.offeredServices(pageNo, sort);
  };

  render() {
    const { user, offeredServices } = this.props;

    return (
      <OfferedServicesComponent
        user={user}
        sort={this._sort}
        offeredServices={offeredServices}
        fetchOfferedServices={this._fetchOfferedServices}
        navigation={this.props.navigation}
        notificationCount = {this.props.notificationCount}
      />
    );
  }
}

// eslint-disable-next-line
const mapStateToProps = state => {
  return { offeredServices: state.offeredServices,
    notificationCount:state.notificationCount,
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
  )(OfferedServices)
);
