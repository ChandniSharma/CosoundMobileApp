import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";
import { isEmpty, isNull, each } from "lodash";
import { toast } from "react-toastify";

import Validator from "../../validator";

import { postStatusActions } from "../../actions";

import { fileReader, isError, getUniqueId } from "../../utils";

import {
  Svg,
  Loader,
  ErrorMsg,
  SubmitButtonDiv
} from "../../components/Commons";
import RenderTempFile from "./RenderTempFile";

class PostStatus extends React.PureComponent {
  node = null;
  audioNode = null;
  state = {
    current: "music",
    body: "",
    urls: [],
    types: [],
    files: [],
    errors: {}
  };

  componentDidUpdate() {
    const { tempFile } = this.props;
    if (!isNull(tempFile.file)) {
      this.props.postStatusActions.resetTempFile();
      this._setFileInState(tempFile.file);
    }
  }

  /* Refs */
  _applyRef = node => {
    this.node = node;
  };

  _applyAudioRef = node => {
    this.audioNode = node;
  };

  /**
   * Set in State on upload from My Sections
   */
  _setFileInState = file => {
    const id = getUniqueId();
    this.setState(
      {
        files: [
          ...this.state.files,
          {
            id,
            file
          }
        ]
      },
      () => {
        this._setUrl(file, id);
      }
    );
  };

  _isValid = (field = null) => {
    const validate = Validator.createValidator(
      {
        body: ["requiredIf|files"],
        files: ["requiredIf|body", "maxArrayLength|5", "fileSize|10000000"]
      },
      this.state,
      field
    );

    const { isValid, errors } = validate;
    this.setState({ errors });
    return isValid;
  };

  /**
   * Reset Post Status Form
   */
  _resetState = () => {
    this.setState(
      {
        current: "music",
        body: "",
        urls: [],
        files: [],
        types: []
      },
      () => {
        // if (!isNull(this.node)) {
        //   this.node.remove();
        // }
        // if (!isNull(this.audioNode)) {
        //   this.audioNode.remove();
        // }
        if (isError(this.props.postStatus)) {
          toast.error(this.props.postStatus.error.message);
        }
      }
    );
  };

  /**
   * Status Text Handler
   */
  _handleChange = e => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value
      },
      () => this._isValid(name)
    );
  };

  /**
   * File Input handler
   */
  _handleFileChange = e => {
    const { name, files } = e.target;
    const { files: filesInState } = this.state;
    let newFiles = [...filesInState];
    each(files, file => {
      if (file) {
        const id = getUniqueId();
        newFiles = [
          ...newFiles,
          {
            id,
            file
          }
        ];
        this._setUrl(file, id);
      }
    });
    this.setState({
      [name]: [...newFiles]
    });
  };

  /**
   * Read the temp file source for rendering
   *
   */

  _setUrl = (file, id) => {
    fileReader(file).then(url => {
      this.setState(
        {
          urls: [
            ...this.state.urls,
            {
              id,
              url,
              type: file.type
            }
          ]
        },
        () => {
          this._isValid("files");
        }
      );
    });
  };

  _removeMedia = id => {
    const { files, urls } = this.state;
    this.setState(
      {
        files: files.filter(o => o.id !== id),
        urls: urls.filter(o => o.id !== id)
      },
      () => this._isValid("files")
    );
  };

  /**
   * Status submit handler
   */
  _submitPost = e => {
    e.preventDefault();
    if (this._isValid()) {
      const { body, files } = this.state;

      if (!isEmpty(body) || !isEmpty(files)) {
        const { postStatusActions, location } = this.props;
        const { pathname } = location;
        const data = Object.assign({}, { body, files });

        postStatusActions.submit(data, pathname).then(() => {
          this._resetState();
        });
      }
    }
  };

  render() {
    const { body, current, urls, errors } = this.state;
    const { postStatus } = this.props;
    return (
      <div
        className="d-card d-card--mobile-btn-offset wow fadeInUp"
        data-wow-delay=".2s"
      >
        <form action="#" className="create-post">
          <div className="create-post__writting">
            <textarea
              name="body"
              placeholder="Share your thoughts, music or inspiration.."
              rows="5"
              data-min-rows="5"
              onChange={this._handleChange}
              value={body}
            />
            {errors.body && <ErrorMsg message={errors.body} mobile />}
            {errors.files && <ErrorMsg message={errors.files} mobile />}
          </div>
          <RenderTempFile
            urls={urls}
            applyRef={this._applyRef}
            applyAudioRef={this._applyAudioRef}
            removeMedia={this._removeMedia}
          />

          <div className="create-post__actions">
            <div className="create-post__types">
              <div
                className={`create-post__type create-post__type--music ${current ===
                  "music" && "is-current"}`}
                onClick={() => this.setState({ current: "music" })}
              >
                <input
                  type="file"
                  name="files"
                  id="music"
                  multiple
                  onChange={this._handleFileChange}
                  accept="audio/mp3,audio/*"
                />
                <label htmlFor="music">
                  <Svg name="ico-music" />
                  <span>Music</span>
                </label>
              </div>
              <div
                className={`create-post__type create-post__type--video ${current ===
                  "video" && "is-current"}`}
                onClick={() => this.setState({ current: "video" })}
              >
                <input
                  type="file"
                  name="files"
                  id="video"
                  multiple
                  onChange={this._handleFileChange}
                  accept="video/mp4,video/x-m4v,video/*"
                />
                <label htmlFor="video">
                  <Svg name="ico-video" />
                  <span>Video</span>
                </label>
              </div>
              <div
                className={`create-post__type create-post__type--images ${current ===
                  "image" && "is-current"}`}
                onClick={() => this.setState({ current: "image" })}
              >
                <input
                  type="file"
                  name="files"
                  id="image"
                  multiple
                  onChange={this._handleFileChange}
                  accept="image/*"
                />
                <label htmlFor="image">
                  <Svg name="ico-images" />
                  <span>Images</span>
                </label>
              </div>
            </div>
            <SubmitButtonDiv
              className="create-post"
              onClick={this._submitPost}
              loading={postStatus.isRequesting}
              loaderComponent={
                <Loader fill={"#53b2af"} height={"15px"} width={"15px"} />
              }
              buttonText={<ButtonText />}
            />
          </div>
        </form>
      </div>
    );
  }
}

// eslint-disable-next-line
const mapStateToProps = state => {
  return {
    postStatus: state.postStatus,
    tempFile: state.tempFile
  };
};

// eslint-disable-next-line
const mapDispatchToProps = dispatch => {
  return {
    postStatusActions: bindActionCreators(postStatusActions, dispatch)
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostStatus)
);

const ButtonText = () => (
  <React.Fragment>
    <span>Post</span>
    <Svg name="ico-arrow-next" />
  </React.Fragment>
);
