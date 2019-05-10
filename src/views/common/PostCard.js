import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";
import { isNull, isEmpty } from "lodash";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import { postActions } from "../../actions";

import {
  getPost,
  isSuccess,
  checkAuth,
  getPathname,
  getThumbnail,
  formatPostMedia
} from "../../utils";

import {
  Like,
  Repost,
  CardOptions,
  SocialShare,
  MediaElement,
  PostMusicPlayer
} from "../../components/Commons";
import { PostComment } from "../index";
import ShareLine from "./ShareLine";

import * as poster from "../../assets/styles/img/post-image-1.jpg";

import { visitorLinks } from "./cardOptions";

const config = {};
const tracks = {};

class PostCard extends React.PureComponent {
  state = {
    isVisible: false,
    showSocial: false
  };

  /**
   * Toggle Card Menu
   */
  _toggleVisible = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  };

  /**
   * Toggle Social Share Menu
   */
  _toggleSocial = id => {
    const { showSocial } = this.state;
    if (showSocial === id) {
      return this.setState({ showSocial: false });
    }
    return this.setState({ showSocial: id });
  };

  /**
   * Like/Unlike Post
   */
  _likePost = id => {
    const { postActions, user, location, match } = this.props;
    const auth = checkAuth(user);
    if (auth) {
      const path = getPathname(location, match);
      postActions.likePost(id, path);
    }
  };

  /**
   * Delete Post
   */
  _deletePost = id => {
    const { postActions, user } = this.props;
    const auth = checkAuth(user);
    if (auth) {
      postActions.deletePost(id).then(() => {
        if (isSuccess(this.props.deletePost)) {
          this.props._restCalls();
        }
      });
    }
  };

  /**
   * Confirm pre-repost
   */
  _confirmRepost = id => {
    const { user, postActions } = this.props;
    const auth = checkAuth(user);
    if (auth) {
      confirmAlert({
        title: "Confirm to repost",
        message: "Are you sure you want to share.",
        buttons: [
          {
            label: "Yes",
            onClick: () =>
              postActions.repost(id).then(() => {
                if (isSuccess(this.props.repost)) {
                  this.props._restCalls();
                }
              })
          },
          {
            label: "No",
            onClick: () => {}
          }
        ]
      });
    }
  };

  /**
   * Post Media Construct
   */
  _renderPostBody = (media, postId) => {
    switch (media.file_type) {
      case "video":
        return (
          <MediaElement
            key={media.id}
            id={`player-${postId}`}
            mediaType="video"
            preload="none"
            controls
            width={"100%"}
            height={"100%"}
            poster={
              !isNull(media.metadata) && !isNull(media.metadata.thumbnail)
                ? media.metadata.thumbnail
                : poster
            }
            sources={JSON.stringify(media)}
            options={JSON.stringify(config)}
            tracks={JSON.stringify(tracks)}
          />
        );
      case "audio":
        return <PostMusicPlayer source={media} key={media.id} height={100} />;

      case "image":
        return (
          <div className="m-img-row__col" key={media.id}>
            <div className="m-image">
              <img
                src={
                  !isNull(media.metadata) && media.metadata.thumbnail_normal
                    ? media.metadata.thumbnail_normal
                    : media.path
                }
                alt="image"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  _renderSingleImage = media => {
    return (
      <div className="m-image" key={media.id}>
        <img
          src={
            !isNull(media.metadata) && media.metadata.thumbnail_normal
              ? media.metadata.thumbnail_normal
              : media.path
          }
          alt="image"
        />
      </div>
    );
  };

  render() {
    const { user, like, deletePost, post, repost } = this.props;
    const { isVisible, showSocial } = this.state;
    const postedBySelf = post.user_id === user.data.id;
    const originalPost = getPost(post);
    const { images, notImages } = formatPostMedia(originalPost.media);

    return (
      <div
        className="d-card wow fadeInUp"
        data-wow-delay=".2s"
        id={`post-${post.id}`}
      >
        <div className="d-card__head">
          <div className="d-card__user">
            <div className="avatar avatar--mid">
              <img src={getThumbnail(post)} alt="avatar" />
            </div>
            <div className="d-card__user-info">
              <ShareLine post={post} userId={user.data.id} />
              <div className="d-card__user-position">{`${post.type} / ${
                post.artist_name
              }`}</div>
            </div>
          </div>
          <CardOptions
            id={post.id}
            className={"d-card"}
            isVisible={isVisible}
            deleteState={deletePost}
            _delete={this._deletePost}
            visitorLinks={visitorLinks}
            postedBySelf={postedBySelf}
            toggleVisible={this._toggleVisible}
          />
        </div>
        <div className="d-card__content">
          <pre>{originalPost.body}</pre>

          {!isEmpty(images) && images.length === 1 ? (
            images.map(item => {
              return this._renderSingleImage(item);
            })
          ) : !isEmpty(images) && images.length > 1 ? (
            <div className="m-img-row" data-images="2">
              {images.map(item => {
                return this._renderPostBody(item, post.id);
              })}
            </div>
          ) : null}
          {notImages.map(item => {
            return this._renderPostBody(item, post.id);
          })}
        </div>
        <div className="d-card__actions">
          <Like post={post} like={like} likePost={this._likePost} />

          <Repost post={post} repost={repost} onClick={this._confirmRepost} />

          <SocialShare
            post={originalPost}
            show={showSocial}
            toggleSocial={this._toggleSocial}
          />
        </div>
        <PostComment user={user} post={post} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    repost: state.repost,
    user: state.user,
    like: state.like,
    deletePost: state.deletePost
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
  )(PostCard)
);
