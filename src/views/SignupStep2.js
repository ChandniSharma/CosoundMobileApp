import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions,ScrollView } from 'react-native';
//import SvgUri from 'react-native-svg-uri';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/SignupStep2.style';
import RecoverPwd from './RecoverPwd';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-navigation';
import CustomFooter from '../components/common/CustomFooter'

const { width, height } = Dimensions.get('window');

export default class SignupStep2 extends Component {
    constructor(props) {
        super(props);
    }
    fadeInMain = () => this.refs.mainView.fadeIn(1000).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"));
    fadeIn = () => this.refs.titleText.fadeIn(500).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))
    fadeIn = () => this.refs.view1.fadeIn().then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))
    fadeIn = () => this.refs.view2.fadeIn().then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))
   componentDidMount(){
    this.fadeInMain();
  }

    // navigateToSignupStep3Musician = () =>{
    //     this.props.navigation.navigate("SignupStep3Musician");
    // }
    // navigateToSignupStep3 = () =>{
    //     this.props.navigation.navigate("SignupStep3");
    // }

    render() {
    const { handleChange } = this.props;
   
        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
         <ScrollView style={{ backgroundColor: 'rgb(245,245,245)', flex:1 }}>

                    <Animatable.View ref={"mainView"} style={styles.container}>
                        <View style={{ backgroundColor: 'pink' }}>
                            {/* <SvgUri
                    width="200"
                    height="200"
                    source={{uri:'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg'}}
                    />  */}
                        </View>
                        <View style={{ backgroundColor: 'rgb(37,182,173)' }}>
                            
                            <Animatable.Image animation="fadeInDown" style={styles.imgMainTitle} source={require('../assets/cosoundTitle.png')} />
                            <Animatable.Text animation="fadeInDown" style={styles.textWelcome}>Are you...</Animatable.Text>

                            <Animatable.View ref={'view1'} style={{ marginBottom: '5%' }}>
                                <TouchableHighlight onPress={() => this.handleChange('type', 'musician')} underlayColor="white" style={[styles.bigButton]}>
                                <View style={styles.viewButton}>
                                <Image style={styles.musician} source={require('../assets/signup-type-musician.png')} /> 
                                    <Text style={styles.textButtonTitle} >A Musician</Text>
                                </View>
                               
                                </TouchableHighlight>
                            </Animatable.View>

                        </View>
                        <Animatable.View ref={'view2'} style={{ marginBottom: '5%'  }}>
                            <TouchableHighlight  onPress={() => this.handleChange('type', 'professional')} underlayColor="white" style={[styles.bigButton]}>
                            <View style={styles.viewButton}>
                                <Image style={styles.industryProfessional} source={require('../assets/signup-type-pro.png')} /> 
                                    <Text style={styles.textButtonTitle} >Industry Professional</Text>
                                </View>
                               
                            </TouchableHighlight>
                        </Animatable.View>

                        {/* Progress bar  */}

                        <View ref={'progressBarView'} style={[styles.viewProgressbar]}>
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