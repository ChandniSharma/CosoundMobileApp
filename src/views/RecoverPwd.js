import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity } from 'react-native';
//import SvgUri from 'react-native-svg-uri';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/recoverPwd.style'
import * as Animatable from 'react-native-animatable';
import {SafeAreaView} from 'react-navigation';
import CustomFooter from '../components/common/CustomFooter'

export default class RecoverPwd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    onSubmit =() =>{

    }
    render() {
        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
                <KeyboardAwareScrollView style={{ backgroundColor: 'rgb(245,245,245)', flex: 0.9 }}>
                    <Animatable.View style={{ flex: 1, backgroundColor: 'rgb(245,245,245)' }}>
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
                                <View style={styles.leftView}>
                                    <Animatable.Text animation="fadeInDown" style={styles.textDull}>Don't have an account?</Animatable.Text>
                                    <TouchableHighlight>
                                        <Animatable.Text animation="fadeInDown" style={styles.getStarted}>Get Started!</Animatable.Text>
                                    </TouchableHighlight>
                                </View>
                            </View>

                            <Animatable.Text animation="fadeIn" style={styles.loginText}> Forgot Password?</Animatable.Text>

                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Email'}
                                onChangeText={(text) => this.setState({ email: text })}
                                value={this.state.email}
                            />
                        </View>
                       
                         <View style={styles.viewRecoverButton}>
                             <TouchableHighlight underlayColor="#25b6ad" onPress={this.onSubmit} style={[styles.loginButton]}>
                            <Text style={styles.textButtonTitle} >Recover</Text>
                        </TouchableHighlight>
                        </View>

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

{/* */ }
                // </View> */}