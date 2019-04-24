import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity,Dimensions } from 'react-native';
//import SvgUri from 'react-native-svg-uri';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/SignupStep3.style';
import { Icon } from "native-base";
import * as Animatable from 'react-native-animatable';
import {SafeAreaView} from 'react-navigation';
import CustomFooter from '../components/common/CustomFooter'
import CustomHeader from '../components/common/CustomHeader';
import { checkError } from "../../../../utils";

var ImagePicker = require('react-native-image-picker');

export default class SignupStep3Musician extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isRememberMe:false,
            filePath: {},
            isImageLoadedFromLiab: false,
        }
        // this.arrayDate=[];
        // this.arrayMonth = ['','','','','','','','','','','','',];
    }
     fadeInMain = () => this.refs.mainView.fadeIn(1000).then(endState => console.log(endState.finished ? 'fadein finished':" cancelled"))

     //fadeInProgressBarView = () => this.refs.progressBarView.fadeIn(2000).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))
    
     componentDidMount(){
       this.fadeInMain();
       this.props.fetchGenres();
     //  this.fadeInProgressBarView();
     }

     navigateToSignupStep5 = () =>{
      this.props.navigation.navigate("SignupStep5");
  }
     chooseFile = () => {
        var options = {
          title: 'Image',
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
            this.setState({
              isImageLoadedFromLiab:false
            })
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
            this.setState({
              isImageLoadedFromLiab:false
            })
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            alert(response.customButton);
            this.setState({
              isImageLoadedFromLiab:false
            })
          } else {
            let source = response;
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
            this.setState({
              isImageLoadedFromLiab:true,
              filePath: source
            });
          }
        });
      };
    render() {
    const {
      data,
      signup,
      genres,
      signUp,
      errors,
      handleChange,
      addMoreSocials,
      handleDateChange,
      handleKeyPress,
      handleFileChange,
      handleSocialLinks,
      handleMultiSelect
    } = this.props;
    const hasFile = !isNull(data.url);
    const error = checkError(signup.error);

          return (
            <SafeAreaView forceInset={{ top: 'never', bottom:'never' }} style={styles.container}>
               <KeyboardAwareScrollView style={{backgroundColor:'rgb(245,245,245)', flex:0.9}}>
                 <Animatable.View ref={"mainView"} style={styles.container}>
                 
                    <View style={{ backgroundColor: 'rgb(37,182,173)' }}>
                    <Animatable.Image animation="fadeInDown" style={styles.imgMainTitle} source={require('../assets/cosoundTitle.png')} />
                    <Animatable.Text animation="fadeInDown" style={styles.textWelcome}>Nice Welcome!</Animatable.Text>

                        <Animatable.View ref={'view1'} style={{ marginBottom: '5%' }}>
                       
                        <View style={styles.findingView}>
                           

                            <TouchableOpacity style={{ marginTop:'30%',height:200, width:100}} onPress={this.chooseFile.bind(this)}>
                            {!this.state.isImageLoadedFromLiab ? 
                            <Icon name="camera" style={{fontSize: 60,  marginTop: '50%', color:'gray', alignSelf: 'center',}} /> : 
                            <Image
                                source={{
                                  uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
                                }}
                                style={{ width: 100, height: 100,borderRadius:50 }}
                              />}
                               
                              
                        </TouchableOpacity>

                        </View>
                        </Animatable.View>
                        <Animatable.Text animation="fadeIn" style={styles.loginText}> Upload Photo</Animatable.Text>
                        
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'First Name'}
                                onChangeText={val => handleChange('first_name', val)}
                                value={data.first_name}
                                name={"first_name"}
                            />
                            {errors.first_name?<Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.first_name}</Animatable.Text>:null}
                            {error &&
                              error.error &&
                              error.error.first_name &&
                              error.error.first_name.map((item, index) => {
                                return <Animatable.Text animation="fadeIn" style={styles.errorText} key={index}> {item}</Animatable.Text>;
                              })}
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Last Name'}
                                secureTextEntry={true}
                                onChangeText={val => handleChange('last_name', val)}
                                value={data.last_name}
                                name={"last_name"}
                               />
                            {errors.last_name?<Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.last_name}</Animatable.Text>:null}
                        </View>
                       <View style={{flexDirection:'row',marginLeft: '5%', marginRight: '5%',flex:1, alignItems: 'space-between',}}>
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
                                style={styles.inputStyleRight}
                                placeholder={'Year'}
                                //onChangeText={(text) => this.setState({ password: text })}
                                // onChangeText={val => handleChange('password', val)}
                                // value={data.password}
                                // name={"password"}
                            />
                       </View>
                        <TextInput
                                style={styles.inputStyle}
                                placeholder={'Artist Name'}
                                secureTextEntry={true}
                                onChangeText={val => handleChange('artist_name', val)}
                                value={data.artist_name}
                                name={"artist_name"}
                               />
                            {errors.artist_name?<Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.artist_name}</Animatable.Text>:null}
                       
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
                            
                            {data.social_links.map((item, index) => {
                              if (item.isVisible) {
                                return (
                                  <View
                                    key={index}
                                  >
                                <TextInput
                                style={styles.inputStyle}
                                placeholder={'Social Links'}
                                secureTextEntry={true}
                                onChangeText={val => handleChange(item.id, val)}
                                value={item.value}
                                name={item.id}
                               />
                                    {!item.isReady && (
                                        <TouchableHighlight onPress={() => addMoreSocials(item.id)} underlayColor="#25b6ad" style={[styles.loginButton]}>
                                            <Text style={styles.textButtonTitle} >Add More</Text>
                                        </TouchableHighlight>  
                                    )}
                                    {errors[item.id]?<Animatable.Text animation="fadeIn" style={styles.errorText}> {errors[item.id]}</Animatable.Text>:null}
                                  </View>
                                );
                              }
                              return null;
                            })}

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
                            

                        <TouchableHighlight onPress={this.signUp} underlayColor="#25b6ad" style={[styles.loginButton]}>
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