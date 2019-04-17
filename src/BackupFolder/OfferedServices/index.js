import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { performWow, getSortString } from "../../utils";

import { userServicesActions } from "../../actions";

import { OfferedServicesComponent } from "../../components";

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
      performWow(this.props.wowActions);
    });
  };

  /**
   * Rest api calls
   */
  _restCalls = () => {
    this._fetchOfferedServices(1).then(() => {
      performWow(this.props.wowActions);
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
      />
    );
  }
}

// eslint-disable-next-line
const mapStateToProps = state => {
  return { offeredServices: state.offeredServices };
};

// eslint-disable-next-line
const mapDispatchToProps = dispatch => {
  return {
    userServicesActions: bindActionCreators(userServicesActions, dispatch)
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(OfferedServices)
);
