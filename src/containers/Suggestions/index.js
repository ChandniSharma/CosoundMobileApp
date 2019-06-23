import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//import { toast } from "react-toastify";
import { isNull } from "lodash";

//import { performWow } from "../../utils";

import { suggestionActions, userActions } from "../../actions";

import SuggestionComponent from "../../views/SuggestionComponent";

class Suggestions extends React.PureComponent {
  state = {
   isShowSuggestion: false
  }

  componentDidMount() {
    const { wowActions, signup } = this.props;

    this._fetchSuggestions(1).then(() => {
     // performWow(wowActions);
     this.setState({
      isShowSuggestion : true
     })
    });

    if (signup.data.message) {
      alert(signup.data.message);
      //return toast.info(signup.data.message);
    }
  }

  /**
   * Fetch Paginated Suggestions
   */
  _fetchSuggestions = pageNo => {
    const { suggestionActions, user } = this.props;
    if (!isNull(user.token)) {
      return suggestionActions.fetchSuggestions(pageNo);
    }
  };

  /**
   * Follow/Unfollow user
   */
  _followUser = id => {
    const { userActions, user } = this.props;
    if (!isNull(user.token)) {
      userActions.followUser(id);
    }
  };

  render() {
    const { suggestions, follow, navigation } = this.props;
    const { isShowSuggestion } = this.state;
    return (
      <SuggestionComponent
        navigate={navigation}
        follow={follow}
        suggestions={suggestions}
        followUser={this._followUser}
        callAPI={this._fetchSuggestions}
        isShowSuggestion={isShowSuggestion}
      />
    );
  }
}

// eslint-disable-next-line
const mapStateToProps = state => {
  return {
    follow: state.follow,
    suggestions: state.suggestions,
    signup: state.signup,
    user: state.user
  };
};

// eslint-disable-next-line
const mapDispatchToProps = dispatch => {
  return {
    suggestionActions: bindActionCreators(suggestionActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Suggestions);
