import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/SignupStep3.style';
import { Icon } from "native-base";
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-navigation';
import CustomFooter from '../components/common/CustomFooter'
import { checkError } from "../utils";
import MultiSelect from 'react-native-multiple-select';
import DatePicker from 'react-native-datepicker';
import WaveAnimation from './common/WaveAnimation';
import BackButton from './common/BackButton';
import Logo from './common/logo';
import Icon1 from 'react-native-vector-icons/AntDesign';
const { width } = Dimensions.get('window');
let deviceWidth = width;
var ImagePicker = require('react-native-image-picker');

export default class SignupStep3Musician extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowDatePicker: true,
    }
  }

  fadeInMain = () => this.refs.mainView.fadeIn(1000).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))

  fadeInView1 = () => this.refs.view1.fadeInUp().then(setTimeout(() => {
    this.fadeInView2();
  }, 30))

  fadeInView2 = () => this.refs.view2.fadeInUp().then(setTimeout(() => {
    this.fadeInUpProgressView();
  }, 60))

  fadeInUpProgressView = () => this.refs.progressView.fadeInUp().then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))

  componentDidMount() {
    this.fadeInView1();
    this.props.fetchGenres();
  }

  navigateToSignupStep5 = () => {
    alert("signup function ")
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
        this.props.handleFileChange("avatar", filePath)
      }
    });
  };

  render() {
    const {
      data,
      signup,
      genres,
      signUp,
      errors,
      handleChange,
      addMoreSocials,
      handleDateChange,
      handleKeyPress,
      handleFileChange,
      handleSocialLinks,
      handleMultiSelect
    } = this.props;

    const error = checkError(signup.error);

    return (
      <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
        <KeyboardAwareScrollView style={{ backgroundColor: 'rgb(245,245,245)', flex: 0.9 }}>
          <Animatable.View ref={"mainView"} style={[styles.container, { width: '100%' }]}>
            <View style={{ position: 'absolute', top: 0 }}>
              <WaveAnimation />
            </View>
            {/* <View> */}
            <BackButton style={{ fontSize: 30, marginTop: '10%', alignSelf: 'flex-start', position: 'absolute', marginLeft: '4%' }} onPress={() => this.props.goToTabIndex(2)} />
            <Logo color={'#ffffff'} style={{ flex: 0.7, alignSelf: 'center', marginTop: '13%' }} width="230px" height="44px" />
            {data.type === 'professional' && <Animatable.Text animation="fadeInDown" style={styles.textWelcome}>
              Nice! Welcome
              </Animatable.Text>
            }
            {data.type === 'musician' && <Animatable.Text animation="fadeInUp" style={styles.textWelcome}> Awesome, You're a musician
              </Animatable.Text>
            }
            <Animatable.View ref={'view1'} style={{ marginBottom: '5%' }}>
              <View style={styles.findingView}>
                <View style={{ alignSelf: 'center', width: 100, height: 100, borderRadius: 50, justifyContent: 'center', }}>
                  <TouchableOpacity style={{ justifyContent: 'center', }} onPress={this.chooseFile.bind(this)}>
                    {!data.url ?
                      <Icon name="camera" style={{ fontSize: 60, color: 'gray', alignSelf: 'center', }} /> :
                      <Image
                        source={{
                          uri: data.url,
                        }}
                        style={{ width: 100, height: 100, borderRadius: 50 }}
                      />}
                  </TouchableOpacity>
                </View>
              </View>
              <Animatable.Text style={styles.loginText}> Upload Photo</Animatable.Text>
            </Animatable.View>
            <Animatable.View ref={'view2'}>
              <TextInput
                style={styles.inputStyle}
                placeholder={'Email'}
                onChangeText={val => handleChange('email', val)}
                value={data.email}
                name={"email"}
              />
              {errors.email ? <Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.email}</Animatable.Text> : null}
              {error &&
                error.error &&
                error.error.email &&
                error.error.email.map((item, index) => {
                  return <Animatable.Text animation="fadeIn" style={styles.errorText} key={index}> {item}</Animatable.Text>;
                })}
              <TextInput
                style={styles.inputStyle}
                placeholder={'Password'}
                onChangeText={val => handleChange('password', val)}
                value={data.password}
                secureTextEntry
                name={"password"}
              />
              {errors.password ? <Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.password}</Animatable.Text> : null}
              {error &&
                error.error &&
                error.error.password &&
                error.error.password.map((item, index) => {
                  return <Animatable.Text animation="fadeIn" style={styles.errorText} key={index}> {item}</Animatable.Text>;
                })}
              <TextInput
                style={styles.inputStyle}
                placeholder={'First Name'}
                onChangeText={val => handleChange('first_name', val)}
                value={data.first_name}
                name={"first_name"}
              />
              {errors.first_name ? <Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.first_name}</Animatable.Text> : null}
              {error &&
                error.error &&
                error.error.first_name &&
                error.error.first_name.map((item, index) => {
                  return <Animatable.Text animation="fadeIn" style={styles.errorText} key={index}> {item}</Animatable.Text>;
                })}
              <TextInput
                style={styles.inputStyle}
                placeholder={'Last Name'}
                onChangeText={val => handleChange('last_name', val)}
                value={data.last_name}
                name={"last_name"}
              />
              {errors.last_name ? <Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.last_name}</Animatable.Text> : null}
              <DatePicker
                style={styles.datePickerStyle}
                date={data.dob}
                mode="date"
                placeholder="Date of Birth"
                format="DD-MM-YYYY"
                maxDate={new Date()}
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
                onDateChange={(date) =>
                  handleDateChange(date)
                }
              />
              <TextInput
                style={styles.inputStyle}
                placeholder={'Artist Name'}
                onChangeText={val => handleChange('artist_name', val)}
                value={data.artist_name}
                name={"artist_name"}
              />
              {errors.artist_name ? <Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.artist_name}</Animatable.Text> : null}
              {error &&
                error.error &&
                error.error.artist_name &&
                error.error.artist_name.map((item, index) => {
                  return <Animatable.Text animation="fadeIn" style={styles.errorText} key={index}> {item}</Animatable.Text>;
                })}

              <MultiSelect
                styleDropdownMenu={styles.multiSelectDownStyle}
                styleInputGroup={styles.multiSelectStyle}
                styleMainWrapper={{ marginLeft: '5%', marginRight: '5%', marginTop: '5%' }}
                styleListContainer={styles.multiSelectListStyle}
                hideTags
                items={genres.data}
                uniqueKey="value"
                ref={(component) => { this.multiSelect = component }}
                onSelectedItemsChange={(selectedItems) => handleMultiSelect(selectedItems, 'genres')}
                selectedItems={data.genres}
                selectText="Select Genres"
                searchInputPlaceholderText="Select Genres"
                onChangeInput={(text) => console.log(text)}
                altFontFamily="Montserrat-light"
                tagRemoveIconColor="black"
                tagBorderColor="#CCC"
                tagTextColor="#black"
                selectedItemTextColor="rgb(60, 205, 53)"
                selectedItemIconColor="rgb(60, 205, 53)"
                itemTextColor="#000"
                displayKey="label"
                searchInputStyle={{ color: '#CCC' }}
                submitButtonColor="#ff277b"
                submitButtonText="Submit"
                name="genres"
              />
              <View>
                {this.multiSelect && this.multiSelect.getSelectedItemsExt(data.genres)}
              </View>
              {data.social_links.map((item, index) => {
                if (item.isVisible) {
                  return (
                    <View>
                      <View
                        key={index}
                        style={[styles.viewSocial, { flexDirection: 'row', flex: 1 }]}
                      >
                        <TextInput
                          style={[styles.socialInput, { flex: 0.85 }]}
                          placeholder={'Social Links'}
                          onSubmitEditing={() => handleKeyPress(item.id)}
                          onChangeText={val => handleSocialLinks(item.id, val)}
                          value={item.value}
                          name={item.id}
                        />
                        {!item.isReady && (
                          <TouchableOpacity onPress={() => addMoreSocials(item.id)} style={[styles.plusCircleBtn]}>
                            <Icon name="ios-add-circle-outline" size={30} color="gray" style={styles.plusCircle} />
                          </TouchableOpacity>
                        )}
                      </View>
                      {errors[item.id] ? <Animatable.Text animation="fadeIn" style={styles.errorText}> {errors[item.id]}</Animatable.Text> : null}
                    </View>
                  );
                }
                return null;
              })}
              <View style={styles.viewContainButton}>
                <TouchableHighlight onPress={signUp} underlayColor="#25b6ad" style={[styles.loginButton]}>
                {signup.isRequesting ? <ActivityIndicator color="white" /> :<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                   <Text style={styles.textButtonTitle} >Next</Text>
                    <Icon1 name="arrowright" style={{ marginLeft: '1%', fontSize: 20, color: 'white' }} />
                  </View>}
                </TouchableHighlight>
              </View>
              {/* </View> */}
            </Animatable.View>
            {/* Bottom progress view  */}
            <Animatable.View ref={'progressView'} style={[styles.viewProgressbar]}>
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
            </Animatable.View>
          </Animatable.View>
          <CustomFooter />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    )
  }
}