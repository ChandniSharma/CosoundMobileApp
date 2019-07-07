/* eslint-disable */
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { isNull, min } from "lodash";
import styles from "../../../stylesheet/profile.style";
import { Text, TextInput, View, TouchableOpacity, ActivityIndicator } from "react-native";
import Icon3 from "react-native-vector-icons/FontAwesome";
import Icon6 from "react-native-vector-icons/AntDesign";
import { postActions } from "../../../actions";
import {
  checkAuth,
  getPathname,
  readableCount
} from "../../../utils";
import Validator from "../../../validator";
import { Paginator } from "../../../hoc";
import CommentList from "./CommentList";

class PostComment extends React.Component {
  state = {
    comment: "",
    showComments: false,
    isCommentTableShow: true,

  };
  componentDidUpdate() {
    const { fetchComment, post } = this.props;
    const { showComments } = this.state;
    const condition = fetchComment.postId !== post.id && showComments;
    if (condition) {
      this.setState({ showComments: false });
    }
  }

  _toggleComments = id => {
    const { showComments } = this.state;
    if (showComments) {
      this.setState({
        showComments: false
      });
      return;
    }

    this._fetchComments(1, id).then(() => {
      this.setState({
        showComments: true
      });
    });
  };

  _isValid = (field = null) => {
    const validate = Validator.createValidator(
      {
        comment: ["required"]
      },
      this.state,
      field
    );

    const { isValid } = validate;
    return isValid;
  };

  /**
   * Comment text input handler
   *
   */
  _handleChange = (name, value) => {
    this.setState({ [name]: value }, () => this._isValid(name));
  };

  /**
   * Key press handler
   * Trigerred on Enter
   *
   */
  _handleKeyPress = () => {
    this._submit();
  }

  _resetState = () => {
    this.setState({ comment: "", showComments: true });
  };

  /**
   * Auth | Post a comment
   *
   */
  _submit = () => {
    const { user, pathName } = this.props;
    const auth = checkAuth(user);
    if (auth) {
      const path = pathName;
      if (this._isValid()) {
        const { comment } = this.state;
        const { post, postActions } = this.props;
        const data = {
          comment
        };
        postActions.postComment(data, post.id, path).then(() => {
          this._resetState();
        });
      }
    }
  };

  /**
   * Fetch Paginated Comments
   */
  _fetchComments = (pageNo, id = null) => {
    const { postActions, fetchComment } = this.props;
    if (isNull(id)) {
      id = fetchComment.postId;
    }
    if (!isNull(id)) {
      return postActions.fetchComments(id, pageNo);
    }
  };

  /**
   * Delete Comment
   * Fetches the immediate succesor
   *
   */
  _deleteComment = commentId => {
    const {
      user,
      post,
      match,
      location,
      postActions,
      fetchComment
    } = this.props;
    const auth = checkAuth(user);
    if (auth) {
      const path = getPathname(location, match);
      const minId = min(fetchComment.data.map(item => item.id));
      postActions.deleteComment(post.id, commentId, minId, path);
    }
  };
  render() {
    const { post, user, postComment, fetchComment, deleteComment } = this.props;
    const { comment, showComments } = this.state;
    const { paginationData } = fetchComment;
    return (
      <View style={{ flex: 1 }}>
        <View>
          <View style={{ marginTop: "5%", marginBottom: '5%', alignItems: "center", flexDirection: 'row' }}>
            <View style={{ flex: 1, height: 1, backgroundColor: "#d3d3d3" }}>
            </View>
            <TouchableOpacity style={{
              borderRadius: 20, borderWidth: 1, borderColor: "#d3d3d3", justifyContent: 'center',
              alignItems: "center", flexDirection: 'row', height: 40, width: 160
            }} onPress={() => this._toggleComments(post.id)}>
              <Icon3 name="comment" style={{ fontSize: 20, color: "#8e8e8e", marginLeft: '2%', marginRight: '2%' }} />
              <Text style={[styles.textCommentCount, { marginRight: '2%' }]}>{`${readableCount(post.comment_count)} comments`}</Text>
              <View style={{
                flex: 1, borderRadius: 60, borderWidth: 1, borderColor: "#d3d3d3",
                justifyContent: 'center', alignItems: "center", height: 40, width: 60, marginTop: '2%'
              }}>
                {fetchComment.isRequesting === post.id && !showComments ? (
                  <ActivityIndicator color="gray" />
                ) :
                  <Icon6 name={showComments ? "up" : "down"} style={{ fontSize: 18, color: "#8e8e8e" }} />
                }
              </View>
            </TouchableOpacity>
            <View style={{ flex: 1, height: 1, backgroundColor: "#d3d3d3" }} />
          </View>
          {showComments ? <View style={{ width: '100%', marginBottom: '2%' }}>
            <Paginator
              user={user}
              isLoaderInternal
              shouldCallAPIInitially
              component={CommentList}
              page={paginationData.page}
              fetchComment={fetchComment}
              showComments={showComments}
              deleteComment={deleteComment}
              callAPI={this._fetchComments}
              _deleteComment={this._deleteComment}
              page_count={paginationData.page_count}
            />
          </View> : null}
        </View>
        <TextInput
          style={styles.textWriteSomething}
          onChangeText={(text) => this._handleChange('comment', text)}
          value={comment}
          placeholder="Write a comment"
          disabled={postComment.isRequesting}
          onSubmitEditing={() => this._handleKeyPress()}
        />
      </View>
    );
  }
}

// eslint-disable-next-line
const mapStateToProps = state => {
  return {
    user: state.user,
    postComment: state.postComment,
    fetchComment: state.fetchComment,
    deleteComment: state.deleteComment
  };
};

// eslint-disable-next-line
const mapDispatchToProps = dispatch => {
  return {
    postActions: bindActionCreators(postActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostComment);