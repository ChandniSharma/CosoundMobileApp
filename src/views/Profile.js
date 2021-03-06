import { Component } from "react";
import styles from "../stylesheet/profile.style";
import { SafeAreaView } from 'react-navigation';
import React from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Image, Text, TouchableHighlight, View, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { getThumbnail, getUsername, getUserInfo } from "../utils";
import { Paginator } from "../hoc";
import MusicList from './common/MusicList';
import ImagesList from './common/ImagesList';
import Posts from './common/Posts';
import Hamburger from 'react-native-hamburger';
import Icon2 from "react-native-vector-icons/EvilIcons";
import Notifications from '../containers/Notifications'
var ImagePicker = require('react-native-image-picker');
import SideMenu from './common/SideMenu';
import PostStatus from './common/PostStatus';
import CustomFooter from '../components/common/CustomFooter';
import Logo from './common/logo';

export default class ProfileComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPostOptionShow: true,
            isBottomViewShow: false,
            isCommentTableShow: true,
            isSideMenuClick: false,
            filePath: {},
            isImageLoadedFromLiab: false,
            text: "Write Something...",
            headerColorMix: ['rgb(42, 173,177)', 'rgb(131, 110, 198)', 'rgb(134, 103, 200)'],
            headerColor: ['rgb(42, 173,177)', 'rgb(93, 152, 179)'],
            isMusicSingleViewShow: true,  // these are the single line view show on above buttons of music video image, when click on them
            isVideoSingleViewShow: false,
            isImageSingleViewShow: false,
            isClickToUpload: false,
            playAudio: false,
            stopAudio: true,
            counter: 0,
            timer: null,
            isNotificationShow: false,
            current: 'image',
        }
    }

    tick = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    changestate = () => {
        this.setState({ playAudio: !this.state.playAudio });
    }

    setTime = () => {
        let timer = setInterval(this.tick, 1000);

    }

    fadeInDown = () => this.refs.userImageView.fadeInDown(800).then(endState => this.fadeInPremiumView())
    fadeInUpBottomView = () => this.refs.viewBottomWhenScroll.slideInUp(50).then(endState => console.log(endState.finished ? 'Finished up' : 'Cancelled upping '));
    fadeInDownBottomView = () => this.refs.viewBottomWhenScroll.slideInDown(800).then(endState => console.log(endState.finished ? " finished downing the view" : 'not down view'));
    fadeInPremiumView = () => this.refs.viewPremium.fadeInDown(800).then(this.fadeInUpUserNameView());
    fadeInUpUserNameView = () => this.refs.viewUserName.fadeInUp(1000).then(this.fadeInUpViewMyMusic());
    fadeInUpViewMyMusic = () => this.refs.viewMyMusic.fadeInUp(1000).then(this.fadeInUpViewMyImage());
    fadeInUpViewMyImage = () => this.refs.viewMyImage.fadeInUp(1000);

    componentDidMount() {
        let timer = setInterval(this.tick, 1000);
        this.setState({ timer });
        this.fadeInDown();
    }

    _navigateToAdvanceSearchView = () => {
        this.props.navigation.navigate("AdvancedSearchView");
    }

    showPopup() {
        this.setState({ isSideMenuClick: true })
    }

    hidePopup() {
        this.setState({ isSideMenuClick: false })
    }

    _onScroll = event => {
        const currentOffset = event.nativeEvent.contentOffset.y;
        const dif = currentOffset - (this.offset || 0);
        if (currentOffset <= 20) {

            if (this.state.isBottomViewShow) {
                this.setState({ isBottomViewShow: false });
                this.fadeInDownBottomView();
            }

        } else {
            if (currentOffset > 5) {
                if (!this.state.isBottomViewShow)
                    setTimeout(() => {
                        this.setState({ isBottomViewShow: true });
                        this.fadeInUpBottomView();
                    }, 500);
            }
        }
        this.offset = currentOffset;
    };
    showNotification() {
        this.setState({ isNotificationShow: true, isSideMenuClick: false })
    }
    postOptionView() {
        let arrayPostOptions = ["All", "Copy Link", "Unfollow User", 'Share', 'Report Post'];
        let arrayBtn = [];

        for (let i = 0; i < arrayPostOptions.length; i++) {
            let btn = <TouchableHighlight underlayColor="black" style={{ marginTop: '2%', height: 40 }}>
                <Text style={styles.postOptionText}>  {arrayPostOptions[i]} </Text>
            </TouchableHighlight>
            arrayBtn.push(btn);
        }
        return arrayBtn;
    }

    onClickMusicVideoImage(type) {
        this.setState({ current: type });
        if (!this.state.isClickToUpload) {
            this.setState({ isClickToUpload: true })
            this.chooseFile(type)
        }
    }

    chooseFile = (type) => {
        var options = {
            title: 'Image',
            mediaType: type === 'music' ? 'audio' : type,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, response => {
            if (response.didCancel) {
                this.setState({
                    isClickToUpload: false
                })
            } else if (response.error) {
                this.setState({
                    isClickToUpload: false
                })
            } else if (response.customButton) {
                alert(response.customButton);
                this.setState({
                    isClickToUpload: false
                })
            } else {
                if (response) {
                    const { userFeedActions } = this.props;
                    userFeedActions.setTemporaryFile(response);
                }
            }
        });
    };

    renderItem = (music) => {
        return (
            <View style={{ paddin: 10 }}>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 9, flexDirection: "row" }}>
                        <Text style={styles.songTitle}>{music.item.id}.</Text>
                        <Text style={styles.songTitle}>{music.item.music}</Text>
                    </View>
                    <Text style={styles.songDuration}>{music.item.time}</Text>
                </View>
                <View style={{ marginTop: "5%", marginBottom: "5%", width: "100%", justifyContent: "center", height: 0.5, backgroundColor: "#d3d3d3" }}>
                </View>
            </View>
        )
    };

    renderImage = (music) => {
        return (
            <View style={{ padding: 10 }}>
                <Image style={{
                    width: 100,
                    height: 100,
                    borderRadius: 10,
                    shadowColor: 'rgba(0,0,0,1)',
                    shadowOffset: {
                        width: 0.8,
                        height: 0.8
                    },
                    shadowOpacity: 0.2,
                    zIndex: -1
                }}
                    source={require('../assets/homepage-video-placeholder.jpg')}>
                </Image>
            </View>
        )
    };


    render() {
        const {
            user,
            myMusic,
            myImages,
            userFeed,
            fetchFeed,
            _restCalls,
            fetchMyMusic,
            fetchMyImages,
        } = this.props;
        const { paginationData } = userFeed;
        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
                {!this.state.isSideMenuClick ? <LinearGradient start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} colors={this.state.isBottomViewShow ? this.state.headerColor : this.state.headerColorMix} style={{ flexDirection: 'row', height: '10%', width: '100%', alignItems: 'space-between', justifyContent: 'center' }}>
                    <TouchableOpacity style={{ color: 'white', marginTop: '20%', flex: 0.15, height: 38, }} onPress={() => this.showPopup()}>
                        <Hamburger color="white" style={{ paddingTop: '12%', }} active={false} type="spinCross" onPress={() => this.showPopup()} />
                    </TouchableOpacity>
                    <Logo color={'#ffffff'} style={{ flex: 0.7, marginLeft: '25%' }} width="130px" height="44px" />
                    <View style={{ flex: 0.3 }} />
                    <TouchableOpacity style={[styles.searchView, { flex: 0.2, alignSelf: 'flex-end', marginRight: '1%' }]} onPress={this._navigateToAdvanceSearchView}>
                        <Icon2 name="search" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '1%', fontSize: 40, tintColor: 'white' }} />
                    </TouchableOpacity>
                </LinearGradient> : null}
                {!this.state.isNotificationShow ? <KeyboardAwareScrollView onScroll={this._onScroll} style={{ backgroundColor: 'rgb(42, 173,177)', }}>
                    <View style={{ backgroundColor: 'rgb(248,249,248)' }} >
                        <LinearGradient start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} colors={['rgb(42, 173,177)', 'rgb(131, 110, 198)', 'rgb(134, 103, 200)']} style={styles.viewTopBackground}>
                            <Animatable.View ref={'viewPremium'} style={{ alignSelf: 'center', marginTop: 120 }}>
                                <Text style={styles.textPremium}> Premium </Text>
                            </Animatable.View>
                        </LinearGradient>
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
                            <Image style={styles.imgUser} source={{ uri: getThumbnail(user.data) }} />
                        </Animatable.View>
                        <Animatable.View ref={'viewUserName'}>
                            <Text style={[styles.textUserName, { marginTop: '10%', alignSelf: 'center' }]}>{getUsername(user.data)}</Text>
                            <Text style={[styles.textDesignation, { marginBottom: '10%', alignSelf: 'center' }]}>{getUserInfo(user.data)}</Text>
                        </Animatable.View>
                        <Animatable.View ref={'viewMyMusic'} style={{
                            width: "100%",
                            backgroundColor: "white",
                            marginTop: 10,
                            padding: 10,
                            shadowColor: 'rgba(0,0,0,1)',
                            shadowOffset: {
                                width: 0,
                                height: 0
                            },
                            shadowOpacity: 0.2,
                        }}>
                            <View style={{ width: "100%", justifyContent: "center", flexDirection: "row" }}>
                                <Text style={styles.myMusicTitle}>My Music</Text>
                            </View>
                            <Paginator
                                isLoaderInternal
                                myMusic={myMusic}
                                component={MusicList}
                                callAPI={fetchMyMusic}
                                page={myMusic.paginationData.page}
                                page_count={myMusic.paginationData.page_count}
                            />
                        </Animatable.View>
                        <Animatable.View ref={'viewMyImage'} style={styles.viewImagesOutside}>
                            <View style={styles.viewImagesInside}>
                                <Text style={styles.myImagesTitle}>My Images</Text>
                            </View>
                            <Paginator
                                isLoaderInternal
                                myImages={myImages}
                                component={ImagesList}
                                callAPI={fetchMyImages}
                                page={myImages.paginationData.page}
                                page_count={myImages.paginationData.page_count}
                            />
                        </Animatable.View>
                        <PostStatus
                            pathName={"/profile"}
                            restCallsOnMount={this.props.restCallsOnMount}
                        />
                        <Paginator
                            pathName={"/profile"}
                            user={user}
                            isLoaderInternal
                            feed={userFeed}
                            component={Posts}
                            callAPI={fetchFeed}
                            _restCalls={_restCalls}
                            page={paginationData.page}
                            shouldCallAPIInitially={false}
                            page_count={paginationData.page_count}
                            restCallsOnMount={this.props.restCallsOnMount}
                        />
                    </View>
                    {!userFeed.isRequesting ? <View>
                        <CustomFooter />
                    </View> :
                        <View />}
                </KeyboardAwareScrollView> :
                    <View>
                        <Notifications />
                    </View>}
                {this.state.isBottomViewShow ?
                    <Animatable.View ref={"viewBottomWhenScroll"} style={styles.viewBottomWhenScroll}>
                        <View style={{ flexDirection: 'row', margin: '2%' }}>
                            <Image style={styles.imgUserInBottom} source={{ uri: getThumbnail(user.data) }} />
                            <View>
                                <Text style={styles.userNameInBottom}>{getUsername(user.data)}</Text>
                                <Text style={styles.JobDetailInBottom}>{getUserInfo(user.data)}</Text>
                            </View>
                        </View>
                    </Animatable.View> : null}
                {/* Side Menu button modal  */}
                {this.state.isSideMenuClick ? <SideMenu isProfile={true} navigation={this.props.navigation} hidePopup={() => this.hidePopup()} showNotification={() => this.showNotification()} /> : null}
            </SafeAreaView>
        )
    }
}