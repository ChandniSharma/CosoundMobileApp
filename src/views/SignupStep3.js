import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
//import SvgUri from 'react-native-svg-uri';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/SignupStep3.style';
import { Icon } from "native-base";
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-navigation';
import CustomFooter from '../components/common/CustomFooter'
import CustomHeader from '../components/common/CustomHeader';
import { checkError } from "../utils";
import { isNull } from "lodash";
import MultiSelect from 'react-native-multiple-select';
import DatePicker from 'react-native-datepicker';
import WaveAnimation from './common/WaveAnimation';
import BackButton from './common/BackButton';
import Logo from './common/logo';

const { height, width } = Dimensions.get('window');
const deviceHeight = height;
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

  //fadeInProgressBarView = () => this.refs.progressBarView.fadeIn(2000).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))

  componentDidMount() {
    this.fadeInMain();
    this.props.fetchGenres();
    //  this.fadeInProgressBarView();
  }


  navigateToSignupStep5 = () => {
    alert("signup function ")
    // this.props.navigation.navigate("SignupStep5");
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
      // console.log('Response = =============', response);

      if (response.didCancel) {
        // console.log('User cancelled image picker');

      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);

      } else if (response.customButton) {
        // console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);

      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.props.handleFileChange('avatar', 'data:image/jpeg;base64,' + source.data)

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
    
    const hasFile = !isNull(data.url);
    const error = checkError(signup.error);
    const { selectedItems } = this.state;

    return (
      <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
        <KeyboardAwareScrollView style={{ backgroundColor: 'rgb(245,245,245)', flex: 0.9 }}>
        <WaveAnimation /> 
          <Animatable.View ref={"mainView"} style={[styles.container, {marginTop:'-175%', width:'100%' }]}>

            <View>
            <BackButton style= {{fontSize:30, marginTop:'10%', alignSelf:'flex-start', position:'absolute', marginLeft:'4%'}} onPress={()=> this.props.navigation.navigate('SignupStep2')}/>

            <Logo color={'#ffffff'} style={{ flex: 0.7,alignSelf: 'center', }} width="260px" height="100px" />
              {data.type === 'professional' && <Animatable.Text animation="fadeInDown" style={styles.textWelcome}>
                Nice! Welcome
                    </Animatable.Text>
              }

              {data.type === 'musician' && <Animatable.Text animation="fadeInDown" style={styles.textWelcome}> Awesome, You're a musician
                    </Animatable.Text>
              }

              <Animatable.View ref={'view1'} style={{ marginBottom: '5%' }}>

                <View style={styles.findingView}>

                  <TouchableOpacity style={{ marginTop: '30%', height: 200, width: 100 }} onPress={this.chooseFile.bind(this)}>
                    {!data.url ?
                      <Icon name="camera" style={{ fontSize: 60, marginTop: '50%', color: 'gray', alignSelf: 'center', }} /> :
                      <Image
                        source={{
                          uri: data.url,
                        }}
                        style={{ width: 100, height: 100, borderRadius: 50, marginTop: '33.5%' }}
                      />}

                  </TouchableOpacity>

                </View>
              </Animatable.View>
              <Animatable.Text animation="fadeIn" style={styles.loginText}> Upload Photo</Animatable.Text>

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
            </View>

            <DatePicker
              style={styles.datePickerStyle}
              date={data.dob}
              mode="date"
              placeholder="Date of Birth"
              format="DD-MM-YYYY"
              //minDate="2016-05-01"
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
                  // marginLeft: 36,
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
                  // marginLeft: '5%',
                  // marginRight:'5%',
                  height: 60,
                  width: deviceWidth,
                  fontFamily: 'Montserrat-Regular',
                  fontWeight: '300',
                  fontSize: 16,
                  color: '#262626',

                }
                // ... You can check the source to find the other keys.
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
             styleDropdownMenu = {styles.multiSelectDownStyle}
            styleInputGroup = {styles.multiSelectStyle}
            styleMainWrapper = {{ marginLeft:'5%', marginRight: '5%',marginTop:'5%'}}
            styleListContainer ={styles.multiSelectListStyle}
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
                  <View
                    key={index}
                    style={[styles.viewSocial,{flexDirection: 'row', flex:1}] }
                  >
                    <TextInput
                      style={[styles.socialInput, {flex:0.85}]}
                      placeholder={'Social Links'}
                      onSubmitEditing={() => handleKeyPress(item.id)}
                      onChangeText={val => handleSocialLinks(item.id, val)}
                      value={item.value}
                      name={item.id}
                    />
                    
                    {/* {!item.isReady && ( */}
                     <TouchableHighlight onPress={() => addMoreSocials(item.id)} underlayColor="#25b6ad" style={[styles.plusCircleBtn]}>
                         <Icon name="ios-add-circle-outline" size={30} color="gray" style={styles.plusCircle} />
                      </TouchableHighlight>
                      
                    {/* )} */}
                    {errors[item.id] ? <Animatable.Text animation="fadeIn" style={styles.errorText}> {errors[item.id]}</Animatable.Text> : null}
                  </View>
                );
              }
              return null;
            })}



            <TouchableHighlight onPress={signUp} underlayColor="#25b6ad" style={[styles.loginButton]}>
              <Text style={styles.textButtonTitle} >Next -></Text>
            </TouchableHighlight>

{/* Bottom progress view  */}
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

{/* */ }
                // </View> */}