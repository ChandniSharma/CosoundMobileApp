
import { FlatList, Image, ImageBackground, Text, TextInput, TouchableHighlight, View, TouchableOpacity, StyleSheet } from "react-native";

import React, { Component } from "react";

import TrackPlayer from 'react-native-track-player';


export default class TrackPlayerClass extends Component {
    
    componentDidMount() {
       
    }
    startPlayer =() =>{
      console.log(" start player ");
       // Creates the player
       TrackPlayer.setupPlayer().then(async () => {

        // Adds a track to the queue
        await TrackPlayer.add({
            id: 'trackId',
            url: "file:///Chandni/Songs/hear_sentence.mp3",
            title: 'Track Title',
            artist: 'Track Artist',
            // artwork: require('../../assets/Image/soundWave.png')
        });
        // Starts playing it
    });
     // TrackPlayer.play();
    }
    render(){
        return(
            <View  style={{flex:1,backgroundColor:'pink', alignItems:'center', justifyContent: 'center',}}>
                <TouchableOpacity onPress={()=>this.startPlayer()}>
                <Text style={{fontSize:20}}> Play sound </Text>
                </TouchableOpacity>
               
            </View>
        )
    }
}

