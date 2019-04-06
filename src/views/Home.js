import React from 'react';
import { View, TouchableOpacity, Text, Dimensions, Image,TouchableHighlight } from 'react-native';
//import Image from 'react-native-remote-svg'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
//import HomeStyle from '../stylesheet/HomeStyle'
import homeStyle from '../stylesheet/home.style';
import Video from 'react-native-video';
import {SafeAreaView} from 'react-navigation';
import * as Animatable from 'react-native-animatable';
import CustomFooter from '../components/common/CustomFooter';
import SignupStep1 from './SignupStep1';



const { width, height } = Dimensions.get('window');
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
    //fadeInLoginView = () => this.refs.loginView.fadeIn(1000).then(endState => console.log(endState.finished ? 'fadein finished':" cancelled"))

    componentDidMount(){
     //  this.fadeInLoginView();
    }
    navigateToLogin = () =>{
        this.props.navigation.navigate("Login")
    }
    navigateToSignupStep1 = () =>{
        this.props.navigation.navigate("SignupStep1");
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
            <SafeAreaView forceInset={{ top: 'never', bottom:'never' }} style={homeStyle.container}>
               <KeyboardAwareScrollView style={{backgroundColor:'rgb(245,245,245)'}}>
                    <View style={{ backgroundColor: this.state.titleColorLoginButton }}>
                        {/* <Image
                        source={require('../assets/logo.svg')}
                        style={{ width: width, height: 200}}
                    /> */}
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            {/* <Text style={homeStyle.textSideTitle}>cosound</Text> */}
                            <Image style={homeStyle.imgSideTitle} />
                            <View style={{flex:0.6}}/>
                            <TouchableOpacity style={homeStyle.btnMenuBar}>
                                {/* <Image style={homeStyle.imgMenuBar} source={require('../assets/close.png')} /> */}
                            </TouchableOpacity>
                        </View>

                        <Animatable.Image animation="fadeInDown" style={homeStyle.imgMainTitle} source={require('../assets/cosoundTitle.png')}/>
                        <Animatable.Text animation="fadeInDown" style={homeStyle.textMusicDescription}> The music industry network and</Animatable.Text>
                        <Animatable.Text animation="fadeInDown" style={homeStyle.textMusicDescription2}>marketplace</Animatable.Text>

                        <View ref={'loginView'} style={homeStyle.viewLoginButton}>

                            <TouchableHighlight style={[homeStyle.signupButton, backgroundColor = this.state.bgColorSignupButton]} onPress={this.navigateToSignupStep1}>
                                <Text style={homeStyle.textSignupButtonTitle}>Sign up</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={this.navigateToLogin} style={[homeStyle.loginButton, backgroundColor = this.state.bgColorLoginButton]}>
                                <Text style={homeStyle.textLoginButtonTitle}> Login</Text>
                            </TouchableHighlight>

                        </View>
                    </View>
                    <Image style={homeStyle.videoStyle} source={require('../assets/homepage-video-placeholder.jpg')} />
                    {/* <Video source={require('../assets/test.mp4')}   // Can be a URL or a local file.
                        ref={(ref) => {
                            this.player = ref
                        }}                                      // Store reference
                        onBuffer={this.onBuffer}                // Callback when remote video is buffering
                        onError={this.videoError}               // Callback when video cannot be loaded
                        style={homeStyle.backgroundVideo} /> */}

                    <Text style={homeStyle.textTitleJoin}> Join for free</Text>
                    <Text style={homeStyle.textDescriptionJoin}> Cosound is the world's first music industry only platform. Built for music industry professionals, musicians and business. Join today for free, and begin sharing, collaborating and developing your career </Text>

                    <Image style={homeStyle.mobileImage} source={require('../assets/prefooterMobile.png')} />

                    <View style={homeStyle.viewBottom}>
                        <View style={homeStyle.viewFooterSocialShareOption}>
                            <Image style={homeStyle.imgBottomCosound} source={require('../assets/bottomCosound.png')}/>
                              <View style={{flex:0.7}}/>
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
                </KeyboardAwareScrollView>
               
            </SafeAreaView>)
    }
}