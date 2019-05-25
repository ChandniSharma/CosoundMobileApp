import React, { Component } from 'react';
import { Platform,View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
const deviceHeight = height;
let deviceWidth = width;
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Entypo';

//import Icon1 from 're'

export default class CustomFooter extends Component{
    render(){
        
        return(
            <View style={[styles.viewBottom, {height:100, width:'100%'}]}>
            <Text style={styles.textBottomMark}>(c) elit. Nulla 2018</Text>
            <View style={styles.viewShareButtons}>
                <TouchableOpacity style={styles.shareButtons}>
                    <Icon name= "facebook-f" style={{fontSize:20, color:'rgba(255,255, 255, 0.8)', }} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.shareButtons}>
                <Icon1 name= "instagram" style={{fontSize:20, color:'rgba(255,255, 255, 0.8)', }} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.shareButtons}>
                <Icon1 name= "soundcloud" style={{fontSize:20, color:'rgba(255,255, 255, 0.8)', }} />

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
        justifyContent:'center',
      //  alignSelf: 'flex-end',
        flex:0.4,
    //    backgroundColor:'red',
        // height:50,
       
        // marginLeft:'13%',
        // marginRight:'2%',
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
        marginTop:'3%',
        width: 50,
        height: 50,
        justifyContent:'center'
    },
    viewBottom:{
        marginTop:20,
        backgroundColor:'black',
       //alignItems: 'space-between',
       justifyContent:'center',
       flexDirection:'row',
    }
    
}