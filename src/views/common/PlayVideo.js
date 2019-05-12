import { FlatList, Image, ImageBackground, Text, TextInput, TouchableHighlight, View, TouchableOpacity, StyleSheet } from "react-native";

import React, { Component } from "react";
//import Video from 'react-native-video';

import VideoPlayer from 'react-native-video-controls';

export default class PlayVideo extends Component {

    render() {
        const source = this.props.sources;
        return (
            <View style= {{flex:1, backgroundColor:'yellow'}}>
                <VideoPlayer
                source={{ uri: source.path }}
                paused={true}
                repeat={false}  
                // poster={require('../../assets/homepage-video-placeholder.jpg')}
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