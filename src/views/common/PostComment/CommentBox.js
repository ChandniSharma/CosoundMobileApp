import React from "react";
import { isNull } from "lodash";

import { refactorCarbonDate, getThumbnail } from "../../../utils";
import styles from "../../../stylesheet/profile.style";
import { FlatList, Image, ImageBackground, Text, TextInput, TouchableHighlight, TouchableWithoutFeedback,View, TouchableOpacity,Clipboard, AlertIOS,Platform, ActivityIndicator } from "react-native";

///import { CardOptions } from "../../components/Commons/";

import { visitorLinks } from "./cardOptions";

class CommentBox extends React.PureComponent {
  state = {
    isVisible: false
  };

  _toggleVisible = () => {
    return this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    const { comment, deleteComment, _deleteComment, user, item } = this.props;
    const { isVisible } = this.state;
    const postedBySelf = comment.user_id === user.data.id;

    return (

      <View>
      <TouchableHighlight onPress={this.onClickNotification}>
          <View style={{ marginTop: '2%' }}>
              {/* <View>
                  <Text>{'\u2022' + " "}</Text>
              </View> */}
              <View style={{ flexDirection: 'row', flex: 1 }}>
                  <Image style={[styles.imgUserInComments]} source={require('../../../assets/avatar1.jpg')} />
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
  </View>
      // <div className="d-card__comment">
      //   <div className="avatar avatar--shad">
      //     <img src={getThumbnail(comment)} alt="avatar3" />
      //   </div>
      //   <div className="d-card__comment-content">
      //     <div className="d-card__comment-author">{`${comment.first_name} ${
      //       !isNull(comment.last_name) ? comment.last_name : ""
      //     }`}</div>
      //     <div className="d-card__comment-text">
      //       <p>{comment.body}</p>
      //     </div>
      //   </div>
      //   <div className="d-card__comment-date">
      //     <span>{refactorCarbonDate(comment.created_at)}</span>
      //   </div>

      //   <CardOptions
      //     id={comment.id}
      //     isVisible={isVisible}
      //     _delete={_deleteComment}
      //     postedBySelf={postedBySelf}
      //     deleteState={deleteComment}
      //     visitorLinks={visitorLinks}
      //     className={"d-card__comment"}
      //     toggleVisible={this._toggleVisible}
      //   />
      // </div>
    );
  }
}

export default CommentBox;
