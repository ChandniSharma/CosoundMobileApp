import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { isNull } from "lodash";
import { performWow, getValueFromParams } from "../../utils";
import { userProfileActions } from "../../actions";
import Profile from "../../views/Profile";

class UserProfile extends React.PureComponent {
  componentDidMount() {
    this._restCallsOnMount();
  }

  // componentDidUpdate(prevProps) {
  //   if (
  //     getValueFromParams(prevProps.match.params, "id") !==
  //     getValueFromParams(this.props.match.params, "id")
  //   ) {
  //     this._restCallsOnMount();
  //   }
  // }

  _restCallsOnMount = () => {
    const { user } = this.props;
    const id = this._getUserId();

    if (!isNull(id)) {
      this._fetchUser(id, !isNull(user.token)).then(() => {
      //  performWow(wowActions);
        this._fetchUserMusic(1).then(() => {
          this._fetchUserImages(1).then(() => {
            this._fetchUserFeed(1).then(() => {
             // performWow(wowActions);
            });
          });
        });
      });
    }
  };

  _restCalls = () => {
    if (!isNull(this._getUserId())) {
      this._fetchUserFeed(1).then(() => {
       // performWow(this.props.wowActions);
      });
    }
  };

  _getUserId = () => {
    return getValueFromParams(this.props.match.params, "id");
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
      match,
      userMusic,
      userImages,
      userProfile,
      userProfileFeed
    } = this.props;
    const { params } = match;

    return (
      <Profile
        id={params.id}
        user={userProfile}
        userMusic={userMusic}
        userImages={userImages}
        _restCalls={this._restCalls}
        userProfileFeed={userProfileFeed}
        fetchUserFeed={this._fetchUserFeed}
        fetchUserMusic={this._fetchUserMusic}
        fetchUserImages={this._fetchUserImages}
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
    userProfileFeed: state.userProfileFeed
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
