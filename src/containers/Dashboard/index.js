import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { isNull } from "lodash";
import { feedActions, postStatusActions } from "../../actions";
import DashboardComponent from "../../views/Dashboard";

class Dashboard extends React.PureComponent {
  subscription = null;
  postPollInterval = null;

  componentDidMount() {
    this._restCalls();

    const { user } = this.props;
    //const {  data } = user;
    /* getstream.io subscribe */
    // if (get_stream_token && get_stream_token.timeline && data.id) {
    //   const timeline = client.feed(
    //     "timeline",
    //     data.id,
    //     get_stream_token.timeline
    //   );
    //   this.subscription = timeline.subscribe(data => {
    //     this._handleSubscription(data);
    //   });
    // }
  }

  /* cancel subscribe on unmount */
  componentWillUnmount() {
    if (!isNull(this.subscription)) {
      this.subscription.cancel();
    }
  }

  /**
   * Subscription Handler
   * Enrich getstream feed
   *
   */
  _handleSubscription = data => {
    const { user, feedActions, location, postStatusActions, wow } = this.props;
    const { pathname } = location;
    const newData = data.new[0];
    if (newData) {
      const userIdArray = newData.actor.split(":");
      const userId = userIdArray[1];

      if (user.data.id !== userId) {
        return feedActions.enrichData(data, wow.wow).then(() => {
          const { enrich } = this.props;
          const resp = enrich.data[0];

          if (resp) {
            let mediaTypes = [];

            if (resp.media && !isNull(resp.media)) {
              mediaTypes = resp.media.map(item => {
                return item.file_type;
              });
            }

            this.postPollInterval = setInterval(() => {
              postStatusActions.checkPostStatus(
                resp.id,
                pathname,
                mediaTypes,
                this.postPollInterval
              );
            }, 5000);
          }
        });
      }
    }
  };

  /**
   * Rest Calls on mount and post actions
   *
   */
  _restCalls = () => {
    this._fetchFeed(1).then(() => {
     // performWow(this.props.wowActions);
    });
  };

  /**
   * Reset unread post count
   */
  _resetUnreadCount = () => {
    const { feedActions } = this.props;
    return feedActions.resetUnreadCount();
  };

  /**
   * Fetch paginated feed
   */
  _fetchFeed = pageNo => {
    const { feedActions } = this.props;
    return feedActions.fetchFeed(pageNo);
  };

  render() {
    const { user, feed, navigation } = this.props;

    return (
      <DashboardComponent
      navigation={navigation}
        user={user}
        userFeed={feed}      
        _restCalls={this._restCalls}
        fetchFeed={this._fetchFeed}
        resetUnreadCount={this._resetUnreadCount}
      />
    );
  }
}

// eslint-disable-next-line
const mapStateToProps = state => {
  return {
    wow: state.wow,
    feed: state.feed,
    enrich: state.enrich,
    user: state.user
  };
};

// eslint-disable-next-line
const mapDispatchToProps = dispatch => {
  return {
    feedActions: bindActionCreators(feedActions, dispatch),
    postStatusActions: bindActionCreators(postStatusActions, dispatch)
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard);
