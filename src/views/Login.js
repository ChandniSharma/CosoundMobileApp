import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableHighlight, Image, TextInput, TouchableOpacity } from 'react-native';
//import SvgUri from 'react-native-svg-uri';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/login.style'


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    render() {
        return (
            <SafeAreaView>
                <KeyboardAwareScrollView >
                    <View style={{flex:1,backgroundColor:'rgb(245,245,245)'}}>
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
                                <Text style={styles.textDull}>Don't have an account?</Text>
                                <TouchableHighlight>
                                    <Text style={styles.getStarted}>Get Started!</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <Text style={styles.loginText}> Log in</Text>
                        
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Email'}
                                onChangeText={(text) => this.setState({ email: text })}
                                value={this.state.email}
                            />
                       
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Password'}
                                secureTextEntry={true}
                                onChangeText={(text) => this.setState({ password: text })}
                                value={this.state.password}
                            />
                        </View>
                        <View style={styles.rememberView}>
                        
                            <TouchableOpacity style={styles.tickMarkView}>
                                <Image />
                            </TouchableOpacity>

                            <TouchableHighlight style={styles.rememberBtn}>
                                <Text style={styles.rememberText}> Remember me</Text>
                            </TouchableHighlight>
                       
                            <TouchableHighlight style={styles.forgotPwdBtn}>
                                <Text style={styles.forgotPwdText}> Forgot Password?</Text>
                            </TouchableHighlight>
                        </View>

                        <TouchableHighlight underlayColor="#25b6ad" style={[styles.loginButton]}>
                            <Text style={styles.textButtonTitle}>Login</Text>
                        </TouchableHighlight>

                        <View style={styles.socialMediaLoginView}>
                            <TouchableHighlight underlayColor="#25b6ad" style={styles.buttonLeft}>
                               
                                <Text>Facebook login</Text>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="#25b6ad" style={styles.buttonRight}>
                               
                                <Text>Twitter login</Text>
                            </TouchableHighlight>
                            
                       </View>
                       <View style={styles.viewCenterButton}>
                       <TouchableHighlight underlayColor="#25b6ad" style={styles.buttonCenter}>
                               <Text>Google login</Text>
                        </TouchableHighlight>
                       </View>
                      
                        <View style={styles.viewBottom}>
                            <Text style={styles.textBottomMark}>(c) elit. Nulla 2018</Text>
                            <View style={styles.viewShareButtons}>
                                <TouchableOpacity style={styles.shareButtons}>
                                    <Text style={styles.textColorTemp}>F</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.shareButtons}>
                                    <Text style={styles.textColorTemp}>T</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.shareButtons}>
                                    <Text style={styles.textColorTemp}>C</Text>
                                </TouchableOpacity>
                            </View>
                        </View> 
                    
            </View>

                </KeyboardAwareScrollView>

            </SafeAreaView>

        )
    }
}

{/* */}
                // </View> */}