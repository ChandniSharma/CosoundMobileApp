import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


export default class CustomHeader extends Component {
    render() {

        return (
            <LinearGradient colors={['rgb(42, 173,177)', 'rgb(83,157,179)', 'rgb(55,169,177)']} style={{flexDirection: 'row', height: scale(94) }}>
                {/* <Image style={styles.imgSideTitle} /> */}
                <View style={{width:'80%'}}/>
                <TouchableOpacity style={styles.bellButton } onPress = {this.props.showNotificationView} >
                    <Image style={styles.bellIcon} source={require('../../../src/assets/Image/Bell128.png')} />
                </TouchableOpacity>

                <View style={{ flex: 0.3 }} />
                <View style={styles.leftView}>
                    <Animatable.Text animation="fadeInDown" style={styles.textDull}>Don't have an account?</Animatable.Text>
                    <TouchableHighlight underlayColor='rgb(245,245,245)'>
                        <Image />
                    </TouchableHighlight>
                </View>
            </LinearGradient>)
    }
}

const styles = {
    imgSideTitle: {
        color: 'white',
        // fontSize: 21,
        margin: '2%',
        alignSelf: 'flex-start',
        //  fontFamily: 'Montserrat-Bold',
        flex: 0.3,
        width: 50,
        height: 40
    },
    textDull: {
        color: 'rgba(255,255,255,0.72)',
        fontFamily: 'Montserrat-Regular',
        // fontWeight:'200',
        fontSize: 12,
    },
    getStarted: {
        color: 'white',
        fontFamily: 'Montserrat-Regular',
        //fontWeight:'200',
        fontSize: 14,
        marginRight: '5%',
        alignSelf: 'flex-end',
    },
    bellButton: {
        width: 64,
        height: 64,
        right: '5%',
        alignSelf:'flex-end',
        marginTop: '5%',
       
    },
    bellIcon: {
        width: 64,
        height: 64,
    }
}