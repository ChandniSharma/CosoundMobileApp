/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from "react-redux";
import store from './src/store/configureStore';
import App from './App';
import {name as appName} from './app.json';
import Home from './src/views/Home';
//import Login from './src/views/Login';
import Login from './src/containers/Login';
import RecoverPwd from './src/views/RecoverPwd';
import GetStartedView from './src/views/GetStartedView';
import SignupStep2 from './src/views/SignupStep2';
import SignupStep5 from './src/views/SignupStep5';

//import ResetPassword from './src/containers/ResetPassword';
//import Navigator from './src/Navigator'

import { createStackNavigator, createAppContainer } from "react-navigation";

const AppStackNavigator = createStackNavigator({
    Home:{screen:Home},
    Login:{screen:Login},
    RecoverPwd:{screen: RecoverPwd},
    GetStartedView:{screen:GetStartedView},
    SignupStep2:{screen:SignupStep2}

 },{
        initialRouteName: 'Home',
        gesturesEnabled: false,
        headerMode: 'none',
       
 })
 

const RootNavigator = createAppContainer(AppStackNavigator)
//export default RootNavigator

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