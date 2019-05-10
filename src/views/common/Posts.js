import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { isNull, isEmpty } from "lodash";
import { postActions } from "../../actions";

import {
  getPost,
  isSuccess,
  checkAuth,
  getPathname,
  getThumbnail,
  formatPostMedia
} from "../../utils";

import styles from "../../stylesheet/profile.style";
import { FlatList, Image, ImageBackground, Text, TextInput, TouchableHighlight, View, TouchableOpacity,Clipboard, AlertIOS,Platform, ActivityIndicator } from "react-native";
var ImagePicker = require('react-native-image-picker');

const config = {};
const tracks = {};

export default class Posts extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            isVisible: false,
            showSocial: false,
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
    componentDidMount(){
        console.log(" post ======", this.props);
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
        const { postActions, user, location, match } = this.props;
        const auth = checkAuth(user);
        if (auth) {
        const path = getPathname(location, match);
        postActions.likePost(id, path);
        }
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
        confirmAlert({
            title: "Confirm to repost",
            message: "Are you sure you want to share.",
            buttons: [
            {
                label: "Yes",
                onClick: () =>
                postActions.repost(id).then(() => {
                    if (isSuccess(this.props.repost)) {
                    this.props._restCalls();
                    }
                })
            },
            {
                label: "No",
                onClick: () => {}
            }
            ]
        });
        }
    };


     _showPostOptions() {
        this.setState({ isPostOptionShow: true });
    }
    
    _showCommentList() {
        this.setState({ isCommentTableShow: !this.state.isCommentTableShow });
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
                        <Image style={{ width: 20, height: 20, tintColor: "#d3d3d3" }} resizeMode={"contain"} source={require("../../assets/tickMark.png")} />
                        <Text style={styles.textCommentCount}>9 Comments</Text>
                        <View style={{
                            marginLeft: 10, flex: 1, borderRadius: 60, borderWidth: 1, borderColor: "#d3d3d3", padding: 10,
                            justifyContent: 'center', alignItems: "center", height: 40, width: 160
                        }}>
                            <Image style={{ width: 20, height: 20, tintColor: "#d3d3d3" }} resizeMode={"contain"} source={require("../../assets/tickMark.png")} />
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
   

    renderPost = (post) => {
        const { feed, callingAPI, _restCalls } = this.props;
        const { user, like, deletePost, repost } = this.props;
        const { isVisible, showSocial } = this.state;
        let postData = post.item;
        //const postedBySelf = postData.user_id === user.data.id;
        const originalPost = getPost(postData);
        const { images, notImages } = formatPostMedia(originalPost.media);
      
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
                                  source={require('../../assets/homepage-video-placeholder.jpg')}>
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
                                  source={require('../../assets/close.png')}>
                              </Image>
                          </View>
                          <View style={{ flex: 6 }}>
                              <Text style={styles.musicTitle}>Kygo</Text>
                              <Text style={styles.musicDescription}>Of Monsters and Men - Dirty Paws (Kygo remix)</Text>
                          </View>
                      </View>
                      <View style={{ width: "100%", backgroundColor: "#d3d3d6" }}>
                          <Image style={{ width: "100%", height: 50 }} source={require('../../assets/noise.gif')} />
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
                              <Image style={{ width: 20, height: 20, tintColor: "#d3d3d3" }} resizeMode={"contain"} source={require("../../assets/tickMark.png")} />
                              <Text style={styles.textLikeCount}>10</Text>
                          </View>
                          <View style={{
                              marginLeft: 10, borderRadius: 20, borderWidth: 1, borderColor: "#d3d3d3", padding: 10,
                              justifyContent: 'center', alignItems: "center", flexDirection: 'row', height: 40, width: 80
                          }}>
                              <Image style={{ width: 20, height: 20, tintColor: "#d3d3d3" }} resizeMode={"contain"} source={require("../../assets/tickMark.png")} />
                              <Text style={styles.textLikeCount}>56</Text>
                          </View>
                      </View>
                      <View style={{
                          flex: 1, borderRadius: 20, borderWidth: 1, borderColor: "#d3d3d3", padding: 10,
                          justifyContent: 'center', alignItems: "center", height: 40
                      }}>
                          <Image style={{ width: 20, height: 20, tintColor: "#d3d3d3" }} resizeMode={"contain"} source={require("../../assets/tickMark.png")} />
                      </View>
                  </View>
                  {/* Comment btn */}
                  <View style={{ marginTop: "5%", marginBottom: '5%', alignItems: "center", flexDirection: 'row', height: 100 }}>
                      <View style={{ flex: 1, height: 1, backgroundColor: "#d3d3d3" }} />

                      <TouchableOpacity style={{
                          borderRadius: 20, borderWidth: 1, borderColor: "#d3d3d3", padding: 10, justifyContent: 'center',
                          alignItems: "center", flexDirection: 'row', height: 40, width: 160
                      }} onPress={this._showCommentList.bind(this)}>

                          <Image style={{ width: 20, height: 20, tintColor: "#d3d3d3" }} resizeMode={"contain"} source={require("../../assets/tickMark.png")} />
                          <Text style={[styles.textCommentCount]}>9 Comments</Text>

                          <View style={{
                              marginLeft: 10, flex: 1, borderRadius: 60, borderWidth: 1, borderColor: "#d3d3d3", padding: 10,
                              justifyContent: 'center', alignItems: "center", height: 40, width: 160
                          }}>
                              <Image style={{ width: 20, height: 20, tintColor: "#d3d3d3" }} resizeMode={"contain"} source={require("../../assets/tickMark.png")} />
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
                                  <Image style={{ width: 20, height: 20, tintColor: "#d3d3d3" }} resizeMode={"contain"} source={require("../../assets/tickMark.png")} />
                                  <Text style={styles.textCommentCount}>10</Text>
                              </View>
                              <View style={{
                                  marginLeft: 10, borderRadius: 20, borderWidth: 1, borderColor: "#d3d3d3", padding: 10,
                                  justifyContent: 'center', alignItems: "center", flexDirection: 'row', height: 40, width: 80
                              }}>
                                  <Image style={{ width: 20, height: 20, tintColor: "#d3d3d3" }} resizeMode={"contain"} source={require("../../assets/tickMark.png")} />
                                  <Text style={styles.textCommentCount}>56</Text>

                              </View>
                          </View>
                          <View style={{
                              flex: 1, borderRadius: 20, borderWidth: 1, borderColor: "#F1F1F1", padding: 10,
                              justifyContent: 'center', alignItems: "center", height: 40
                          }}>
                              <Image style={{ width: 20, height: 20, tintColor: "#d3d3d3" }} resizeMode={"contain"} source={require("../../assets/tickMark.png")} />
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

  render() {
    const { feed, callingAPI, _restCalls } = this.props;
    const { user, like, deletePost, repost } = this.props;
    const { isVisible, showSocial } = this.state;

    console.log(" Feed =====", feed);
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
              data={this.state.post}
              renderItem={this.renderPost}
              keyExtractor={(item, index) => index.toString()}
          />
      </View>
      </React.Fragment>
    );
  }
}

