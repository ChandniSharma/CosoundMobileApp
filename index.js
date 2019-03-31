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
import Login from './src/views/Login';
import RecoverPwd from './src/views/RecoverPwd'
//import Navigator from './src/Navigator'

class CoSoundApp extends Component {

    render() {
        return (
            <Provider store={store}>
                <Login/>
            </Provider>
        );
    }
}

AppRegistry.registerComponent(appName, () => CoSoundApp);