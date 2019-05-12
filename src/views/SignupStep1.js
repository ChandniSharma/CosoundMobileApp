import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
//import SvgUri from 'react-native-svg-uri';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/SignupStep1.style';
import RecoverPwd from './RecoverPwd';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-navigation';
import CustomFooter from '../components/common/CustomFooter'
import RNPickerSelect from 'react-native-picker-select';
import SimplePicker from 'react-native-simple-picker';
import SelectInput from 'react-native-select-input-ios'
import { countries } from '../utils/countries';
import WaveAnimation from './common/WaveAnimation';
import Logo from './common/logo';
import BackButton from './common/BackButton';

const { width, height } = Dimensions.get('window');
  
export default class SignupStep1 extends Component {
    constructor(props) {
        super(props);
        this.options  = countries;
    }
        fadeIn = () => this.refs.mainView.fadeIn(1000).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))
    fadeIn = () => this.refs.titleText.fadeIn(500).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))
    bounceInTxt = () => this.refs.viewTxtInput.bounceIn(2000).then(endState => endState.finished ? "finish ": console.log('finish not'));
    bounceInBtn = () => this.refs.viewBtn.bounceIn(2000).then(endState => console.log(endState.finished ? " bounceInFinish" : "cancel bounceIn"))
    fadeInProgressBarView = () => this.refs.progressBarView.fadeIn(2000).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))
   
    navigateToSignupStep2 = () =>{
        this.props.navigation.navigate("SignupStep2");
    }
    fadeInDownHeader = () => this.refs.headerView.fadeInDown(1000);


    componentDidMount(){
        this.bounceInTxt();
        this.bounceInBtn();
        this.fadeInProgressBarView();
        // this.fadeInDownHeader();
        //this.fadeInMainView();
    }

    render() {
        const {
          data,
          errors,
          handleChange,
          confirmLocation,
          retrieveLocation
        } = this.props;
        
        const placeholder = {
            label: 'Select a sport...',
            value: null,
            color: '#9EA0A4',
          };

         

        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
                <KeyboardAwareScrollView style={{ backgroundColor: 'rgb(245,245,245)', flex: 0.9 }}>
                {/* <View ref={"mainView"} style={styles.container}>

                <WaveAnimation />  */}
                    <Animatable.View ref={"mainView"} style={[styles.container]}>
                       
                        <View>
                        <BackButton style= {{fontSize:30, marginTop:'10%', alignSelf:'flex-start', position:'absolute', marginLeft:'4%'}} onPress={()=> this.props.navigation.goBack()}/>
                        <Logo color={'#ffffff'} style={{ flex: 0.7,alignSelf: 'center', }} width="260px" height="100px" />
                       
                            <Animatable.Text animation="fadeInDown" style={styles.textWelcome}> Welcome, user!</Animatable.Text>

                            <Animatable.Text animation="fadeInDown" style={styles.textMusicDescription}> The music industry network and</Animatable.Text>
                            <Animatable.Text animation="fadeInDown" style={styles.textMusicDescription2}>marketplace</Animatable.Text>

                            <Animatable.View ref={"viewTxtInput"}>
  
                            {/* <TextInput
                                style={styles.inputStyle}
                                placeholder={'Select Location'}
                                value={data.address}
                                name={"address"}
                                onChangeText={val => handleChange('address', val)}
                            /> */}
                            <SelectInput style= {styles.inputStyle} labelStyle={styles.locationLabel} value={data.country_id} options={this.options} onSubmitEditing={val => handleChange('country_id', val)} />
                            {errors.country_id?<Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.country_id}</Animatable.Text>:null}
                            {errors.address?<Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.address}</Animatable.Text>:null}
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Postal Code'}
                                onChangeText={val => handleChange('postal_code', val)}
                                value={data.postal_code}
                                name={"postal_code"}
                            />
                            </Animatable.View>
                            {errors.postal_code?<Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.postal_code}</Animatable.Text>:null}

                        </View>
                        <Animatable.View ref={'viewBtn'} style={{ marginBottom: '5%', marginTop: '5%' }}>
                        { 
                            // <TouchableHighlight onPress={this.navigateToSignupStep2} underlayColor="#25b6ad" style={[styles.loginButton]}>
                            //     <Text style={styles.textButtonTitle} >Confirm Location</Text>
                            // </TouchableHighlight>
                        }
                            <TouchableHighlight onPress={confirmLocation} underlayColor="#25b6ad" style={[styles.loginButton]}>
                             <Text style={styles.textButtonTitle} >Confirm Location</Text>
                            </TouchableHighlight>
                        </Animatable.View>

                        {/* Progress bar  */}

                        <Animatable.View ref={'progressBarView'} style={[styles.viewProgressbar]}>
                            <View style={styles.viewSelected}>
                                <View style={styles.viewCircleFilled}>
                                    <Image style={styles.imgTickMark} source={require('../assets/tickMark.png')} />
                                </View>
                                <Text style={styles.textSelected}>Choose Location</Text>
                            </View>
                            <View style={styles.viewSingleLine}></View>

                            <View style={styles.viewNotSelected}>
                                <View style={styles.viewCircleEmpty}>
                                </View>
                                <Text style={styles.textNotSelected}>Profession</Text>
                            </View>
                            <View style={styles.viewSingleLine}></View>

                            <View style={styles.viewNotSelected}>
                                <View style={styles.viewCircleEmpty}>
                                </View>
                                <Text style={styles.textNotSelected}>Tell us more</Text>
                            </View>
                            <View style={styles.viewSingleLine}></View>

                            <View style={styles.viewNotSelected}>
                                <View style={styles.viewCircleEmpty}>
                                </View>
                                <Text style={styles.textNotSelected}>Meet the music</Text>
                            </View>

                        </Animatable.View>

                    </Animatable.View>
{/* </View> */}
                </KeyboardAwareScrollView>
                <CustomFooter />
            </SafeAreaView>

        )
    }
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
      backgroundColor:'red'
    },
  });
  