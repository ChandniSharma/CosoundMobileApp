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
import { FlatList, Image, Text, TouchableHighlight, TouchableWithoutFeedback, View, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import SocialShare from '../common/SocialShare';
import PlayAudioClass from '../../views/PlayAudioClass';
import RenderPostRow from './RenderPostRow';
import {
    getPost,
    isSuccess,
    checkAuth,
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
        }
    }
    fadeInUpRow = () => this.refs.viewRow.fadeInUp(1000);
    componentDidMount() {
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
                        </View>
                        <View style={{ flex: 6 }}>
                            <Text style={styles.musicTitle}>{artistName}</Text>
                            <Text style={styles.musicDescription}>{title}</Text>
                        </View>
                    </View>
                     <PlayAudioClass 
          source={media.path}

         />
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
    const { user, like, repost } = this.props;
    const { showSocial, isPostOptionShow } = this.state;

     return(
        <RenderPostRow closePostOption={this.closePostOption} isPostOptionShow={isPostOptionShow} user={user} like={like} repost={repost} showSocial ={showSocial} postData={postData} _renderPostBody={this._renderPostBody} _renderSingleImage={this._renderSingleImage} postOptionView={this.postOptionView} _onScroll={this._onScroll} viewComments={this.viewComments} renderCommentItem={this.renderCommentItem} _showCommentList={this._showCommentList} _showPostOptions={this._showPostOptions} _confirmRepost={this._confirmRepost}  _likePost={this._likePost} _toggleSocial={this._toggleSocial} _toggleVisible={this._toggleVisible}  />
     );
    };

    render() {
        const { feed, callingAPI , loadMore } = this.props;
        const extraData = {
            ...this.state,
            ...this.props
        };
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
