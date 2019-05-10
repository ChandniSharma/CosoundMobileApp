import { FlatList, Image, ImageBackground, Text, TextInput, TouchableHighlight, View, TouchableOpacity, StyleSheet } from "react-native";

import React, { Component } from "react";
//import Video from 'react-native-video';

import VideoPlayer from 'react-native-video-controls';

export default class PlayVideo extends Component {
    render() {
        return (
            <View style= {{flex:1, backgroundColor:'yellow'}}>
                <VideoPlayer
    source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
    navigator={ this.props.navigator }
/>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});