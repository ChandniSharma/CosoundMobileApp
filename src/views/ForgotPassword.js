import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
//import SvgUri from 'react-native-svg-uri';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/forgotPassword.style'
import * as Animatable from 'react-native-animatable';
import {SafeAreaView} from 'react-navigation';
import CustomFooter from '../components/common/CustomFooter'
import { isEmpty } from "lodash";
import WaveAnimation from './common/WaveAnimation';
import Logo from './common/logo';
import BackButton from './common/BackButton';

export default class ForgotPasswordComponent extends Component {
    constructor(props) {
        super(props);
      
    }
    fadeInDownHeader = () => this.refs.headerView.fadeInDown(1000);
    fadeInMainView = () => this.refs.mainView.fadeIn(2000).then(endState => console.log(endState.finished ? 'fadein finished':" cancelled"))

    _navigateToGetStartedView = () => {
        this.props.navigation.navigate("Signup");
      }

      componentDidMount(){
        this.fadeInDownHeader();
        this.fadeInMainView();
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
        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
                <KeyboardAwareScrollView style={{ backgroundColor: 'rgb(245,245,245)', flex: 0.9 }}>
                

                    <Animatable.View ref={"mainView"} style={{ flex: 1, backgroundColor:'transparent', width:'100%' }}>
                    <View style={{ position: 'absolute',top:0}}>
                            <WaveAnimation />
                        </View>
                        <View>
                        <Animatable.View ref={"headerView"} style={{ flexDirection: 'row', flex:1}}>
                             
                        <BackButton style= {{fontSize:30, marginTop:'15%', alignSelf:'flex-start'}} onPress={()=> this.props.navigation.goBack()}/>
                            <Logo color={'#ffffff'} style={{ marginTop:'13%',flex:0.5}} width="130px" height="44px" />                           
                        
                                                      
                             <View style={styles.leftView}>
                                 <Animatable.Text animation="fadeInDown" style={styles.textDull}>Don't have an account?</Animatable.Text>
                                 <TouchableOpacity onPress={this._navigateToGetStartedView}>
                                     <Animatable.Text animation="fadeInDown" style={styles.getStarted}>Get Started!</Animatable.Text>
                                 </TouchableOpacity>
                             </View>
 
                         </Animatable.View>

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
                    <View style={{marginTop:'12%'}}>
                    <CustomFooter />
                    </View>
                   
                </KeyboardAwareScrollView>
               
            </SafeAreaView>

        )
    }
}

{/* */ }
                // </View> */}