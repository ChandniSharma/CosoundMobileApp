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

export default class AdvanceSearchView extends Component {
    constructor(props) {
        super(props);
        this.state = {

            isRememberMe: false,
            isClick: false,
            isNotificationViewShow: false,
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
    fadeIn = () => this.refs.mainView.fadeIn(1000).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))
    fadeInUp = () => this.refs.notificationView.fadeInUp(500).then(endState => console.log(" end state"))
    // bounceInUp = () => this.refs.audio.bounceInUp(300).then(endState => endState.finished ?this.flipFirst():null);


    componentDidMount() {
        // this.fadeIn();
        
    }
    onClickRememberMe = () => {
        this.setState({
            isRememberMe: !this.state.isRememberMe
        })
    }

    onSubmit = () => {

    }
    onClickNotification = () => {
        this.setState({ isClick: !this.state.isClick })
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
                <CustomHeader showNotificationView={this.showNotificationView} />
                <TouchableOpacity onPress={this.showNotificationView}>
                    {/* <Text style={{marginTop:30}}> Notification </Text> */}
                </TouchableOpacity>
                {!this.state.isNotificationViewShow ?
                    <KeyboardAwareScrollView style={{ backgroundColor: 'rgb(245,245,245)', flex: 0.8 }}>

                        <Animatable.View ref={"mainView"} style={styles.container}>

                            <Animatable.Text animation="fadeIn" style={styles.loginText}>Advanced Search</Animatable.Text>

                            <Text style={styles.textSideTitle}> I'm looking for:</Text>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Studio Engineers'}
                                //onChangeText={(text) => this.setState({ email: text })}
                                // value={data.email}
                                name={"email"}
                                onChangeText={val => handleChange('email', val)}
                            />
                            {/* {errors.email?<Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.email}</Animatable.Text>:null} */}

                            <Text style={styles.textSideTitle}> Location (optional)</Text>

                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'San Diego'}

                                //onChangeText={(text) => this.setState({ password: text })}
                                onChangeText={val => handleChange('password', val)}
                                // value={data.password}
                                name={"password"}
                            />
                            {/* {errors.password?<Animatable.Text animation="fadeIn" style={styles.errorText}> {errors.password}</Animatable.Text>:null} */}

                            <Text style={styles.textSideTitle}> Genres (optional)</Text>

                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Search genres'}

                                //onChangeText={(text) => this.setState({ password: text })}
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
                        <CustomFooter />
                    </KeyboardAwareScrollView> :
                    <Animatable.View ref={'notificationView'} style={styles.container}>

<Notifications />
                        {/* <View style={styles.topView}>
                            <Text style={styles.textTitle}> Notifications </Text>
                        </View>
                        <FlatList
                            renderItem={this.renderItem}
                            data={this.arrayNotificationData}
                            keyExtractor={(item, index) => index.toString()}
                        /> */}
                    </Animatable.View>
                }
                {this.state.isNotificationViewShow ? <CustomFooter /> : null}

            </SafeAreaView>

        )
    }
}

{/* */ }
                // </View> */}