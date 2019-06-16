import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { isEmpty, isNull, each } from "lodash";
import Validator from "../../validator";
import { postStatusActions } from "../../actions";
import { fileReader, isError, getUniqueId } from "../../utils";

import styles from "../../stylesheet/profile.style";
import { SafeAreaView } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import homeStyle from "../../stylesheet/home.style";
import { FlatList, Image, ImageBackground, Text, TextInput, TouchableHighlight, View, TouchableOpacity, Clipboard, AlertIOS, Platform, ActivityIndicator } from "react-native";
import { Icon } from "native-base";
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Hamburger from 'react-native-hamburger';
import Icon1 from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/EvilIcons";
import Icon3 from "react-native-vector-icons/FontAwesome";
import Icon4 from "react-native-vector-icons/Entypo";
var ImagePicker = require('react-native-image-picker');
import RenderTempFile from './RenderTempFile';

console.disableYellowBox = true;
class PostStatus extends React.PureComponent {
  node = null;
  audioNode = null;
  state = {
    current: "music",
    body: "",
    urls: [],
    types: [],
    files: [],
    errors: {},
    isRequested: false,
    isComponentUpdate: false,
  };

  // componentDidUpdate() {
  //   console.log("call component did update")
  //   const { tempFile } = this.props;
  //   if (tempFile && !isNull(tempFile.file)) {
  //     this.props.postStatusActions.resetTempFile();
  //     this._setFileInState(tempFile.file);
  //   }
  // }

  // componentWillReceiveProps(nextprops, props) {
  //   if (nextprops.tempFile != props.tempFile) {

  //     const { tempFile } = nextprops;
  //     if (!isNull(tempFile.file && !this.state.isComponentUpdate)) {

  //       console.log(" 52 call component did update", tempFile);

  //       this.props.postStatusActions.resetTempFile();
  //       this._setFileInState(tempFile.file);
  //       this.setState({ isComponentUpdate: true });
  //     }
  //     this.props.postStatusActions.resetTempFile();
  //   }
  // }

  // componentDidUpdate() {
  //   const { tempFile } = this.props;
  //   if (!isNull(tempFile.file && !this.state.isComponentUpdate)) {

  //     console.log(" 52 call component did update", tempFile);

  //     this.props.postStatusActions.resetTempFile();
  //     this._setFileInState(tempFile.file);
  //     this.setState({ isComponentUpdate: true });
  //   }
  //   this.props.postStatusActions.resetTempFile();

