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
import Svg,{
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';


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
               <Svg
    viewBox="0 0 1920 680"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <Defs>
      <LinearGradient
        x1="98.7626139%"
        y1="5.50013715%"
        x2="-5.36336263%"
        y2="82.3432999%"
        id="linearGradient-home-1"
      >
        <Stop stopColor="#2CC1A5" offset="0%" />
        <Stop stopColor="#1CA9B4" offset="45.2143426%" />
        <Stop stopColor="#8E5ACD" offset="100%" />
        <Animate
          attributeName="x2"
          dur="4s"
          from="-5.36336263%"
          to="-5.36336263%"
          values="-5.36336263%;30%;-5.36336263%"
          repeatCount="indefinite"
        />
      </LinearGradient>
    </Defs>
    <G id="1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <G id="Fill-2" fill="url(#linearGradient-home-1)">
        <Path
          d="M1920,580.047047 C1869.6412,593.554757 1817.48884,598.299313 1765.37406,595.243269 C1709.84683,591.986579 1655.23193,580.488595 1601.46451,566.690555 C1547.21567,552.768568 1492.08825,538.797604 1439.00523,520.951108 C1343.62574,488.877556 1242.76847,464.691452 1141.74662,479.660584 C1029.83835,496.238947 938.119328,560.79878 844.064913,618.621944 C789.296033,652.295001 730.943157,676.748363 665.85561,678.969243 C604.904931,681.04784 550.377516,658.571547 499.543868,626.711961 C456.822554,599.936728 416.97161,568.373675 371.363886,546.423464 C326.824799,524.987476 278.254008,514.791868 228.855141,517.065113 C147.669928,520.791377 71.1849532,552.895483 -1.24344979e-14,591.781309 L0,0 L1920,0 L1920,580.047057 Z"
          id="hero-bg-1"
        >
          <Animate
            attributeName="d"
            begin="0s"
            dur="12s"
            repeatCount="indefinite"
            from="M1920,580.047047 C1869.6412,593.554757 1817.48884,598.299313 1765.37406,595.243269 C1709.84683,591.986579 1655.23193,580.488595 1601.46451,566.690555 C1547.21567,552.768568 1492.08825,538.797604 1439.00523,520.951108 C1343.62574,488.877556 1242.76847,464.691452 1141.74662,479.660584 C1029.83835,496.238947 938.119328,560.79878 844.064913,618.621944 C789.296033,652.295001 730.943157,676.748363 665.85561,678.969243 C604.904931,681.04784 550.377516,658.571547 499.543868,626.711961 C456.822554,599.936728 416.97161,568.373675 371.363886,546.423464 C326.824799,524.987476 278.254008,514.791868 228.855141,517.065113 C147.669928,520.791377 71.1849532,552.895483 -1.24344979e-14,591.781309 L0,0 L1920,0 L1920,580.047057 Z"
            to="M1920,597.517629 C1881.92467,586.048028 1840.69286,560.717814 1783.04688,576.082411 C1699.90625,598.242187 1653.35937,632.484375 1594.53906,632.484375 C1535.71875,632.484375 1479.51279,597.940378 1429.61719,576.082411 C1337.08594,535.546875 1287.40625,506.435184 1171.85937,506.435184 C1056.3125,506.435184 942.117187,530.757813 882.375,576.082411 C822.632812,621.40701 803.4375,655.671875 732.421875,684.054688 C661.40625,712.4375 603.601562,693.382812 551.414062,673.632812 C499.226562,653.882812 479.921875,602.851562 430.601562,576.082411 C381.28125,549.31326 296.267675,548.786511 245.65625,557.820312 C160.437345,573.031319 76.1567738,635.043931 -1.24344979e-14,685.620764 L0,0 L1920,0 L1920,597.517629 Z"
            values={`
            		M1920,580.047047 C1869.6412,593.554757 1817.48884,598.299313 1765.37406,595.243269 C1709.84683,591.986579 1655.23193,580.488595 1601.46451,566.690555 C1547.21567,552.768568 1492.08825,538.797604 1439.00523,520.951108 C1343.62574,488.877556 1242.76847,464.691452 1141.74662,479.660584 C1029.83835,496.238947 938.119328,560.79878 844.064913,618.621944 C789.296033,652.295001 730.943157,676.748363 665.85561,678.969243 C604.904931,681.04784 550.377516,658.571547 499.543868,626.711961 C456.822554,599.936728 416.97161,568.373675 371.363886,546.423464 C326.824799,524.987476 278.254008,514.791868 228.855141,517.065113 C147.669928,520.791377 71.1849532,552.895483 -1.24344979e-14,591.781309 L0,0 L1920,0 L1920,580.047057 Z;
                M1920,597.517629 C1881.92467,586.048028 1840.69286,560.717814 1783.04688,576.082411 C1699.90625,598.242187 1653.35937,632.484375 1594.53906,632.484375 C1535.71875,632.484375 1479.51279,597.940378 1429.61719,576.082411 C1337.08594,535.546875 1287.40625,506.435184 1171.85937,506.435184 C1056.3125,506.435184 942.117187,530.757813 882.375,576.082411 C822.632812,621.40701 803.4375,655.671875 732.421875,684.054688 C661.40625,712.4375 603.601562,693.382812 551.414062,673.632812 C499.226562,653.882812 479.921875,602.851562 430.601562,576.082411 C381.28125,549.31326 296.267675,548.786511 245.65625,557.820312 C160.437345,573.031319 76.1567738,635.043931 -1.24344979e-14,685.620764 L0,0 L1920,0 L1920,597.517629 Z;
                M1920,580.047047 C1869.6412,593.554757 1817.48884,598.299313 1765.37406,595.243269 C1709.84683,591.986579 1655.23193,580.488595 1601.46451,566.690555 C1547.21567,552.768568 1492.08825,538.797604 1439.00523,520.951108 C1343.62574,488.877556 1242.76847,464.691452 1141.74662,479.660584 C1029.83835,496.238947 938.119328,560.79878 844.064913,618.621944 C789.296033,652.295001 730.943157,676.748363 665.85561,678.969243 C604.904931,681.04784 550.377516,658.571547 499.543868,626.711961 C456.822554,599.936728 416.97161,568.373675 371.363886,546.423464 C326.824799,524.987476 278.254008,514.791868 228.855141,517.065113 C147.669928,520.791377 71.1849532,552.895483 -1.24344979e-14,591.781309 L0,0 L1920,0 L1920,580.047057 Z
            		`}
          />
        </Path>
      </G>
    </G>
  </Svg>
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