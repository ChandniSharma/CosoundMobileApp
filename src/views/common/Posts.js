import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { isNull, isEmpty } from "lodash";
import { postActions } from "../../actions";
import * as Animatable from 'react-native-animatable';
import PlayVideo from './PlayVideo';
import Icon3 from "react-native-vector-icons/FontAwesome";
import Icon4 from "react-native-vector-icons/Entypo";
import Icon5 from "react-native-vector-icons/MaterialIcons";
import Icon6 from "react-native-vector-icons/AntDesign";
import PostComment from './PostComment';
import styles from "../../stylesheet/profile.style";
import { FlatList, Image, ImageBackground, Text, TextInput, TouchableHighlight, TouchableWithoutFeedback, View, TouchableOpacity, Clipboard, AlertIOS, Platform, ActivityIndicator, Alert } from "react-native";
import { postComment } from "../../actions/post";
import WaveForm from 'react-native-audiowaveform';
import SocialShare from '../common/SocialShare';
import PlayAudioClass from '../../views/PlayAudioClass';
import RenderPostRow from './RenderPostRow';

// import soundPlay from './SoundPlay';
import {
    getPost,
    isSuccess,
    checkAuth,
    getPathname,
    getThumbnail,
    formatPostMedia,
    getUsername,
    readableCount,
    getMetadata,
    formatCurrentTime

} from "../../utils";

var ImagePicker = require('react-native-image-picker');

const config = {};
const tracks = {};

class AudioWaveFormView extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            playAudio: false,
            stopAudio: true,
        }
    }
    changestate = () => {
        this.setState({ playAudio: !this.state.playAudio });
    }

    render(){
        return  (<View style={{ width: "100%", backgroundColor: "#d3d3d6" }}>
        {/* <Image style={{ width: "100%", height: 50 }} source={require('../../assets/noise.gif')} /> */}
        <PlayAudioClass 
          source={{ uri: current.path }}

         />
        {/* <WaveForm
            style={{
                flex: 1,
                margin: 10,
                backgroundColor: "white", height: 50
            }}
            onPress={() => this.changestate()}
            source={{ uri: 'https://s3.eu-west-2.amazonaws.com/cosound-primary/uploads/audio/E6UOLuDNpwnlf9279FMEPriMZCtaXQFlfD48r0e1.mpga' }}
            stop={this.state.stopAudio}
            play={this.state.playAudio}
            autoPlay={false}
            waveFormStyle={{ waveColor: 'gray', scrubColor: 'red', width: 'auto' }}
        /> */}


    </View>)
    }
}

