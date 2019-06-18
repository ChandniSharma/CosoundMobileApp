import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions, FlatList } from 'react-native';
//import SvgUri from 'react-native-svg-uri';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/AdvancedSearchView.style';
import RecoverPwd from './RecoverPwd';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-navigation';
import CustomFooter from '../components/common/CustomFooter';
import CustomHeader from '../components/common/CustomHeader';
import Notifications from '../containers/Notifications';
import BackButton from './common/BackButton';
import LinearGradient from 'react-native-linear-gradient';
import Logo from './common/logo';

import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/EvilIcons";
import Icon3 from "react-native-vector-icons/Ionicons";
import HeaderMenuAndBell from './common/HeaderMenuAndBell';
import { GiftedChat } from 'react-native-gifted-chat';


const { height, width } = Dimensions.get('window');
export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],

            isRememberMe: false,
            isClick: false,
            isNotificationShow: false,
            email: '',
            password: '',
            genres: '',
        }
        this.onSend = this.onSend.bind(this);
        this.arrayNotificationData = [
            {
                title: "Viewed your profile",
                time: '1 days ago',
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                title: "Viewed your profile",
                time: '1 days ago',
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                title: "Viewed your profile",
                time: '1 days ago',
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
        ]
    }
    
    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100&ssl=1',
                    },
                },
            ],
        });
    }

   
    onSend(messages = []) {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, messages),
            };
        });
    }
    onClickRememberMe = () => {
        this.setState({
            isRememberMe: !this.state.isRememberMe
        })
    }
    hideNotificationView() {
        this.setState({ isNotificationShow: false })
    }

    onSubmit = () => {

    }
    onClickNotification = () => {
        this.setState({ isClick: !this.state.isClick })
    }

    hideNotificationView() {
        this.setState({ isNotificationShow: false })
    }

    showNotificationView = () => {

        this.setState({ isNotificationViewShow: true })
        setTimeout(() => {
            this.fadeInUp
        }, 200);
    }
    // render() {
    //     return (
    //       <GiftedChat
    //         messages={this.state.messages}
    //         onSend={this.onSend}
    //         user={{
    //           _id: 1,
    //         }}
    //       />
    //     );
    //   }

    render() {
        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>

                <LinearGradient start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} colors={['rgb(42, 173,177)', 'rgb(131, 110, 198)', 'rgb(134, 103, 200)']} style={{ flexDirection: 'row', height: 100, width: '100%', alignItems: 'space-between', justifyContent: 'center' }}>

                    <BackButton style={{ fontSize: 30, marginTop: '10%', marginLeft: '4%' }} onPress={() => this.props.navigation.goBack(null)} />


                    <Logo color={'#ffffff'} style={{ flex: 0.7, marginLeft: '25%' }} width="130px" height="44px" />

                    <View style={{ flex: 0.3 }} />
                    <TouchableOpacity style={[styles.searchView, { flex: 0.2, alignSelf: 'flex-end', marginRight: '5%' }]} onPress={() => this.setState({ isNotificationShow: !this.state.isNotificationShow })}>

                        {this.state.isNotificationShow ? <Icon name="close" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 38, tintColor: 'white' }} /> : <Icon2 name="bell" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 40, tintColor: 'white' }} />}

                    </TouchableOpacity>
                </LinearGradient>


                {/* <HeaderMenuAndBell notificationCount = {this.props.notificationCount} colors={['rgb(42, 173,177)', 'rgb(131, 110, 198)', 'rgb(134, 103, 200)']} isBackButtonShow = {true} goBack={() => this.props.navigation.goBack(null)} onPressPopup={() => this.showPopup()} isNotificationShow={this.state.isNotificationShow} onPressBell={() => this.setState({ isNotificationShow: !this.state.isNotificationShow })} />  */}


                {!this.state.isNotificationShow ? <KeyboardAwareScrollView style={{ backgroundColor: 'rgb(245,245,245)', flex: 0.9 }}>
<View style={{height:height-250}}>
                   <GiftedChat
                        messages={this.state.messages}
                        onSend={this.onSend}
                        user={{
                            _id: 1,
                            name: 'Ben',
                            avatar: 'https://s3.eu-west-2.amazonaws.com/cosound-primary/thumbnails/avatar_thumb_a4637ce1-da0b-4b1d-8e08-70b2b7fb067f-1560603001.png',
                        }}
                        showUserAvatar={true}
                        showAvatarForEveryMessage={true}
                    />

</View>
                   
                    <View style={{ flex: 0.1, marginTop: '12%' }}>
                        <CustomFooter />
                    </View>


                </KeyboardAwareScrollView> :

                    <View>
                        <Notifications /></View>
                }

            </SafeAreaView>

        )
    }
}

{/* */ }
                // </View> */}