import { Component } from "react";
import styles from "../../stylesheet/Account.style";

import React from "react";
import { FlatList, Image, ImageBackground, Text, TextInput, Modal, TouchableHighlight, View, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { getThumbnail, getUsername, getUserInfo } from "../../utils";
import Icon from 'react-native-vector-icons/Entypo';
import { file } from "@babel/types";
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
    const { user, profilePic, uploadProfilePic, uploadable } = this.props;
    return (

      <LinearGradient start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} colors={this.state.headerColorMix} style={{ width: '100%', height: '100%' }}>

        <Animatable.View ref={'userImageView'} style={{ marginBottom: '5%', marginTop: '5%' }}>

          <View style={styles.findingView}>

            {profilePic?<TouchableOpacity style={{ marginTop: '20%', height: 200, width: 100 }} onPress={this.chooseFile.bind(this)}>
              {profilePic.isRequesting ? <ActivityIndicator color="gray" size={"large"} style={{marginTop: '85%'}}/>
                :<Image
                  source={{
                    uri: getThumbnail(user.data)
                  }}
                  style={{ width: 100, height: 100, borderRadius: 50, marginTop: '20%' }}
                />
              }
            </TouchableOpacity>:<Image
                  source={{
                    uri: getThumbnail(user.data)
                  }}
                  style={{ width: 100, height: 100, borderRadius: 50, marginTop: '33.5%' }}
                />}

          </View>
        </Animatable.View>


        <Text style={styles.textUserName}>  {getUsername(user.data)} </Text>
      </LinearGradient>)

  }


  chooseFile = () => {
    var options = {
      title: 'Image',
      // mediaType: 'video', 
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
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
// 'data:image/jpeg;base64,' + source.data

        this.props.uploadProfilePic('avatar', filePath)
     
      }
    });
  };
}

{/* <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  name="avatar"
                  onChange={uploadProfilePic}
                /> */}
{/* <Image style={styles.imgUser} source={getThumbnail(user.data)} /> */ }


{/* <TouchableOpacity>
    ref={'userImageView'}
    style={styles.topUserImage }>

      <View>
     <Icon name="camera" style={{ fontSize: 60, marginTop: '50%', color: 'gray', alignSelf: 'center', }} /> :

    <Image style={styles.imgUser} source={{uri:getThumbnail(user.data)}} />
    {uploadable && (
            <View>
              <Text> Image picker</Text>
                
                {profilePic.isRequesting ? (
                  <ActivityIndicator color="gray" />
                  
                ) : (
                 <Icon name="camera" style={{fontSize:20, color:'white'}}/>
                )}
            </View>
          )}
          </View>
</TouchableOpacity>  */}