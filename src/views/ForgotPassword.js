import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
//import SvgUri from 'react-native-svg-uri';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/forgotPassword.style'
import * as Animatable from 'react-native-animatable';
import {SafeAreaView} from 'react-navigation';
import CustomFooter from '../components/common/CustomFooter'
import { isEmpty } from "lodash";

export default class ForgotPasswordComponent extends Component {
    constructor(props) {
        super(props);
      
    }

    render() {
        const {
          data,
          errors,
          onSubmit,
          handleChange,
          forgotPassword,
          isShowLoader,
          } = this.props;
          console.log("ForgetPassword===",forgotPassword)
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
                            {!isEmpty(forgotPassword.data) && forgotPassword.data.message && (
                  <Animatable.Text animation="fadeIn" style={styles.errorText}> {forgotPassword.data.message}</Animatable.Text>
            )}
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Email'}
                                name={"email"}
                                value={data.email}
                                onChangeText={val => handleChange('email', val)}
                            />
                             {errors.email && <Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.email}</Animatable.Text>}
              {!isEmpty(forgotPassword.error) &&
                forgotPassword.error.message && (
                  <Animatable.Text animation="fadeIn" style={styles.errorText}> {forgotPassword.error.message}</Animatable.Text>
                )}
                        </View>
                       
                         <View style={styles.viewRecoverButton}>
                           <TouchableHighlight underlayColor="#25b6ad" onPress={onSubmit} style={[styles.loginButton]}>
                           {isShowLoader? <ActivityIndicator size="large" color="gray" /> :
                            <Text style={styles.textButtonTitle} >Recover</Text>}
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