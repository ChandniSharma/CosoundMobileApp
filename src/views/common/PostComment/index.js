/* eslint-disable */
import React from "react";
// import { withRouter } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { isNull, min } from "lodash";
import styles from "../../../stylesheet/profile.style";
import { FlatList, Image, ImageBackground, Text, TextInput, TouchableHighlight, TouchableWithoutFeedback,View, TouchableOpacity,Clipboard, AlertIOS,Platform, ActivityIndicator } from "react-native";

import { postActions } from "../../../actions";

import {
  checkAuth,
  getPathname,
  getThumbnail,
  readableCount
} from "../../../utils";

import Validator from "../../../validator";

import { Svg, Loader } from "../../../components/Commons";
import { Paginator } from "../../../hoc";
import CommentList from "./CommentList";

class PostComment extends React.Component {
  state = {
    comment: "",
    showComments: false
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
  _handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => this._isValid(name));
  };

  /**
   * Key press handler
   * Trigerred on Enter
   *
   */
  _handleKeyPress = () => {
    // if (e.charCode === 13 || e.keyCode === 13) {
    //   e.preventDefault();
      // this._submit();
    }
  // };

  _resetState = () => {
    this.setState({ comment: "", showComments: true });
  };

  /**
   * Auth | Post a comment
   *
   */
  _submit = () => {
    const { user, location, match } = this.props;
    const auth = checkAuth(user);
    if (auth) {
      const path = getPathname(location, match);

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
      <View style={{flex:1}}>
      <View>
      <View style={{ marginTop: "5%", marginBottom: '5%', alignItems: "center", flexDirection: 'row' }}>
          <View style={{ flex: 1, height: 1, backgroundColor: "#d3d3d3" }}>
          </View>
          <TouchableOpacity style={{
              borderRadius: 20, borderWidth: 1, borderColor: "#d3d3d3", padding: 10, justifyContent: 'center',
              alignItems: "center", flexDirection: 'row', height: 40, width: 160
          }} onPress={this._showCommentList.bind(this)}>
              <Icon3 name="comment" style={{ fontSize:20, color: "#d3d3d3",  marginRight:'2%' }} />
               <Text style={styles.textCommentCount}>9 Comments</Text>
              <View style={{
                  marginLeft: 10, flex: 1, borderRadius: 60, borderWidth: 1, borderColor: "#d3d3d3", padding: 10,
                  justifyContent: 'center', alignItems: "center", height: 40, width: 160
              }}>
              <Icon6 name="down" style={{ fontSize:20, color: "#d3d3d3",  marginRight:'2%' }} />
              </View>
          </TouchableOpacity>
          <View style={{ flex: 1, height: 1, backgroundColor: "#d3d3d3" }} />
      </View>
      {this.state.isCommentTableShow ? <View style={{ width: '100%', marginBottom: '2%' }}>
          
      </View> : null}
  </View>
     
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

<TextInput
        style={styles.textWriteSomething}
        onChangeText={(text) => this.setState({ text })}
        value={this.state.text}
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

 // <div className="d-card__comments">
      //   <div className="d-card__comments-head">
      //     <div
      //       className={`d-card__comments-toggle ${showComments && "is-opened"}`}
      //     >
      //       <div className="d-card__comments-text">
      //         <Svg name="ico-comment" />
      //         <span>{`${readableCount(post.comment_count)} comments`}</span>
      //       </div>
      //       <div
      //         className="d-card__comments-arrow"
      //         onClick={() => this._toggleComments(post.id)}
      //       >
      //         {fetchComment.isRequesting === post.id && !showComments ? (
      //           <Loader
      //             width={"8px"}
      //             height={"5px"}
      //             fill={"#9a9a9a"}
      //             className={"playLoader"}
      //           />
      //         ) : (
      //           <Svg name="ico-select-down" />
      //         )}
      //       </div>
      //     </div>
      //   </div>


      // <div className="d-card__reply">
        //   <div className="avatar avatar--shad">
        //     <img src={getThumbnail(user.data)} alt="avatar" />
        //   </div>
        //   <textarea
        //     name="comment"
        //     value={comment}
        //     placeholder="Write a comment"
        //     onKeyPress={e => this._handleKeyPress(e)}
        //     onChange={e => this._handleChange(e)}
        //     disabled={postComment.isRequesting}
        //   />
        // </div>
      // </div>