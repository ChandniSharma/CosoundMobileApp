/**
 * @format
 */
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from "react-redux";
import store from './src/store/configureStore';
import App from './App';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { name as appName } from './app.json';
import Home from './src/views/Home';
 //import Login from './src/views/Login';
 import Login from './src/containers/Login';
import Signup from './src/containers/Signup';
import RecoverPwd from './src/views/RecoverPwd';
import ForgotPassword from './src/containers/ForgotPassword';
import SignupStep1 from './src/views/SignupStep1';
import SignupStep2 from './src/views/SignupStep2';
import SignupStep5 from './src/views/SignupStep5';
import SignupStep3 from './src/views/SignupStep3';
import SignupSuggestions from './src/views/SignupSuggestions';
import SignupStep3Musician from './src/views/SignupStep3Musician';
import Plans from './src/views/Plans';
//import Profile from './src/views/Profile';
import Profile from './src/containers/Profile';
import Dashboard from './src/containers/Dashboard';
import Navigator from './src/Navigator';
import AdvancedSearchView from './src/views/AdvancedSearchView';
//import Notification from "./src/views/Notification"; 
import Account from "./src/views/Account";
import Suggestions from './src/containers/Suggestions';
import SocialShare from './src/views/common/SocialShare';
import SoundPlay from './src/views/common/SoundPlay';
import PlayVideo from './src/views/common/PlayVideo'
const AppStackNavigator = createStackNavigator({
   Home: { screen: Home },
    Login: { screen: Login },
    ForgotPassword: { screen: ForgotPassword },
    // RecoverPwd: { screen: RecoverPwd },
    Signup: { screen: Signup },
    SignupStep1: { screen: SignupStep1 },
    SignupStep2: { screen: SignupStep2 },
    SignupStep3: { screen: SignupStep3 },
    SignupStep5: { screen: SignupStep5 },
    SignupSuggestions: { screen: SignupSuggestions },
    SignupStep3Musician:{screen: SignupStep3Musician},
    Plans: { screen: Plans },
    Profile :{screen:Profile},
    Dashboard:{screen: Dashboard},
    AdvancedSearchView:{screen: AdvancedSearchView},
    Account:{screen:Account},
    Suggestions:{ screen: Suggestions },
     SocialShare:{screen: SocialShare},
     PlayVideo:{screen:PlayVideo}
}, {
        initialRouteName: 'Home',
        gesturesEnabled: false,
        headerMode: 'none',
    })

const RootNavigator = createAppContainer(AppStackNavigator)
export default RootNavigator
class CoSoundApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <RootNavigator />
            </Provider>
        );
    }
}
AppRegistry.registerComponent(appName, () => CoSoundApp);
//AppRegistry.registerComponent(appName, () => RootNavigator);


//initialRouteName: 'Login',
    // headerMode: "screen",
    // mode: Platform.OS === "ios" ? "modal" : "card",
    // navigationOptions: {
    // cardStack: {
    //     gesturesEnabled: false
    // },
    // gesturesEnabled: false
    // },
    // gesturesEnabled: false,
    // transitionConfig: TransitionConfiguration,