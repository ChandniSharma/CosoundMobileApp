import Icon from 'react-native-vector-icons/AntDesign';
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

export default class BackButton extends Component{
 render() {
     const {onPress, style} = this.props
   return (
     <TouchableOpacity onPress={onPress} style={style}>
        <Icon name="left" color="white" style={{fontSize:30}} />
     </TouchableOpacity>
   )
 };
}