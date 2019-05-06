import { FlatList, Image, ImageBackground, Text, TextInput, TouchableHighlight, View, TouchableOpacity, StyleSheet } from "react-native";

import React, { Component } from "react";
import Video from 'react-native-video';


export default class PlayVideo extends Component {
    render() {
        return (
            <View style= {{flex:1, backgroundColor:'yellow'}}>
                <Video source={{ uri: "file:///Chandni/Songs/Krishna.mp4" }}   // Can be a URL or a local file.
                  ref={(ref) => {
                        this.player = ref
                    }}               
                    autoplay = {true}                       // Store reference
                    onBuffer={this.onBuffer}                // Callback when remote video is buffering
                    onError={this.videoError}  
                    muted= {false}
                    controlsTimeout ={2}
                    pauseOnPress={true}
                    style={styles.backgroundVideo} />
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