import React from "react";
import { isEmpty } from "lodash";
import styles from "../../../stylesheet/profile.style";
import { FlatList, Text, TouchableHighlight, View } from "react-native";
import CommentBox from "./CommentBox";

class CommentList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
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
      ]
    }
  }
  renderCommentItem = (itemDetail) => {
    let item = itemDetail.item
    const {
      user,
      deleteComment,
      _deleteComment
    } = this.props;
    return (
      <CommentBox
        user={user}
        item={itemDetail}
        comment={item}
        key={item.id}
        deleteComment={deleteComment}
        _deleteComment={_deleteComment}
      />
    );
  }
  render() {
    const {
      loadMore,
      callingAPI,
      fetchComment,
      page,
      page_count,
      callApi
    } = this.props;
    const { data } = fetchComment;
    return (
      <View>
        <FlatList
          data={data}
          renderItem={this.renderCommentItem}
          keyExtractor={(item, index) => index.toString()}
        />
        {!isEmpty(data) && !callingAPI && page !== page_count && !isNull(page_count) && !callApi(
          <View style={styles.viewMore}>
            <TouchableHighlight underlayColor="#25b6ad" style={[styles.seeMoreBtn]} onPress={loadMore}>
              <Text style={styles.textViewMore} > {callingAPI ? "Fetching..." : "View More..."}</Text>
            </TouchableHighlight>
          </View>
        )}
      </View>
    );
  }
}

export default CommentList;