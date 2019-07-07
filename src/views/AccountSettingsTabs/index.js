import React from "react";
import { View, Text, TouchableHighlight, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from "../../stylesheet/Account.style";
import { SafeAreaView } from 'react-navigation';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from "react-native-vector-icons/AntDesign";
import Icon3 from "react-native-vector-icons/Ionicons";
import SideMenu from '../common/SideMenu';
import SettingsHeader from '../common/SettingsHeader';
import Notifications from '../../../src/containers/Notifications'
import TabComponent from "./TabComponent";
import CustomFooter from "../../components/common/CustomFooter";
import HeaderMenuAndBell from '../common/HeaderMenuAndBell';

const buttonName = {
    contactInfo: "Contact Information",
    details: 'Details',
    changePassword: 'Change Password',
    paymentDetail: "Payment Details",
    other: "Other",
    notificationSettings: 'Notification Settings'
}

class AccountSettingsTabs extends React.PureComponent {
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
        this.arrayMobileNumber = [];
        this.arrayButtons = [];
        this.dropDownOptions = [{ name: 'Privacy', image: '' }, { name: 'Communication', image: 'wechat' }, { name: 'Support Center', image: 'customerservice' }],
            this.arrayData = [{ name: 'Market', image: '', count: 0 }, { name: 'Messages', image: 'message', count: 3 }, { name: 'Profile', image: '', count: 0 }, { name: 'Notifications', image: 'bell', count: 24 }, { name: 'Cart', image: '', count: 2 }]

    }
    showNotification() {
        this.setState({ isNotificationShow: true, isSideMenuClick: false })
    }
    
    renderItem = (item, ) => {
        let index = item.index;
        let icon = "";

        if (index === 0) {
            icon = <Image source={require('../../assets/Image/privacy.png')} style={{ tintColor: 'rgb(59, 147, 187)', marginRight: '7%', width: 20, height: 20 }} />
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

    showPopup() {
        this.setState({ isSideMenuClick: true,
            isNotificationShow: false
         })
    }
    hidePopup() {
        this.setState({ isSideMenuClick: false })
    }
    hideNotificationView() {
        this.setState({ isNotificationShow: false })
    }
    _navigateToNotificationView() {
        this.setState({ isNotificationShow: true })
    }
    render() {
        const {
            user,
            genres,
            details,
            tabIndex,
            switchTab,
            profilePic,
            contactInfo,
            _updateUser,
            changePassword,
            paymentDetails,
            _changePassword,
            uploadProfilePic,
            navigation,
            notificationCount
        } = this.props;

        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
                {!this.state.isSideMenuClick ? <HeaderMenuAndBell notificationCount = {notificationCount} colors={this.state.isBottomViewShow ? this.state.headerColor : this.state.headerColorMix} onPressPopup={() => this.showPopup()} isNotificationShow={this.state.isNotificationShow} onPressBell={() => this.setState({ isNotificationShow: !this.state.isNotificationShow })} /> : null}

                <View style={{ flex: 1 }}>
                    <KeyboardAwareScrollView style={{ backgroundColor: 'rgb(245,245,245)' }}>
                        <View style={{ flex: 0.3, backgroundColor: 'red' }}>
                            <SettingsHeader
                                user={user}
                                profilePic={profilePic}
                                uploadProfilePic={uploadProfilePic}
                                uploadable={true}
                            />
                        </View>
                        <TouchableOpacity style={{ marginTop: '2%', marginBottom: '2%', flex: 0.1 }} onPress={() => this.setState({ isDropDownclick: true })}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon3 name="ios-settings" style={{ marginLeft: '2%', marginBottom: '1%', flex: 0.1, color: 'rgb(140,91,204)', fontSize: 25 }} />
                                <Text style={[styles.titleAccount, { flex: 0.8, marginTop: '0.5%' }]}> Account Settings</Text>

                                <View style={{ width: 30, height: 30, borderRadius: 18, marginRight: '5%', marginBottom: '5%', flex: 0.1, backgroundColor: 'white' }}>
                                    <Icon name="down" color='#8E8E8E' style={{ fontSize: 15, alignSelf: 'center', marginTop: '22%', fontWeight: 'bold' }} />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={{ flexDirection: "row", alignSelf: 'center', marginTop: '2%', flex: 0.1 }}>
                            <TouchableHighlight style={[styles.buttonSettings]} underlayColor="white" onPress={() => switchTab(0)}>
                                <Text style={styles.textSettings}>{buttonName.contactInfo}</Text>
                            </TouchableHighlight>

                            <TouchableHighlight style={styles.buttonSettings} underlayColor="white" onPress={() => switchTab(1)}>
                                <Text style={styles.textSettings}>{buttonName.details}</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={{ flexDirection: "row", marginBottom: '2%', marginLeft: '2%', marginRight: '2%', flex: 0.1 }}>

                            <TouchableHighlight style={styles.buttonSettings} underlayColor="white" onPress={() => switchTab(2)}>
                                <Text style={styles.textSettings}>{buttonName.changePassword}</Text>
                            </TouchableHighlight>

                            <TouchableHighlight style={[styles.buttonSettings]} underlayColor="white" onPress={() => switchTab(4)}>
                                <Text style={styles.textSettings}>{buttonName.notificationSettings}</Text>
                            </TouchableHighlight>

                            <TouchableHighlight style={styles.buttonSettings} underlayColor="white" onPress={() => switchTab(4)}>
                                <Text style={styles.textSettings}>{buttonName.other}</Text>
                            </TouchableHighlight>

                        </View>
                        <View style={{ flex: 0.4 }}>
                            <TabComponent
                                user={user}
                                genres={genres}
                                details={details}
                                tabIndex={tabIndex}
                                contactInfo={contactInfo}
                                _updateUser={_updateUser}
                                paymentDetails={paymentDetails}
                                changePassword={changePassword}
                                _changePassword={_changePassword}
                            />
                        </View>
                        {this.state.isDropDownclick ?
                            <View style={styles.viewModalAccount}>

                                <TouchableOpacity style={{ marginTop: '54.0%', backgroundColor: 'white', height: 40 }} onPress={() => this.setState({ isDropDownclick: false })}>
                                    <View style={{ flexDirection: 'row', height: 50, marginTop: '2%' }}>
                                        <Icon3 name="ios-settings" style={{ marginLeft: '2%', marginBottom: '1%', flex: 0.1, color: 'rgb(140,91,204)', fontSize: 25 }} />
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
                        {this.state.isSideMenuClick ? <SideMenu navigation={this.props.navigation} hidePopup={() => this.hidePopup()} showNotification={() => this.showNotification()} /> : null}
                        {((tabIndex === 0 || tabIndex === 1 || tabIndex === 2 || tabIndex === 3) && !this.state.isSideMenuClick) && (<View style={{ marginTop: '7%' }}>
                            <CustomFooter />
                        </View>)}

                    </KeyboardAwareScrollView>
                    {/* notification view show */}
                    {this.state.isNotificationShow ? <Notifications navigation={navigation} hidePopup={() => this.hideNotificationView()} /> : null}
                </View>
            </SafeAreaView>
        )
    }
}

export default AccountSettingsTabs;
