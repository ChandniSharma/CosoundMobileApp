import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity,Dimensions, AsyncStorage, StyleSheet } from 'react-native';
import Animation from 'lottie-react-native';
import anim from '../../../assets/animation-w800-h600.json';

const { height, width } = Dimensions.get('window');
const deviceHeight = height;
let deviceWidth = width;

export default class WaveAnimation extends Component{
    componentDidMount() {
        this.animation.play();
      }

    render() {
    return (
      <View style={styles.container}>
        <View>
          <Animation
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              marginTop:'0%',
              width: deviceWidth,
              height: deviceHeight,
               transform: [{ rotate: '90deg' }],
            }}
            loop={true}
            source={anim}
          />
        </View>

      </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      alignItems: 'center',
       backgroundColor: 'transparent'
    },
   
  });