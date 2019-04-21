import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity,Dimensions, AsyncStorage } from 'react-native';
//import SvgUri from 'react-native-svg-uri';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/login.style';
import RecoverPwd from './RecoverPwd';
import * as Animatable from 'react-native-animatable';
import {SafeAreaView} from 'react-navigation';
import CustomFooter from '../components/common/CustomFooter'
import { checkError } from "../utils";

export default class Login extends Component {
    constructor(props) {
        super(props);
       
    }
     fadeIn = () => this.refs.mainView.fadeIn(1000).then(endState => console.log(endState.finished ? 'fadein finished':" cancelled"))
     fadeIn = () => this.refs.titleText.fadeIn(500).then(endState => console.log(endState.finished ? 'fadein finished':" cancelled"))


    render() {
        const { data, errors, handleChange, login, onSubmit, fetching,navigateToForgotPassword, navigateToGetStartedView, onClickRememberMe } = this.props;

        console.log(" in component =====",this.props);
        const error = checkError(login.error);
        return (
            <SafeAreaView forceInset={{ top: 'never', bottom:'never' }} style={styles.container}>
               <KeyboardAwareScrollView style={{backgroundColor:'rgb(245,245,245)', flex:0.9}}>
                 <Animatable.View ref={"mainView"} style={styles.container}>
                  <View style={{backgroundColor:'pink'}}>
                    {/* <SvgUri
                    width="200"
                    height="200"
                    source={{uri:'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg'}}
                    />  */}
                    </View>
                    <View style={{ backgroundColor: 'rgb(37,182,173)' }}>
                        <View style={{ flexDirection: 'row', flex:1 }}>
                            <Image style={styles.imgSideTitle} />
                             <View style={{flex:0.3}} />
                            <View style={styles.leftView}>
                                <Animatable.Text animation="fadeInDown" style={styles.textDull}>Don't have an account?</Animatable.Text>
                                <TouchableHighlight underlayColor='rgb(245,245,245)' onPress={navigateToGetStartedView}>
                                    <Animatable.Text animation="fadeInDown" style={styles.getStarted}>Get Started!</Animatable.Text>
                                </TouchableHighlight>
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