class Posts extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            playAudio: false,
            stopAudio: true,
            counter: 0,
            isVisible: false,
            showSocial: false,
            isPostOptionShow: true,
            isBottomViewShow: false,
            isCommentTableShow: true,
            isSocialShareClick: false,
            currentLikePostId: '',
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
                    image: require('../../assets/homepage-video-placeholder.jpg')
                },
                {
                    image: require('../../assets/homepage-video-placeholder.jpg')
                },
                {
                    image: require('../../assets/homepage-video-placeholder.jpg')
                },
                {
                    image: require('../../assets/homepage-video-placeholder.jpg')
                },
                {
                    image: require('../../assets/homepage-video-placeholder.jpg')
                },
                {
                    image: require('../../assets/homepage-video-placeholder.jpg')
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
                    image: require('../../assets/avatar1.jpg'),

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
                    image: require('../../assets/avatar2.jpg'),
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
                    image: require('../../assets/avatar1.jpg'),

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
    fadeInUpRow = () => this.refs.viewRow.fadeInUp(1000);
    componentDidMount() {
        // setTimeout(() => {
        //     this.fadeInUpRow();
        // }, 1000);
       
    }

    /**
   * Toggle Card Menu
   */
    _toggleVisible = () => {
        this.setState({
            isVisible: !this.state.isVisible
        });
    };

    /**
     * Toggle Social Share Menu
     */
    _toggleSocial = id => {
        const { showSocial } = this.state;
        if (showSocial === id) {
            return this.setState({ showSocial: false });
        }
        return this.setState({ showSocial: id });
    };

    /**
     * Like/Unlike Post
     */
    _likePost = id => {
        const { postActions, user, pathName, match } = this.props;
        const auth = checkAuth(user);
        if (auth) {
            const path = pathName;
            postActions.likePost(id, path);
            this.setState({ currentLikePostId: id });
        }
        this.forceUpdate();
    };

    /**
     * Delete Post
     */
    _deletePost = id => {
        const { postActions, user } = this.props;
        const auth = checkAuth(user);
        if (auth) {
            postActions.deletePost(id).then(() => {
                if (isSuccess(this.props.deletePost)) {
                    this.props._restCalls();
                }
            });
        }
    };

    /**
     * Confirm pre-repost
     */
    _confirmRepost = id => {
        const { user, postActions } = this.props;
        const auth = checkAuth(user);
        if (auth) {
            Alert.alert(
                'Confirm to repost',
                'Are you sure you want to share.',
                [
                    {
                        text: 'Yes', onPress: () => postActions.repost(id).then(() => {
                            if (isSuccess(this.props.repost)) {
                                this.props._restCalls();
                            }
                        })
                    },
                    {
                        text: 'No',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                ],
                { cancelable: false },
            );
        }
    };


    _showPostOptions = (postId) => {
        this.setState({ isPostOptionShow: postId });
        this.forceUpdate();
    }

    _showCommentList() {
        this.setState({ isCommentTableShow: !this.state.isCommentTableShow });
    }
    closePostOption = () => {
        this.setState({ isPostOptionShow: false });
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
                            <Image style={[styles.imgUserInComments]} source={require('../../assets/avatar1.jpg')} />
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

    viewComments = () => {
        const extraData = {
            ...this.state,
            ...this.props
        };
        return (
            <View>
                <View style={{ marginTop: "5%", marginBottom: '5%', alignItems: "center", flexDirection: 'row' }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: "#d3d3d3" }}>
                    </View>
                    <TouchableOpacity style={{
                        borderRadius: 20, borderWidth: 1, borderColor: "#d3d3d3", padding: 10, justifyContent: 'center',
                        alignItems: "center", flexDirection: 'row', height: 40, width: 160
                    }} onPress={this._showCommentList.bind(this)}>
                        <Icon3 name="comment" style={{ fontSize: 20, color: "#d3d3d3", marginRight: '5%' }} />
                        <Text style={styles.textCommentCount}>9 Comments</Text>
                        <View style={{
                            marginLeft: 10, flex: 1, borderRadius: 60, borderWidth: 1, borderColor: "#d3d3d3", padding: 10,
                            justifyContent: 'center', alignItems: "center", height: 40, width: 160
                        }}>
                            <Icon6 name="down" style={{ fontSize: 20, color: "#d3d3d3", marginRight: '2%' }} />
                        </View>
                    </TouchableOpacity>
                    <View style={{ flex: 1, height: 1, backgroundColor: "#d3d3d3" }} />
                </View>
                {this.state.isCommentTableShow ? <View style={{ width: '100%', marginBottom: '2%' }}>
                    <FlatList
                        data={this.state.arrayCommentData}
                        extraData={extraData}
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

    postOptionView = (postedBySelf, id) =>{

        let arrayPostOptions = ["All", "Copy Link", "Unfollow User", 'Share', 'Report Post'];
        let arrayBtn = []
        if (postedBySelf) {
            let btn = <TouchableOpacity onPress={() => this._deletePost(id)} underlayColor="#8e8e8e" style={{ marginTop: '2%', height: 40 }}>
                <Text style={styles.postOptionText}>{this.props.deletePost.isRequesting === id ? "Deleting.." : "Delete"}
                </Text>
            </TouchableOpacity>
            arrayBtn.push(btn);

        } else {
            for (let i = 0; i < arrayPostOptions.length; i++) {
                let btn = <TouchableOpacity underlayColor="#8e8e8e" style={{ marginTop: '2%', height: 40 }}>
                    <Text style={styles.postOptionText}>  {arrayPostOptions[i]} </Text>
                </TouchableOpacity>
                arrayBtn.push(btn);
            }
        }
        return arrayBtn;

    }

    _renderSingleImage = media => {
        return (
            <View >
                <Image style={{width:'100%', height:225, borderRadius:10}} source={{
                    uri:
                        !isNull(media.metadata) && media.metadata.thumbnail_normal
                            ? media.metadata.thumbnail_normal
                            : media.path
                }} />
            </View>
        );
    };
    /**
     * Post Media Construct
     */
    _renderPostBody = (media, postId) => {

        //   const currentTime = formatCurrentTime(pos);
        switch (media.file_type) {
            case "video":
                return (
                    <PlayVideo
                        key={media.id}
                        id={`player-${postId}`}
                        mediaType="video"
                        preload="none"
                        controls
                        width={"100%"}
                        height={'20%'}
                        poster={
                            !isNull(media.metadata) && !isNull(media.metadata.thumbnail)
                                ? media.metadata.thumbnail
                                : poster
                        }
                        sources={media}//{JSON.stringify(media)}
                    // options={JSON.stringify(config)}
                    // tracks={JSON.stringify(tracks)}
                    />
                );
            case "audio":
                let { duration, albumart, album, artistName, title } = getMetadata(
                    media
                );
                return (<View style={{ padding: 5, marginBottom: "5%" }}>
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
                                source={require('../../assets/homepage-video-placeholder.jpg')}>
                            </Image>
                            {/* <Image style={{
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
                                source={require('../../assets/close.png')}>
                            </Image> */}
                        </View>
                        <View style={{ flex: 6 }}>
                            <Text style={styles.musicTitle}>{artistName}</Text>
                            <Text style={styles.musicDescription}>{title}</Text>
                        </View>
                    </View>
                    {/* Chandni */}
                     <PlayAudioClass 
          source={media.path}

         />
                    {/* <AudioWaveFormView key={media.id}/> */}
                    <View style={{ width: "100%", justifyContent: "center", flexDirection: "row", marginTop: "5%", marginBottom: "5%" }}>
                        <Text style={styles.musicCurrentTime}>0.00</Text>
                        <Text style={styles.musicDuration}>{duration}</Text>

                    </View>
                </View>)

            case "image":
                return (
                    <View>
                        <Image style={{width:'100%', height:225, borderRadius:10}} source={{
                            uri: !isNull(media.metadata) && media.metadata.thumbnail_normal
                                ? media.metadata.thumbnail_normal
                                : media.path
                        }}
                        />
                    </View>

                );
            default:
                return null;
        }
    };

    changestate = () => {
        this.setState({ playAudio: !this.state.playAudio });
    }

   

    renderPostCard = (postData) => {
        
        const { feed, callingAPI, _restCalls, pathName } = this.props;
        const { user, like, deletePost, repost } = this.props;
        const { isVisible, showSocial, isPostOptionShow } = this.state;

        console.log(" delete post i render **********", deletePost);


     return(
        <RenderPostRow closePostOption={this.closePostOption} isPostOptionShow={isPostOptionShow} user={user} like={like} repost={repost} showSocial ={showSocial} postData={postData} _renderPostBody={this._renderPostBody} _renderSingleImage={this._renderSingleImage} postOptionView={this.postOptionView} _onScroll={this._onScroll} viewComments={this.viewComments} renderCommentItem={this.renderCommentItem} _showCommentList={this._showCommentList} _showPostOptions={this._showPostOptions} _confirmRepost={this._confirmRepost}  _likePost={this._likePost} _toggleSocial={this._toggleSocial} _toggleVisible={this._toggleVisible}  />

     );

        let post = {
            item:
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
                image: require('../../assets/avatar1.jpg'),

            }
        };

        let postDetail = postData.item;
        const postedBySelf = postDetail.user_id === user.data.id;
        const originalPost = getPost(postDetail);
        const { images, notImages } = formatPostMedia(originalPost.media);

        // user name, image, desination
        // Action, delete option if self created profile

        return (
            <Animatable.View>
            <TouchableWithoutFeedback onPress={() => this.setState({ isPostOptionShow: false })}>
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
                            }}
                                resizeMode={"contain"} source={{ uri: getThumbnail(postDetail) }} />

                            <View style={{ paddingLeft: 10, marginTop: 3 }}>
                                {/* <Text style={styles.textUserName}>{getUsername(postDetail)}{" post id==="+this.state.isPostOptionShow+"postDetail.id ="+postDetail.id}</Text> */}
                                <Text style={styles.textUserName}>{getUsername(postDetail)}</Text>

                                <Text style={styles.textDesignation}>{`${postDetail.type} / ${postDetail.artist_name}`}</Text>
                            </View>

                        </View>

                        <TouchableOpacity onPress={() => this._showPostOptions(postDetail.id)}>
                            <Text style={{ flex: 1, color: "black", fontSize: 30 }}>...</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ marginTop: "5%", marginBottom: "5%", width: "100%", justifyContent: "center", height: 0.5, backgroundColor: "#d3d3d3" }}>
                    </View>
                    <View >
                        <Text style={[styles.musicDescription, {paddingBottom: "5%"} ]}>{originalPost.body}</Text>

                    </View>
                    {!isEmpty(images) && images.length === 1 ? (
                        images.map(item => {
                            return this._renderSingleImage(item);
                        })
                    ) : !isEmpty(images) && images.length > 1 ? (
                        <View>
                            {images.map(item => {
                                return this._renderPostBody(item, post.id);
                            })}
                        </View>
                    ) : null}
                    {notImages.map(item => {
                        return this._renderPostBody(item, post.id);
                    })}

                    <View style={{ width: "100%", justifyContent: "center", flexDirection: "row", marginTop: "5%", marginBottom: "5%" }}>
                        <View style={{ flex: 9, flexDirection: "row" }}>

                            <TouchableOpacity onPress={() => this._likePost(postDetail.id)} style={{
                                borderRadius: 20, borderWidth: 1, borderColor: "#d3d3d3", padding: 10, justifyContent: 'center',
                                alignItems: "center", flexDirection: 'row', height: 40, width: 80, backgroundColor: postDetail.isLiked ? "#d3d3d3" : 'transparent'
                            }}>
                                {like && like.isRequesting == postDetail.id ? (
                                    <ActivityIndicator color="gray" />
                                ) : (
                                        <React.Fragment>
                                            <Icon3 name="heart" style={{ fontSize: 20, color: postDetail.isLiked ? "#8e8e8e" : '#d3d3d3', marginRight: '4%' }} />
                                            <Text style={styles.textCommentCount}>{readableCount(postDetail.like_count)}</Text>
                                        </React.Fragment>
                                    )}
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this._confirmRepost(postDetail.id)} style={{
                                marginLeft: 10, borderRadius: 20, borderWidth: 1, borderColor: "#d3d3d3", padding: 10,
                                justifyContent: 'center', alignItems: "center", flexDirection: 'row', height: 40, width: 80
                            }}>
                                {repost && repost.isRequesting === postDetail.id ? (
                                    <ActivityIndicator color="gray" />
                                ) : (
                                        <React.Fragment>
                                            <Icon5 name="repeat" style={{ fontSize: 20, color: "#8e8e8e", marginRight: '2%' }} />
                                            <Text style={styles.textCommentCount}>{readableCount(postDetail.repost_count)}</Text>
                                        </React.Fragment>
                                    )}

                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{
                            flex: 1, borderRadius: 20, borderWidth: 1, borderColor: "#d3d3d3", padding: 10,
                            justifyContent: 'center', alignItems: "center", height: 40
                        }} onPress={() => this._toggleSocial(originalPost.id)}>
                           
                           <Icon4 name="forward" style={{ fontSize: 20, color: "#8e8e8e" }} />                            
                        </TouchableOpacity>
                       
                    </View>
                    <View style={{marginTop:'5%'}}>
                    <SocialShare
                                post={originalPost}
                                show={showSocial}
                                toggleSocial={this._toggleSocial}
                            />
                    </View>

                    {/* {this.viewComments()} */}
                    <PostComment user={user} post={postDetail} pathName={this.props.pathName} />

                    {this.state.isPostOptionShow == postDetail.id ?
                        <Animatable.View ref={'viewPostOption'} style={postedBySelf ? styles.postOptionViewDelete : styles.postOptionView}>
                            <View style={{ marginTop: '6%', marginRight: '2%' }}>
                                {this.postOptionView(postedBySelf, postDetail.id)}
                            </View>
                        </Animatable.View>
                        : null
                    }
                </View>
            </TouchableWithoutFeedback>
            </Animatable.View>
        )
    };

    render() {
        const { feed, callingAPI, _restCalls , loadMore, page, page_count} = this.props;
        const { user, like, deletePost, repost } = this.props;
        const { isVisible, showSocial } = this.state;
        const extraData = {
            ...this.state,
            ...this.props
        };
        console.log("load more===",loadMore);
        return (
            <React.Fragment>
                {feed.isRequesting && !callingAPI && (
                    <ActivityIndicator size="large" color="gray" />
                )}
                {!feed.isRequesting && !isEmpty(feed.error) && (
                    <View >
                        <Text>{feed.error.message}</Text>
                    </View>

                )}
                <View>
                    <FlatList
                        data={feed.data}
                        extraData={extraData}
                        renderItem={this.renderPostCard}
                        keyExtractor={(item, index) => index.toString()}
                    
                    />
                </View>
                
                {!isEmpty(feed.data) && 
                <View style={styles.viewMore}>
                    <TouchableOpacity underlayColor="#25b6ad" style={[styles.seeMoreTemp]} onPress={() => loadMore()}>
                        <Text style={styles.textViewMore} > {callingAPI ? "Fetching..." : "View More..."}</Text>
                    </TouchableOpacity>
                </View>
            }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        repost: state.repost,
        user: state.user,
        like: state.like,
        deletePost: state.deletePost
    };
};

// eslint-disable-next-line
const mapDispatchToProps = dispatch => {
    return {
        postActions: bindActionCreators(postActions, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts);
