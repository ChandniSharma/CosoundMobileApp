import React, {Component} from "react";
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
import SocialShare from './SocialShare';
import PlayAudioClass from '../PlayAudioClass';

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


export default class RenderPostRow extends Component{
    constructor(props) {
        super(props);
        this.state = {
           
            isVisible: false
        }
    }


    fadeInUpRow =() => this.refs.viewRow.fadeInUp(1000);
    componentDidMount(){
        console.log(" props are ====", this.props)
       // this.fadeInUpRow();
    }

    render(){
        console.log(" props are ====", this.props);

        // let showSocial = false;
        // const { feed, callingAPI, _restCalls, pathName } = this.props.data;
        const { user, like, repost, showSocial , postData, _renderPostBody, _renderSingleImage, postOptionView, _onScroll, viewComments, renderCommentItem, _showCommentList, _showPostOptions, _confirmRepost, _likePost, _toggleSocial, _toggleVisible} = this.props;
        
       // const { isVisible, showSocial } = this.state;
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

        return(
            <Animatable.View ref={'viewRow'}>
 
            <TouchableWithoutFeedback onPress={() => this.props.closePostOption()}>
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

                        <TouchableOpacity onPress={() => _showPostOptions(postDetail.id)}>
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
                            return _renderSingleImage(item);
                        })
                    ) : !isEmpty(images) && images.length > 1 ? (
                        <View>
                            {images.map(item => {
                                return _renderPostBody(item, post.id);
                            })}
                        </View>
                    ) : null}
                    {notImages.map(item => {
                        return _renderPostBody(item, post.id);
                    })}

                    <View style={{ width: "100%", justifyContent: "center", flexDirection: "row", marginTop: "5%", marginBottom: "5%" }}>
                        <View style={{ flex: 9, flexDirection: "row" }}>

                            <TouchableOpacity onPress={() => _likePost(postDetail.id)} style={{
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

                            <TouchableOpacity onPress={() => _confirmRepost(postDetail.id)} style={{
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
                        }} onPress={() => _toggleSocial(originalPost.id)}>
                           
                           <Icon4 name="forward" style={{ fontSize: 20, color: "#8e8e8e" }} />                            
                        </TouchableOpacity>
                       
                    </View>
                    <View style={{marginTop:'5%'}}>
                    <SocialShare
                                post={originalPost}
                                show={showSocial}
                                toggleSocial={_toggleSocial}
                            />
                    </View>

                    {/* {this.viewComments()} */}
                    <PostComment user={user} post={postDetail} pathName={this.props.pathName} />

                    {this.props.isPostOptionShow == postDetail.id ?
                        <Animatable.View ref={'viewPostOption'} style={postedBySelf ? styles.postOptionViewDelete : styles.postOptionView}>
                            <View style={{ marginTop: '6%', marginRight: '2%' }}>
                                {postOptionView(postedBySelf, postDetail.id)}
                            </View>
                        </Animatable.View>
                        : null
                    }
                </View>
            </TouchableWithoutFeedback>
            </Animatable.View>
        
            
        )
    }
}