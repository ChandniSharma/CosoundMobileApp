import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

//import { Link } from "react-router-dom";
import styles from '../../../stylesheet/notification.style';

import { getUsername, getNotificationTitle, getOtherUser } from "../../../utils";

const RenderPostLink = ({ verb, postId, id, is_read, markAsRead }) => (
  <View style={{ flexDirection: "row" }}>
    <Text>{getNotificationTitle(verb).desc}</Text>
    <TouchableOpacity onPress={() => {
      if (!is_read) {
        markAsRead(id);
        //move to post detail for a perticular comment
        {/* <Link to={`/post/${postId}`} onClick={() => markAsRead()}>
            {getUsername(user)}
          </Link> */}
      }
      return false;
    }}>
      <Text> post</Text>
    </TouchableOpacity>
  </View>)


const NotificationDescription = ({ item, markAsRead }) => {

  const { actor_count, activities, verb, is_read, post, id } = item;
  const { id: postId } = post;
  const user = activities[0].user;
  const secondUser =
    actor_count > 1 && actor_count < 5
      ? getOtherUser(activities, user.id)
      : null;
  const thirdUser =
    actor_count === 3 ? getOtherUser(activities, user.id, secondUser.id) : null;

  switch (actor_count) {
    case 0:
      return null;
    case 1:
      return (
        <View>
          <View style={{ flexDirection: 'row', marginTop: '2%' }}>
            <TouchableOpacity style={{ marginRight: '2%' }} onPress={() => markAsRead()
              // Redirect to perticular profile detai
            }>
              <Text style={styles.textComment}> {getUsername(user)}</Text>
            </TouchableOpacity>

            {/* <Link to={`/profile/${user.id}`} onClick={() => markAsRead()}>
            {getUsername(user)}
          </Link> */}

            <RenderPostLink
              verb={verb}
              id={id}
              postId={postId}
              is_read={is_read}
              markAsRead={markAsRead}
            />
          </View>
          <Text numberOfLines={5}>{activities[0].comment ? ` "${activities[0].comment}"` : null}</Text>

        </View>
      );
    case 2:
      return (
        <View>
          <TouchableOpacity style={{ marginLeft: '2%', marginRight: '2%' }} onPress={() => markAsRead()
            // Redirect to perticular profile detai
          }>
            <Text style={styles.textComment}> {getUsername(user)}</Text>
          </TouchableOpacity>

          {/* <Link to={`/profile/${user.id}`} onClick={() => markAsRead()}>
            {getUsername(user)}
          </Link> */}
          <Text> {" and "} </Text>

          <TouchableOpacity style={{ marginLeft: '2%', marginRight: '2%' }} onPress={() => markAsRead()
            // Redirect to perticular profile detai
          }>
            <Text> {getUsername(secondUser)}</Text>
          </TouchableOpacity>

          {/* <Link to={`/profile/${secondUser.id}`} onClick={() => markAsRead()}>
            {getUsername(secondUser)}
          </Link> */}
          <RenderPostLink
            verb={verb}
            id={id}
            postId={postId}
            is_read={is_read}
            markAsRead={markAsRead}
          />
        </View>
      );
    case 3:
      return null;
      return (
        <View>
          <TouchableOpacity style={{ marginLeft: '2%', marginRight: '2%' }} onPress={() => markAsRead()
            // Redirect to perticular profile detai
          }>
            <Text>  {getUsername(user)}</Text>
          </TouchableOpacity>
          {/* <Link to={`/profile/${user.id}`} onClick={() => markAsRead()}>
            {getUsername(user)}
          </Link> */}
          <Tex> {", "} </Tex>

          <TouchableOpacity style={{ marginLeft: '2%', marginRight: '2%' }} onPress={() => markAsRead()
            // Redirect to perticular profile detai
          }>
            <Text> {getUsername(secondUser)}</Text>
          </TouchableOpacity>

          {/* <Link to={`/profile/${secondUser.id}`} onClick={() => markAsRead()}>
            {getUsername(secondUser)}
          </Link> */}
          {" and "}

          <TouchableOpacity style={{ marginLeft: '2%', marginRight: '2%' }} onPress={() => markAsRead()
            // Redirect to perticular profile detai
          }>
            <Text> {getUsername(thirdUser)}</Text>
          </TouchableOpacity>

          {/* <Link to={`/profile/${thirdUser.id}`} onClick={() => markAsRead()}>
            {getUsername(thirdUser)}
          </Link> */}
          <RenderPostLink
            verb={verb}
            id={id}
            postId={postId}
            is_read={is_read}
            markAsRead={markAsRead}
          />
        </View>
      );
    default:
      return null;
      return (
        <View>

          <TouchableOpacity style={{ marginLeft: '2%', marginRight: '2%' }} onPress={() => markAsRead()
            // Redirect to perticular profile detai
          }>
            <Text>  {getUsername(user)}</Text>
          </TouchableOpacity>

          {/* <Link to={`/profile/${user.id}`} onClick={() => markAsRead()}>
            {getUsername(user)}
          </Link> */}
          <Tex> {", "} </Tex>

          <TouchableOpacity style={{ marginLeft: '2%', marginRight: '2%' }} onPress={() => markAsRead()
            // Redirect to perticular profile detai
          }>
            <Text> {getUsername(secondUser)}</Text>
          </TouchableOpacity>
          <Text>{` and ${actor_count - 2} others`}</Text>

          {/* <Link to={`/profile/${secondUser.id}`} onClick={() => markAsRead()}>
            {getUsername(secondUser)}
          </Link> */}

          <RenderPostLink
            verb={verb}
            id={id}
            postId={postId}
            is_read={is_read}
            markAsRead={markAsRead}
          />
        </View>
      );
  }
};

export default NotificationDescription;

