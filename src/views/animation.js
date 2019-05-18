import React , {Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

 var FBLoginButton = require('../views/common/FBLoginButton');

export default class TestFB extends Component{
    componentDidMount(){
        console.log(" test class ");
    }
render(){
    return(
        <View style={{flex:1, backgroundColor:'pink'}}>
            <FBLoginButton />
        </View>
    )
 }
}