import { Component } from "react";

import { SafeAreaView } from 'react-navigation';
import React from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import homeStyle from "../stylesheet/home.style";
import { FlatList, Image, ImageBackground, Text, TextInput, TouchableHighlight, View, TouchableOpacity } from "react-native";
import { Icon } from "native-base";
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { getThumbnail, getUsername, getUserInfo } from "../utils";
import {Wave} from './common/waveAnimation';

//  import Icon from 'react-native-vector-icons/FontAwesome'
 export default class PaymentViewIcon extends Component{
     render(){
         return(
             <View style={{flex:1, backgroundColor:'red'}}>
                 <View style={{flexDirection:'row'}}>
 {/*Credit Card icons  */}
                </View>

<Text> Payment methods accepted</Text>
<View style={{backgroundColor:'white', alignItems:'center', justifyContent:'center', }}>
<Icon />
</View>

<Text>Secure Payment SLL Lorem </Text>
             </View>
         )
     }
 }

 const styles ={
     textTitle:{
        color: '#262626',
        fontSize: 14,
        fontFamily: 'Montserrat-light',
     },
     
     textSecurePay:{
        color: '#20ACACC',
        fontSize: 14,
        fontFamily: 'Montserrat-light',
     },
 }