import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from '../stylesheet/SignupStep5.style';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-navigation';
import CustomFooter from '../components/common/CustomFooter';
import WaveAnimation from './common/WaveAnimation';
import BackButton from './common/BackButton';
import Logo from './common/logo';

export default class SignupStep5 extends Component {
    constructor(props) {
        super(props);
    }

    fadeIn = () => this.refs.mainView.fadeIn(1000).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))
    
    fadeIn = () => this.refs.titleText.fadeIn(500).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))

    fadeInView1 = () => this.refs.view1.fadeInUp().then(setTimeout(() => {
        this.fadeInView2();
      }, 30))
      fadeInView2 = () => this.refs.view2.fadeInUp().then(setTimeout(() => {
        this.fadeInUpProgressView();
      }, 60))
    
    fadeInUpProgressView = () => this.refs.progressView.fadeInUp().then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))
    
    onClickRememberMe = () => {
        this.setState({
            isRememberMe: !this.state.isRememberMe
        })
    }
    componentDidMount() {
    }

    navigateToSignupSuggestions() {
    }

    render() {
        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
                <ScrollView style={{ backgroundColor: 'rgb(245,245,245)', flex: 1 }}>
                    <Animatable.View ref={"mainView"} style={{ flex:1,width: '100%' }}>
                    <View style={{ position: 'absolute',top:0}}>
                            <WaveAnimation />
                        </View>
                        <View >
                            <BackButton style={{ fontSize: 30, marginTop: '10%', alignSelf: 'flex-start', position: 'absolute', marginLeft: '4%' }} onPress={() => this.props.navigation.goBack()} />
                            <Logo color={'#ffffff'} style={{ flex: 0.7, alignSelf: 'center',marginTop:'10%' }} width="230px" height="44px" />
                            <Animatable.Text animation="fadeInDown" style={styles.textWelcome}>Finding your network suggestions...</Animatable.Text>
                            <Animatable.View ref={'view1'} style={{ marginBottom: '5%' }}>
                                <View style={styles.findingView}>
                                    <Animatable.Image animation="wobble" easing="linear" iterationCount="infinite" direction="alternate" style={styles.imageSearchIcon} source={require('../assets/suggestions-search.png')} />
                                </View>
                            </Animatable.View>
                        </View>
                        <Animatable.View ref={'view2'} style={styles.viewDescription}>
                            <Text style={styles.textMusicDescription2}>Using some music magic we're finding the best contacts to help you make the most of cosound. </Text>
                        </Animatable.View>
                        <Animatable.View ref={'progressView'} style={[styles.viewProgressbar]}>
                            <View style={styles.viewSelected}>
                                <View style={styles.viewCircleCompleted}>
                                    <Image style={styles.imgTickMark} source={require('../assets/tickMark.png')} />
                                </View>
                                <Text style={styles.textCompleted}>Choose Location</Text>
                            </View>
                            <View style={styles.viewSingleLineFilled}></View>
                            <View style={styles.viewSelected}>
                                <View style={styles.viewCircleCompleted}>
                                    <Image style={styles.imgTickMark} source={require('../assets/tickMark.png')} />
                                </View>
                                <Text style={styles.textCompleted}>Profession</Text>
                            </View>
                            <View style={styles.viewSingleLineFilled}></View>
                            <View style={styles.viewSelected}>
                                <View style={styles.viewCircleCompleted}>
                                    <Image style={styles.imgTickMark} source={require('../assets/tickMark.png')} />
                                </View>
                                <Text style={styles.textCompleted}>Tell us more</Text>
                            </View>
                            <View style={styles.viewSingleLineFilled}></View>
                            <View style={styles.viewNotSelected}>
                                <View style={styles.viewCircleFilled}>
                                    <Image style={styles.imgTickMark} source={require('../assets/tickMark.png')} />
                                </View>
                                <Text style={styles.textSelected}>Meet the music</Text>
                            </View>
                        </Animatable.View>
                    </Animatable.View>
                    <CustomFooter />
                </ScrollView>
            </SafeAreaView>
        )
    }
}