import { Component } from "react";
import styles from "../stylesheet/Account.style";
import { SafeAreaView } from 'react-navigation';
import React from "react";
import { FlatList, Image, Text, TextInput, TouchableHighlight, View, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Logo from './common/logo';
import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/EvilIcons";
import Icon3 from "react-native-vector-icons/Ionicons";
import Hamburger from 'react-native-hamburger';
import SideMenu from './common/SideMenu';

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
        this.arrayMobileNumber = [];
        this.arrayButtons = [];
        this.dropDownOptions = [{ name: 'Privacy', image: '' }, { name: 'Communication', image: 'wechat' }, { name: 'Support Center', image: 'customerservice' }],
        this.arrayData = [{ name: 'Market', image: '', count: 0 }, { name: 'Messages', image: 'message', count: 3 }, { name: 'Profile', image: '', count: 0 }, { name: 'Notifications', image: 'bell', count: 24 }, { name: 'Cart', image: '', count: 2 }]
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
    }

    showPopup() {
        this.setState({ isSideMenuClick: true })
    }
    hidePopup() {
        this.setState({ isSideMenuClick: false })
    }
    onChangeSearchText = () => {
        this.setState({ isSearchbarDataShow: true })
    }
    onChangeMobileNumber = (value) => {
    }
    onClickMobBottom = () => {
        let button = <TouchableOpacity style={{ width: 200, height: 40 }} onPress={this.removeMobileNumber()}>
            <View>
                <Text>{this.state.mobileNumber}</Text>
            </View>
        </TouchableOpacity>
        this.arrayMobileNumber.push(this.state.mobileNumber);
        this.arrayButtons.push(button);

        this.setState({
            isBottomMobileShow: false,
            mobileNumber: ''
        });
        return this.arrayButtons
    }
    removeMobileNumber() {
    }
    renderSearchRow = (item) => {
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
    showNotification() {
        this.setState({ isNotificationShow: true, isSideMenuClick: false })
    }

    renderModalItem = (item) => {
        let icon = "";
        let viewNotification = <View />
        let view
        if (item.index === 0) {
            icon = <Icon1 name="briefcase" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 18, color: 'white' }} />

        } else if (item.index === 1) {
            icon = <Icon1 color="white" name="message" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 18 }} />
            viewNotification =  <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: '#424242', justifyContent: 'center' }}>
            <Text style={styles.textModalData}>{item.item.count}</Text>
                 </View>
        } else if (item.index === 2) {
            icon = <Icon name="user" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 18, tintColor: 'white' }} />

        } else if (item.index === 3) {
            icon = <Icon2 name="bell" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 18, tintColor: 'white' }} />
            viewNotification =  <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: '#424242', justifyContent: 'center' }}>
            <Text style={styles.textModalData}>{item.item.count}</Text>
                 </View>
        } else if (item.index === 4) {
            icon = <Icon name="shoppingcart" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 18, tintColor: 'white' }} />
            viewNotification =  <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: '#424242', justifyContent: 'center' }}>
            <Text style={styles.textModalData}>{item.item.count}</Text>
                 </View>
        }

        return (
            <View style={{ height: 50, justifyContent: 'center' }}>
                <TouchableOpacity style={{ margin: '2%' }} onPress={() => this.setState({ isDropDownclick: false })}>
                    <View style={{ flexDirection: "row" }}>
                        {icon}
                        <Text style={[styles.textModalData, { marginRight: '5%' }]}>{item.item.name}</Text>
                       {viewNotification}
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    renderItem = (item, ) => {
        let index = item.index;
        let icon = "";

        if (index === 0) {
            icon = <Image source={require('../assets/Image/privacy.png')} style={{ tintColor: 'rgb(59, 147, 187)', marginRight: '7%', width: 20, height: 20 }} />
        } else if (index === 1) {
            icon = <Icon name="wechat" style={{ flex: 0.1, color: 'rgb(59, 147, 187)', marginRight: '3%', fontSize: 18 }} />
        } else {
            icon = <Icon name="customerservice" style={{ flex: 0.1, color: 'rgb(59, 147, 187)', marginRight: '3%', fontSize: 18 }} />
        }
        return (
            <View style={{ height: 50, justifyContent: 'center' }}>
                <TouchableOpacity style={{ margin: '2%' }} onPress={() => this.setState({ isDropDownclick: false })}>
                    <View style={{ flexDirection: "row" }}>
                        {icon}
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
                    <TouchableOpacity style={{ color: 'white', marginTop: '14%', flex: 0.1, marginLeft:'4%' }} onPress={() => this.showPopup()}>
                        <Hamburger color="white" active={false} type="spinCross" onPress={() => this.showPopup()} />
                    </TouchableOpacity>
                    <Logo color={'#ffffff'} style={{ flex: 0.7, marginLeft: '25%' }} width="130px" height="44px" />
                    <View style={{ flex: 0.3 }} />
                    <TouchableOpacity style={[styles.searchView, { flex: 0.2, alignSelf: 'flex-end', marginRight: '5%' }]} onPress={this._navigateToNotificationView}>
                        <Icon2 name="bell" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 40, tintColor: 'white' }} />
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
                                <Image style={styles.imgUser} source={require('../assets/avatar-main-1.jpg')} />
                            </Animatable.View>
                            <Text style={styles.textUserName}> Lois Stokes </Text>
                        </LinearGradient>
                        <TouchableOpacity style={{ marginTop: '2%', marginBottom: '2%' }} onPress={() => this.setState({ isDropDownclick: true })}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon3 name="ios-settings" style={{ marginLeft: '2%', marginBottom: '1%', flex: 0.1, color: 'rgb(140,91,204)', fontSize: 18 }} />
                                <Text style={[styles.titleAccount, { flex: 0.8, marginTop: '0.5%' }]}> Account Settings</Text>

                                <View style={{ width: 30, height: 30, borderRadius: 18, marginRight: '5%', marginBottom: '5%', flex: 0.1, backgroundColor: 'white' }}>
                                    <Icon name="down" color='#8E8E8E' style={{ fontSize: 15, alignSelf: 'center', marginTop: '22%', fontWeight: 'bold' }} />
                                </View>
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
                            name={"email"}
                        />

                        <TextInput
                            style={styles.inputStyle}
                            placeholder={'Password'}
                            secureTextEntry
                            name={"password"}
                        />

                        <TextInput
                            style={styles.inputStyle}
                            placeholder={'Mobile Number'}
                            onChangeText={val => this.onChangeMobileNumber(val)}
                            name={"mobileNumber"}
                        />

                        {this.state.isDropDownclick ?
                            <View style={styles.viewModalAccount}>
                                <TouchableOpacity style={{ marginTop: '55.5%', backgroundColor: 'white', height: 40 }} onPress={() => this.setState({ isDropDownclick: false })}>
                                    <View style={{ flexDirection: 'row', height: 50, marginTop: '2%' }}>
                                        <Icon3 name="ios-settings" style={{ marginLeft: '2%', marginBottom: '1%', flex: 0.1, color: 'rgb(140,91,204)', fontSize: 18 }} />
                                        <Text style={[styles.titleAccount, { flex: 0.8 }]}> Account Settings</Text>
                                        <View style={{ width: 30, height: 30, borderRadius: 18, marginRight: '5%', marginBottom: '5%', flex: 0.1, backgroundColor: 'white', borderColor: '#8E8E8E', borderWidth: 0.3 }}>
                                            <Icon name="up" color='#8E8E8E' style={{ fontSize: 15, alignSelf: 'center', marginTop: '22%', fontWeight: 'bold' }} />
                                        </View>
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
                        {this.state.isSideMenuClick ? <SideMenu navigation={this.props.navigation}  hidePopup={() => this.hidePopup()} showNotification={() => this.showNotification()} /> : null}
                    </KeyboardAwareScrollView>
                </View>
            </SafeAreaView>
        )
    }

}