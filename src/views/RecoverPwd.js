import React, { Component } from 'react';
import { View, Text, TouchableHighlight, TextInput, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/recoverPwd.style'
import * as Animatable from 'react-native-animatable';
import {SafeAreaView} from 'react-navigation';
import CustomFooter from '../components/common/CustomFooter';
import WaveAnimation from './common/WaveAnimation';
import BackButton from './common/BackButton';

export default class RecoverPwd extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            data,
            errors,
            onSubmit,
            handleChange,
          } = this.props;
        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
                <ScrollView>
                <KeyboardAwareScrollView style={{ backgroundColor: 'rgb(245,245,245)', flex: 0.9 }}>
                <View style={{ position: 'absolute',top:0}}>
                    <WaveAnimation />
                </View>
                <Animatable.View style={{ flex: 1, backgroundColor: 'rgb(245,245,245)',position:'absolute', top:0, width:'100%' }}>
                    <View>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                        <BackButton style= {{fontSize:30, marginTop:'10%', alignSelf:'flex-start', position:'absolute', marginLeft:'4%'}} onPress={()=> this.props.navigation.goBack()}/>
                        <Logo color={'#ffffff'} style={{flex:0.3, marginTop:'13%', marginLeft:'5%'}} width="130px" height="44px" />      
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
                            name={"email"}
                            value={data.email}
                            onChangeText={val => handleChange('email', val)}
                        />
                            {errors.email?<Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.email}</Animatable.Text>:null}
                    </View>
                        <View style={styles.viewRecoverButton}>
                            <TouchableHighlight underlayColor="#25b6ad" onPress={onSubmit} style={[styles.loginButton]}>
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
                </ScrollView>
                <CustomFooter />
            </SafeAreaView>
        )
    }
}