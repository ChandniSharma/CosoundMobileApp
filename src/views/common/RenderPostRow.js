import React, {Component} from "react";
import { isEmpty } from "lodash";
import * as Animatable from 'react-native-animatable';
import Icon3 from "react-native-vector-icons/FontAwesome";
import Icon4 from "react-native-vector-icons/Entypo";
import Icon5 from "react-native-vector-icons/MaterialIcons";
import PostComment from './PostComment';
import styles from "../../stylesheet/profile.style";
import { Image, Text, TouchableWithoutFeedback, View, TouchableOpacity, ActivityIndicator } from "react-native";
import SocialShare from './SocialShare';

import {
    getPost,
    getThumbnail,
    formatPostMedia,
    getUsername,
    readableCount,
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
       // this.fadeInUpRow();
    }

    render(){
        const { user, like, repost, showSocial , postData, _renderPostBody, _renderSingleImage, postOptionView, _showPostOptions, _confirmRepost, _likePost, _toggleSocial} = this.props;
        let postDetail = postData.item;
        const postedBySelf = postDetail.user_id === user.data.id;
        const originalPost = getPost(postDetail);
        const { images, notImages } = formatPostMedia(originalPost.media);
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
                                return _renderPostBody(item, "");
                            })}
                        </View>
                    ) : null}
                    {notImages.map(item => {
                        return _renderPostBody(item, "");
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