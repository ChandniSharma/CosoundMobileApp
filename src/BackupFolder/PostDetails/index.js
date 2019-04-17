import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { isNull } from "lodash";

import { performWow, getValueFromParams } from "../../utils";

import { postActions } from "../../actions";

import { PostDetailsComponent } from "../../components";

class PostDetails extends React.PureComponent {
  componentDidMount() {
    this._restCalls();
  }

  _restCalls = () => {
    const { user, match } = this.props;
    const id = getValueFromParams(match.params, "id");

    if (!isNull(id)) {
      this._fetchPostDetails(id, !isNull(user.token)).then(() => {
        performWow(this.props.wowActions);
      });
    }
  };

  /**
   * Fetch post
   */
  _fetchPostDetails = (id, authenticated) => {
    return this.props.postActions.fetchDedicatedPost(id, authenticated);
  };

  render() {
    const { user, dedicatedPost, match } = this.props;
    const { params } = match;
    return (
      <PostDetailsComponent
        user={user}
        routeId={params.id}
        post={dedicatedPost}
        _restCalls={this._restCalls}
      />
    );
  }
}

// eslint-disable-next-line
const mapStateToProps = state => {
  return {
    dedicatedPost: state.dedicatedPost
  };
};

// eslint-disable-next-line
const mapDispatchToProps = dispatch => {
  return {
    postActions: bindActionCreators(postActions, dispatch)
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostDetails)
);
