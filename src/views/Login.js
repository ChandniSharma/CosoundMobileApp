import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity,Dimensions, AsyncStorage, Easing } from 'react-native';
//import SvgUri from 'react-native-svg-uri';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/login.style';
import RecoverPwd from './RecoverPwd';
import * as Animatable from 'react-native-animatable';
import {SafeAreaView, createStackNavigator} from 'react-navigation';
import CustomFooter from '../components/common/CustomFooter'
import { checkError } from "../utils";
// import Animation from './animation';
import Logo from './common/logo';
import WaveAnimation from './common/WaveAnimation';



export default class Login extends Component {
    constructor(props) {
        super(props);
    }
     fadeIn = () => this.refs.mainView.fadeIn(1000).then(endState => console.log(endState.finished ? 'fadein finished':" cancelled"))
     fadeIn = () => this.refs.titleText.fadeIn(500).then(endState => console.log(endState.finished ? 'fadein finished':" cancelled"))

    render() {
        const { data, errors, handleChange, login, onSubmit, fetching,navigateToForgotPassword,navigateToGetStartedView, onClickRememberMe } = this.props;
        const error = checkError(login.error);
        return (
            <SafeAreaView forceInset={{ top: 'never', bottom:'never' }} style={styles.container}>
               <KeyboardAwareScrollView style={{backgroundColor:'transparent', flex:0.9}}>
               <WaveAnimation /> 
                 <Animatable.View ref={"mainView"} style={[styles.container, {backgroundColor:'transparent',position:'absolute', top:0, width:'100%' } ]}>
                         <View style={{ backgroundColor: 'transparant' }}>

                        <View style={{ flexDirection: 'row', flex:1}}>
                             
                            <Logo color={'#ffffff'} style={{flex:0.3, marginTop:'13%', marginLeft:'5%'}} width="130px" height="44px" />                           
                            <View style={styles.leftView}>
                                <Animatable.Text animation="fadeInDown" style={styles.textDull}>Don't have an account?</Animatable.Text>
                                <TouchableOpacity onPress={navigateToGetStartedView}>
                                    <Animatable.Text animation="fadeInDown" style={styles.getStarted}>Get Started!</Animatable.Text>
                                </TouchableOpacity>
                            </View>

                        </View>

        

                       <Animatable.Text animation="fadeIn" style={styles.loginText}> Log in</Animatable.Text>
                        {error.message?<Animatable.Text animation="fadeIn" style={styles.errorText}> {error.message}</Animatable.Text>:null}
                           
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Email'}
                                //onChangeText={(text) => this.setState({ email: text })}
                                value={data.email}
                                name={"email"}
                                onChangeText={val => handleChange('email', val)}
                            />
                            {errors.email?<Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.email}</Animatable.Text>:null}
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Password'}
                                secureTextEntry={true}
                                //onChangeText={(text) => this.setState({ password: text })}
                                onChangeText={val => handleChange('password', val)}
                                value={data.password}
                                name={"password"}
                            />
                            {errors.password?<Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.password}</Animatable.Text>:null}

                        </View>
                        <View style={styles.rememberView}>
                        
                            <TouchableOpacity onPress={onClickRememberMe} style={styles.tickMarkView}>
                               {data.rememberMe?<Image style={styles.imgTickMark} source={require('../assets/tickMark.png')} />:<Image />} 
                            </TouchableOpacity>

                            <TouchableHighlight underlayColor='rgb(245,245,245)'  onPress= {onClickRememberMe} style={styles.rememberBtn}>
                            {data.rememberMe? <Text name= "rememberMe" style={[styles.rememberText]}>Remember me</Text>: <Text>Remember me</Text>}
                               
                            </TouchableHighlight>
                       
                            <TouchableHighlight style={styles.forgotPwdBtn} onPress={navigateToForgotPassword}>
                                <Text style={styles.forgotPwdText}> Forgot Password?</Text>
                            </TouchableHighlight>
                        </View>

                        <TouchableHighlight underlayColor="#25b6ad" onPress={onSubmit} style={[styles.loginButton]}>
                            <Text style={styles.textButtonTitle} >Login</Text>
                        </TouchableHighlight>

                        <View style={styles.socialMediaLoginView}>
                            <TouchableHighlight underlayColor="#25b6ad" style={styles.buttonLeft}>
                                <Text style={styles.fbText}>Facebook login</Text>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="#25b6ad" style={styles.buttonRight}>
                                <Text style={styles.twitterText}>Twitter login</Text>
                            </TouchableHighlight>
                       </View>

                       <View style={styles.viewCenterButton}>
                       <TouchableHighlight underlayColor="#25b6ad" style={styles.buttonCenter}>
                               <Text style={styles.googlePlusText}>Google login</Text>
                        </TouchableHighlight>
                       </View>
                      
            </Animatable.View>
                </KeyboardAwareScrollView>
               <CustomFooter />
            </SafeAreaView>

        )
    }
}
