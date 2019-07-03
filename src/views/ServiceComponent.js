import { Component } from "react";
import { SafeAreaView } from 'react-navigation';
import React from "react";
import styles from '../stylesheet/marketPlaceDetail.style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { FlatList, Image, ImageBackground, Text, TextInput, TouchableHighlight, View, TouchableOpacity, Clipboard, AlertIOS, Platform, StyleSheet, Dimensions } from "react-native";
import { Icon } from "native-base";
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
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
import HeaderMenuAndBell from './common/HeaderMenuAndBell';
import Carousel from 'react-native-snap-carousel';
import StarView from './common/StarView';
import SideMenu from '../../src/views/common/SideMenu';


import {
    isTab,
    isMobile,
    getServiceImage,
    getBreadCrumbsForService,
    isSuccess,
    getThumbnail,
    getUsername,
    getUserInfo
} from "../utils";

export default class ServiceComponent extends Component {
    fadeInMarketDetailView = () => this.refs.marketPlaceDetailViewRef.fadeIn(500).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            isSideMenuClick: false,
            isNotificationShow: false,
            isDropDownclick: false,
            isMarketDetailViewShow: false,
            headerColorMix: ['rgb(42, 173,177)', 'rgb(131, 110, 198)', 'rgb(134, 103, 200)'],
            serviceImage: '',

        },
            // this.setState({
            //     serviceImage: getServiceImage(this.props.service.data.media)
            // })    
            this.arrayComments = [
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
                },];

    }
    fadeInMainView = () => this.refs.mainView.fadeIn(1000).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))

    fadeInMarketDetailView = () => this.refs.marketPlaceDetailViewRef.fadeIn(500).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))

moveViewUp1 = () => this.refs.view1.fadeInUp(1000).then(setTimeout(() => {
    this.moveViewUp2();
  }, 100));

