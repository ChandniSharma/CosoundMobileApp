import { Component } from "react";
import styles from "../stylesheet/Account.style";
import { SafeAreaView } from 'react-navigation';
import React from "react";
import { FlatList, Image, ImageBackground, Text, TextInput, TouchableHighlight, View, TouchableOpacity, ScrollView } from "react-native";
import { Icon } from "native-base";
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { getThumbnail, getUsername, getUserInfo } from "../utils";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import { ScrollView } from "react-native-gesture-handler";

//  import Icon from 'react-native-vector-icons/FontAwesome'

const buttonName = {
    contactInfo :"Contact Information",
    coverPhoto:'Cover Photo',
    notificationSettings:'Notification Settings',
paymentDetail:"Payment Details",
other:"Other",

}
export default class Account extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isScrollDown: false,
            headerColorMix: ['rgb(42, 173,177)', 'rgb(131, 110, 198)', 'rgb(134, 103, 200)'],
            headerColor: ['rgb(42, 173,177)', 'rgb(93, 152, 179)'],
           isContactInfoClick:false,
           

        }
    }
    fadeInDown = () => this.refs.userImageView.fadeInDown(1000).then(endState => this.fadeInPremiumView())


    _navigateToAdvanceSearchView() {
        this.props.navigation.navigate("AdvancedSearchView");
    }
    _navigateToNotificationView() {
        this.props.navigation.navigate('Notification');
    }
    _onScroll = event => {
        const currentOffset = event.nativeEvent.contentOffset.y;
        const dif = currentOffset - (this.offset || 0);
        if (currentOffset <= 20) {

            if (this.state.isScrollDown) {
                this.setState({ isScrollDown: false });
            }

        } else {
            if (currentOffset > 5) {
                if (!this.state.isScrollDown)
                    setTimeout(() => {
                        this.setState({ isScrollDown: true });
                       
                    }, 500);
            }
        }
        this.offset = currentOffset;
    };

    onClickSettingsButton(name){
    //   switch(name){
    //       case buttonName.contactInfo:
    //          this.setState({isContactInfoClick:true})
          
    //   }
    }
    render() {

        return(
            <View>
                 <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>

                        <LinearGradient start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} colors={this.state.isScrollDown ? this.state.headerColor : this.state.headerColorMix} style={{ flexDirection: 'row', height: 100, width: '100%', alignItems: 'space-between', justifyContent: 'center' }}>

                            <Icon name="ios-menu" style={{ fontSize: 60, color: 'white', alignSelf: 'flex-start', marginTop: 50, marginLeft: 5, width: 100, height: 100, flex: 0.2, marginBottom: 10 }} />

                            <Image style={{ tintColor: 'white', alignSelf: 'center', marginTop: 65, marginLeft: 20, width: 180, height: 30, marginBottom: 10 }} source={require('../assets/Image/logoProfile1.png')} />

                            <View style={{ flex: 0.2 }} />
                            <TouchableOpacity style={styles.searchView} onPress={this._navigateToAdvanceSearchView}>
                            <Image style={styles.bellIcon} source={require('../../src/assets/Image/Bell128.png')} />
                            </TouchableOpacity>
                        </LinearGradient>

                       <View style={{flex:1}}>
                        <LinearGradient start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} colors={this.state.headerColorMix} style={{ width: '100%',height:200}}>

                        <Animatable.View
                            ref={'userImageView'}
                            style={{
                                marginTop: "5%",
                                width: 100,
                                borderRadius: 50, elevation: 3,
                                backgroundColor: "white",
                                alignSelf: "center",
                                shadowColor: 'rgba(0,0,0,1)',
                                shadowOffset: {
                                    width: 1,
                                    height: 1
                                },
                                shadowOpacity: 0.8,
                                marginBottom:'5%',
                            }}>
                            {/* <Image style={styles.imgUser} source={getThumbnail(user.data)} /> */}
                            <Image style={styles.imgUser} source={require('../assets/avatar-main-1.jpg')} />

                        </Animatable.View>
<Text style={styles.textUserName}> Lois Stokes </Text>
                        </LinearGradient>
                        
                        
<View style={{flexDirection:'row', height:70, marginTop:'5%'}}> 
    <Icon name="settings" color={"purple"} style={{margin:'2%', flex:1}} /> 
    <Text style={[styles.titleAccount, {flex:8}]}> Account Settings</Text>
    <Icon name="upcircle" style={{right:'2%',flex:1 }}/>
 </View>
  
 <View style={{flexDirection:"row", backgroundColor:'red', marginTop:'10%', height:100, marginBottom:'2%'}}>
<TouchableHighlight style={styles.buttonSettings} underlayColor="white" onPress={this.onClickSettingsButton()}> 
     <Text>{buttonName.contactInfo}</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.buttonSettings} underlayColor="white" onPress={this.onClickSettingsButton()}> 
     <Text>{buttonName.coverPhoto}</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.buttonSettings} underlayColor="white" onPress={this.onClickSettingsButton()}> 
     <Text>{buttonName.paymentDetail}</Text>
      </TouchableHighlight>
</View>
<View style={{flexDirection:"row", backgroundColor:'yellow', marginTop:'2%',height:100, marginBottom:'2%'}}>
      <TouchableHighlight style={styles.buttonSettings} underlayColor="white" onPress={this.onClickSettingsButton()}> 
     <Text>{buttonName.notificationSettings}</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.buttonSettings} underlayColor="white" onPress={this.onClickSettingsButton()}> 
     <Text>{buttonName.other}</Text>
      </TouchableHighlight>

</View>

 

                       
 </View>   
                </SafeAreaView>
            </View>
        )
    }

}


{/* <KeyboardAwareScrollView onScroll={this._onScroll} style={{ backgroundColor: 'rgb(42, 173,177)' }}>
<View style={{ backgroundColor: 'rgb(248,249,248)' }} >

<LinearGradient start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} colors={['rgb(42, 173,177)', 'rgb(131, 110, 198)', 'rgb(134, 103, 200)']} style={styles.viewTopBackground}>

<Animatable.View
    ref={'userImageView'}
    style={{
        marginTop: "-15%",
        height: 100, width: 100,
        borderRadius: 50, elevation: 3,
        backgroundColor: "white",
        alignSelf: "center",
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.8,
    }}>
    {/* <Image style={styles.imgUser} source={getThumbnail(user.data)} /> */}

    <Image style={styles.imgUser} source={require('../assets/avatar-main-1.jpg')} />

// </Animatable.View>

// </LinearGradient>
// </View>
// </KeyboardAwareScrollView> */}