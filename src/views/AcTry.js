import { Component } from "react";
import styles from "../stylesheet/profile.style";
import { SafeAreaView } from 'react-navigation';
import React from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Image, View, TouchableOpacity } from "react-native";
import { Icon } from "native-base";
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

export default class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPostOptionShow: true,
            isBottomViewShow: false,
            isCommentTableShow: true,
            text: "Write Something...",
            headerColorMix: ['rgb(42, 173,177)', 'rgb(131, 110, 198)', 'rgb(134, 103, 200)'],
            headerColor: ['rgb(42, 173,177)', 'rgb(93, 152, 179)'],
        }
    }


    fadeInDown = () => this.refs.userImageView.fadeInDown(1000).then(endState => this.fadeInPremiumView())

    componentDidMount() {
        this.fadeInDown();
    }
    _navigateToAdvanceSearchView() {
    }
    _navigateToNotificationView() {
    }

    _showCommentList() {
        this.setState({ isCommentTableShow: !this.state.isCommentTableShow });
    }
    _showPostOptions() {
        this.setState({ isPostOptionShow: true });
    }

    render() {
         return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
                <LinearGradient start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} colors={this.state.isBottomViewShow ? this.state.headerColor : this.state.headerColorMix} style={{ flexDirection: 'row', height: 100, width: '100%', alignItems: 'space-between', justifyContent: 'center' }}>
                    <Icon name="ios-menu" style={{ fontSize: 60, color: 'white', alignSelf: 'flex-start', marginTop: 50, marginLeft: 5, width: 100, height: 100, flex: 0.2, marginBottom: 10 }} />
                    <Image style={{ tintColor: 'white', alignSelf: 'center', marginTop: 65, marginLeft: 20, width: 180, height: 30, marginBottom: 10 }} source={require('../assets/Image/logoProfile1.png')} />
                    <View style={{ flex: 0.2 }} />
                    <TouchableOpacity style={styles.searchView} onPress={this._navigateToAdvanceSearchView}>
                        <Image style={styles.imgMenuBar} source={require('../assets/suggestions-search.png')} />
                    </TouchableOpacity>
                </LinearGradient>
                <KeyboardAwareScrollView style={{ backgroundColor: 'rgb(42, 173,177)' }}>
                    <View style={{ backgroundColor: 'rgb(248,249,248)' }} >
                        <LinearGradient start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} colors={['rgb(42, 173,177)', 'rgb(131, 110, 198)', 'rgb(134, 103, 200)']} style={styles.viewTopBackground} />
                        <Animatable.View
                            ref={'userImageView'}
                            style={{
                                marginTop: "-15%",
                                height: 100, width: 100,
                                borderRadius: 50, elevation: 3,
                                backgroundColor: "white",
                                alignSelf: "center",
                                shadowColor: 'rgba(0,0,0,1)',
                                shadowOffset: {
                                    width: 1,
                                    height: 1
                                },
                                shadowOpacity: 0.8,
                            }}>
                            {/* <Image style={styles.imgUser} source={getThumbnail(user.data)} /> */}
                            <Image style={styles.imgUser} source={require('../assets/avatar-main-1.jpg')} />
                        </Animatable.View>
                        <View style={{ alignItems: "center", marginTop: 25 }}>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        )
    }
}