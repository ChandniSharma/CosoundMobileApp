import { View, StyleSheet } from "react-native";
import React, { Component } from "react";
import VideoPlayer from 'react-native-video-controls';

export default class PlayVideo extends Component {
    render() {
        const source = this.props.sources;
        return (
            <View style= {{flex:1, backgroundColor:'yellow'}}>
                <VideoPlayer
                source={{ uri: this.props.parentComponent === "renderTempFile" ?this.props.uri : source.path }}
                paused={true}
                repeat={false} 
                style={{width:'100%', height:200}} 
                controlTimeout={200000000}
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