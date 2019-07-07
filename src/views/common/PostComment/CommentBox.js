import React from "react";
import { isNull } from "lodash";
import { refactorCarbonDate, getThumbnail } from "../../../utils";
import styles from "../../../stylesheet/profile.style";
import { Image, Text, TouchableHighlight, View } from "react-native";

class CommentBox extends React.PureComponent {
  state = {
    isVisible: false
  };

  _toggleVisible = () => {
    return this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    const { comment, user } = this.props;
    return (
      <View>
        <TouchableHighlight onPress={this.onClickNotification}>
          <View style={{ marginTop: '2%' }}>
            {/* <View>
                  <Text>{'\u2022' + " "}</Text>
              </View> */}
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <Image style={[styles.imgUserInComments]} source={{ uri: getThumbnail(comment) }} />
              <View style={{ flex: 0.9 }}>
                <Text style={[styles.textSubTitleNotSelected]}>{`${comment.first_name} ${!isNull(comment.last_name) ? comment.last_name : ""}`} </Text>
                <Text style={styles.textDescComment}> {comment.body}</Text>
              </View>
              {/* {this.state.isClick? <Text style={styles.textSubtitleSelected}>Viewed your profile </Text>
          :  <Text style={styles.textSubTitleNotSelected}> Viewed your profile </Text>} */}
              <Text style={[styles.textNotificationTime, { flex: 0.3 },]}> {refactorCarbonDate(comment.created_at)}</Text>
            </View>
            <View>
            </View>
            {/* <View style={{ width: '80%', height: 1, backgroundColor: 'rgb(38,38,38)', marginTop: '2%', alignSelf:'center' }} /> */}
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default CommentBox;
