import { Component } from "react";
import React from "react";
import { Text, View } from "react-native";
import { Icon } from "native-base";
 export default class PaymentViewIcon extends Component{
     render(){
         return(
             <View style={{flex:1, backgroundColor:'red'}}>
                 <View style={{flexDirection:'row'}}>
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