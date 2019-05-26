
import { FlatList, Image, ImageBackground, Text, TextInput, TouchableHighlight, View, TouchableOpacity, StyleSheet } from "react-native";

import React, { Component } from "react";


import TrackPlayer from 'react-native-track-player';


export default class SoundPlay extends Component {
    
    componentDidMount() {
        // Creates the player
        TrackPlayer.setupPlayer().then(async () => {

            // Adds a track to the queue
            await TrackPlayer.add({
                id: 'trackId',
                url: "file:///Chandni/Songs/gullal.mp3",
                title: 'Track Title',
                artist: 'Track Artist',
                 artwork: require('../../assets/Image/soundWave.png')
            });

            // Starts playing it
            TrackPlayer.play();

        });
    }
    render(){
        return(
            <View>
                <Text> Play sound </Text>
            </View>
        )
    }
}

