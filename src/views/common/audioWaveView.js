import React, { Component } from "react";
import {  StyleSheet, Text, View } from "react-native";
import WaveformWrapper from "./WaveformWrapper";
export default class audioWave extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>react-native-audiowaveform for React Native</Text>
        <Text style={styles.welcome}>by Otomogroove 2018</Text>
        <WaveformWrapper
          autoPlay={false}
          style={styles.waveform}
          waveFormStyle={{ waveColor: "red", scrubColor: "white" }}
          source={{uri:"file:///Chandni/Songs/Tera%20Saath%20Hai%20To%20Mujhe%20Kya%20Kami%20Hai%20-Sharma%20Music%20Center%20Malpura.mp3"}}
        />
        <WaveformWrapper
          autoPlay={false}
          style={styles.waveform}
          waveFormStyle={{ waveColor: "lightsteelblue", scrubColor: "white" }}
          source={{uri:"file:///Chandni/Songs/Tera%20Saath%20Hai%20To%20Mujhe%20Kya%20Kami%20Hai%20-Sharma%20Music%20Center%20Malpura.mp3"}}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 20,
    paddingTop: 50,
    backgroundColor: "lightcyan"
  },
  waveform: {
    flex: 1,
    margin: 10,
  },
  welcome: {
    flex: 0.2,
    marginLeft: 10
  }
});
