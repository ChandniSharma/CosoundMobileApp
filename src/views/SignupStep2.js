import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
//import SvgUri from 'react-native-svg-uri';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/SignupStep2.style';
import RecoverPwd from './RecoverPwd';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-navigation';
import CustomFooter from '../components/common/CustomFooter'
import WaveAnimation from './common/WaveAnimation';
import Logo from './common/logo';
import BackButton from './common/BackButton';

const { width, height } = Dimensions.get('window');

export default class SignupStep2 extends Component {
    constructor(props) {
        super(props);
    }
    fadeInMain = () => this.refs.mainView.fadeIn(1000).then(setTimeout(() => {
        this.fadeInView1();
    }, 10));
    // fadeInDownLogo =() => this.refs.logoView.fadeInDown(1000).then(setTimeout(() => {
    //     this.fadeInView1();
    // }, 20));

    fadeInView1 = () => this.refs.view1.fadeInUp().then(setTimeout(() => {
        this.fadeInView2();
    }, 30))
    fadeInView2 = () => this.refs.view2.fadeInUp().then(setTimeout(() => {
        this.fadeInUpProgressView();
    }, 60))

    fadeInUpProgressView = () => this.refs.progressView.fadeInUp().then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))

   
    componentDidMount() {
        this.fadeInMain();
    }
    render() {
        const { handleChange } = this.props;

        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
                <ScrollView style={{ backgroundColor: 'rgb(245,245,245)', flex: 1 }}>
                   
                    <Animatable.View ref={"mainView"} style={[styles.container, { width: '100%' }]}>
                    <View style={{ position: 'absolute',top:0}}>
                            <WaveAnimation />
                        </View>
                        <View>
                            <BackButton style={{ fontSize: 30, marginTop: '10%', alignSelf: 'flex-start', position: 'absolute', marginLeft: '4%' }} onPress={() => this.props.goToTabIndex(1)} />
                           <Animatable.View ref={'logoView'} style={{alignSelf:'center', width:'70%'}}>
                            <Logo color={'#ffffff'} style={styles.imgMainTitle} width="230px" height="44px" />
                            </Animatable.View>
                            <Animatable.Text animation="fadeInUp" style={styles.textWelcome}>Are you...</Animatable.Text>

                            <Animatable.View ref={'view1'} style={{ marginBottom: '5%' }}>
                                <TouchableHighlight onPress={() => handleChange('type', 'musician')} underlayColor="white" style={[styles.bigButton]}>
                                    <View style={styles.viewButton}>
                                        <Image style={styles.musician} source={require('../assets/signup-type-musician.png')} />
                                        <Text style={styles.textButtonTitle} >A Musician</Text>
                                    </View>

                                </TouchableHighlight>
                            </Animatable.View>

                        </View>
                        <Animatable.View ref={'view2'} style={{ marginBottom: '5%' }}>
                            <TouchableHighlight onPress={() => handleChange('type', 'professional')} underlayColor="white" style={[styles.bigButton]}>
                                <View style={styles.viewButton}>
                                    <Image style={styles.industryProfessional} source={require('../assets/signup-type-pro.png')} />
                                    <Text style={styles.textButtonTitle} >Industry Professional</Text>
                                </View>

                            </TouchableHighlight>
                        </Animatable.View>

                        {/* Progress bar  */}

                        <Animatable.View ref={'progressView'} style={[styles.viewProgressbar]}>
                            <View style={styles.viewSelected}>
                                <View style={styles.viewCircleCompleted}>
                                    <Image style={styles.imgTickMarkInCompleted} source={require('../assets/tickMark.png')} />
                                </View>
                                <Text style={styles.textCompleted}>Choose Location</Text>
                            </View>
                            <View style={styles.viewSingleLineFilled}></View>

                            <View style={styles.viewNotSelected}>
                                <View style={styles.viewCircleFilled}>
                                    <Image style={styles.imgTickMark} source={require('../assets/tickMark.png')} />
                                </View>
                                <Text style={styles.textSelected}>Profession</Text>
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
                </ScrollView>

            </SafeAreaView>

        )
    }
}

{/* */ }
                // </View> */}