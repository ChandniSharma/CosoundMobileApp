import { Component } from "react";
import { SafeAreaView } from 'react-navigation';
import React from "react";
import styles from '../stylesheet/marketPlace.style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import homeStyle from "../stylesheet/home.style";
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
import CustomFooter from '../components/common/CustomFooter';
import MarketplaceDetail from './MarketplaceDetail';

const { deviceWidth, deviceHeight } = Dimensions.get('window');
let screenWidth = deviceWidth - 100;

export default class MarketPlace extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            isSideMenuClick: false,
            isNotificationShow: false,
            isDropDownclick: false,
            isMarketDetailViewShow: false,
            headerColorMix: ['rgb(42, 173,177)', 'rgb(131, 110, 198)', 'rgb(134, 103, 200)'],

            carouselItems: [
                {
                    title: "Featured Recording studio",
                    MainTitle: "The Jukebox Recording Studios London",
                    Description: "The jukebox comes with a large live room, perfect for bands. The team at jukebox have over 40 years experience in recording rock and heavy mental musicians. "
                },
                {
                    title: "Featured Photographer",
                    MainTitle: "Let Burnett",
                    Description: "If you are looking for a high quality stylistic imagery for your band then checkout lel's award winning portfolio here. "
                },
                {
                    title: "Featured Recording studio",
                    MainTitle: "The Jukebox Recording Studios London",
                    Description: "The jukebox comes with a large live room, perfect for bands. The team at jukebox have over 40 years experience in recording rock and heavy mental musicians. "
                },
                {
                    title: "Featured Recording studio",
                    MainTitle: "The Jukebox Recording Studios London",
                    Description: "The jukebox comes with a large live room, perfect for bands. The team at jukebox have over 40 years experience in recording rock and heavy mental musicians. "
                },
                {
                    title: "Featured Recording studio",
                    MainTitle: "The Jukebox Recording Studios London",
                    Description: "The jukebox comes with a large live room, perfect for bands. The team at jukebox have over 40 years experience in recording rock and heavy mental musicians. "
                }
            ],

            arrayPersonalRecommendations: [
                {

                    userImage: "",
                    title: "Get you on 200 Spotify Playlists",
                    ratingCount: '',
                    like: "10",
                    price: '45$',
                    comment: "56",
                    name: "Bryan Garza",
                    image: require('../assets/marketGrid-3.jpg'),
                },
                {
                    userImage: "",
                    title: "Get you on 200 Spotify Playlists",
                    ratingCount: '',
                    like: "10",
                    price: '45$',
                    comment: "56",
                    name: "Bryan Garza",
                    image: require('../assets/marketGrid-3.jpg'),

                },

                {
                    userImage: "",
                    title: "Get you on 200 Spotify Playlists",
                    ratingCount: '',
                    like: "10",
                    price: '45$',
                    comment: "56",
                    name: "Bryan Garza",
                    image: require('../assets/marketGrid-3.jpg'),
                },

            ],
        }
    }

    fadeInMainView = () => this.refs.mainView.fadeIn(1000).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))

    fadeInMarketDetailView = () => this.refs.marketPlaceDetailViewRef.fadeIn(500).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))

    componentDidMount = () => {
        this.fadeInMainView();
    };

    moveToMarketPlaceDetailView = () => {
console.log(" move to Detail view ");
        this.setState({ isMarketDetailViewShow: true });
      
    }
    _renderCarouselItem({ item, index }) {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 20, }}>
                <ImageBackground source={require('../assets/marketGrid-12.jpg')} style={{ width: 500, height: 500 }}>

                    <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', width: '100%', height: '100%', borderRadius: 20, alignItems: 'center' }}>
                        <View style={{ width: '60%', height: '100%', marginRight: '10%' }}>
                            <Text style={styles.titleCarousel} >{item.title}</Text>
                            <Text style={styles.titleMainCarousel} >{item.MainTitle}</Text>
                            <Text style={styles.descriptionCarousel} >{item.Description}</Text>

                            <View style={{ marginLeft: "15%", marginRight: "15%", }}>
                                <TouchableHighlight underlayColor="#25b6ad" style={[styles.seeMoreBtn]} onPress={this.moveToMarketPlaceDetailView}>
                                    <Text style={styles.textButtonTitle}>See more...</Text>
                                </TouchableHighlight>
                            </View>

                        </View>


                    </View>

                </ImageBackground>

            </View>
        )
    }
    renderItem = (itemDetail) => {
        let item = itemDetail.item;
        console.log(" itemde-----", itemDetail);
        return (
            <View style={{ flex: 1 }}>
                {/* View single line */}
                <View style={{ width: '95%', alignSelf: 'center', marginTop: '2%', height: 0.5, backgroundColor: 'lightgray' }} />

                {/* Main service Image */}
                <View style={{ marginTop: '2%', width: '100%' }}>
                    <TouchableOpacity style={{ alignSelf: 'center', width: '100%' }} onPress={this.moveToMarketPlaceDetailView}>
                        <Image style={{ width: '100%' }} source={item.image} />
                    </TouchableOpacity>
                </View>


                <View style={{ flexDirection: 'row', flex: 1, marginBottom: '2%', marginTop: '2%' }}>

                    <Image style={[styles.imgUser, { marginRight: '2%', marginLeft: '2%', marginBottom: '2%', marginTop: '2%' }]} source={require('../assets/avatar2.jpg')} />

                    <View style={{ flex: 0.85 }}>
                        <TouchableOpacity style={{ marginTop: '2%' }}>
                            <Text style={styles.textServiceTitle}> {item.title}</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '0.5%' }}>
                            {/* Rating view */}
                            {/* <Text style={styles.textServiceTitle}>Star Rating </Text> */}
                            <StarView starCount={3} />
                            <Text style={[styles.textRatingCount, { marginLeft: '2%' }]}>5</Text>
                        </View>
                    </View>

                </View>


            </View>
        )
    }
    showPopup() {
        this.setState({ isSideMenuClick: true })
        console.log(" sidemnu ", this.state.isSideMenuClick);
        // setTimeout(() => {
        //     this.zoomInPopup();
        // }, 10);

    }
    hidePopup() {
        this.setState({ isSideMenuClick: false })
    }
    handleSnapToItem(index) {
        this.setState({ numberValue: String(index + 1) });
        //    let temp;
        //    if (this.state.numberValue >= 0) {
        //        temp = "0" + String(this.state.numberValue)
        //    } else {
        //        temp = "01"
        //    }

        // this.textAnimated = <Animatable.Text animation="fadeInUp" style={styleText.textTopNumber}> {this.textCombineValue} </Animatable.Text>


        // }
    }

    render() {
        return (

            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>

                {!this.state.isSideMenuClick ? <LinearGradient start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} colors={this.state.isBottomViewShow ? this.state.headerColor : this.state.headerColorMix} style={{ flexDirection: 'row', height: '10%', width: '100%', alignItems: 'space-between', justifyContent: 'center' }}>

                    <TouchableOpacity style={{ color: 'white', marginTop: '20%', flex: 0.15, height: 38, }} onPress={() => this.showPopup()}>
                        <Hamburger color="white" style={{ paddingTop: '12%', }} active={false} type="spinCross" onPress={() => this.showPopup()} />
                    </TouchableOpacity>


                    <Logo color={'#ffffff'} style={{ flex: 0.7, marginLeft: '25%' }} width="130px" height="44px" />

                    <View style={{ flex: 0.3 }} />
                    <TouchableOpacity style={[styles.searchView, { flex: 0.2, alignSelf: 'flex-end', marginRight: '5%' }]} onPress={() => this.setState({ isNotificationShow: !this.state.isNotificationShow })}>
                        {this.state.isNotificationShow ? <Icon name="close" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 38, tintColor: 'white' }} /> : <Icon2 name="bell" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 40, tintColor: 'white' }} />}
                    </TouchableOpacity>
                </LinearGradient> : null}

                {/* Top view Graphic design which will open modal view by side button click */}
                <View style={{ marginTop: '2%', marginBottom: '2%' }}>

                    <TouchableOpacity onPress={() => this.setState({ isDropDownclick: true })}>
                        <View style={{ flexDirection: 'row' }}>

                            <Text style={[styles.titleAccount, { flex: 0.9, marginTop: '0.5%', marginLeft: '5%' }]}> Graphics & Design</Text>

                            <View style={{ width: 30, height: 30, borderRadius: 18, marginRight: '5%', marginBottom: '5%', flex: 0.1, backgroundColor: 'white' }}>
                                <Icon1 name="down" color='#8E8E8E' style={{ fontSize: 15, alignSelf: 'center', marginTop: '22%', fontWeight: 'bold' }} />
                            </View>

                            {/* <Animatable.Image source={require('../../src/assets/Image/arrow_small_down.png')} style={{borderRadius:13,alignSelf:'flex-end' ,width: 26, height: 26 }} /> */}
                        </View>
                    </TouchableOpacity>
                </View>

                <KeyboardAwareScrollView onScroll={this._onScroll} style={{ backgroundColor: 'rgb(245, 245,245)' }}>

                    {this.state.isMarketDetailViewShow ? <Animatable.View  style={{ backgroundColor: 'white', flex: 1 }}>
                            <MarketplaceDetail />
                    </Animatable.View> :
                        <Animatable.View ref={'mainView'} style={{ backgroundColor: 'white', flex: 1 }} >

                            {/* <TouchableHighlight
                            onPress={
                                () => { this.carousel._snapToItem(this.state.activeIndex - 1) }
                            }>
                            {/* <Image source={require('../assets/leftarrow.png')} /> */}
                            {/* </TouchableHighlight> */}

                            <View style={{ alignSelf: 'center', flex: 0.4, width: '80%', borderRadius: 20, marginBottom: '3%', flexDirection: 'row' }}>

                                {/* <View style={{ width: 30, height: 30, borderRadius: 18, backgroundColor: 'white' }}>
                                <Icon1 name="down" color='#8E8E8E' style={{ fontSize: 15, alignSelf: 'center', marginTop: '22%', fontWeight: 'bold' }} />
                            </View> */}

                                <Carousel
                                    layout={'default'} layoutCardOffset={`18`}
                                    ref={ref => this.carousel = ref}
                                    data={this.state.carouselItems}
                                    sliderWidth={350}
                                    itemWidth={400}
                                    renderItem={this._renderCarouselItem}
                                    onSnapToItem={index => this.setState({ activeIndex: index })}
                                // onSnapToItem={this.handleSnapToItem.bind(this)}

                                />

                                {/* <View style={{ width: 30, height: 30, borderRadius: 18, backgroundColor: 'white' }}>
                                <Icon1 name="down" color='#8E8E8E' style={{ fontSize: 15, alignSelf: 'center', fontWeight: 'bold' }} />
                            </View> */}
                            </View>

                            <View style={{ flex: 0.6, width: '100%' }}>

                                {/*
                             <TouchableHighlight
                            onPress={
                                () => { this.carousel._snapToItem(this.state.activeIndex + 1) }
                            }>
                            {/* <Image source={require('../assets/rightarrow.png')} /> */}
                                {/* </TouchableHighlight> 
                            */}

                                <TouchableHighlight underlayColor="#25b6ad" style={[styles.loginButton]}>
                                    <Text style={styles.textButtonTitle} >My Market</Text>
                                </TouchableHighlight>

                                <Text style={styles.personalRecommended}> Your Personal Reccomendations</Text>

                                <FlatList
                                    data={this.state.arrayPersonalRecommendations}
                                    renderItem={this.renderItem}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                            </View>
                            <View>
                                <CustomFooter />
                            </View>
                        </Animatable.View>}



                </KeyboardAwareScrollView>
            </SafeAreaView>
        );
    }
}

