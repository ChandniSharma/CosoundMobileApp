import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class PlayAudioClass extends Component{
    render(){
        return(
            <View style={{flex:1, justifyContent: 'center',}}>
                <Text> Sound player </Text>
            </View>
        )
    }
}