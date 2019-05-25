import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions, AsyncStorage, Easing } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

let iosGoogleClientId = '298981634092-uc33t6lv321lem1vl9pgbpvou482c07a.apps.googleusercontent.com';
export default class GoogleLogin extends Component{

    componentWillMount(): void {
        this.setupGoogleSignin();
    }

    _signIn = async () => {
        console.log("Entered ************************************** 1",)
        try {
            console.log("Enterend ************************************** 2",)
            await GoogleSignin.hasPlayServices();
            console.log("Enterend ************************************** 3",)
            const userInfo = await GoogleSignin.signIn();
            console.log("USerINfdoL************************************** ",userInfo)
            this.setState({ userInfo:userInfo });
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
                webClientId: "298981634092-uc33t6lv321lem1vl9pgbpvou482c07a.apps.googleusercontent.com",
                // Repleace with your webClientId generated from Firebase console
                iosClientId: iosGoogleClientId,
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
         <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
             <TouchableOpacity onPress={()=>this._signIn()}>
                 <Text> google login </Text>
             </TouchableOpacity>
         </View>

     )
 }
}

