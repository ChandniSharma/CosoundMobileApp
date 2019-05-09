import { FlatList, Image, ImageBackground, Text, TextInput, TouchableHighlight, View, TouchableOpacity, StyleSheet } from "react-native";

import React, { Component } from "react";
 //import WaveForm from 'react-native-audiowaveform';
 //import { AudioControls } from 'react-native-hue-player';


 const playlistSample = [
    {
      key: 'audio01', 
      title:'Irineu', 
      author: 'Irineu (Classic)',
      url: 'http://vocenaosabe.nem/eu.mp3',
    //   thumbnailLocal: require('../assets/img/thumbnail.jpg')
    }, 
    {
      key: 'audio02', 
      title:'SerjaoBerranteiro',
      author: 'Serjão',
      url: 'http://aquitem.corage',
      path: 'matadorDeOnca.mp3',
    //   thumbnailUri: 'http://images.uncyc.org/pt/c/c1/Serj%C3%A3o_entrevista.jpg'
    }
  ];
export default class SoundPlay extends Component {
    componentDidMount() {

        // Enable playback in silence mode
        // Sound.setCategory('Playback');
    }

    // playSound() {
    //     console.log(" play sound ");
    //     // Load the sound file 'whoosh.mp3' from the app bundle
    //     // See notes below about preloading sounds within initialization code below.
    //     let audioUrl = "https://gaana.com/song/mera-naam-mary-1";
    //     var whoosh = new Sound('gullal.mp3', Sound.MAIN_BUNDLE, (error) => {
    //         if (error) {
    //             console.log('failed to load the sound', error);
    //             return;
    //         }
    //         // loaded successfully
    //         console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());

    //         // Play the sound with an onEnd callback
    //         whoosh.play((success) => {
    //             if (success) {
    //                 console.log('successfully finished playing');
    //             } else {
    //                 console.log('playback failed due to audio decoding errors');
    //             }
    //         });
    //     });

    //     // Reduce the volume by half
    //     whoosh.setVolume(0.5);

    //     // Position the sound to the full right in a stereo field
    //     whoosh.setPan(1);

    //     // Loop indefinitely until stop() is called
    //     whoosh.setNumberOfLoops(-1);

    //     // Get properties of the player instance
    //     console.log('volume: ' + whoosh.getVolume());
    //     console.log('pan: ' + whoosh.getPan());
    //     console.log('loops: ' + whoosh.getNumberOfLoops());

    //     // Seek to a specific point in seconds
    //     whoosh.setCurrentTime(2.5);

    //     // Get the current playback point in seconds
    //     whoosh.getCurrentTime((seconds) => console.log('at ' + seconds));

    //     // Pause the sound
    //     whoosh.pause();

    //     // Stop the sound and rewind to the beginning
    //     whoosh.stop(() => {
    //         // Note: If you want to play a sound after stopping and rewinding it,
    //         // it is important to call play() in a callback.
    //         whoosh.play();
    //     });

    //     // Release the audio player resource
    //     whoosh.release();
    // }

    playSoundRemotely(){
        // <WaveForm source={{uri:'file:///Chandni/Songs/gullal.mp3'}}  />
    }
    pressOnWave(){
            console.log(" press on wave ");
    }
    render() {
        console.log('playlist', playlist);
    
        return (
          <View style={styles.container}>
            {/* <AudioControls
              initialTrack={0}
              playlist={playlist}
    
              activeColor={'#fdfa04'}
              inactiveColor={'#fdfab1'}
    
              hasButtonSkipSeconds
              timeToSkip={30}
            /> */}
          </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });