import React from "react";
import { isNull } from "lodash";
import { connect } from "react-redux";
// import { withRouter } from "react-router";
import { bindActionCreators } from "redux";
import styles from '../../../stylesheet/AdvancedSearchView.style'
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions, FlatList, ActivityIndicator } from 'react-native';

import { client } from "../../../services";

import { isSuccess, resetNotification, history } from "../../../utils";

import { notificationActions } from "../../../actions";
import * as Animatable from 'react-native-animatable';
import { Paginator } from "../../../hoc";
import NotificationList from "./NotificationList";

class Notifications extends React.PureComponent {
  subscription = null;
  fadeInDown = () => this.refs.notificationView.fadeInDown(1000);
  fadeInUp = () => this.refs.notificationView.fadeInUp(500);

  componentDidMount() {
    const { user } = this.props;
    const { get_stream_token, data } = user;
    this.fadeInUp();
    this.props.fetchNotifications();

    /* getstream.io notification subscribe */

    // if (get_stream_token && get_stream_token.notification && data.id) {
    //   const notification = client.feed(
    //     "notification",
    //     data.id,
    //     get_stream_token.notification
    //   );
    //   this.subscription = notification.subscribe(data => {
    //     this._handleSubscription(data);
    //   });
    // }
  }

  /**
   * Notification subscription handler
   */
  _handleSubscription = data => {
    return this.props.notificationActions.fetchCount();
  };

  /* cancel subscribe on unmount */
  componentWillUnmount() {
    
    if (!isNull(this.subscription)) {
      this.subscription.cancel();
    }
    this.fadeInDown();
    
  }

  /**
   * Fetch paginated notifications
   */
  _fetchNotifications = pageNo => {
    return this.props.notificationActions.fetch(pageNo).then(() => {
      if (isSuccess(this.props.notifications)) {
        return resetNotification(
          this.props.notificationActions,
          this.props.notifications.data,
          "seen"
        );
      }
    });
  };

  /**
   * Mak notification as read
   */
  _markAsRead = (id = null) => {
    if (isNull(id)) {
      return this.props.close();
    }
    resetNotification(this.props.notificationActions, [id], "read");
    return this.props.close();
  };

  render() {
    const { show, notifications, scroll } = this.props;
    const { paginationData } = notifications;

console.log(" notificcations Props ====", this.props);

    return (
      <Animatable.View ref={'notificationView'} style={styles.containerNotification}>

      <View style={styles.topView}>
          <Text style={styles.textTitle}> Notifications </Text>
      </View>
      <Paginator
            isLoaderInternal
            shouldCallAPIInitially
            page={paginationData.page}
            component={NotificationList}
            markAsRead={this._markAsRead}
            notifications={notifications}
            callApi={paginationData.callApi}
            callAPI={this._fetchNotifications}
          />
  </Animatable.View>

    );
    // return (
    //   <
    //     className={`ntf ntf--fixed ${show ? "is-active" : ""} ${
    //       scroll ? "is-scrolled" : ""
    //     }`}
    //   >
    //     <div className="ntf__title">Notifications</div>
    //     <div className="ntf__wrapper">
    //       <Paginator
    //         isLoaderInternal
    //         shouldCallAPIInitially
    //         page={paginationData.page}
    //         component={NotificationList}
    //         markAsRead={this._markAsRead}
    //         notifications={notifications}
    //         callApi={paginationData.callApi}
    //         callAPI={this._fetchNotifications}
    //       />
    //     </div>
    //   </div>
    // );
  }
}

const mapStateToProps = state => {
  return {
    notifications: state.notifications
  };
};

// eslint-disable-next-line
const mapDispatchToProps = dispatch => {
  return {
    notificationActions: bindActionCreators(notificationActions, dispatch)
  };
};

export default  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Notifications);
