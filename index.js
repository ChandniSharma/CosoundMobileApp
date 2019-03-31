/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Home from './src/views/Home';
import Login from './src/views/Login';
import RecoverPwd from './src/views/RecoverPwd'
//import Navigator from './src/Navigator'

AppRegistry.registerComponent(appName, () => RecoverPwd);
