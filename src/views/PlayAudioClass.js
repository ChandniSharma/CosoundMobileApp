import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import AudioPlayer from 'react-native-play-audio';
import IconAntdesign from 'react-native-vector-icons/AntDesign';

export default class PlayAudioClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlay: false,
    }
  }

  componentDidMount() {
    // this.playAudioFile();
  }

  onClickPlay = () => {

    this.setState({ isPlay: !this.state.isPlay });
    if (!this.state.isPlay) {

      let songDuration;
      const url = 'file:///Chandni/Songs/hear_sentence.mp3'; // this.props.source; //'file:///Chandni/Songs/hear_sentence.mp3';

      AudioPlayer.prepare(url, () => {
        AudioPlayer.play();

        AudioPlayer.getDuration((duration) => {
          songDuration = duration;
        });
        setInterval(() => {
          AudioPlayer.getCurrentTime((currentTime) => {

            if (currentTime === songDuration) {
              AudioPlayer.stop();
            }
          });
        }, 1000);

        // AudioPlayer.stop();
        // AudioPlayer.pause();
        // AudioPlayer.setCurrentTime(50.5);
      })
    } else {
      AudioPlayer.pause();
    }

   
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor:'gray', borderRadius:10}}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{marginLeft:'2%', marginBottom:'20%', marginTop:'2%'}}>
            <TouchableOpacity onPress={this.onClickPlay} >
              {!this.state.isPlay?<IconAntdesign name="playcircleo" style={{fontSize:30, marginLeft:'5%'}} />:<IconAntdesign name="pausecircle"  style={{fontSize:30, marginLeft:'5%'}} />}
            </TouchableOpacity>
          </View>
          
          {this.state.isPlay?<View style={{marginTop:'15%'}}>
            <Image source={require('../../src/assets/noise.gif')} style={{marginLeft:'-20%', tintColor:'red', height:50}}/>
          </View>:<View />}
          
        </View>
      </View>
    )
  }
}