import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity,Dimensions } from 'react-native';
//import SvgUri from 'react-native-svg-uri';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/SignupStep3Musician.style';

import * as Animatable from 'react-native-animatable';
import {SafeAreaView} from 'react-navigation';
import CustomFooter from '../components/common/CustomFooter'
import CustomHeader from '../components/common/CustomHeader'

var ImagePicker = require('react-native-image-picker');

export default class SignupStep3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isRememberMe:false,
            filePath: {},
        }
    }
     fadeInMain = () => this.refs.mainView.fadeIn(1000).then(endState => console.log(endState.finished ? 'fadein finished':" cancelled"))
     fadeIn = () => this.refs.titleText.fadeIn(500).then(endState => console.log(endState.finished ? 'fadein finished':" cancelled"))
     bounceInLeft = () => this.refs.tab1.bounceInLeft(1000).then(endState => endState.finished ? this.flipSecond() : 'Slide down cancelled');

     componentDidMount(){
       this.fadeInMain();
     }

     onClickRememberMe = () =>{
        this.setState({
            isRememberMe:!this.state.isRememberMe
        })
     }
     navigateToSignupStep5 = () =>{
      this.props.navigation.navigate("SignupStep5");
  }
     chooseFile = () => {
        var options = {
          title: 'Select Image',
          customButtons: [
            { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
          ],
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
        
        ImagePicker.showImagePicker(options, response => {
          console.log('Response = ', response);
     
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            alert(response.customButton);
          } else {
            let source = response;
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
            this.setState({
              filePath: source,
            });
          }
        });
      };
    render() {
        
       
        return (
            <SafeAreaView forceInset={{ top: 'never', bottom:'never' }} style={styles.container}>
               <KeyboardAwareScrollView style={{backgroundColor:'rgb(245,245,245)', flex:0.9}}>
                 <Animatable.View ref={"mainView"} style={styles.container}>
                  <CustomHeader />
                    <View style={{ backgroundColor: 'rgb(37,182,173)' }}>
                    <Animatable.Image animation="fadeInDown" style={styles.imgMainTitle} source={require('../assets/cosoundTitle.png')} />
                    <Animatable.Text animation="fadeInDown" style={styles.textWelcome}>Awesome</Animatable.Text>

                    <Animatable.Text animation="fadeInDown" style={styles.textWelcome}>You're a musician</Animatable.Text>


                        <Animatable.View ref={'view1'} style={{ marginBottom: '5%' }}>
                       
                        <View style={styles.findingView}>
                            <Animatable.Image style={styles.imageCameraIcon} source={require('../assets/suggestions-search.png')}/>

                            {/*  Camera picker
                            <TouchableOpacity onPress={this.chooseFile.bind(this)}>
                            <Image 
                              source={{ uri: this.state.filePath.path}} 
                              style={{width: 100, height: 100}} />
                              <Image
                                source={{
                                  uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
                                }}
                                style={{ width: 100, height: 100 }}
                              />
                              <Image
                                source={{ uri: this.state.filePath.uri }}
                                style={{ width: 250, height: 250 }}
                              />
                        </TouchableOpacity> */}

                        </View>
                        </Animatable.View>
                        <Animatable.Text animation="fadeIn" style={styles.loginText}> Upload Photo</Animatable.Text>
                        
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'First Name'}
                                //onChangeText={(text) => this.setState({ email: text })}
                                // value={data.email}
                                // name={"email"}
                                // onChangeText={val => handleChange('email', val)}
                            />
                            {/* {errors.email?<Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.email}</Animatable.Text>:null} */}
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Last Name'}
                                secureTextEntry={true}
                                //onChangeText={(text) => this.setState({ password: text })}
                                // onChangeText={val => handleChange('password', val)}
                                // value={data.password}
                                // name={"password"}
                            />
                            {/* {errors.password?<Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.password}</Animatable.Text>:null} */}
                        </View>
                       <View style={{flexDirection:'row',marginLeft: '5%', marginRight: '5%',flex:1}}>
                       <TextInput
                                style={styles.inputStyleLeft1}
                                placeholder={'Date'}
                              
                                //onChangeText={(text) => this.setState({ password: text })}
                                // onChangeText={val => handleChange('password', val)}
                                // value={data.password}
                                // name={"password"}
                            />
                            <TextInput
                                style={styles.inputStyleCenter}
                                placeholder={'Month'}
                               
                                //onChangeText={(text) => this.setState({ password: text })}
                                // onChangeText={val => handleChange('password', val)}
                                // value={data.password}
                                // name={"password"}
                            />
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Year'}
                                //onChangeText={(text) => this.setState({ password: text })}
                                // onChangeText={val => handleChange('password', val)}
                                // value={data.password}
                                // name={"password"}
                            />
                       </View>
                       <TextInput
                                style={styles.inputStyle}
                                placeholder={'Job Title'}
                               
                                //onChangeText={(text) => this.setState({ password: text })}
                                // onChangeText={val => handleChange('password', val)}
                                // value={data.password}
                                // name={"password"}
                            />
                           
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Music Genres'}
                               
                                //onChangeText={(text) => this.setState({ password: text })}
                                // onChangeText={val => handleChange('password', val)}
                                // value={data.password}
                                // name={"password"}
                            >
                            <Image style={styles.imageSearchIcon} source={require('../assets/suggestions-search.png')}/>

                            </TextInput>
                        
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Social links'}
                               
                                //onChangeText={(text) => this.setState({ password: text })}
                                // onChangeText={val => handleChange('password', val)}
                                // value={data.password}
                                // name={"password"}
                            >
                           <Image style={styles.imageSearchIcon} source={require('../assets/suggestions-search.png')}/>

                            </TextInput>
                            

                        <TouchableHighlight onPress={this.navigateToSignupStep5} underlayColor="#25b6ad" style={[styles.loginButton]}>
                            <Text style={styles.textButtonTitle} >Next -></Text>
                        </TouchableHighlight>

                        <View ref={'progressBarView'} style={[styles.viewProgressbar]}>
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

                            <View style={styles.viewNotSelected}>
                                <View style={styles.viewCircleFilled}>
                                    <Image style={styles.imgTickMark} source={require('../assets/tickMark.png')} />
                                </View>
                                <Text style={styles.textSelected}>Tell us more</Text>
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

{/* */}
                // </View> */}