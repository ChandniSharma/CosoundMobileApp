import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';

export default class CustomFooter extends Component{
    render(){
        
        return(
            <View style={styles.viewBottom}>
            <Text style={styles.textBottomMark}>(c) elit. Nulla 2018</Text>
            <View style={styles.viewShareButtons}>
                <TouchableOpacity style={styles.shareButtons}>
                    <Text style={styles.textColorTemp}>F</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.shareButtons}>
                    <Text style={styles.textColorTemp}>T</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.shareButtons}>
                    <Text style={styles.textColorTemp}>C</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
}

const styles = {
    textButtonTitle: {
        fontSize: 16,
        color:'white',
        fontWeight:'500',
        marginTop:'20%'
    },
    viewShareButtons: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        flex:0.4,
       
        height:50,
        marginBottom:'5%',
        marginLeft:'13%',
        marginRight:'2%'
    },
    textColorTemp:{
       // color: 'white',
    },
    textBottomMark: {
        marginTop: 20,
       // marginBottom: 20,
        fontSize: 14,
        color: 'white',
        marginLeft: '5%',
        flex:0.6,
    },
    shareButtons: {
        width: 15,
        height: 15,
       
    },
    viewBottom:{
        flex:0.1,
        marginBottom:0,
        backgroundColor:'black',
       //alignItems: 'space-between',
       justifyContent:'center',
       flexDirection:'row',
    }
    
}