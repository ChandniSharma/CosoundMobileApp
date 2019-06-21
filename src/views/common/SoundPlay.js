import { FlatList, Image, ImageBackground, Text, TextInput, TouchableHighlight, View, TouchableOpacity, StyleSheet } from "react-native";

import React, { Component } from "react";
import MusicControl from 'react-native-music-control';
import Video from 'react-native-video';

export default class SoundPlay extends Component {
  componentDidMount() {
    MusicControl.enableBackgroundMode(true);
 
    this.playSound();
    // on iOS, pause playback during audio interruptions (incoming calls) and resume afterwards.
    // As of {{ INSERT NEXT VERSION HERE}} works for android aswell.
    MusicControl.handleAudioInterruptions(true);
 
    MusicControl.on('play', ()=> {
      this.props.dispatch(playRemoteControl());
    })
 
    // on iOS this event will also be triggered by audio router change events
    // happening when headphones are unplugged or a bluetooth audio peripheral disconnects from the device
    MusicControl.on('pause', ()=> {
      this.props.dispatch(pauseRemoteControl());
    })
 
    MusicControl.on('stop', ()=> {
      this.props.dispatch(stopRemoteControl());
    })
 
    MusicControl.on('nextTrack', ()=> {
      this.props.dispatch(nextRemoteControl());
    })
 
    MusicControl.on('previousTrack', ()=> {
      this.props.dispatch(previousRemoteControl());
    })
 
    MusicControl.on('changePlaybackPosition', ()=> {
      this.props.dispatch(updateRemoteControl());
    })
 
    MusicControl.on('seekForward', ()=> {});
    MusicControl.on('seekBackward', ()=> {});
 
    MusicControl.on('seek', (pos)=> {}); // Android only (Seconds)
    MusicControl.on('volume', (volume)=> {}); // Android only (0 to maxVolume) - Only fired when remoteVolume is enabled
 
    // Android Only (Boolean for RATING_HEART or RATING_THUMBS_UP_DOWN, Number for other types)
    MusicControl.on('setRating', (rating)=> {});
 
    MusicControl.on('togglePlayPause', ()=> {}); // iOS only
    MusicControl.on('enableLanguageOption', ()=> {}); // iOS only
    MusicControl.on('disableLanguageOption', ()=> {}); // iOS only
    MusicControl.on('skipForward', ()=> {});
    MusicControl.on('skipBackward', ()=> {});
 
    // Android Only
    MusicControl.on('closeNotification', ()=> {
      this.props.dispatch(onAudioEnd());
    })
    
}

  playSound() {
    MusicControl.enableControl('play', true)
    MusicControl.enableControl('pause', true)
    MusicControl.enableControl('stop', false)
    MusicControl.enableControl('nextTrack', true)
    MusicControl.enableControl('previousTrack', false)
    MusicControl.enableControl('changePlaybackPosition', true)
    MusicControl.enableControl('seekForward', false) // iOS only
    MusicControl.enableControl('seekBackward', false) // iOS only
    MusicControl.enableControl('enableLanguageOption', false)
    MusicControl.enableControl('disableLanguageOption', false)
    MusicControl.setNowPlaying({
      title: 'Billie Jean',
      artwork: 'https://i.imgur.com/e1cpwdo.png', // URL or RN's image require()
      artist: 'Michael Jackson',
      album: 'Thriller',
      genre: 'Post-disco, Rhythm and Blues, Funk, Dance-pop',
      duration: 294, // (Seconds)
      description: '', // Android Only
      color: 0xFFFFFF, // Notification Color - Android Only
      date: '1983-01-02T00:00:00Z', // Release Date (RFC 3339) - Android Only
      rating: 84, // Android Only (Boolean or Number depending on the type)
      notificationIcon: 'my_custom_icon' // Android Only (String), Android Drawable resource name for a custom notification icon
    })

    MusicControl.on('play', ()=> {
      this.props.dispatch(playRemoteControl());
    })
  }
  render() {

    return (
      <View style={{justifyContent: 'center', backgroundColor:'pink', flex:1}}>
        <Text> This is text liabrary </Text>
        <Video source={{uri: "file:///Chandni/Songs/gullal.mp3" }}
                       ref="audio"
                       volume={5.0}
                       muted={false}
                     //  paused={paused}
                       playInBackground={false}
                       playWhenInactive={false}
                      //  onProgress={this.onPlayProgress}
                      //  onEnd={this.onPlayEnd}
                       resizeMode="cover"
                       repeat={false}
                       style={{width:'100%', height:400, backgroundColor:'orange'}}
                       />
      </View>


    )
  }

}


