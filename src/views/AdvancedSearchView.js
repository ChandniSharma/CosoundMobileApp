import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/AdvancedSearchView.style';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-navigation';
import CustomFooter from '../components/common/CustomFooter';
import Notifications from '../containers/Notifications';
import BackButton from './common/BackButton';
import LinearGradient from 'react-native-linear-gradient';
import Logo from './common/logo';
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/EvilIcons";

export default class AdvanceSearchView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRememberMe: false,
            isClick: false,
            isNotificationShow: false,
            email: '',
            password: '',
            genres: '',
        }
    }

    fadeInView1 = () => this.refs.view1.fadeInUp(1000).then(setTimeout(() => {
        this.fadeInView2();
    }, 10));

    fadeInView2 = () => this.refs.view2.fadeInUp().then(setTimeout(() => {
        this.fadeInView3();
    }, 30))
    fadeInView3 = () => this.refs.view3.fadeInUp().then(setTimeout(() => {
        this.fadeInView4();
    }, 50))

    fadeInView4 = () => this.refs.view4.fadeInUp().then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))

    fadeInUp = () => this.refs.notificationView.fadeInUp(500).then(endState => console.log(" end state"))

    componentDidMount() {
        this.fadeInView1();
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
                        {this.state.isNotificationShow ? <Icon name="close" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 38, tintColor: 'white' }} /> : <Icon2 name="bell" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 40, tintColor: 'white' }} />}
                    </TouchableOpacity>
                </LinearGradient>
                {!this.state.isNotificationShow ? <KeyboardAwareScrollView style={{ backgroundColor: 'rgb(245,245,245)', flex: 0.9 }}>
                    <Animatable.View ref={"mainView"} style={styles.container}>
                        <Animatable.Text animation="fadeInUp" style={styles.loginText}>Advanced Search</Animatable.Text>
                        <Animatable.View ref={"view1"}>
                            <Text style={styles.textSideTitle}> I'm looking for:</Text>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Studio Engineers'}
                                onChangeText={(text) => this.setState({ email: text })}
                                name={"email"}
                            />
                        </Animatable.View>
                        <Animatable.View ref={"view2"}>
                            <Text style={styles.textSideTitle}> Location (optional)</Text>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'San Diego'}
                                onChangeText={(text) => this.setState({ password: text })}
                                name={"password"}
                            />
                        </Animatable.View>
                        <Animatable.View ref={"view3"}>
                            <Text style={styles.textSideTitle}> Genres (optional)</Text>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Search genres'}
                                onChangeText={(text) => this.setState({ password: text })}
                                name={"password"}
                            />
                        </Animatable.View>
                        {/* </View> */}
                        <Animatable.View ref={"view4"}>
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
                    </Animatable.View>
                    <View style={{ flex: 0.1, marginTop: '12%' }}>
                        <CustomFooter />
                    </View>
                </KeyboardAwareScrollView> :
                    <View>
                <Notifications />
                </View>
                }
            </SafeAreaView>
        )
    }
}
