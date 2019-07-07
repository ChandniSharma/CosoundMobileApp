import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/SignupStep3Musician.style';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-navigation';
import CustomFooter from '../components/common/CustomFooter'
import WaveAnimation from './common/WaveAnimation';
var ImagePicker = require('react-native-image-picker');

export default class SignupStep3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isRememberMe: false,
      filePath: {},
      isImageLoadedFromLiab: false,
      date: "",
      isShowDatePicker: true,
    }
  }
  fadeInMain = () => this.refs.mainView.fadeIn(1000).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))
  fadeIn = () => this.refs.titleText.fadeIn(500).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))
  bounceInLeft = () => this.refs.tab1.bounceInLeft(1000).then(endState => endState.finished ? this.flipSecond() : 'Slide down cancelled');

  componentDidMount() {
    this.fadeInMain();
  }

  onClickRememberMe = () => {
    this.setState({
      isRememberMe: !this.state.isRememberMe
    })
  }
  navigateToSignupStep5 = () => {
    this.props.navigation.navigate("SignupStep5");
  }
  chooseFile = () => {
    var options = {
      title: 'Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {

      if (response.didCancel) {
        this.setState({
          isImageLoadedFromLiab: false
        })
      } else if (response.error) {
        this.setState({
          isImageLoadedFromLiab: false
        })
      } else if (response.customButton) {
        alert(response.customButton);
        this.setState({
          isImageLoadedFromLiab: false
        })
      } else {
        let source = response;
        this.setState({
          isImageLoadedFromLiab: true,
          filePath: source
        });
      }
    });
  };

  addDatePicker = () => {
    this.setState({ isShowDatePicker: true })
  }

  render() {
    return (
      <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
        <KeyboardAwareScrollView style={{ backgroundColor: 'rgb(245,245,245)', flex: 0.9 }}>   
          <Animatable.View ref={"mainView"} style={[styles.container, { width: '100%' }]}>
          <View style={{ position: 'absolute',top:0}}>
              <WaveAnimation />
          </View>
            <View>
              <Animatable.Image animation="fadeInDown" style={styles.imgMainTitle} source={require('../assets/cosoundTitle.png')} />
              <Animatable.Text animation="fadeInDown" style={styles.textWelcome}>Nice Welcome!</Animatable.Text>
              <Animatable.View ref={'view1'} style={{ marginBottom: '5%' }}>
                <View style={styles.findingView}>
                  <TouchableOpacity style={{ marginTop: '30%', height: 200, width: 100 }} onPress={this.chooseFile.bind(this)}>
                    {!this.state.isImageLoadedFromLiab ?
                      <Icon name="camera" style={{ fontSize: 60, marginTop: '50%', color: 'gray', alignSelf: 'center', }} /> :
                      <Image
                        source={{
                          uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
                        }}
                        style={{ width: 100, height: 100, borderRadius: 50, marginTop: '33.5%' }}
                      />}
                  </TouchableOpacity>
                </View>
              </Animatable.View>
              <Animatable.Text animation="fadeIn" style={styles.loginText}> Upload Photo</Animatable.Text>
              <TextInput
                style={styles.inputStyle}
                placeholder={'First Name'}
              />
              <TextInput
                style={styles.inputStyle}
                placeholder={'Last Name'}
                secureTextEntry={true}
              />
            </View>
            {this.state.isShowDatePicker ? <DatePicker
              style={styles.datePickerStyle}
              date={this.state.date}
              mode="date"
              placeholder="select date"
              format="DD-MM-YYYY"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: -20,
                  top: -1,
                  marginLeft: -20,
                  width: 35,
                  height: 35
                },
                dateInput: {
                  marginBottom: 15,
                  shadowColor: 'rgba(0,0,0,0.7)',
                  shadowOffset: {
                    width: 2,
                    height: 4
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 1,
                  borderRadius: 8,
                  backgroundColor: 'white',
                  height: 60,
                  width: deviceWidth,
                  fontFamily: 'Montserrat-Regular',
                  fontWeight: '300',
                  fontSize: 16,
                  color: '#262626',
                }
              }}
              onDateChange={(date) => { this.setState({ date: date }) }}
            /> : null}
            <TextInput
              style={styles.inputStyle}
              placeholder={'Job Title'}
            />
            <TextInput
              style={styles.inputStyle}
              placeholder={'Music Genres'}
            >
            <Image style={styles.imageSearchIcon} source={require('../assets/suggestions-search.png')} />
            </TextInput>
            <TextInput
              style={styles.inputStyle}
              placeholder={'Social links'}
            >
            <Image style={styles.imageSearchIcon} source={require('../assets/suggestions-search.png')} />
            </TextInput>
            <TouchableHighlight onPress={this.navigateToSignupStep5} underlayColor="#25b6ad" style={[styles.loginButton]}>
              <Text style={styles.textButtonTitle} >Next -></Text>
            </TouchableHighlight>
            <View ref={'progressBarView'} style={[styles.viewProgressbar]}>
              <View style={styles.viewSelected}>
                <View style={styles.viewCircleCompleted}>
                  <Image style={styles.imgTickMark} source={require('../assets/tickMark.png')} />
                </View>
                <Text style={styles.textCompleted}>Choose Location</Text>
              </View>
              <View style={styles.viewSingleLineFilled}></View>
              <View style={styles.viewSelected}>
                <View style={styles.viewCircleCompleted}>
                  <Image style={styles.imgTickMark} source={require('../assets/tickMark.png')} />
                </View>
                <Text style={styles.textCompleted}>Profession</Text>
              </View>
              <View style={styles.viewSingleLineFilled}></View>
              <View style={styles.viewNotSelected}>
                <View style={styles.viewCircleFilled}>
                  <Image style={styles.imgTickMark} source={require('../assets/tickMark.png')} />
                </View>
                <Text style={styles.textSelected}>Tell us more</Text>
              </View>
              <View style={styles.viewSingleLine}></View>
              <View style={styles.viewNotSelected}>
                <View style={styles.viewCircleEmpty}>
                </View>
                <Text style={styles.textNotSelected}>Meet the music</Text>
              </View>
            </View>
          </Animatable.View>
        </KeyboardAwareScrollView>
        <CustomFooter />
      </SafeAreaView>
    )
  }
}