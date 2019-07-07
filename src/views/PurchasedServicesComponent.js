import React from "react";
import { View, Text, TouchableHighlight, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from "../stylesheet/PurchasedService.style";
import { SafeAreaView } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import HeaderMenuAndBell from '../views/common/HeaderMenuAndBell';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from "react-native-vector-icons/AntDesign";
import Icon3 from "react-native-vector-icons/Ionicons";
import SideMenu from '../views/common/SideMenu';
import Notifications from '../../src/containers/Notifications';
import CustomFooter from '../components/common/CustomFooter'
import ServiceDropDownView from './common/ServiceDropDownView';

class PurchasedServicesComponent extends React.PureComponent {
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
      selectedSortValue: "Name",
      isSortValuePopupShow: false,
    }
    this.arrayMobileNumber = [];
    this.arrayButtons = [];
    this.arraySortBy = ["Name", "Date", "Value"];
    this.dropDownOptions = [{ name: 'Privacy', image: '' }, { name: 'Communication', image: 'wechat' }, { name: 'Support Center', image: 'customerservice' }],
      this.arrayData = [{ name: 'Market', image: '', count: 0 }, { name: 'Messages', image: 'message', count: 3 }, { name: 'Profile', image: '', count: 0 }, { name: 'Notifications', image: 'bell', count: 24 }, { name: 'Cart', image: '', count: 2 }]

  this.arrayData = [
    {Title:"Service Title", subTitle:"Bassline Drift ", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"},

    {Title:"Service Title", subTitle:"Bassline Drift ", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"},

    {Title:"Long Service Title which may be in another line ", subTitle:"Bassline Drift ", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"},
]
    }
  onClickSettingsButton(name) {
  }
  selectSortValue(name) {
    let selectedSortValue = '';
    if (name === this.arraySortBy[0]) {
      selectedSortValue = 'Name';
    } else if (name === this.arraySortBy[1]) {
      selectedSortValue = 'Date';
    } else if (name === this.arraySortBy[2]) {
      selectedSortValue = 'Value';
    }
    this.setState({ 
      selectedSortValue: selectedSortValue, 
      isSortValuePopupShow:false
    });
  }
  showPopup() {
    this.setState({ isSideMenuClick: true })
  }
  hidePopup() {
    this.setState({ isSideMenuClick: false })
  }
  hideNotificationView() {
    this.setState({ isNotificationShow: false })
  }
  _navigateToNotificationView() {
    this.setState({ isNotificationShow: true })
    //this.props.navigation.navigate('Notification');
  }
  showSortValuePopup() {
    this.setState({ isSortValuePopupShow: true });

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

  renderServiceItem = (itemDetail) => {
    let item = itemDetail.item;
    return (
      <View>
        <TouchableHighlight>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Image style={{ marginLeft: '2%', marginTop: '2%' }} source={require('../assets/avatar3.jpg')} />
              <View style={{ margin: '2%', flex: 1 }}>
                  <Text style={[styles.textSubTitleNotSelected, { flex: 0.8, color: item.is_read ? "#20acac" : "#8e5acd" }]}>Service Title </Text>
                  <Text style={[styles.textSubTitleNotSelected, { flex: 0.8, color: item.is_read ? "#20acac" : "#8e5acd" }]}>Subtitle of Service </Text>
                <View >
                 <Text style={styles.textDescription}> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </Text>
                </View>
              </View>
            </View>
            <View style={{ width: '80%', height: 1, backgroundColor: 'rgba(38,38,38, 0.52)', marginTop: '2%', alignSelf: 'center' }} />
          </View>
        </TouchableHighlight>
      </View>)
  }


  showNotification() {
    this.setState({ isNotificationShow: true, isSideMenuClick: false })
  }
  
  render() {
    const {
      navigation
    } = this.props;
    return (
      <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
       {!this.state.isSideMenuClick ? <HeaderMenuAndBell notificationCount = {this.props.notificationCount} colors={this.state.isBottomViewShow ? this.state.headerColor : this.state.headerColorMix} onPressPopup={() => this.showPopup()} isNotificationShow={this.state.isNotificationShow} onPressBell={() => this.setState({ isNotificationShow: !this.state.isNotificationShow })} /> : null}
        <View style={{ flex: 1 }}>
          <KeyboardAwareScrollView style={{ backgroundColor: 'rgb(245,245,245)' }}>
            <View style={{ flex: 0.3, backgroundColor: 'red' }}>
            <LinearGradient start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} colors={this.state.headerColorMix} style={{ width: '100%', height: 200 }}>
             <Text style={styles.textUserName}> Lois Stokes </Text>
              </LinearGradient>
            </View>
            <View style={{ marginTop: '2%', marginBottom: '2%', flex: 0.1 }}>
              <TouchableOpacity onPress={() => this.setState({ isDropDownclick: true })}>
                <View style={{ flexDirection: 'row' }}>
                  <Icon3 name="ios-settings" style={{ marginLeft: '2%', marginBottom: '1%', flex: 0.1, color: 'rgb(140,91,204)', fontSize: 25 }} />
                  <Text style={[styles.titleAccount, { flex: 0.8, marginTop: '0.5%' }]}> Account Settings</Text>
                  <View style={{ width: 30, height: 30, borderRadius: 18, marginRight: '5%', marginBottom: '5%', flex: 0.1, backgroundColor: 'white' }}>
                    <Icon name="down" color='#8E8E8E' style={{ fontSize: 15, alignSelf: 'center', marginTop: '22%', fontWeight: 'bold' }} />
                  </View>
                </View>
                </TouchableOpacity>    
              </View>

                {/* Notification view */}
                <View style={{ flex: 0.4 }}>
                </View>
                {this.state.isDropDownclick ?
                 <ServiceDropDownView /> 
                  : null}
                  <FlatList
                  style={styles.flatList}
                  renderItem={this.renderServiceItem}
                  extraData={this.props}
                  data={this.arrayData}
                  keyExtractor={(item, index) => index.toString()}
                />
                {/* Side Menu button modal  */}
                {this.state.isSideMenuClick ? <SideMenu navigation={this.props.navigation}  hidePopup={() => this.hidePopup()} showNotification={() => this.showNotification()} /> : null}
                <CustomFooter />
                </KeyboardAwareScrollView>
              {/* notification view show */}
              {this.state.isNotificationShow ? <Notifications navigation={navigation} hidePopup={() => this.hideNotificationView()} /> : null}
            </View>
            </SafeAreaView>
        )
      }
  }
  
  export default PurchasedServicesComponent
  ;
