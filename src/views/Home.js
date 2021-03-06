import React from 'react';
import {View, TouchableOpacity, Text, Dimensions, Image, TouchableHighlight} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import homeStyle from '../stylesheet/home.style';
import { SafeAreaView } from 'react-navigation';
import * as Animatable from 'react-native-animatable';
import WaveAnimation from './common/WaveAnimation';
import Logo from './common/logo';

console.disableYellowBox = true;

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColorSignupButton: 'rgb(255,38, 123)',
            bgColorLoginButton: 'rgb(255,255, 255)',
            titleColorSignupButton: 'rgb(255,255,255)',
            titleColorLoginButton: 'rgb(37,182,173)',
        }
        this.arrayFooterOptions = ["Option One", "Option Two", "Option Three", "Option Four", "Option Five"];
        this.arrayFooterTitles = ["FOOTER MENU 1", "FOOTER MENU 2", "FOOTER MENU 3"];
    }

    fadeInMainView = () => this.refs.mainView.fadeIn(2000).then(endState => this.fadeInVideoView())

    fadeInVideoView = () => this.refs.videoView.fadeInRight(1000).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))

    componentDidMount() {
        this.fadeInMainView();
    }
    navigateToLogin = () => {
        this.props.navigation.navigate("Login")
    }
    navigateToSignupStep1 = () => {
        this.props.navigation.navigate("Signup");
    }
    render() {
        let footerText = [];
        for (let i = 0; i < this.arrayFooterTitles.length; i++) {
            footerText.push(<Text key={i} style={homeStyle.textFooterTitle}> {this.arrayFooterTitles[i]}</Text>);
            for (let j = 0; j < this.arrayFooterOptions.length; j++) {
                footerText.push(<Text key={j} style={homeStyle.textOptionTitle}> {this.arrayFooterOptions[j]}</Text>);
            }
        }
        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={homeStyle.container}>
                <KeyboardAwareScrollView style={{ backgroundColor: 'rgb(245,245,245)', flex: 1  }}>
                    <Animatable.View ref={"mainView"} style={[{ flex: 1 }, { backgroundColor: 'transparent', width: '100%',
                       }]}>
                        <View style={{top:0,position:'absolute'}}>
                        <WaveAnimation style={{backgroundColor:'red'}} />
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1,marginTop:'5%'}}>
                            <Image style={homeStyle.imgSideTitle} />
                            <View style={{ flex: 0.6 }} />
                            <TouchableOpacity style={homeStyle.btnMenuBar}>
                            </TouchableOpacity>
                        </View>
                        <Logo color={'#ffffff'} style={{ flex: 0.7, alignSelf: 'center', }} width="260px" height="100px" />
                        <Animatable.Text animation="fadeInDown" style={homeStyle.textMusicDescription}> The music industry network and</Animatable.Text>
                        <Animatable.Text animation="fadeInDown" style={homeStyle.textMusicDescription2}>marketplace</Animatable.Text>
                        <View ref={'loginView'} style={homeStyle.viewLoginButton}>
                            <TouchableHighlight style={[homeStyle.signupButton, {backgroundColor :this.state.bgColorSignupButton}]} onPress={this.navigateToSignupStep1}>
                                <Text style={homeStyle.textSignupButtonTitle}>Sign up</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={this.navigateToLogin} style={[homeStyle.loginButton, {backgroundColor : this.state.bgColorLoginButton}]}>
                                <Text style={homeStyle.textLoginButtonTitle}> Login</Text>
                            </TouchableHighlight>
                        </View>
                        <Animatable.View ref={"videoView"} style={homeStyle.videoStyle}>
                            <Image source={require('../assets/homepage-video-placeholder.jpg')} />
                        </Animatable.View>

                         <View style={{ marginTop: '35%' }}>
                            <Text style={homeStyle.textTitleJoin}> Join for free</Text>
                            <Text style={homeStyle.textDescriptionJoin}> Cosound is the world's first music industry only platform. Built for music industry professionals, musicians and business. Join today for free, and begin sharing, collaborating and developing your career </Text>
                            <Image style={homeStyle.mobileImage} source={require('../assets/prefooterMobile.png')} />
                        </View>

                        <View style={homeStyle.viewBottom}>
                            <View style={homeStyle.viewFooterSocialShareOption}>
                                <Image style={homeStyle.imgBottomCosound} source={require('../assets/bottomCosound.png')} />
                                <View style={{ flex: 0.7 }} />
                                <View style={homeStyle.viewShareButtons}>
                                    <TouchableOpacity style={homeStyle.shareButtons}>
                                        <Text style={homeStyle.textColorTemp}>F</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={homeStyle.shareButtons}>
                                        <Text style={homeStyle.textColorTemp}>T</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={homeStyle.shareButtons}>
                                        <Text style={homeStyle.textColorTemp}>C</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <Text style={homeStyle.textBottomDescription}> Adipiscing bibendum est ultricies integer quis auctor. Enim praesent elementum facilisis leo vel. Pellentesque sit amet porttitor eget dolor morbi non arcu risus. Amet est placerat in egestas erat imperdiet. Nisl nisi scelerisque eu ultrices vitae </Text>
                            <View style={homeStyle.viewFooterText}>
                                {footerText}
                            </View>
                            <Text style={homeStyle.textBottomMark}>(c) elit. Nulla 2018</Text>
                        </View>
                    </Animatable.View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        )
    }
}