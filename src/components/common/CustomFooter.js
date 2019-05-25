import React, { Component } from 'react';
import { Platform,View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
const deviceHeight = height;
let deviceWidth = width;
import Icon from 'react-native-vector-icons/FontAwesome';
//import Icon1 from 're'

export default class CustomFooter extends Component{
    render(){
        
        return(
            <View style={[styles.viewBottom, {height:100, width:'100%'}]}>
            <Text style={styles.textBottomMark}>(c) elit. Nulla 2018</Text>
            <View style={styles.viewShareButtons}>
                <TouchableOpacity style={styles.shareButtons}>
                    <Icon name= "facebook-f" style={{fontSize:20, color:'white', }} />
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
        justifyContent:'center',
      //  alignSelf: 'flex-end',
        flex:0.4,
       backgroundColor:'red',
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
        width: 50,
        height: 50,
       
    },
    viewBottom:{
        
        marginTop:deviceHeight-70,
        alignSelf:'flex-end',
        backgroundColor:'black',
       //alignItems: 'space-between',
       justifyContent:'center',
       flexDirection:'row',
       position:'absolute',
     
    }
    
}