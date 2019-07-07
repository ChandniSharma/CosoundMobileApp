/**
 * @format
 */
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from "react-redux";
import store from './src/store/configureStore';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { name as appName } from './app.json';
import Home from './src/views/Home';
import Login from './src/containers/Login';
import Signup from './src/containers/Signup';
import ForgotPassword from './src/containers/ForgotPassword';
import SignupStep1 from './src/views/SignupStep1';
import SignupStep2 from './src/views/SignupStep2';
import SignupStep5 from './src/views/SignupStep5';
import SignupStep3 from './src/views/SignupStep3';
import SignupSuggestions from './src/views/SignupSuggestions';
import SignupStep3Musician from './src/views/SignupStep3Musician';
import Plans from './src/views/Plans/Plans';
import Notifications from './src/containers/Notifications'
import Profile from './src/containers/Profile';
import UserProfile from './src/containers/UserProfile';
import Dashboard from './src/containers/Dashboard';
import AdvancedSearchView from './src/views/AdvancedSearchView';
import AccountSettings from './src/containers/AccountSettings';
import Suggestions from './src/containers/Suggestions';
import SocialShare from './src/views/common/SocialShare';
import PlayVideo from './src/views/common/PlayVideo';
import TestFB from './src/views/animation';
import Cart from './src/containers/Cart';
import StarView from './src/views/common/StarView';
import Sidebar from './src/views/Checkout/SideBarCheckout';
import NoService from './src/views/NoService';
import Checkout from './src/containers/Checkout';
import GooglesignIn from './src/views/common/GooglesignIn';
import CreateService from './src/containers/CreateService';
import PurchasedServices from './src/containers/PurchasedServices';
import MarketPlaceContainer from './src/containers/MarketPlace';
import Service from './src/containers/Service';
import Chat from './src/views/Chat';
import PlayAudioClass from './src/views/PlayAudioClass';
import OfferedServices from './src/containers/OfferedServices';
import Payments from './src/containers/PaymentDetails';
import { Client } from 'bugsnag-react-native';
const bugsnag = new Client("f222428bf3f339bca63b207187ca1bf1");

const AppStackNavigator = createStackNavigator({
    Payments:{screen:Payments},
    Home: { screen: Home },
    Chat: { screen: Chat },
    Login: { screen: Login },
    ForgotPassword: { screen: ForgotPassword },
    Signup: { screen: Signup },
    SignupStep1: { screen: SignupStep1 },
    SignupStep2: { screen: SignupStep2 },
    SignupStep3: { screen: SignupStep3 },
    SignupStep5: { screen: SignupStep5 },
    SignupSuggestions: { screen: SignupSuggestions },
    SignupStep3Musician: { screen: SignupStep3Musician },
    Plans: { screen: Plans },
    Profile: { screen: Profile },
    Dashboard: { screen: Dashboard },
    AdvancedSearchView: { screen: AdvancedSearchView },
    Suggestions: { screen: Suggestions },
    SocialShare: { screen: SocialShare },
    PlayVideo: { screen: PlayVideo },
    Notifications: { screen: Notifications },
    AccountSettings: { screen: AccountSettings },
    Cart: { screen: Cart },
    StarView: { screen: StarView },
    Sidebar: { screen: Sidebar },
    Service: { screen: Service },// Market place detail 
    GooglesignIn: { screen: GooglesignIn },
    Checkout: { screen: Checkout },
    PlayAudioClass:{screen:PlayAudioClass},
    UserProfile: { screen: UserProfile },
    MarketPlaceContainer: { screen: MarketPlaceContainer }, // Market place list 
    CreateService: { screen: CreateService }, // Link to create service in 5 steps 
    NoService: { screen: NoService },  // Link to added new services 
    PurchasedServices: { screen: PurchasedServices },//List of services 
    OfferedServices:{screen:OfferedServices},
}, {
        initialRouteName: 'Login',
        gesturesEnabled: false,
        headerMode: 'none',
    })

const RootNavigator = createAppContainer(AppStackNavigator)
export default RootNavigator
class CoSoundApp extends Component {
    componentDidCatch(error, info) {
       bugsnag.notify(error);
    }
    render() {
        return (
            <Provider store={store}>
                <RootNavigator />
            </Provider>
        );
    }
}
AppRegistry.registerComponent(appName, () => CoSoundApp);