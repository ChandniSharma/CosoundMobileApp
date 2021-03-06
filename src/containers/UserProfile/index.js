import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { isNull } from "lodash";
import { userProfileActions } from "../../actions";
import UserProfileComponent from "../../views/UserProfile";

class UserProfile extends React.PureComponent {
  componentDidMount() {
    this._restCallsOnMount();
  }

  componentDidUpdate(prevProps) {
    if (this.props.navigation.state.params.id !==
      prevProps.navigation.state.params.id
    ) {
      this._restCallsOnMount();
    }
  }

  _restCallsOnMount = () => {
    const { user } = this.props;
    const id = this._getUserId();

    if (!isNull(id)) {
      this._fetchUser(id, !isNull(user.token)).then(() => {
        this._fetchUserMusic(1).then(() => {
          this._fetchUserImages(1).then(() => {
            this._fetchUserFeed(1).then(() => {
            });
          });
        });
      });
    }
  };

  _restCalls = () => {
    if (!isNull(this._getUserId())) {
      this._fetchUserFeed(1).then(() => {
      });
    }
  };

  _getUserId = () => {
    return this.props.navigation.state.params.id;
  };

  _fetchUser = (id, authenticated) => {
    return this.props.userProfileActions.fetchUser(id, authenticated);
  };

  /**
   * Fetch My Music
   */
  _fetchUserMusic = pageNo => {
    return this.props.userProfileActions.fetchUserMusic(
      this._getUserId(),
      pageNo
    );
  };

  /**
   * Fetch My Images
   */
  _fetchUserImages = pageNo => {
    return this.props.userProfileActions.fetchUserImages(
      this._getUserId(),
      pageNo
    );
  };

  /**
   * Fetch paginated feed
   */
  _fetchUserFeed = pageNo => {
    return this.props.userProfileActions.fetchUserFeed(
      this._getUserId(),
      pageNo
    );
  };

  
  render() {
    const {
      userMusic,
      userImages,
      userProfile,
      userProfileFeed
    } = this.props;
   
    return (
      <UserProfileComponent
        id={this.props.navigation.state.params.id}
        user={userProfile}
        myMusic={userMusic}
        myImages={userImages}
        _restCalls={this._restCalls}
        userFeed={userProfileFeed}
        fetchFeed={this._fetchUserFeed}
        fetchMyMusic={this._fetchUserMusic}
        fetchMyImages={this._fetchUserImages}
        navigation={this.props.navigation}
      />
    );
  }
}

// eslint-disable-next-line
const mapStateToProps = state => {
  return {
    userMusic: state.userMusic,
    userImages: state.userImages,
    userProfile: state.userProfile,
    userProfileFeed: state.userProfileFeed,
    user: state.user
  };
};

// eslint-disable-next-line
const mapDispatchToProps = dispatch => {
  return {
    userProfileActions: bindActionCreators(userProfileActions, dispatch)
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserProfile);
