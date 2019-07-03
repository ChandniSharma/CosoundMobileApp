import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions, AsyncStorage, Easing } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import styles from '../../stylesheet/login.style';
import Icon1 from 'react-native-vector-icons/Entypo';
let iosGoogleClientId = '298981634092-uc33t6lv321lem1vl9pgbpvou482c07a.apps.googleusercontent.com';
let iosClientId = '298981634092-ce8c0ihrsfcaddkfs2otm9tm29hscaf3.apps.googleusercontent.com';
export default class GoogleLogin extends Component{

    componentWillMount() {
        this.setupGoogleSignin();
    }

    _signIn = async () => {
      //  return;
        console.log("Entered ************************************** 1",)
        try {
            console.log("Enterend ************************************** 2",)
            await GoogleSignin.hasPlayServices();
            console.log("Enterend ************************************** 3",)
            const userInfo = await GoogleSignin.signIn();
            console.log("USerINfdoL************************************** ",userInfo)
            this.setState({ userInfo:userInfo });
            this.props.navigation.navigate('Signup',userInfo );
            
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                console.log("SIGN_IN_CANCELLED ************************************** 2",)
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log("IN_PROGRESS ************************************** 2",)
                // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('play not avilbe')
                // play services not available or outdated
                console.log("PLAY_SERVICES_NOT_AVAILABLE ************************************** 2",)
            } else {
                // some other error happened
                console.log("Error ************************************** 2",error)
            }
        }
    };

    async setupGoogleSignin() {
        try {
            //await GoogleSignin.hasPlayServices({ autoResolve: true });
            await GoogleSignin.configure({
                scopes: ['https://www.googleapis.com/auth/userinfo.profile','https://www.googleapis.com/auth/drive.readonly'],
                forceConsentPrompt: true,
                offlineAccess: true,
                webClientId: '298981634092-hn0s9ii0g5qpk65v0q58jb132sq7r2j0.apps.googleusercontent.com',
                // webClientId: "298981634092-uc33t6lv321lem1vl9pgbpvou482c07a.apps.googleusercontent.com",
                // Repleace with your webClientId generated from Firebase console
                iosClientId: iosClientId,
                // webClientId: settings.webClientId,x
            });

            const user = await GoogleSignin.currentUserAsync();
            console.log(user);
        }
        catch (err) {
            console.log("Google signin error", err.code, err.message);
        }
    }

 render(){
     return(
         <View style={{flex:1, justifyContent:'center'}}>
             {/*<GoogleSigninButton
                 style={{ width: 192, height: 48 }}
                 size={GoogleSigninButton.Size.Wide}
                 color={GoogleSigninButton.Color.Dark}
                 onPress={this._signIn}/>*/}
             <TouchableHighlight underlayColor="#25b6ad" style={styles.buttonCenter} onPress={()=>this._signIn()}>
                 <View style={{flexDirection:'row'}}>
                     <Icon1 name="google-" style={{fontSize:20, color:'rgb(234,67,54)', marginRight:'2%'}}/>
                     <Text style={styles.googlePlusText}>Google login</Text>
                 </View>

             </TouchableHighlight>
         </View>

     )
 }
}

