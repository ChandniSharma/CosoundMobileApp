
import { Component } from "react";
import styles from "../../stylesheet/Account.style";
import React from "react";
import { FlatList, Image, ImageBackground, Text, TextInput, Modal, TouchableHighlight, View, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Icon5 from 'react-native-vector-icons/FontAwesome';

export default class NoDataWithLink extends Component{
    navigateToView = () =>{
      this.props.navigation.navigate(this.props.link);
    }
    render(){
        const { 
            noDataDesc,
            noDataMessage,
            linkName } = this.props;
            console.log("this.props===", this.props)
        return(
            <View style={{ alignSelf: 'center', marginTop: '10%', flex: 0.7 }}>
            <View style={{ alignSelf: 'center' }}>
                <Icon  color='#20ACAC' style={{ fontSize: 25 }} />
                <Icon5  color='#20ACAC' style={{ fontSize: 25 }} />

            </View>
            <Text style={[styles.noServiceText, { marginLeft: '10%', marginRight: '10%', marginTop: '5%' }]}> {noDataMessage} </Text>
            <Text style={[styles.textLight, { alignSelf: 'center', marginTop: '5%' }]}> {noDataDesc} </Text>
        
        
            <TouchableHighlight underlayColor="#25b6ad" style={[styles.loginButton, { marginTop: '5%', justifyContent: 'center', }]} onPress={this.navigateToView}>
                <Text style={[styles.textButtonTitle,{marginBottom:'15%'}]} >{linkName}</Text>
            </TouchableHighlight>
            </View> 
        )
    }
}