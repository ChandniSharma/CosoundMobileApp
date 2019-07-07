import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { isNull } from "lodash";
import NotificationComponent from '../../views/common/Notifications';

import {
  isSuccess,
  getRefreshThreshold,
  resetNotification
} from "../../utils";

import {
  authActions,
  userActions,
  notificationActions
} from "../../actions";

class Notifications extends React.PureComponent {
  checkIfRefreshedInterval = null;
  
  componentDidMount() {   
    this._restCalls();
  }

  _restCalls = () => {
    if (!isNull(this.props.user.token)) {
      const refreshThreshold = getRefreshThreshold(this.props.user.expiresAt);
      if (!refreshThreshold) {
        return this.props.userActions.fetchAuthUser().then(() => {
          return this.props.userActions.fetchCartCount().then(() => {
            return this.props.notificationActions.fetchCount();
          });
        });
      } else {
        this.checkIfRefreshedInterval = setInterval(() => {
          this._checkIfRefreshed();
        }, 5000);
      }
    }
  };

  /**
   * Fetch Notification on click
   */
  _fetchNotifications = () => {
    return this.props.notificationActions.fetch(1).then(() => {
      if (isSuccess(this.props.notifications)) {
        resetNotification(
          this.props.notificationActions,
          this.props.notifications.data,
          "seen"
        );
      }
    });
  };

  /**
   * Check if token refreshed in interval
   */
  _checkIfRefreshed = () => {
    const refreshThreshold = getRefreshThreshold(this.props.user.expiresAt);
    if (!refreshThreshold) {
      clearInterval(this.checkIfRefreshedInterval._id);
      this._restCalls();
    }
  };

  /**
   * Logout
   */
  _logout = () => {
    const { userActions } = this.props;
    userActions.logout().then(() => {
    });
  };

  render() {
    const {
      user,
      logout,
      cartCount,
      userActions,
      headerCategories,
      notificationCount
    } = this.props;
    return(
      <NotificationComponent 
        user={user}
        logout={logout}
        cartCount={cartCount}
        _logout={this._logout}
        headerCategories={headerCategories}
        notificationCount={notificationCount}
        fetchNotifications={this._fetchNotifications}
        navigation ={this.props.navigation}
        />
    )
  }
}

// eslint-disable-next-line

const mapStateToProps = state => {
  return {
    user: state.user,
    logout: state.logout,
    cartCount: state.cartCount,
    notifications: state.notifications,
    headerCategories: state.headerCategories,
    notificationCount: state.notificationCount
  };
};

// eslint-disable-next-line
const mapDispatchToProps = dispatch => {
  return {
    notificationActions: bindActionCreators(notificationActions, dispatch),
    authActions: bindActionCreators(authActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifications);
