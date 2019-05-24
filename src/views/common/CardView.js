import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const Card = (props) =>{

    return (
        <View style={styles.containerStyle}> 
          {props.children}
        </View>
    )

   
}

export default Card;

const styles = {
    containerStyle:{
        backgroundColor: 'white', height: '20%' 
    }
}