moveViewUp2 = () => this.refs.view2.fadeInUp(1000).then(setTimeout(() => {
    this.moveViewUp3();
  }, 500));

 moveViewUp3 = () => this.refs.view3.fadeInUp(1000).then(setTimeout(() => {
    this.moveViewUp4();
  }, 500));

 moveViewUp4 = () => this.refs.view4.fadeInUp(1000).then(setTimeout(() => {
    this.moveViewUp5();
  }, 500));

  moveViewUp5 = () => this.refs.view5.fadeInUp(1000).then(setTimeout(() => {
    this.moveViewUp6();
  }, 500));

 moveViewUp6 = () => this.refs.view6.fadeInUp(1000).then(endState => endState.finished ? "finish " : console.log('finish not'));

    componentDidMount = () => {
        // setTimeout(() => {
        //      this.fadeInMarketDetailView();
        // }, 10);
         this.moveViewUp1();

    };
    hidePopup() {
        this.setState({ isSideMenuClick: false })
    }
    hideNotificationView() {
        this.setState({ isNotificationShow: false })
    }

    showPopup() {
        this.setState({
            isSideMenuClick: true,
            isNotificationShow: false
        })
    }

    onClickTopOption=(item, index)=>{
      if(index===0){
        this.props.navigation.navigate('MarketPlaceContainer', { slug: item.category.slug});
      }else if(index === 1){
        this.props.navigation.navigate('MarketPlaceContainer', { slug: item.category.slug, subcategorySlug: item.sub_category.slug});
      }else{
        this.props.navigation.navigate('Service', { slug: item.category.slug, subcategorySlug: item.sub_category.slug, id: item.id});
      }
    }

    renderItem = () => {
        return (
            <View style={{ backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row', flex: 1, marginLeft: '5%', marginRight: '5%', marginTop: '5%' }}>

                    <Image source={require('../assets/avatar2.jpg')} style={{ width: 50, height: 50, borderRadius: 25 }} />
                    <View style={{ flex: 0.85 }}>
                        <Text style={styles.commentorName}> Patrick Watkins</Text>
                        <View style={{ flexDirection: 'row', marginTop: '2%', marginLeft: '0.5%' }}>
                            {/* Rating view */}
                            {/* <Text style={styles.textServiceTitle}>Star Rating </Text> */}
                            <StarView starCount={3} />
                            <Text style={[styles.textRatingCount, { marginLeft: '2%' }]}>5</Text>
                        </View>
                    </View>
                    <Text style={[styles.commentTime, { flex: 0.15 }]}>21 h ago</Text>
                </View>
                <Text style={styles.commentDescription}> My spotify plays went THROUGH THE ROOF! Chester is a really great guy, and delivered exactly what he promised.</Text>

                <View style={styles.ViewSingleLine} />
            </View>)
    }

    render() {
        const {
            id,
            service,
            reviews,
            addToCart,
            _addToCart,
            fetchReviews
        } = this.props;
        const { data } = service;
        const breadCrumbArray = getBreadCrumbsForService(data);
        const mobile = isMobile();
        const tab = isTab();
        //         return (
        //             <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
        //                 <View>
        //                     <Text>dfsdsdfs</Text>
        //                 </View>
        //                 </SafeAreaView>
        // );

        //return null;
        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>

                {!this.state.isSideMenuClick ? <HeaderMenuAndBell colors={this.state.isBottomViewShow ? this.state.headerColor : this.state.headerColorMix} onPressPopup={() => this.showPopup()} isNotificationShow={this.state.isNotificationShow} onPressBell={() => this.setState({ isNotificationShow: !this.state.isNotificationShow })} /> : null}

                <View style={{ marginTop: '2%', marginBottom: '2%' }}>

                    <TouchableOpacity onPress={() => this.setState({ isDropDownclick: true })}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                            <Text style={[styles.titleAccount, { flex: 0.9, marginLeft: '5%', marginTop: '3%' }]}> Graphics & Design</Text>

                            <View style={{ width: 30, height: 30, borderRadius: 18, marginRight: '5%', marginTop: '1%', flex: 0.1, backgroundColor: 'white' }}>
                                <Icon1 name="down" color='#8E8E8E' style={{ fontSize: 15, alignSelf: 'center', marginTop: '22%', fontWeight: 'bold' }} />
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>



                <KeyboardAwareScrollView onScroll={this._onScroll} style={{ backgroundColor: 'rgb(245, 245,245)' }}>

                    <View style={{ flex: 1, backgroundColor: 'rgb(245, 245, 245)' }}>

                        <Animatable.View ref={'view1'}>
                            <View style={{ flexDirection: 'row', flex: 0.1, height: 40, paddingTop: '5%' }}>
                            {breadCrumbArray.map((item, index) => {
                                return(
                                <View>
                                <View>
                                    <TouchableOpacity onPress={()=> this.onClickTopOption(item.link, index)}>
                                        <Text style={styles.textTop}> {item.name}</Text>
                                    </TouchableOpacity>
                                </View>
                                {breadCrumbArray.length -1 >index? <Text>/</Text> :null}
                                </View>
                            )}
                            )}
                                {/* // <View>
                                //     <TouchableOpacity>
                                //         <Text style={styles.textTop}>Spotify Playlists </Text>
                                //     </TouchableOpacity>
                                // </View>

                                // <Text>/</Text>
                                // <View>
                                //     <TouchableOpacity>
                                //         <Text style={styles.textTop}> Pop</Text>
                                //     </TouchableOpacity>
                                // </View> */}
                            </View>
                        </Animatable.View>

                       <Animatable.View ref={'view2'} style={[styles.viewBackground, { flex: 0.2, }]}>
                            <View style={{ marginTop: '2%', width: '100%' }}>
                                { data.media ? <Image style={{ width: '100%', height: 200 ,alignSelf:'center' }} source={{ uri: getServiceImage(data.media) }} /> :null}
                            </View>

                            <Text style={styles.textSpotify}> {data.title} </Text>
                            <Text style={styles.textListTitle}> {data.description} </Text>
                            <Text style={styles.textPrice}> ${data.price} </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon4 name='md-time' style={{ fontSize: 25, marginLeft: '2%', color: 'rgba(38, 38, 38, 0.52)' }} />
                                <Text style={styles.textDeliveryTime}> {`${data.delivery_time} ${
                                    data.delivery_time_unit
                                    }`} </Text>
                            </View>
                        </Animatable.View>

                        <Animatable.View ref={'view3'} style={{ backgroundColor: 'white', marginBottom: '5%', marginTop: '5%', flex: 0.1 }}>
                            <Text style={[styles.textListTitle, { height: 50 }]}> About this Job </Text>
                            <Text style={[styles.textJobDescription]}>{data.about}</Text>
                        </Animatable.View>
                        <Animatable.View ref={'view4'} style={{ flex: 0.15 }}>

                            <View style={{ backgroundColor: 'white', alignSelf: 'center', borderRadius: 20, marginBottom: '5%', width: '90%', alignItems: 'center' }}>

                                <Image source={require('../assets/avatar2.jpg')} style={{ width: 90, height: 90, borderRadius: 45, alignSelf: 'center', marginTop: '5%' }} />

                                <Text style={[styles.titleAccount, { alignSelf: 'center', marginBottom: '2%', marginTop: '4%' }]}>Chester Parsons</Text>

                                <Text style={styles.textUserDescription}> Spotify Playlists Curator</Text>

                                <View style={{ marginTop: '10%', marginBottom: '5%' }}>
                                    <StarView starCount={3} />

                                </View>

                                <View style={styles.ViewSingleLine} />

                                {/* <View style={[styles.viewSubtotal, { width: '100%', marginTop: '5%', height: 140, justifyContent: 'center', alignItems: 'center' }]}>
                                    <Text style={[styles.textServiceTitle, { marginBottom: '2%' }]}>Service</Text>
                                    { data && data.key_points &&
              !isNull(data.key_points) &&
              data.key_points.map((item, index) => {
                return (<View style={{ flexDirection: 'row', marginBottom: '2%', marginTop: '2%', marginLeft: '20%', marginRight: '20%' }}>
                <Icon1 name="checkcircle" style={{ fontSize: 20, color: 'rgb(59, 206, 53)', marginRight: '5%' }} />
                <Text style={[styles.textDays, { marginBottom: '2%', flex: 0.9, alignSelf: 'flex-start' }]}>{item}</Text>
            </View>)
              })}
                                    <View style={{ flexDirection: 'row', marginBottom: '2%', marginTop: '2%', marginLeft: '20%', marginRight: '20%' }}>
                                        <Icon1 name="checkcircle" style={{ fontSize: 20, color: 'rgb(59, 206, 53)', marginRight: '5%' }} />
                                        <Text style={[styles.textDays, { marginBottom: '2%', flex: 0.9, alignSelf: 'flex-start' }]}>Your music on 30 top playlists</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginBottom: '2%', flex: 1, marginLeft: '20%', marginRight: '20%' }}>
                                        <Icon1 name="checkcircle" style={{ fontSize: 20, color: 'rgb(59, 206, 53)', marginRight: '5%' }} />
                                        <Text style={[styles.textSubtotal, { marginBottom: '2%', flex: 0.9, alignSelf: 'flex-start' }]}>For up to 4 weeks</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginBottom: '2%', flex: 1, marginLeft: '20%', marginRight: '20%' }}>
                                        <Icon1 name="checkcircle" style={{ fontSize: 20, color: 'rgb(59, 206, 53)', marginRight: '5%' }} />
                                        <Text style={[styles.textSubtotal, { marginBottom: '2%', flex: 0.9, alignSelf: 'flex-start' }]}>A full report at the end!</Text>
                                    </View>

                                </View> */}

                                <View style={styles.ViewSingleLine} />

                                <View style={[styles.viewTotal, { width: '100%', marginBottom: '5%', marginTop: '5%', height: 70, alignItems: 'center' }]}>

                                    <View style={{
                                        marginTop: '2%', marginBottom: '5%', marginLeft: "15%",
                                        marginRight: "15%",
                                    }}>

                                        <TouchableHighlight underlayColor="#25b6ad" style={[styles.btnMessageSeller]}>
                                            <Text style={[styles.textMsgSeller]}>Message Seller</Text>
                                        </TouchableHighlight>
                                    </View>
                                </View>

                                <View style={{
                                    marginBottom: '15%', marginLeft: "15%",
                                    marginRight: "15%",
                                }}>
                                    <TouchableHighlight onPress={() => _addToCart()}  underlayColor="#25b6ad" style={[styles.loginButton]}>
                                        <Text style={[styles.ProcessBtnTitle]}>Process to Order</Text>
                                    </TouchableHighlight>
                                </View>


                            </View>
                        </Animatable.View>

                        <Animatable.View ref={'view5'} >

                        <View style={{ marginTop: '2%', marginBottom: '5%', marginLeft: '15%', marginRight: '15%' }}>
                            <TouchableHighlight underlayColor="#25b6ad" style={[styles.recentButton]}>
                                <View style={{ flexDirection: 'row', height: 50, justifyContent: 'center' }}>
                                    <Text style={[styles.textButtonTitle, { marginTop: '5%' }]}>Most Recent</Text>
                                    <Icon1 name="down" color='#8E8E8E' style={{ fontSize: 15, alignSelf: 'center', fontWeight: 'bold', marginLeft: '5%' }} />
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: '5%', alignSelf: 'center', justifyContent:'center' }}>
                            <StarView starCount={3} />
                            <Text style={[styles.textRatingCount]}>5</Text>
                        </View>
                        </Animatable.View>
                        <Animatable.View ref={'view6'} >
                        <View style={{ flex: 0.4, marginBottom: '2%' }}>
                            <FlatList
                                data={this.arrayComments}
                                renderItem={this.renderItem}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                        </Animatable.View>
                    </View>
                </KeyboardAwareScrollView>

                {this.state.isSideMenuClick ? <SideMenu navigation={this.props.navigation} hidePopup={() => this.hidePopup()} showNotification={() => this.showNotification()} /> : null}

                {/* notification view show */}
                {this.state.isNotificationShow ? <View style={{ marginTop: '25%', position: 'absolute' }}>
                    <Notifications navigation={this.props.navigation} hidePopup={() => this.hideNotificationView()} />
                </View> : null}

            </SafeAreaView>
        )
    }
}