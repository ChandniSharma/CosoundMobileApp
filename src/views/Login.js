import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/login.style';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-navigation';
import CustomFooter from '../components/common/CustomFooter'
import { checkError } from "../utils";
import Logo from './common/logo';
import BackButton from './common/BackButton';
import WaveAnimation from './common/WaveAnimation';
import GoogleSignIn from './common/GooglesignIn';
import Icon from 'react-native-vector-icons/EvilIcons';

const FBSDK = require('react-native-fbsdk');
const {
    LoginManager,
} = FBSDK;

export default class Login extends Component {
    constructor(props) {
        super(props);
    }
    fadeInMainView = () => this.refs.mainView.fadeIn(2000).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))
   
    fadeIn = () => this.refs.titleText.fadeIn(500).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))

    fadeInDownHeader = () => this.refs.headerView.fadeInDown(1000);

    moveTextUp1 = () => this.refs.viewTxtInputCat.fadeInUp(1000).then(this.moveSecondViewUp());

    moveTextUp2 = () => this.refs.viewTxtInputSubCat.fadeInUp(2000).then(endState => endState.finished ? "finish " : console.log('finish not'));

    componentDidMount() {
        this.fadeInDownHeader();
        this.moveTextUp1();
    }

    moveSecondViewUp(){
          this.moveTextUp2();
      }

    fBLogin() {
        LoginManager.logInWithReadPermissions(['public_profile']).then(
            function (result) {
                if (result.isCancelled) {
                    alert('Login was cancelled');
                } else {
                    alert('Login was successful with permissions: '
                        + result.grantedPermissions.toString());
                }
            },
            function (error) {
                alert('Login failed with error: ' + error);
            }
        );
    }
    googleLogin(){
    }
    twitterLogin(){
    }
    render() {
        const { data, errors, handleChange, login, onSubmit, fetching, navigateToForgotPassword, navigateToGetStartedView, onClickRememberMe } = this.props;
        const error = checkError(login.error);
        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
                <KeyboardAwareScrollView style={{ backgroundColor: 'rgb(245, 245,245)', flex: 1}}> 
                    <Animatable.View ref={"mainView"} style={[styles.container, { backgroundColor: 'transparent',width: '100%' }]}>
                    <View style={{top:0,position:'absolute'}}>
                        <WaveAnimation style={{backgroundColor:'red'}} />
                        </View>

                        <View style={{ backgroundColor: 'transparant' }}>
                            <Animatable.View ref={"headerView"} style={{ flexDirection: 'row', flex: 1 }}>
                                <BackButton style={{ fontSize: 30, marginTop: '15%', alignSelf: 'flex-start' }} onPress={() => this.props.navigation.goBack()} />
                                <Logo color={'#ffffff'} style={{ marginTop: '13%', flex: 0.5 }} width="130px" height="44px" />
                                <View style={styles.leftView}>
                                    <Animatable.Text animation="fadeInDown" style={styles.textDull}>Don't have an account?</Animatable.Text>
                                    <TouchableOpacity onPress={navigateToGetStartedView}>
                                        <Animatable.Text animation="fadeInDown" style={styles.getStarted}>Get Started!</Animatable.Text>
                                    </TouchableOpacity>
                                </View>
                            </Animatable.View>

                            <Animatable.Text animation="fadeIn" style={styles.loginText}> Log in</Animatable.Text>
                            {error.message ? <Animatable.Text animation="fadeIn" style={styles.errorText}> {error.message}</Animatable.Text> : null}

                           <Animatable.View  ref={"viewTxtInputCat"}>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Email'}
                                value={data.email}
                                name={"email"}
                                onChangeText={val => handleChange('email', val)}
                            />
                            {errors.email ? <Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.email}</Animatable.Text> : null}
                           </Animatable.View>

                           <Animatable.View ref={"viewTxtInputSubCat"}>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Password'}
                                secureTextEntry={true}
                                onChangeText={val => handleChange('password', val)}
                                value={data.password}
                                name={"password"}
                            />
                            {errors.password ? <Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.password}</Animatable.Text> : null}

                        {/* </View> */}
                        <View style={styles.rememberView}>
                            <TouchableOpacity onPress={onClickRememberMe} style={styles.tickMarkView}>
                                {data.rememberMe ? <Image style={styles.imgTickMark} source={require('../assets/tickMark.png')} /> : <Image />}
                            </TouchableOpacity>
                            <TouchableHighlight underlayColor='rgb(245,245,245)' onPress={onClickRememberMe} style={styles.rememberBtn}>
                                {data.rememberMe ? <Text name="rememberMe" style={[styles.rememberText]}>Remember me</Text> : <Text>Remember me</Text>}
                            </TouchableHighlight>
                            <TouchableOpacity style={styles.forgotPwdBtn} onPress={navigateToForgotPassword}>
                                <Text style={styles.forgotPwdText}> Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableHighlight underlayColor="#25b6ad" onPress={onSubmit} style={[styles.loginButton]}>
                           {(login.isRequesting || fetching || this.props.cartCount.isRequesting || this.props.notificationCount.isRequesting) ? <ActivityIndicator color="white" />: <Text style={styles.textButtonTitle} >Login</Text>}
                        </TouchableHighlight>
    
                        </Animatable.View>
                        </View>
                        <View style={styles.socialMediaLoginView}>
                            <TouchableHighlight underlayColor="#25b6ad" style={styles.buttonLeft} onPress={() => this.fBLogin()}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name="sc-facebook" style={{ fontSize: 30, color: 'rgb(72,103,170)', marginLeft: '2%' }} />
                                    <Text style={styles.fbText}>Facebook login</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="#25b6ad" style={styles.buttonRight} onPress={()=>this.twitterLogin()}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name="sc-twitter" style={{ fontSize: 30, color: 'rgb(27, 161,243)', marginLeft: '2%' }} />
                                    <Text style={styles.twitterText}>Twitter login</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <GoogleSignIn/>
                    </Animatable.View>
                    <View style={{marginTop:'22%'}}>
                    <CustomFooter />
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        )
    }
}
