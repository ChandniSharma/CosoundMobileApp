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

export default class AdvanceSearchView extends Component {
    constructor(props) {
        super(props);
        this.state = {

            isRememberMe: false,
            isClick: false,
            isNotificationShow: false,
            email:'',
            password:'', 
            genres:'',
        }

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
    fadeIn = () => this.refs.mainView.fadeIn(500).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))
    fadeInUp = () => this.refs.notificationView.fadeInUp(500).then(endState => console.log(" end state"))
    // bounceInUp = () => this.refs.audio.bounceInUp(300).then(endState => endState.finished ?this.flipFirst():null);


    componentDidMount() {
         this.fadeIn();

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
    renderItem(item) {
        return (
            <View>

                <TouchableHighlight onPress={this.onClickNotification}>
                    <View>
                        <View>
                            <Text>{'\u2022' + " "}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', margin: '5%', flex: 1 }}>
                            <Text style={[styles.textSubTitleNotSelected, { flex: 0.8 }]}>{item.item.title} </Text>
                            {/* {this.state.isClick? <Text style={styles.textSubtitleSelected}>Viewed your profile </Text>
                    :  <Text style={styles.textSubTitleNotSelected}> Viewed your profile </Text>} */}
                            <Text style={[styles.textNotificationTime, { flex: 0.2 }]}> {item.item.time}</Text>
                        </View>
                        <View>
                            <Text style={styles.textDescription}> {item.item.description} </Text>
                        </View>
                        <View style={{ width: '80%', height: 1, backgroundColor: 'rgb(38,38,38)', marginTop: '2%' }} />
                    </View>
                </TouchableHighlight>
            </View>)
    }

    render() {
        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>

                <LinearGradient start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} colors={['rgb(42, 173,177)', 'rgb(131, 110, 198)', 'rgb(134, 103, 200)']} style={{ flexDirection: 'row', height: 100, width: '100%', alignItems: 'space-between', justifyContent: 'center' }}>

                    <BackButton style={{ fontSize: 30, marginTop: '10%', marginLeft: '4%' }} onPress={() => this.props.navigation.goBack(null)} />


                    <Logo color={'#ffffff'} style={{ flex: 0.7, marginLeft: '25%' }} width="130px" height="44px" />

                    <View style={{ flex: 0.3 }} />
                    <TouchableOpacity style={[styles.searchView, { flex: 0.2, alignSelf: 'flex-end', marginRight: '5%' }]} onPress={() => this.setState({ isNotificationShow: !this.state.isNotificationShow })}>

                        {this.state.isNotificationShow?<Icon name="close" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 38, tintColor: 'white' }} />:<Icon2 name="bell" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 40, tintColor: 'white' }} />}
                        
                    </TouchableOpacity>
                </LinearGradient>


                 {/* <HeaderMenuAndBell notificationCount = {this.props.notificationCount} colors={['rgb(42, 173,177)', 'rgb(131, 110, 198)', 'rgb(134, 103, 200)']} isBackButtonShow = {true} goBack={() => this.props.navigation.goBack(null)} onPressPopup={() => this.showPopup()} isNotificationShow={this.state.isNotificationShow} onPressBell={() => this.setState({ isNotificationShow: !this.state.isNotificationShow })} />  */}


               {!this.state.isNotificationShow? <KeyboardAwareScrollView style={{ backgroundColor: 'rgb(245,245,245)', flex: 0.9}}>

                    <Animatable.View ref={"mainView"} style={styles.container}>

                        <Animatable.Text animation="fadeIn" style={styles.loginText}>Advanced Search</Animatable.Text>

                        <Text style={styles.textSideTitle}> I'm looking for:</Text>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder={'Studio Engineers'}
                            onChangeText={(text) => this.setState({ email: text })}
                            // value={data.email}
                            name={"email"}
                            // onChangeText={val => handleChange('email', val)}
                        />
                        {/* {errors.email?<Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.email}</Animatable.Text>:null} */}

                        <Text style={styles.textSideTitle}> Location (optional)</Text>

                        <TextInput
                            style={styles.inputStyle}
                            placeholder={'San Diego'}

                            onChangeText={(text) => this.setState({ password: text })}
                            // onChangeText={val => handleChange('password', val)}
                            // value={data.password}
                            name={"password"}
                        />
                        {/* {errors.password?<Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.password}</Animatable.Text>:null} */}

                        <Text style={styles.textSideTitle}> Genres (optional)</Text>

                        <TextInput
                            style={styles.inputStyle}
                            placeholder={'Search genres'}

                            onChangeText={(text) => this.setState({ password: text })}
                            // onChangeText={val => handleChange('password', val)}
                            // value={data.password}
                            name={"password"}
                        />
                        {/* </View> */}
                        <View style={styles.rememberView}>

                            <TouchableOpacity onPress={this.onClickRememberMe} style={styles.tickMarkView}>
                                {this.state.isRememberMe ? <Image style={styles.imgTickMark} source={require('../assets/tickMark.png')} /> : <Image />}
                            </TouchableOpacity>

                            <TouchableHighlight underlayColor='rgb(245,245,245)' onPress={this.onClickRememberMe} style={styles.rememberBtn}>
                                {this.state.isRememberMe ? <Text style={[styles.rememberText]}>Is a service provider (optional)</Text> : <Text style={styles.rememberTextNotSelected}>Is a service provider (optional)</Text>}

                            </TouchableHighlight>
                        </View>

                        <TouchableHighlight underlayColor="#25b6ad" onPress={this.onSubmit} style={[styles.loginButton]}>
                            <Text style={styles.textButtonTitle} >Search</Text>
                        </TouchableHighlight>


                    </Animatable.View>

                    
                     <View style={{flex:0.1, marginTop:'12%'}}>
                     <CustomFooter />
                         </View>
                   

                </KeyboardAwareScrollView>:
                
        <View>
            <Notifications /></View> 
        }





            </SafeAreaView>

        )
    }
}

{/* */ }
                // </View> */}