  // }

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
    console.log("call reset state")
    this.setState(
      {
        current: "music",
        body: "",
        urls: [],
        files: [],
        types: [],
        filePath:undefined,
        isRequested:false,
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
  _handleChange = (name, value) => {
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
  _handleFileChange = (name, files) => {

    const { files: filesInState } = this.state;
    console.log("..........................", files);
    //console.log("call handle file change")
    //console()
    let newFiles = [files];
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
  _submitPost = () => {
    this.setState({ isRequested: true });
    console.log("call submit post")
    // e.preventDefault();
    //this._isValid()
    if (true) {
      console.log("call 202")
      // e.preventDefault();
      const { body, files } = this.state;

      if (!isEmpty(body) || !isEmpty(files)) {
        console.log("call 207")
        // e.preventDefault();
        const { postStatusActions, location } = this.props;

        const data = Object.assign({}, { body, files });
        console.log("pathname === ", data)
        postStatusActions.submit(data, "/profle").then(() => {
          console.log("call 217 line nu")
          this.props.restCallsOnMount();
          this._resetState();
          //this.setState({ filePath: undefined });

        });
      }
    }
  };

  onClickMusicVideoImage(type) {
    this.setState({ current: type });

    if (!this.state.isClickToUpload) {
      this.setState({ isClickToUpload: true })
      this.chooseFile(type)
    }

  }

  chooseFile = (type) => {
    var options = {
      title: 'Image',
      mediaType: type === 'music' ? 'audio' : type,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {

      if (response.didCancel) {

        this.setState({
          isClickToUpload: false
        })
      } else if (response.error) {

        this.setState({
          isClickToUpload: false
        })
      } else if (response.customButton) {

        alert(response.customButton);
        this.setState({
          isClickToUpload: false
        })
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        console.log(source.uri)
        this.setState({
          isClickToUpload: true,
          filePath: source.uri
        });
        // this._handleFileChange("files", response.uri)
        this._handleFileChange("files", [response.uri])
      }
    });
  };
  render() {
    const { body, current, urls, errors } = this.state;
    const { postStatus } = this.props;
    console.log(" urls in render++++++++ ", urls);
    console.log(this.state.filePath)
    return (
      <View>
        <View style={styles.viewWriteSomething}>
          <TextInput
            placeholder="Share your thoughts, music or inspiration.."
            style={styles.textWriteSomething}
            onChangeText={(text) => this._handleChange("body", text)}
            value={body}
          />
          {errors.body && <Text>{errors.body}</Text>}
          {errors.files && <Text>{errors.files}</Text>}

          <RenderTempFile
            urls={urls}
            applyRef={this._applyRef}
            applyAudioRef={this._applyAudioRef}
            removeMedia={this._removeMedia}
          />

          {this.state.filePath ?

            <Image
              source={{
                uri: this.state.filePath,
              }}
              style={{ width: 100, height: 100, borderRadius: 50, marginTop: '33.5%' }}
            /> : <View />}
          <View style={styles.midView}>
            {this.state.current === 'music' ? <View style={{ backgroundColor: 'rgb(140,91,203)', height: 1, width: '30%', marginRight: '5%' }} /> : <View style={{ backgroundColor: 'transparent', height: 1, width: '30%', marginRight: '5%' }} />}

            {this.state.current === 'video' ? <View style={{ backgroundColor: '#20ACAC', height: 1, width: '30%', marginRight: '5%' }} /> : <View style={{ backgroundColor: 'transparent', height: 1, width: '30%', marginRight: '5%' }} />}

            {this.state.current === 'image' ? <View style={{ backgroundColor: 'rgb(40,190,167)', height: 1, width: '30%' }} /> : <View style={{ backgroundColor: 'transparent', height: 1, width: '30%', marginRight: '5%' }} />}
          </View>
          <View style={styles.viewBottomContent}>
            <TouchableOpacity style={{ paddingLeft: 5, paddingRight: 15, width: '30%', flexDirection: 'row' }} onPress={() => this.onClickMusicVideoImage('music')}>
              <Icon3 name="music" style={[styles.music, { fontSize: 30, color: 'rgb(140,91,203)' }]} />
              <Text style={[styles.music, { marginTop: '5%' }]}>Music</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingLeft: 5, paddingRight: 15, width: '30%', flexDirection: 'row' }} onPress={() => this.onClickMusicVideoImage('video')}>
              <Icon4 name="video-camera" style={[styles.video, { fontSize: 30, color: '#20ACAC' }]} />
              <Text style={[styles.video, { marginTop: '5%' }]}>Video</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingLeft: 5, width: '30%', flexDirection: 'row' }} onPress={() => this.onClickMusicVideoImage('image')} >
              <Icon3 name="image" style={[styles.imageIcon, { fontSize: 30, color: 'rgb(40,190,167)' }]} />
              <Text style={[styles.Images, { marginTop: '5%' }]}>Images</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewPostButton}>
          <TouchableHighlight style={[styles.postButton]} onPress={this._submitPost}>
            <View style={{ flexDirection: 'row' }}>
              {this.state.isRequested ? <ActivityIndicator color='gray' /> : <Text style={styles.textLoginButtonTitle}>Post</Text>}

              <Icon1 name="arrowright" style={{ marginLeft: '1%', fontSize: 20, color: 'rgb(255, 38, 123)' }} />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
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

