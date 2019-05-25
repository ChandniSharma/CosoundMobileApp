import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//import { performWow } from "../../utils";

import { userFeedActions, userActions } from "../../actions";

import ProfileComponent from "../../views/Profile";


class Profile extends React.PureComponent {
  componentDidMount() {
    this._restCallsOnMount();
  }

  /**
   * Api Calls
   *
   */
  _restCallsOnMount = () => {
    this._fetchMyMusic(1).then(() => {
      this._fetchMyImages(1).then(() => {
        this._fetchFeed(1).then(() => {
          console.log("25===", this.props)
        //  performWow(this.props.wowActions);
        });
      });
    });
  };

  _restCalls = () => {
    this._fetchFeed(1).then(() => {
     // performWow(this.props.wowActions);
    });
  };

  /**
   * Fetch My Music
   */
  _fetchMyMusic = pageNo => {
    return this.props.userActions.fetchMyMusic(pageNo);
  };

  /**
   * Fetch My Images
   */
  _fetchMyImages = pageNo => {
    return this.props.userActions.fetchMyImages(pageNo);
  };

  /**
   * Fetch paginated feed
   */
  _fetchFeed = pageNo => {
    return this.props.userFeedActions.fetchFeed(pageNo);
  };

  render() {
    const { user, userFeed, userFeedActions, myMusic, myImages, navigation } = this.props;

    return (
      <ProfileComponent
      navigation={navigation}
        user={user}
        myMusic={myMusic}
        userFeed={userFeed}
        myImages={myImages}
        _restCalls={this._restCalls}
        fetchFeed={this._fetchFeed}
        userFeedActions={userFeedActions}
        fetchMyMusic={this._fetchMyMusic}
        fetchMyImages={this._fetchMyImages}
      />
    );
  }
}

// eslint-disable-next-line
const mapStateToProps = state => {
  return {
    userFeed: state.userFeed,
    postStatus: state.postStatus,
    myMusic: state.myMusic,
    myImages: state.myImages,
    user: state.user
  };
};

// eslint-disable-next-line
const mapDispatchToProps = dispatch => {
  return {
    userFeedActions: bindActionCreators(userFeedActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
