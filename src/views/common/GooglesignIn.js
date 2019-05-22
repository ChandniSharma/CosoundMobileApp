import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions, AsyncStorage, Easing } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

let iosGoogleClientId = '298981634092-uc33t6lv321lem1vl9pgbpvou482c07a.apps.googleusercontent.com';
export default class GoogleLogin extends Component{

    googleAuth() {
        GoogleSignin.signIn()
            .then((user) => {
                console.log(user);
            })
            .catch((err) => {
                console.log('WRONG SIGNIN', err);
            })
            .done();
    }

    async setupGoogleSignin() {
        try {
            await GoogleSignin.hasPlayServices({ autoResolve: true });
            await GoogleSignin.configure({
                iosClientId: iosGoogleClientId,
                // webClientId: settings.webClientId,
                offlineAccess: false
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
             <TouchableOpacity onPress={this.googleAuth.bind(this)}>
                 <Text> google login </Text>
             </TouchableOpacity>
         </View>

     )
 }
}

