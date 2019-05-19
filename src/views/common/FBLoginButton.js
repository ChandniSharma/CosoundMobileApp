import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton } from 'react-native-fbsdk';


// const FBSDK = require('react-native-fbsdk');
// const {
//   LoginManager,
// } = FBSDK;
    


export default class FBLoginButton extends Component {
  render() {
    return (
      <View>
        
        <LoginButton
          readPermissions={["public_profile email"]}
          onLoginFinished={
            (error, result) => {
              console.log(" result is ===", result)
              if (error) {
                alert("Login failed with error: " + error.message);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                alert("Login was successful with permissions: " + result.grantedPermissions)
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/>
      </View>
    );
  }
};

module.exports = FBLoginButton;