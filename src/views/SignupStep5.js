import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions,ScrollView } from 'react-native';
//import SvgUri from 'react-native-svg-uri';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/SignupStep5.style';
import RecoverPwd from './RecoverPwd';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-navigation';
import CustomFooter from '../components/common/CustomFooter';
import CustomHeader from '../components/common/CustomHeader'


const { width, height } = Dimensions.get('window');

export default class SignupStep5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            postalCode: '',


        }
    }
    fadeIn = () => this.refs.mainView.fadeIn(1000).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))
    fadeIn = () => this.refs.titleText.fadeIn(500).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))

    fadeIn = () => this.refs.view1.fadeIn().then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))
    fadeIn = () => this.refs.view2.fadeIn().then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))
   
   // bounce = () => this.view.bounce(800).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));


    onClickRememberMe = () => {
        this.setState({
            isRememberMe: !this.state.isRememberMe
        })
    }

    render() {

        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
         <ScrollView style={{ backgroundColor: 'rgb(245,245,245)', flex:1 }}>

                    <Animatable.View ref={"mainView"} style={styles.container}>
                       <CustomHeader />
                        <View style={{ backgroundColor: 'rgb(37,182,173)' }}>
                            
                            <Animatable.Image animation="fadeInDown" style={styles.imgMainTitle} source={require('../assets/cosoundTitle.png')} />
                            <Animatable.Text animation="fadeInDown" style={styles.textWelcome}>Finding your network suggestions...</Animatable.Text>

                            <Animatable.View ref={'view1'} style={{ marginBottom: '5%' }}>
                               <View style={styles.findingView}>
                                   <Animatable.Image style={styles.imageSearchIcon} source={require('../assets/suggestions-search.png')}/>
                               </View>
                            </Animatable.View>

                        </View>
                        <Animatable.View ref={'view2'} style={styles.viewDescription}>
                           
                                    <Text style={styles.textMusicDescription2}>Using some music magic we're finding the best contacts to help you make the most of cosound. </Text>
                               
                        </Animatable.View>

                        {/* Progress bar  */}

                        <View style={[styles.viewProgressbar]}>
                            <View style={styles.viewSelected}>
                                <View style={styles.viewCircleCompleted}>
                                    <Image style={styles.imgTickMark} source={require('../assets/tickMark.png')} />
                                </View>
                                <Text style={styles.textSelected}>Choose Location</Text>
                            </View>
                            <View style={styles.viewSingleLineFilled}></View>

                            <View style={styles.viewNotSelected}>
                                <View style={styles.viewCircleFilled}>
                                    <Image style={styles.imgTickMark} source={require('../assets/tickMark.png')} />
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

                        </View>

                    </Animatable.View>
                   <CustomFooter />
                </ScrollView>
               
            </SafeAreaView>

        )
    }
}

{/* */ }
                // </View> */}