import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, Dimensions, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/SignupStep1.style';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-navigation';
import CustomFooter from '../components/common/CustomFooter'
import SelectInput from 'react-native-select-input-ios'
import { countries } from '../utils/countries';
import WaveAnimation from './common/WaveAnimation';
import Logo from './common/logo';
import BackButton from './common/BackButton';

export default class SignupStep1 extends Component {
    constructor(props) {
        super(props);
        this.options = countries;
    }
    
    fadeIn = () => this.refs.mainView.fadeIn(1000).then(setTimeout(() => {
        this.fadeInDownLogo();
    }, 10))

    fadeInDownLogo =() => this.refs.logoView.fadeInDown(1000).then(console.log(" finish "));

    fadeIn = () => this.refs.titleText.fadeIn(500).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))
    bounceInTxt = () => this.refs.viewTxtInput.bounceIn(2000).then(endState => endState.finished ? "finish " : console.log('finish not'));
    bounceInBtn = () => this.refs.viewBtn.bounceIn(2000).then(endState => console.log(endState.finished ? " bounceInFinish" : "cancel bounceIn"))
    fadeInProgressBarView = () => this.refs.progressBarView.fadeIn(2000).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))

    navigateToSignupStep2 = () => {
        this.props.navigation.goBack();
    }
    fadeInDownHeader = () => this.refs.headerView.fadeInDown(1000);

    componentDidMount() {
        this.bounceInTxt();
        this.bounceInBtn();
        this.fadeInProgressBarView();
        this.fadeInDownLogo();
    }

    render() {
        const {
            data,
            errors,
            handleChange,
            confirmLocation,
            retrieveLocation
        } = this.props;
        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
                <KeyboardAwareScrollView style={{ backgroundColor: 'rgb(245,245,245)', flex: 0.9,  overflow:'scroll' }}>
                    <Animatable.View ref={"mainView"} style={[styles.container, { width: '100%'}]}>
                        <View style={{ position: 'absolute',top:0}}>
                            <WaveAnimation />
                        </View>
                        <View>
                            <BackButton style={{ fontSize: 30, marginTop: '10%', alignSelf: 'flex-start', marginLeft: '4%' }} onPress={() => this.props.navigation.goBack()} />
                            <Animatable.View ref={'logoView'} style={{alignSelf:'center', width:'70%'}}>
                            <Logo color={'#ffffff'} style={{ flex: 0.7, alignSelf: 'center', }} width="260px" height="100px" />
                            </Animatable.View>
                            <Animatable.Text animation="fadeInUp" style={styles.textWelcome}> Welcome, user!</Animatable.Text>
                            <Animatable.Text animation="fadeInUp" style={styles.textMusicDescription}> The music industry network and</Animatable.Text>
                            <Animatable.Text animation="fadeInUp" style={styles.textMusicDescription2}>marketplace</Animatable.Text>
                            <Animatable.View ref={"viewTxtInput"}>
                                <SelectInput style={styles.inputStyle} labelStyle={data.country_id? styles.locationLabel:styles.placeholderLabel}  value={data.country_id} options={this.options} onSubmitEditing={val => handleChange('country_id', val)} />
                                {errors.country_id ? <Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.country_id}</Animatable.Text> : null}
                                {errors.address ? <Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.address}</Animatable.Text> : null}
                                <TextInput
                                    style={styles.inputStyle}
                                    placeholder={'Postal Code'}
                                    onChangeText={val => handleChange('postal_code', val)}
                                    value={data.postal_code}
                                    name={"postal_code"}
                                />
                            </Animatable.View>
                            {errors.postal_code ? <Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.postal_code}</Animatable.Text> : null}
                        </View>
                        <Animatable.View ref={'viewBtn'} style={{ marginBottom: '5%', marginTop: '5%' }}>
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
                    <CustomFooter />
                </KeyboardAwareScrollView>
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
        backgroundColor: 'red'
    },
});
