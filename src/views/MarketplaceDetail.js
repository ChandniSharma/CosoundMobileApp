import { Component } from "react";
import { SafeAreaView } from 'react-navigation';
import React from "react";
import styles from '../stylesheet/marketPlaceDetail.style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { FlatList, Image, ImageBackground, Text, TextInput, TouchableHighlight, View, TouchableOpacity, Clipboard, AlertIOS, Platform, StyleSheet, Dimensions } from "react-native";
import { Icon } from "native-base";
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { getThumbnail, getUsername, getUserInfo } from "../utils";
import { Paginator, InfiniteScroller } from "../hoc";
import MusicList from './common/MusicList';
import ImagesList from './common/ImagesList';
import Posts from './common/Posts';
import Hamburger from 'react-native-hamburger';
import Icon1 from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/EvilIcons";
import Icon3 from "react-native-vector-icons/FontAwesome";
import Icon4 from "react-native-vector-icons/Ionicons";
import WaveForm from 'react-native-audiowaveform';
import SoundCloudWaveform from 'react-native-soundcloud-waveform';
import Notifications from '../containers/Notifications'
import Logo from './common/logo';
import Carousel from 'react-native-snap-carousel';
import StarView from './common/StarView';

export default class MarketplaceDetail extends Component {
    fadeInMarketDetailView = () => this.refs.marketPlaceDetailViewRef.fadeIn(500).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))

    componentDidMount = () => {
        this.fadeInMarketDetailView();
    };

    render() {
        return (
            <Animatable.View ref={'marketPlaceDetailViewRef'} style={{ flex: 1, backgroundColor: '245, 245, 245' }}>

                {/*  top 3 btns  */}
                <View style={{ flexDirection: 'row', flex: 0.1 }}>
                    <View>
                        <TouchableOpacity>
                            <Text style={styles.textTop}> Marketing & Promotion</Text>
                        </TouchableOpacity>
                    </View>

                    <Text>/</Text>
                    <View>
                        <TouchableOpacity>
                            <Text style={styles.textTop}>Spotify Playlists </Text>
                        </TouchableOpacity>
                    </View>

                    <Text>/</Text>
                    <View>
                        <TouchableOpacity>
                            <Text style={styles.textTop}> Pop</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 0.2 }}>
                    <View style={{ marginTop: '2%', width: '100%' }}>
                        <Image style={{ width: '100%' }} source={require('../assets/marketGrid-12.jpg')} />
                    </View>

                    <Text style={styles.textSpotify}> Spotify Playlists </Text>
                    <Text style={styles.textListTitle}> I will list you on 30 Pop Playlists </Text>
                    <Text style={styles.textPrice}> $199 </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon4 name='md-time' style={{ fontSize: 25, marginLeft: '2%', color: 'rgba(38, 38, 38, 0.52)' }} />
                        <Text style={styles.textDeliveryTime}> Delivery time 3 Days </Text>
                    </View>
                </View>

                <View style={{ backgroundColor: 'white', marginBottom: '10%', marginTop: '10%', marginLeft: '10%', marginRight: '10%', flex: 0.3 }}>
                    <Text style={styles.textListTitle}> About this Job </Text>
                    <Text style={styles.textJobDescription}> I can list your Pop track on 30 highly subscribed playlists! Each of the playlists has around 700 - 2000 active subscribers and are often played in bars and clubs around the Shoreditch area. These playlists only have 30/40 songs in each, so you're much more likely to be heard.

I'm looking forward to working with you!! Please drop me a message so that I can listen to the song(s) before hand! </Text>
                </View>

                <View style={{ backgroundColor: 'pink', flex: 0.2 }}>
                    <View style={{ backgroundColor: 'white', alignSelf: 'center', borderRadius: 20, marginTop: '5%', marginBottom: '5%', width: '75%' }}>
                        <Text style={[styles.titleAccount, { alignSelf: 'center', marginBottom: '2%', marginTop: '4%' }]}>Summary</Text>

                        <View style={[styles.viewSubtotal, { width: '100%', marginTop: '3%', height: 70, justifyContent: 'center', alignItems: 'center' }]}>

                            <View style={{ flexDirection: 'row', marginBottom: '2%', marginTop: '2%', marginLeft: '20%', marginRight: '20%' }}>
                                <Text style={[styles.textSubtotal, { marginBottom: '2%', flex: 0.5, alignSelf: 'flex-start' }]}>Subtotal</Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginBottom: '2%', flex: 1, marginLeft: '20%', marginRight: '20%' }}>
                                <Text style={[styles.textSubtotal, { marginBottom: '2%', flex: 0.5, alignSelf: 'flex-start' }]}>Tax</Text>
                            </View>

                        </View>
                        <View style={styles.ViewSingleLine} />
                        {/* Service summary  */}

                        <View style={[styles.viewSubtotal, { width: '100%', marginTop: '5%', height: 120, justifyContent: 'center', alignItems: 'center' }]}>
                            <Text style={[styles.textServiceTitle, { marginBottom: '2%' }]}>Service Summary</Text>

                            <View style={{ flexDirection: 'row', marginBottom: '2%', marginTop: '2%', marginLeft: '20%', marginRight: '20%' }}>
                                <Icon1 name="checkcircle" style={{ fontSize: 20, color: 'rgb(59, 206, 53)', marginRight: '5%' }} />
                                <Text style={[styles.textDays, { marginBottom: '2%', flex: 0.9, alignSelf: 'flex-start' }]}>3 days</Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginBottom: '2%', flex: 1, marginLeft: '20%', marginRight: '20%' }}>
                                <Icon1 name="checkcircle" style={{ fontSize: 20, color: 'rgb(59, 206, 53)', marginRight: '5%' }} />
                                <Text style={[styles.textSubtotal, { marginBottom: '2%', flex: 0.9, alignSelf: 'flex-start' }]}>300 blog post 200</Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginBottom: '2%', flex: 1, marginLeft: '20%', marginRight: '20%' }}>
                                <Icon1 name="checkcircle" style={{ fontSize: 20, color: 'rgb(59, 206, 53)', marginRight: '5%' }} />
                                <Text style={[styles.textSubtotal, { marginBottom: '2%', flex: 0.9, alignSelf: 'flex-start' }]}>Radi station</Text>
                            </View>

                        </View>

                        <View style={styles.ViewSingleLine} />

                        {/* View Total */}
                        <View style={[styles.viewTotal, { width: '100%', marginBottom: '5%', marginTop: '5%', height: 70, justifyContent: 'center', alignItems: 'center' }]}>

                            <View style={{ flexDirection: 'row', marginLeft: '20%', marginRight: '20%', alignSelf: 'center' }}>
                                <Text style={[styles.textSubtotalValue, { flex: 0.5, }]}>Total</Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: '2%', marginLeft: '20%', marginRight: '20%', alignSelf: 'center' }}>
                                <Text style={[styles.textSubtotalValue, { flex: 0.5, }]}>Delivery Time</Text>
                            </View>
                        </View>

                        {/* Temp fhoe showing button */}
                        <TouchableHighlight underlayColor="#25b6ad" style={[styles.loginButton, { marginTop: '2%', marginBottom: '5%' }]}>
                            <Text style={[styles.textButtonTitle, { marginLeft: '10%', marginRight: '10%' }]}>Place payment</Text>
                        </TouchableHighlight>

                    </View>

                </View>
                <View style={{ flex: 0.2 }}>
                    {/* List  */}
                </View>


            </Animatable.View>
        )
    }
}