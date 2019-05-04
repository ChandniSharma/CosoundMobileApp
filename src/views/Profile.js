import { Component } from "react";
import styles from "../stylesheet/profile.style";
import { SafeAreaView } from 'react-navigation';
import React from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import homeStyle from "../stylesheet/home.style";
import { FlatList, Image, ImageBackground, Text, TextInput, TouchableHighlight, View, TouchableOpacity } from "react-native";
import { Icon } from "native-base";
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { getThumbnail, getUsername, getUserInfo } from "../utils";
import { Paginator } from "../hoc";
// import MusicList from './common/MusicList';
// import ImagesList from './common/ImagesList';

//  import Icon from 'react-native-vector-icons/FontAwesome'

export default class ProfileComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPostOptionShow: true,
            isBottomViewShow: false,
            isCommentTableShow: true,
            text: "Write Something...",
            headerColorMix: ['rgb(42, 173,177)', 'rgb(131, 110, 198)', 'rgb(134, 103, 200)'],
            headerColor: ['rgb(42, 173,177)', 'rgb(93, 152, 179)'],
            music: [
                {
                    id: 1,
                    music: "o mere dil ke chain",
                    time: "5.20"
                },
                {
                    id: 2,
                    music: "o mere dil ke chain",
                    time: "5.20"
                },
                {
                    id: 3,
                    music: "o mere dil ke chain",
                    time: "5.20"
                },
            ],
            images: [
                {
                    image: require('../assets/homepage-video-placeholder.jpg')
                },
                {
                    image: require('../assets/homepage-video-placeholder.jpg')
                },
                {
                    image: require('../assets/homepage-video-placeholder.jpg')
                },
                {
                    image: require('../assets/homepage-video-placeholder.jpg')
                },
                {
                    image: require('../assets/homepage-video-placeholder.jpg')
                },
                {
                    image: require('../assets/homepage-video-placeholder.jpg')
                },
            ],
            post: [
                {
                    type: "video",
                    like: "10",
                    comment: "56",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
                        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
                        "ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur " +
                        "adipisicing elit, sed do eiusmod tempor incididunt ut",
                    endTime: "5.02",
                    startTime: "0.00",
                    name: "Bryan Garza",
                    occupation: "Job Title/Artist Name.",
                    image: require('../assets/avatar1.jpg'),

                },
                {
                    type: "music",
                    // type:"video",
                    like: "10",
                    comment: "56",
                    endTime: "5.02",
                    startTime: "0.00",
                    name: "Bryan Garza",
                    occupation: "Job Title/Artist Name.",
                    image: require('../assets/avatar2.jpg'),
                    song: "Kygo",
                    description: "Of Monsters and Men - Dirty Paws (Kygo remix)",

                },
                {
                    type: "video",
                    like: "10",
                    comment: "56",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
                        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
                        "ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur " +
                        "adipisicing elit, sed do eiusmod tempor incididunt ut",
                    endTime: "5.02",
                    startTime: "0.00",
                    name: "Bryan Garza",
                    occupation: "Job Title/Artist Name.",
                    image: require('../assets/avatar1.jpg'),

                },
            ],
            arrayCommentData: [
                {
                    title: "Devin Richardson",
                    time: '1 days ago',
                    description: "Very Nice!"
                },
                {
                    title: "Marcus Cobb",
                    time: '1 days ago',
                    description: "The 11-minute opener begins well enough, with bass thumps building a trance beneath paranormal EQs as White-Gluz’s vocals"
                },
                {
                    title: "Clifford Rowe",
                    time: '1 days ago',
                    description: "nice work, congrats"
                },
            ],

        }
    }


    fadeInDown = () => this.refs.userImageView.fadeInDown(1000).then(endState => this.fadeInPremiumView())

    fadeInUpBottomView = () => this.refs.viewBottomWhenScroll.slideInUp(50).then(endState => console.log(endState.finished ? 'Finished up' : 'Cancelled upping '));

    fadeInDownBottomView = () => this.refs.viewBottomWhenScroll.slideInDown(1000).then(endState => console.log(endState.finished ? " finished downing the view" : 'not down view'));

    fadeInPremiumView = () => this.refs.viewPremium.fadeIn();

    fadeInUpPostOptionView = () => this.refs.viewPostOption.fadeInUp(1000);


    componentDidMount() {
        this.fadeInDown();
        this.fadeInUpPostOptionView();
    }
    _navigateToAdvanceSearchView() {
        // this.props.navigation.navigate("AdvancedSearchView");
    }
    _navigateToNotificationView() {
        // this.props.navigation.navigate('Notification');
    }

    _showCommentList() {
        this.setState({ isCommentTableShow: !this.state.isCommentTableShow });
    }
    _showPostOptions() {
        this.setState({ isPostOptionShow: true });
    }

    rednerPostItem = (item) => {
        return (
            <TouchableOpacity>
                <Text> All </Text>
            </TouchableOpacity>
        )
    }
    renderCommentItem = (item) => {
        return (
            <View>
                <TouchableHighlight onPress={this.onClickNotification}>
                    <View style={{ marginTop: '2%' }}>
                        {/* <View>
                            <Text>{'\u2022' + " "}</Text>
                        </View> */}
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <Image style={[styles.imgUserInComments]} source={require('../assets/avatar1.jpg')} />
                            <View style={{ flex: 0.9 }}>
                                <Text style={[styles.textSubTitleNotSelected]}>{item.item.title} </Text>
                                <Text style={styles.textDescComment}> {item.item.description} </Text>

                            </View>
                            {/* {this.state.isClick? <Text style={styles.textSubtitleSelected}>Viewed your profile </Text>
                    :  <Text style={styles.textSubTitleNotSelected}> Viewed your profile </Text>} */}
                            <Text style={[styles.textNotificationTime, { flex: 0.3 },]}> {item.item.time}</Text>
                        </View>
                        <View>
                        </View>
                        {/* <View style={{ width: '80%', height: 1, backgroundColor: 'rgb(38,38,38)', marginTop: '2%', alignSelf:'center' }} /> */}
                    </View>
                </TouchableHighlight>
            </View>)
    }

    viewComments() {
        return (
            <View>
                <View style={{ marginTop: "5%", marginBottom: '5%', alignItems: "center", flexDirection: 'row' }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: "#d3d3d3" }}>
                    </View>
                    <TouchableOpacity style={{
                        borderRadius: 20, borderWidth: 1, borderColor: "#d3d3d3", padding: 10, justifyContent: 'center',
                        alignItems: "center", flexDirection: 'row', height: 40, width: 160
                    }} onPress={this._showCommentList.bind(this)}>
                        <Image style={{ width: 20, height: 20, tintColor: "#d3d3d3" }} resizeMode={"contain"} source={require("../assets/tickMark.png")} />
                        <Text style={styles.textCommentCount}>9 Comments</Text>
                        <View style={{
                            marginLeft: 10, flex: 1, borderRadius: 60, borderWidth: 1, borderColor: "#d3d3d3", padding: 10,
                            justifyContent: 'center', alignItems: "center", height: 40, width: 160
                        }}>
                            <Image style={{ width: 20, height: 20, tintColor: "#d3d3d3" }} resizeMode={"contain"} source={require("../assets/tickMark.png")} />
                        </View>
                    </TouchableOpacity>
                    <View style={{ flex: 1, height: 1, backgroundColor: "#d3d3d3" }} />
                </View>
                {this.state.isCommentTableShow ? <View style={{ width: '100%', marginBottom: '2%' }}>
                    <FlatList
                        data={this.state.arrayCommentData}
                        renderItem={this.renderCommentItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View> : null}
            </View>
        )
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


    renderPost = (post) => {
        return (
            <View style={{ marginBottom: "3%" }}>
                {post.item.type === "music" ? <View style={{
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
                        <View style={{ flex: 9, flexDirection: "row", marginTop: 5 }}>
                            <View style={{
                                height: 40, width: 40,
                                borderRadius: 20,
                                elevation: 3,
                                backgroundColor: "white",
                                alignSelf: "center",
                                shadowColor: 'rgba(0,0,0,1)',
                                shadowOffset: {
                                    width: 1,
                                    height: 1
                                },
                                shadowOpacity: 0.8,
                            }} />
                            <View style={{ paddingLeft: 10, marginTop: 3 }}>
                                <Text style={styles.textUserName}>Test Name</Text>
                                <Text style={styles.textDesignation}>Test Desigation</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={this._showPostOptions}>
                            <Text style={styles.postDescription}>...</Text>
                        </TouchableOpacity>
                        {/* {this.state.isPostOptionShow ?
                            <View style={styles.postOptionView}>
                                {this.postOptionView()}
                            </View> : null
                        } */}

                    </View>
                    <View style={{ marginTop: "5%", marginBottom: "5%", width: "100%", justifyContent: "center", height: 0.5, backgroundColor: "#d3d3d3" }}>
                    </View>
                    <View style={{ padding: 5, marginBottom: "5%" }}>
                        <View style={{ flexDirection: "row", padding: 10 }}>
                            <View style={{ flex: 4, }}>
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
                                <Image style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 10,
                                    shadowColor: 'rgba(0,0,0,1)',
                                    shadowOffset: {
                                        width: 0.8,
                                        height: 0.8
                                    },
                                    shadowOpacity: 0.2,
                                    position: "relative",
                                    right: "-50%",
                                    top: "-20%",
                                    zIndex: 999
                                }}
                                    source={require('../assets/close.png')}>
                                </Image>
                            </View>
                            <View style={{ flex: 6 }}>
                                <Text style={styles.musicTitle}>Kygo</Text>
                                <Text style={styles.musicDescription}>Of Monsters and Men - Dirty Paws (Kygo remix)</Text>
                            </View>
                        </View>
                        <View style={{ width: "100%", backgroundColor: "#d3d3d6" }}>
                            <Image style={{ width: "100%", height: 50 }} source={require('../assets/noise.gif')} />
                        </View>
                        <View style={{ width: "100%", justifyContent: "center", flexDirection: "row", marginTop: "5%", marginBottom: "5%" }}>
                            <Text style={styles.musicCurrentTime}>0.00</Text>
                            <Text style={styles.musicDuration}>2.03</Text>

                        </View>
                    </View>
                    <View style={{ width: "100%", justifyContent: "center", flexDirection: "row", marginTop: "5%", marginBottom: "5%" }}>
                        <View style={{ flex: 9, flexDirection: "row" }}>
                            <View style={{
                                borderRadius: 20, borderWidth: 1, borderColor: "#d3d3d3", padding: 10, justifyContent: 'center',
                                alignItems: "center", flexDirection: 'row', height: 40, width: 80
                            }}>
                                <Image style={{ width: 20, height: 20, tintColor: "#d3d3d3" }} resizeMode={"contain"} source={require("../assets/tickMark.png")} />
                                <Text style={styles.textLikeCount}>10</Text>
                            </View>
                            <View style={{
                                marginLeft: 10, borderRadius: 20, borderWidth: 1, borderColor: "#d3d3d3", padding: 10,
                                justifyContent: 'center', alignItems: "center", flexDirection: 'row', height: 40, width: 80
                            }}>
                                <Image style={{ width: 20, height: 20, tintColor: "#d3d3d3" }} resizeMode={"contain"} source={require("../assets/tickMark.png")} />
                                <Text style={styles.textLikeCount}>56</Text>
                            </View>
                        </View>
                        <View style={{
                            flex: 1, borderRadius: 20, borderWidth: 1, borderColor: "#d3d3d3", padding: 10,
                            justifyContent: 'center', alignItems: "center", height: 40
                        }}>
                            <Image style={{ width: 20, height: 20, tintColor: "#d3d3d3" }} resizeMode={"contain"} source={require("../assets/tickMark.png")} />
                        </View>
                    </View>
                    {/* Comment btn */}
                    <View style={{ marginTop: "5%", marginBottom: '5%', alignItems: "center", flexDirection: 'row', height: 100 }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: "#d3d3d3" }} />

                        <TouchableOpacity style={{
                            borderRadius: 20, borderWidth: 1, borderColor: "#d3d3d3", padding: 10, justifyContent: 'center',
                            alignItems: "center", flexDirection: 'row', height: 40, width: 160
                        }} onPress={this._showCommentList.bind(this)}>

                            <Image style={{ width: 20, height: 20, tintColor: "#d3d3d3" }} resizeMode={"contain"} source={require("../assets/tickMark.png")} />
                            <Text style={[styles.textCommentCount]}>9 Comments</Text>

                            <View style={{
                                marginLeft: 10, flex: 1, borderRadius: 60, borderWidth: 1, borderColor: "#d3d3d3", padding: 10,
                                justifyContent: 'center', alignItems: "center", height: 40, width: 160
                            }}>
                                <Image style={{ width: 20, height: 20, tintColor: "#d3d3d3" }} resizeMode={"contain"} source={require("../assets/tickMark.png")} />
                            </View>
                        </TouchableOpacity>
                        <View style={{ flex: 1, height: 1, backgroundColor: "#d3d3d3" }} />
                    </View>

                    {this.state.isCommentTableShow ? <View style={{ width: '100%', marginTop: '2%', marginBottom: '2%' }}>
                        <FlatList
                            data={this.state.arrayCommentData}
                            renderItem={this.renderCommentItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View> : null}
                </View>
                    :
                    <View style={{
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
                            <View style={{ flex: 9, flexDirection: "row", marginTop: 5 }}>
                                <Image style={{
                                    height: 40, width: 40,
                                    borderRadius: 20,
                                    elevation: 3,
                                    backgroundColor: "white",
                                    alignSelf: "center",
                                    shadowColor: 'rgba(0,0,0,1)',
                                    shadowOffset: {
                                        width: 1,
                                        height: 1
                                    },
                                    shadowOpacity: 0.8,
                                }} resizeMode={"contain"} source={post.item.image} />

                                <View style={{ paddingLeft: 10, marginTop: 3 }}>
                                    <Text style={styles.textUserName}>{post.item.name}</Text>
                                    <Text style={styles.textDesignation}>{post.item.occupation}</Text>
                                </View>

                            </View>

                            <TouchableOpacity onPress={this._showPostOptions}>
                                <Text style={{ flex: 1, color: "black", fontSize: 30 }}>...</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: "5%", marginBottom: "5%", width: "100%", justifyContent: "center", height: 0.5, backgroundColor: "#d3d3d3" }}>
                        </View>
                        <View >
                            <Text style={styles.musicDescription}>{post.item.text}</Text>
                        </View>
                        <View style={{ width: "100%", justifyContent: "center", flexDirection: "row", marginTop: "5%", marginBottom: "5%" }}>
                            <View style={{ flex: 9, flexDirection: "row" }}>
                                <View style={{
                                    borderRadius: 20, borderWidth: 1, borderColor: "#d3d3d3", padding: 10, justifyContent: 'center',
                                    alignItems: "center", flexDirection: 'row', height: 40, width: 80
                                }}>
                                    <Image style={{ width: 20, height: 20, tintColor: "#d3d3d3" }} resizeMode={"contain"} source={require("../assets/tickMark.png")} />
                                    <Text style={styles.textCommentCount}>10</Text>
                                </View>
                                <View style={{
                                    marginLeft: 10, borderRadius: 20, borderWidth: 1, borderColor: "#d3d3d3", padding: 10,
                                    justifyContent: 'center', alignItems: "center", flexDirection: 'row', height: 40, width: 80
                                }}>
                                    <Image style={{ width: 20, height: 20, tintColor: "#d3d3d3" }} resizeMode={"contain"} source={require("../assets/tickMark.png")} />
                                    <Text style={styles.textCommentCount}>56</Text>

                                </View>
                            </View>
                            <View style={{
                                flex: 1, borderRadius: 20, borderWidth: 1, borderColor: "#F1F1F1", padding: 10,
                                justifyContent: 'center', alignItems: "center", height: 40
                            }}>
                                <Image style={{ width: 20, height: 20, tintColor: "#d3d3d3" }} resizeMode={"contain"} source={require("../assets/tickMark.png")} />
                            </View>
                        </View>
                        {this.viewComments()}
                    </View>}
                <View style={{ width: "100%", flexDirection: "row", backgroundColor: "#d3d3d3" }}>
                    <Image style={{
                        height: 40,
                        width: 40,
                        marginLeft: 10,
                        borderRadius: 20,
                        elevation: 3,
                        backgroundColor: "white",
                        alignSelf: "center",
                        shadowColor: 'rgba(0,0,0,1)',
                        shadowOffset: {
                            width: 1,
                            height: 1
                        },
                        shadowOpacity: 0.8,
                    }} resizeMode={"contain"} source={post.item.image} />
                    <TextInput
                        style={styles.textStyle}
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                    />
                </View>
            </View>
        )
    };
    _handleFileChange = e => {
        const { files } = e.target;
        if (files[0]) {
          const { userFeedActions } = this.props;
          userFeedActions.setTemporaryFile(files[0]);
        }
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
            userFeedActions
        } = this.props;
        console.log("props in profile page: ", this.props)
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

                <KeyboardAwareScrollView onScroll={this._onScroll} style={{ backgroundColor: 'rgb(42, 173,177)' }}>

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
                            {/* <Image style={styles.imgUser} source={getThumbnail(user.data)} /> */}
                            <Image style={styles.imgUser} source={require('../assets/avatar-main-1.jpg')} />

                        </Animatable.View>

                        <View style={{ alignItems: "center", marginTop: 25 }}>
                            {/* <Text style={styles.textUserName}>{getUsername(user.data)}</Text>
                            <Text style={styles.textDesignation}>{getUserInfo(user.data)}</Text>
                            <Text style={styles.textConnectionCount}>275k+</Text>
                            <Text style={styles.textConnection}>Connections</Text>
                            <View style={{ marginRight: 30, marginLeft: 30 }}>
                                <Text style={styles.textDescription}>{getUserInfo(user.data)}</Text>
                            </View> */}
                        </View>

                        <View style={styles.viewLoginButton}>

                            <TouchableHighlight underlayColor="black" style={[styles.loginButton]}>
                                <Text style={styles.textLoginButtonTitle}>Follow</Text>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="black" style={[styles.imageButton]}>
                                <Image style={styles.imageSendArraow} source={require('../assets/sendArrow.png')} />
                            </TouchableHighlight>

                        </View>

                        <View style={{
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

                                <Icon name="ios-add-circle-outline" size={30} color="purple" style={styles.plusCircle} />


                            </View>

                         <View style={styles.midView}>

                            </View>

                            <View>

                                <View style={{ padding: 5, marginBottom: "5%" }}>
                                    <View style={{ flexDirection: "row", padding: 10 }}>

                                        <View style={{ flex: 4, }}>

                                            <Image style={styles.videoPlaceholder}
                                                source={require('../assets/homepage-video-placeholder.jpg')}>

                                            </Image>

                                            <Icon name="ios-play" size={40} color={"white"} />

                                        </View>

                                        <View style={{ flex: 6 }}>
                                            <Text style={styles.musicTitle}>Kygo</Text>

                                            <Text style={styles.musicDescription}>Of Monsters and Men - Dirty Paws (Kygo remix)</Text>

                                        </View>

                                    </View>

                                    <View style={styles.viewMusicImage}>
                                        <Image style={styles.musicAnimatedImg} source={require('../assets/noise.gif')} />
                                    </View>

                                    <View style={{ width: "100%", justifyContent: "center", flexDirection: "row", marginTop: "5%", marginBottom: "5%" }}>

                                        <Text style={styles.musicCurrentTime}>0.00</Text>
                                        <Text style={styles.musicDescription}>2.03</Text>

                                    </View>
                                </View>

                                <FlatList
                                    data={this.state.music}
                                    renderItem={this.renderItem}
                                    keyExtractor={(item, index) => index.toString()}
                                />

                                <View style={styles.viewMore}>

                                    <Text style={styles.textViewMore}>View More...</Text>

                                </View>

                            </View> 

                            {/* <MusicList /> */}
                            {/* <Paginator
                            isLoaderInternal
                            myMusic={myMusic}
                            component={MusicList}
                            callAPI={fetchMyMusic}
                            page={myMusic.paginationData.page}
                            page_count={myMusic.paginationData.page_count}
                            />  */}
                        </View>


                        <View style={styles.viewImagesOutside}>

                            <View style={styles.viewImagesInside}>

                                <Text style={styles.myImagesTitle}>My Images</Text>
                                <Icon name="ios-add-circle-outline" size={30} color="purple" style={styles.plusCircle} />


                            </View>

                            {/* <View style={styles.midView}>
                            </View>

                            <View>

                                <FlatList
                                    numColumns={3}
                                    data={this.state.images}
                                    renderItem={this.renderImage}
                                    keyExtractor={(item, index) => index.toString()}
                                />

                                <View style={styles.viewMoreImage}>
                                    <Text style={styles.textViewMore}>View More...</Text>
                                </View>

                            </View> */}
                            {/* <ImagesList /> */}
                            {/* <Paginator
                                isLoaderInternal
                                myImages={myImages}
                                component={ImagesList}
                                callAPI={fetchMyImages}
                                page={myImages.paginationData.page}
                                page_count={myImages.paginationData.page_count}
                                /> */}

                        </View>

                        <View style={styles.viewWriteSomething}>

                            <TextInput
                                style={styles.textWriteSomething}
                                onChangeText={(text) => this.setState({ text })}
                                value={this.state.text}
                            />


                            <View style={styles.midView}>

                            </View>


                            <View style={styles.viewBottomContent}>

                                <Icon name="ios-musical-notes" size={50} color="rgb(140,91,203)" style={styles.music} />
                                <Text style={styles.music}>Music</Text>

                                <Icon name="video" size={30} color="#20ACAC" style={styles.video} />
                                <Text style={styles.video}>Video</Text>

                                <Icon name="image" size={30} color="#20ACAC" style={styles.imageIcon} />
                                <Text style={styles.images}>Images</Text>
                            </View>

                        </View>


                        <View style={styles.viewPostButton}>
                            <TouchableHighlight style={[styles.postButton]}>
                                <Text style={styles.textLoginButtonTitle}>Post -></Text>
                            </TouchableHighlight>
                        </View>
                        <View>
                            <FlatList
                                data={this.state.post}
                                renderItem={this.renderPost}
                                keyExtractor={(item, index) => index.toString()}
                            />


                        </View>

                        <View style={styles.viewBottom}>

                            <View style={{ flexDirection: "row", backgroundColor: "rgb(52,52,52)", marginTop: "5%" }} >
                                <Text style={{ flex: 8, color: "#fff", fontSize: 20 }}>   (c)elit.Nulla 2018</Text>
                                {/* <Text style={{flex:2,color:"#fff",fontSize:20}}>+ - +</Text> */}
                            </View>

                        </View>

                    </View>
                    {this.state.isPostOptionShow ?
                        <Animatable.View ref={'viewPostOption'} style={styles.postOptionView}>
                            <View style={{ marginTop: '6%' }}>
                                {this.postOptionView()}
                            </View>
                        </Animatable.View> : null
                    }
                </KeyboardAwareScrollView>

                {this.state.isBottomViewShow ?
                    <Animatable.View ref={"viewBottomWhenScroll"} style={styles.viewBottomWhenScroll}>

                        <View style={{ flexDirection: 'row', margin: '2%' }}>
                            <Image style={styles.imgUserInBottom} source={require('../assets/avatar-main-1.jpg')} />
                            <View>
                                <Text style={styles.userNameInBottom}>Benjamin Rees</Text>
                                <Text style={styles.JobDetailInBottom}>CEO of the famous company</Text>
                            </View>
                        </View>

                    </Animatable.View> : null}
            </SafeAreaView>


        )
    }
}