import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Logo from './logo';
import Icon2 from "react-native-vector-icons/EvilIcons";
import Hamburger from 'react-native-hamburger';
import Icon from "react-native-vector-icons/AntDesign";
import { connect } from "react-redux";

class HeaderMenuAndBell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isScrollDown: false,
            headerColorMix: ['rgb(42, 173,177)', 'rgb(131, 110, 198)', 'rgb(134, 103, 200)'],
            headerColor: ['rgb(42, 173,177)', 'rgb(93, 152, 179)'],
            isContactInfoClick: false,
            isDropDownclick: false,
            isSideMenuClick: false,
            isSearchbarDataShow: false,
            isCrossClick: false,
            active: false,
            isBottomMobileShow: true,
            mobileNumber: '',
            isNotificationShow: false,
        }
    }

    render() {
        const { colors, onPressPopup, onPressBell, isNotificationShow, isBackButtonShow } = this.props;
        return (
            <LinearGradient start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} colors={colors} style={{ flexDirection: 'row', height: 100, width: '100%', alignItems: 'space-between', justifyContent: 'center' }}>
               {isBackButtonShow?  <BackButton style={{ fontSize: 30, marginTop: '10%', marginLeft: '4%' }} onPress={() => this.props.navigation.goBack(null)} /> : <TouchableOpacity style={{ color: 'white', marginTop: '14%', flex: 0.1, marginLeft: '4%' }} onPress={onPressPopup}>
                    <Hamburger color="white" active={false} type="spinCross" onPress={onPressPopup} />
                </TouchableOpacity>} 
                <Logo color={'#ffffff'} style={{ flex: 0.7, marginLeft: '25%' }} width="130px" height="44px" />
                <View style={{ flex: 0.3 }} />
                <TouchableOpacity style={[styles.searchView, { flex: 0.2, alignSelf: 'flex-end', marginRight: '5%' }]} onPress={onPressBell}>
                    {isNotificationShow ? <Icon name="close" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 38, tintColor: 'white' }} /> : 
                    <View style={{flexDirection:'row'}}>
                        <Icon2 name="bell" color="white" style={{ marginLeft: '5%', marginTop: '2%', fontSize: 40, tintColor: 'white' }} />
                        <View style={styles.redDot}/>
                    </View> }
                </TouchableOpacity>
            </LinearGradient>
        )
    }
}

// eslint-disable-next-line
const mapStateToProps = state => {
    return {
        notificationCount:state.notificationCount
    };
  };
  
  // eslint-disable-next-line
 
  export default connect(
      mapStateToProps,
      null
    )(HeaderMenuAndBell);

const styles = {
    imgSideTitle: {
        color: 'white',
        margin: '2%',
        alignSelf: 'flex-start',
        flex: 0.3,
        width: 50,
        height: 40
    },
    redDot: {
        width: 14,
        height: 14,
        backgroundColor: '#ff277b',
        borderRadius: 7,
        marginLeft:'-45%',
        marginBottom:'-25%',
    },
    textDull: {
        color: 'rgba(255,255,255,0.72)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
    },
    getStarted: {
        color: 'white',
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        marginRight: '5%',
        alignSelf: 'flex-end',
    },
    bellButton: {
        width: 64,
        height: 64,
        right: '5%',
        alignSelf: 'flex-end',
        marginTop: '5%',
    },
    bellIcon: {
        width: 64,
        height: 64,
    }
}