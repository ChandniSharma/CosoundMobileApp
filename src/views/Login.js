import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions, AsyncStorage, Easing } from 'react-native';
//import SvgUri from 'react-native-svg-uri';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/login.style';
import RecoverPwd from './RecoverPwd';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView, createStackNavigator } from 'react-navigation';
import CustomFooter from '../components/common/CustomFooter'
import { checkError } from "../utils";
// import Animation from './animation';
import Logo from './common/logo';
import BackButton from './common/BackButton';
import WaveAnimation from './common/WaveAnimation';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon1 from 'react-native-vector-icons/Entypo';
var FBLoginButton = require('../views/common/FBLoginButton');
//import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

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

    componentDidMount() {
        this.fadeInDownHeader();
        this.fadeInMainView();
       // this.setupGoogleSignin();
    }
    // googleAuth() {
    //     GoogleSignin.signIn()
    //         .then((user) => {
    //             console.log(user);
    //         })
    //         .catch((err) => {
    //             console.log('WRONG SIGNIN', err);
    //         })
    //         .done();
    // }

    // async setupGoogleSignin() {
    //     try {
    //         await GoogleSignin.hasPlayServices({ autoResolve: true });
    //         await GoogleSignin.configure({
    //             iosClientId: settings.iOSClientId,
    //             webClientId: settings.webClientId,
    //             offlineAccess: false
    //         });

    //         const user = await GoogleSignin.currentUserAsync();
    //         console.log(user);
    //     }
    //     catch (err) {
    //         console.log("Google signin error", err.code, err.message);
    //     }
    // }
    fBLogin() {
        LoginManager.logOut();
        console.log(" in fb login button clcick ed");
        LoginManager.setLoginBehavior('browser');
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

    render() {
        const { data, errors, handleChange, login, onSubmit, fetching, navigateToForgotPassword, navigateToGetStartedView, onClickRememberMe } = this.props;
        const error = checkError(login.error);
        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
                <KeyboardAwareScrollView style={{ backgroundColor: 'rgb(245, 245,245)', flex: 0.9 }}>
                    <WaveAnimation />
                    <Animatable.View ref={"mainView"} style={[styles.container, { backgroundColor: 'transparent', position: 'absolute', top: 0, width: '100%' }]}>
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

                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Email'}
                                //onChangeText={(text) => this.setState({ email: text })}
                                value={data.email}
                                name={"email"}
                                onChangeText={val => handleChange('email', val)}
                            />
                            {errors.email ? <Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.email}</Animatable.Text> : null}
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Password'}
                                secureTextEntry={true}
                                //onChangeText={(text) => this.setState({ password: text })}
                                onChangeText={val => handleChange('password', val)}
                                value={data.password}
                                name={"password"}
                            />
                            {errors.password ? <Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.password}</Animatable.Text> : null}

                        </View>
                        <View style={styles.rememberView}>

                            <TouchableOpacity onPress={onClickRememberMe} style={styles.tickMarkView}>
                                {data.rememberMe ? <Image style={styles.imgTickMark} source={require('../assets/tickMark.png')} /> : <Image />}
                            </TouchableOpacity>

                            <TouchableHighlight underlayColor='rgb(245,245,245)' onPress={onClickRememberMe} style={styles.rememberBtn}>
                                {data.rememberMe ? <Text name="rememberMe" style={[styles.rememberText]}>Remember me</Text> : <Text>Remember me</Text>}

                            </TouchableHighlight>

                            <TouchableHighlight style={styles.forgotPwdBtn} onPress={navigateToForgotPassword}>
                                <Text style={styles.forgotPwdText}> Forgot Password?</Text>
                            </TouchableHighlight>
                        </View>

                        <TouchableHighlight underlayColor="#25b6ad" onPress={onSubmit} style={[styles.loginButton]}>
                            <Text style={styles.textButtonTitle} >Login</Text>
                        </TouchableHighlight>

                        <View style={styles.socialMediaLoginView}>

                            <TouchableHighlight underlayColor="#25b6ad" style={styles.buttonLeft} onPress={() => this.fBLogin()}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name="sc-facebook" style={{ fontSize: 30, color: 'rgb(72,103,170)', marginLeft: '2%' }} />
                                    <Text style={styles.fbText}>Facebook login</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="#25b6ad" style={styles.buttonRight}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name="sc-twitter" style={{ fontSize: 30, color: 'rgb(27, 161,243)', marginLeft: '2%' }} />
                                    <Text style={styles.twitterText}>Twitter login</Text>
                                </View>

                            </TouchableHighlight>
                        </View>

                        <View style={styles.viewCenterButton}>
                            {/* <GoogleSigninButton
                                style={{ width: 192, height: 48 }}
                                size={GoogleSigninButton.Size.Wide}
                                color={GoogleSigninButton.Color.Dark}
                                onPress={this._signIn}
                                disabled={this.state.isSigninInProgress} /> */}
                            <TouchableHighlight underlayColor="#25b6ad" style={styles.buttonCenter} >
                                <View style={{flexDirection:'row'}}>
                            <Icon1 name="google-" style={{fontSize:20, color:'rgb(234,67,54)', marginRight:'2%'}}/>
                            <Text style={styles.googlePlusText}>Google login</Text>
                            </View>
                              
                        </TouchableHighlight>
                        </View>

                    </Animatable.View>
                    <CustomFooter />
                </KeyboardAwareScrollView>

            </SafeAreaView>

        )
    }
}
