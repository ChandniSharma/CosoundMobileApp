import { Component } from "react";
import styles from "../stylesheet/Account.style";
import { SafeAreaView } from 'react-navigation';
import React from "react";
import { FlatList, Image, ImageBackground, Text, TextInput, Modal, TouchableHighlight, View, TouchableOpacity, ScrollView } from "react-native";
import { Icon, Row } from "native-base";
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { getThumbnail, getUsername, getUserInfo } from "../utils";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Logo from './common/logo';

import SearchBar from 'react-native-search-bar'
import Hamburger from 'react-native-hamburger';
// import { ScrollView } from "react-native-gesture-handler";

//  import Icon from 'react-native-vector-icons/FontAwesome'

const buttonName = {
    contactInfo: "Contact Information",
    coverPhoto: 'Cover Photo',
    notificationSettings: 'Notification Settings',
    paymentDetail: "Payment Details",
    other: "Other",

}
export default class Account extends Component {

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
            
        }
        this.arrayMobileNumber =[];
        this.arrayButtons = [];
        this.dropDownOptions = [{ name: 'Privacy', image: '' }, { name: 'Communication', image: '' }, { name: 'Support Center', image: '' }],
            this.arrayData = [{ name: 'Market', image: '', count: 0 }, { name: 'Messages', image: '', count: 3 }, { name: 'Profile', image: '', count: 0 }, { name: 'Notifications', image: '', count: 24 }, { name: 'Cart', image: '', count: 2 }]
    }
    fadeInDown = () => this.refs.userImageView.fadeInDown(1000);

    zoomInPopup = () => this.refs.viewModalRef.zoomIn().then(endState => console.log(" now end zoomin"));


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

    onClickSettingsButton(name) {
        //   switch(name){
        //       case buttonName.contactInfo:
        //          this.setState({isContactInfoClick:true})

        //   }
    }
    showPopup() {
        this.setState({ isSideMenuClick: true })
        console.log(" sidemnu ", this.state.isSideMenuClick);
        setTimeout(() => {
            this.zoomInPopup();
        }, 10);

    }
    hidePopup() {
        this.setState({ isSideMenuClick: false })
    }
    onChangeSearchText = () => {
        this.setState({ isSearchbarDataShow: true })
    }
    onChangeMobileNumber = (value) => {
        this.setState({
            mobileNumber: value,
            isBottomMobileShow: true
        });
        console.log(" value =====", value, this.state.isBottomMobileShow)

    }
    onClickMobBottom = () => {

        let button = <TouchableOpacity style={{ width: 200, height: 40, backgroundColor: 'pink' }} onPress= {this.removeMobileNumber()}>
        <View>
        <Text>{this.state.mobileNumber}</Text>
        </View>
        </TouchableOpacity>

       this.arrayMobileNumber.push(this.state.mobileNumber);
       this.arrayButtons.push(button);
      

       console.log(" array of no. ", this.arrayMobileNumber,"ary btn ",this.arrayButtons );
        this.setState({
            isBottomMobileShow: false,
            mobileNumber:''
        });
        return this.arrayButtons
    }
    removeMobileNumber() {

    }
    renderSearchRow = (item) => {
        console.log(" item is ", item);

        return (

            <View style={{ height: 50, justifyContent: 'center' }}>
                <TouchableOpacity style={{ margin: '2%' }} onPress={() => this.setState({ isDropDownclick: false })}>
                    <View style={{ flexDirection: "row" }}>
                        <Image style={{ width: 25, height: 25 }} />
                        <Text style={[styles.textModalData, { marginRight: '5%', color: 'black' }]}>{item.item.name}</Text>

                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    renderModalItem = (item) => {
        console.log(" item is ", item);

        return (

            <View style={{ height: 50, justifyContent: 'center' }}>
                <TouchableOpacity style={{ margin: '2%' }} onPress={() => this.setState({ isDropDownclick: false })}>
                    <View style={{ flexDirection: "row" }}>
                        <Image style={{ width: 25, height: 25 }} />
                        <Text style={[styles.textModalData, { marginRight: '5%' }]}>{item.item.name}</Text>
                        <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#424242', justifyContent: 'center', marginTop: -5 }}>
                            <Text style={styles.textModalData}>{item.item.count}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    renderItem = (item) => {
        console.log(" item is ", item);

        return (

            <View style={{ height: 50, justifyContent: 'center' }}>
                <TouchableOpacity style={{ margin: '2%' }} onPress={() => this.setState({ isDropDownclick: false })}>
                    <View style={{ flexDirection: "row" }}>
                        <Icon name="settings" style={{ flex: 0.1, color: 'rgb(140,91,204)', marginRight: '2%', }} />

                        <Text style={styles.textAccountPopup}>{item.item.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }


    render() {

        return (

            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
                {!this.state.isSideMenuClick ? <LinearGradient start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} colors={this.state.isBottomViewShow ? this.state.headerColor : this.state.headerColorMix} style={{ flexDirection: 'row', height: 100, width: '100%', alignItems: 'space-between', justifyContent: 'center' }}>

                    <TouchableOpacity style={{ color: 'white', marginTop: '14%', flex: 0.1 }} onPress={() => this.showPopup()}>

                        <Hamburger color="white" active={false} type="spinCross" onPress={() => this.showPopup()} />
                    </TouchableOpacity>


                    <Logo color={'#ffffff'} style={{ flex: 0.7, marginLeft: '25%' }} width="130px" height="44px" />

                    <View style={{ flex: 0.3 }} />
                    <TouchableOpacity style={[styles.searchView, { flex: 0.2, alignSelf: 'flex-end', marginRight:'2%' }]} onPress={this._navigateToNotificationView}>
                        <Image style={styles.bellIcon} source={require('../../src/assets/Image/Bell128.png')} />
                    </TouchableOpacity>
                </LinearGradient> : null}
                <View style={{ flex: 1 }}>
                    <KeyboardAwareScrollView style={{ backgroundColor: 'rgb(245,245,245)' }}>
                        <LinearGradient start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} colors={this.state.headerColorMix} style={{ width: '100%', height: 200 }}>
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
                                    marginBottom: '5%',
                                }}>
                                {/* <Image style={styles.imgUser} source={getThumbnail(user.data)} /> */}
                                <Image style={styles.imgUser} source={require('../assets/avatar-main-1.jpg')} />
                            </Animatable.View>
                            <Text style={styles.textUserName}> Lois Stokes </Text>
                        </LinearGradient>
                        <TouchableOpacity style={{ marginTop: '5%', marginBottom:'5%',height:'20%' }} onPress={() => this.setState({ isDropDownclick: true })}>
                            <View style={{ flexDirection: 'row', }}>
                                <Icon name="settings" style={{ marginLeft: '2%', flex: 0.1, color: 'rgb(140,91,204)' }} />
                                <Text style={[styles.titleAccount, { flex: 0.8, marginTop: '0.5%' }]}> Account Settings</Text>
                                <Animatable.Image source={require('../assets/suggestions-search.png')} style={{ marginRight: '2%', flex: 0.1, width: 20, height: 20, transform: [{ rotate: '180deg' }] }} />
                            </View>
                        </TouchableOpacity>

                        <View style={{ flexDirection: "row", alignSelf: 'center' }}>
                            <TouchableHighlight style={[styles.buttonSettings]} underlayColor="white" onPress={this.onClickSettingsButton()}>
                                <Text style={styles.textSettings}>{buttonName.contactInfo}</Text>
                            </TouchableHighlight>

                            <TouchableHighlight style={styles.buttonSettings} underlayColor="white" onPress={this.onClickSettingsButton()}>
                                <Text style={styles.textSettings}>{buttonName.coverPhoto}</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={{ flexDirection: "row", marginBottom: '2%', alignSelf: 'center' }}>

                            <TouchableHighlight style={styles.buttonSettings} underlayColor="white" onPress={this.onClickSettingsButton()}>
                                <Text style={styles.textSettings}>{buttonName.paymentDetail}</Text>
                            </TouchableHighlight>

                            <TouchableHighlight style={[styles.buttonSettings]} underlayColor="white" onPress={this.onClickSettingsButton()}>
                                <Text style={styles.textSettings}>{buttonName.notificationSettings}</Text>
                            </TouchableHighlight>

                            <TouchableHighlight style={styles.buttonSettings} underlayColor="white" onPress={this.onClickSettingsButton()}>
                                <Text style={styles.textSettings}>{buttonName.other}</Text>
                            </TouchableHighlight>

                        </View>

                        <TextInput
                            style={styles.inputStyle}
                            placeholder={'Email'}
                            //onChangeText={(text) => this.setState({ email: text })}
                            //value={data.email}
                            name={"email"}
                            onChangeText={val => handleChange('email', val)}
                        />

                        <TextInput
                            style={styles.inputStyle}
                            placeholder={'Password'}
                            secureTextEntry
                            //onChangeText={(text) => this.setState({ password: text })}
                            onChangeText={val => handleChange('password', val)}
                            // value={data.password}
                            name={"password"}
                        />

{/* <View style={{flexDirection:'row', backgroundColor:'yellow' }}>
    {this.arrayButtons} */}
    <TextInput
                            style={styles.inputStyle}
                            placeholder={'Mobile Number'}
                            //onChangeText={(text) => this.setState({ password: text })}
                            onChangeText={val => this.onChangeMobileNumber(val)}
                            // value={data.password}
                            name={"mobileNumber"}
                        />
{/* </View> */}

                        {/* {this.state.isBottomMobileShow ? <TouchableOpacity style={styles.btnBottomMob} onPress={this.onClickMobBottom}>
                            <Text style={{ paddingLeft: '5%', paddingRight: '5%' }}>add {this.state.mobileNumber}</Text>
                        </TouchableOpacity> : null}
 */}

                        {/* Show Account Setting button dropdown  */}

                        {this.state.isDropDownclick ?
                            <View style={styles.viewModalAccount}>
                                <TouchableOpacity style={{ marginTop: '53%', backgroundColor: 'white', height: 40 }} onPress={() => this.setState({ isDropDownclick: false })}>
                                    <View style={{ flexDirection: 'row', height: 40 }}>
                                        <Icon name="settings" style={{ marginLeft: '2%', flex: 0.1, color: 'rgb(140,91,204)' }} />
                                        <Text style={[styles.titleAccount, { flex: 0.8, marginTop: '2%' }]}> Account Settings</Text>
                                        <Animatable.Image source={require('../assets/suggestions-search.png')} style={{ marginRight: '5%', flex: 0.1, width: 20, height: 20, transform: [{ rotate: '180deg' }] }} />
                                    </View>
                                </TouchableOpacity>

                                <View style={styles.viewDropDown}>
                                    <FlatList
                                        style={styles.flatList}
                                        data={this.dropDownOptions}
                                        renderItem={this.renderItem}
                                        keyExtractor={(item, index) => index.toString()}
                                    />
                                </View>
                            </View> : null}

                        {/* Side Menu button modal  */}
                        {this.state.isSideMenuClick ?
                            <Animatable.View ref={'viewModalRef'} style={styles.viewModal}>
                                <KeyboardAwareScrollView style={{ flex: 1 }}>
                                    <TouchableOpacity style={{ color: 'white', marginTop: '14%', flex: 0.1 }} onPress={() => this.hidePopup()}>

                                        <Hamburger color="white" active={true} type="spinCross" onPress={() => this.hidePopup()} />
                                    </TouchableOpacity>

                                    <View style={{ margin: '5%' }}>
                                        <SearchBar
                                            ref='searchBar'
                                            placeholder='Search'
                                            onChangeText={this.onChangeSearchText}
                                            // onSearchButtonPress={...}
                                            onCancelButtonPress={() => this.setState({ isSearchbarDataShow: false })}
                                        />
                                    </View>
                                    {this.state.isSearchbarDataShow ? <FlatList
                                        style={styles.flatListSearchbar}
                                        data={this.arrayData}
                                        renderItem={this.renderSearchRow}
                                        keyExtractor={(item, index) => index.toString()}
                                    /> : null}

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
                                            marginBottom: '5%',
                                        }}>
                                        {/* <Image style={styles.imgUser} source={getThumbnail(user.data)} /> */}
                                        <Image style={styles.imgUser} source={require('../assets/avatar-main-1.jpg')} />
                                    </Animatable.View>

                                    <TouchableOpacity style={styles.btnPremium} onPress={() => this.props.navigation.navigate("Plan")}>
                                        <View style={styles.viewPremium}>


                                            <Logo color={'rgb(42, 173,177)'} style={{ marginBottom: '15%' }} width="60px" height="30px" />


                                            <Text style={styles.textPremium}> Premium</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <Text style={styles.textUserName}> Lois Stokes </Text>

                                    <FlatList
                                        style={styles.flatList}
                                        data={this.arrayData}
                                        renderItem={this.renderModalItem}
                                        keyExtractor={(item, index) => index.toString()}
                                    />
                                </KeyboardAwareScrollView>
                            </Animatable.View> : null}

                    </KeyboardAwareScrollView>

                </View>
            </SafeAreaView>

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