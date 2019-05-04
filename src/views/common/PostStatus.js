import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { isEmpty, isNull, each } from "lodash";
import Validator from "../../validator";
import { postStatusActions } from "../../actions";
import { fileReader, isError, getUniqueId } from "../../utils";


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
          alert(this.props.postStatus.error.message);
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
      <View>
        <View style={styles.viewWriteSomething}>
          <TextInput
              style={styles.textWriteSomething}
              onChangeText={(text) => this.setState({ text })}
              value={this.state.text}
          />
          <View style={styles.midView}>
          </View>
          <View style={styles.viewBottomContent}>
              <Icon name="ios-musical-notes" size={50} color="rgb(140,91,203)" style={styles.music} />
              <Text style={styles.music}>Music</Text>
              <Icon name="video" size={30} color="#20ACAC" style={styles.video} />
              <Text style={styles.video}>Video</Text>
              <Icon name="image" size={30} color="#20ACAC" style={styles.imageIcon} />
              <Text style={styles.images}>Images</Text>
          </View>
        </View>
        <View style={styles.viewPostButton}>
            <TouchableHighlight style={[styles.postButton]}>
                <Text style={styles.textLoginButtonTitle}>Post -></Text>
            </TouchableHighlight>
        </View>
      </View>
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostStatus);

