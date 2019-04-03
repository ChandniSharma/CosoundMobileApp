import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
//import SvgUri from 'react-native-svg-uri';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/getStarted.style';
import RecoverPwd from './RecoverPwd';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-navigation';
import CustomFooter from '../components/common/CustomFooter'


const { width, height } = Dimensions.get('window');

export default class GetStartedView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            postalCode: '',


        }
    }
    fadeIn = () => this.refs.mainView.fadeIn(1000).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))
    fadeIn = () => this.refs.titleText.fadeIn(500).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))

    onClickRememberMe = () => {
        this.setState({
            isRememberMe: !this.state.isRememberMe
        })
    }

    render() {

        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
                <KeyboardAwareScrollView style={{ backgroundColor: 'rgb(245,245,245)', flex: 0.9}}>
                    <Animatable.View ref={"mainView"} style={styles.container}>
                        <View style={{ backgroundColor: 'pink' }}>
                            {/* <SvgUri
                    width="200"
                    height="200"
                    source={{uri:'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg'}}
                    />  */}
                        </View>
                        <View style={{ backgroundColor: 'rgb(37,182,173)' }}>
                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <Image style={styles.imgSideTitle} />
                                <View style={{ flex: 0.3 }} />

                            </View>
                            <Animatable.Image animation="fadeInDown" style={styles.imgMainTitle} source={require('../assets/cosoundTitle.png')} />
                            <Animatable.Text animation="fadeInDown" style={styles.textWelcome}> Welcome, user!</Animatable.Text>

                            <Animatable.Text animation="fadeInDown" style={styles.textMusicDescription}> The music industry network and</Animatable.Text>
                            <Animatable.Text animation="fadeInDown" style={styles.textMusicDescription2}>marketplace</Animatable.Text>

                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Select Location'}
                                //onChangeText={(text) => this.setState({ email: text })}
                                value={this.state.location}
                                name={"location"}
                                onChangeText={val => this.setState({ location: val })}
                            />
                            {/* {errors.email?<Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.email}</Animatable.Text>:null} */}
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Postal Code'}

                                //onChangeText={(text) => this.setState({ password: text })}
                                onChangeText={val => this.setState({ postalCode: val })}
                                value={this.state.postalCode}
                                name={"postalCode"}
                            />
                            {/* {errors.password?<Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.password}</Animatable.Text>:null} */}

                        </View>
<View style={{marginBottom:'5%'}}>
     <TouchableHighlight underlayColor="#25b6ad" style={[styles.loginButton]}>
                            <Text style={styles.textButtonTitle} >Confirm Location</Text>
                        </TouchableHighlight>
</View>
                        
                        {/* Progress bar  */}

                        <View style={[styles.viewProgressbar, {flex:1}]}>
                            <View style={styles.viewSelected}>
                                <View style={styles.viewCircleFilled}>
                                    <Image style={styles.imgTickMark} source={require('../assets/tickMark.png')} />
                                </View>
                                <Text style={styles.textSelected}>Choose Location</Text>
                            </View>
                            <View style={styles.viewSingleLine}></View>

                            <View style={styles.viewNotSelected}>
                                <View style={styles.viewCircleEmpty}>
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

                </KeyboardAwareScrollView>
              <CustomFooter />
            </SafeAreaView>

        )
    }
}

{/* */ }
                // </View> */}