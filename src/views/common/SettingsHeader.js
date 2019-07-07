import { Component } from "react";
import styles from "../../stylesheet/Account.style";
import React from "react";
import { Image, Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { getThumbnail, getUsername } from "../../utils";
var ImagePicker = require('react-native-image-picker');

export default class SettingsHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrollDown: false,
      headerColorMix: ['rgb(42, 173,177)', 'rgb(131, 110, 198)', 'rgb(134, 103, 200)'],
      headerColor: ['rgb(42, 173,177)', 'rgb(93, 152, 179)'],
      isContactInfoClick: false,
      isDropDownclick: false,
      isSideMenuClick: false,
      isSearchbarDataShow: false,
      isCrossClick: false,
      active: false,
      isBottomMobileShow: true,
      mobileNumber: '',
    }
  }
  fadeInDown = () => this.refs.userImageView.fadeInDown(1000);

  componentDidMount() {
    this.fadeInDown();
  }
  render() {
    const { user, profilePic } = this.props;
    return (
      <LinearGradient start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} colors={this.state.headerColorMix} style={{ width: '100%', height: '100%' }}>
        <Animatable.View ref={'userImageView'} style={{ marginBottom: '5%', marginTop: '5%', justifyContent: 'center', }}>
          <View style={styles.findingView}>
            {profilePic?
            <View >
            <TouchableOpacity style={{  height: 200, width: 100, justifyContent:'center' }} onPress={this.chooseFile.bind(this)}>
              {profilePic.isRequesting ? <ActivityIndicator color="gray" size={"large"} />
                :<Image
                  source={{
                    uri: getThumbnail(user.data)
                  }}
                  style={{ width: 100, height: 100, borderRadius: 50}}
                />
              }
            </TouchableOpacity>
            </View>
            :<Image
                  source={{
                    uri: getThumbnail(user.data)
                  }}
                  style={{ width: 100, height: 100, borderRadius: 50 }}
                />}

          </View>
        </Animatable.View>
        <Text style={styles.textUserName}>  {getUsername(user.data)} </Text>
      </LinearGradient>)
  }
  chooseFile = () => {
    var options = {
      title: 'Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {

      if (response.didCancel) {

      } else if (response.error) {

      } else if (response.customButton) {
        alert(response.customButton);

      } else {
        let source = response;
        let filePath = source.uri;
        this.props.uploadProfilePic('avatar', filePath)
      }
    });
  };
}