import React from "react";
import { Paginator } from "../../hoc";
import { SafeAreaView } from 'react-navigation';
import ServiceListing from "../common/ServiceListing";
import SettingsHeader from "../common/SettingsHeader";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SideMenu from '../common/SideMenu';
import { noDataProps } from "./data";
import Icon3 from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/AntDesign";
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import styles from '../../stylesheet/createservice.style';
import ServiceDropDownView from '../common/ServiceDropDownView';
import HeaderMenuAndBell from '../common/HeaderMenuAndBell';
import Notifications from '../../../src/containers/Notifications'

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
    }
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
  closePopup=() =>{
    this.setState({ isDropDownclick: !this.state.isDropDownclick })
  }
  render() {
    const {
      user,
      sort,
      purchasedServices,
      fetchPurchasedServices,
      navigation
    } = this.props;
    const { paginationData } = purchasedServices;
    return (
      <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
      {!this.state.isSideMenuClick ? <HeaderMenuAndBell colors={this.state.isBottomViewShow ? this.state.headerColor : this.state.headerColorMix} onPressPopup={() => this.showPopup()} isNotificationShow={this.state.isNotificationShow} onPressBell={() => this.setState({ isNotificationShow: !this.state.isNotificationShow })} /> : null}
       <View style={{ flex: 1 }}>
        <KeyboardAwareScrollView style={{ backgroundColor: 'rgb(245,245,245)' }}>
        <View style={{ flex: 0.3, backgroundColor: 'red' }}>
            <SettingsHeader
                user={user}
                navigation ={this.props.navigation}
            />
          </View>
          <View>
            <TouchableOpacity style={{ backgroundColor: 'white', height: 40, marginBottom:'2%' }} onPress={() => this.setState({ isDropDownclick: true })}>
              <View style={{ flexDirection: 'row', height: 50, marginTop: '2%' }}>
                <Icon3 name="ios-settings" style={{ marginLeft: '2%', marginBottom: '1%', flex: 0.1, color: 'rgb(140,91,204)', fontSize: 25 }} />
                <Text style={[styles.titleAccount, { flex: 0.8 }]}> Purchased Services</Text>
                <View style={{ width: 30, height: 30, borderRadius: 18, marginRight: '5%', marginBottom: '5%', flex: 0.1, backgroundColor: 'white', borderColor: '#8E8E8E', borderWidth: 0.3 }}>
                  <Icon name="up" color='#8E8E8E' style={{ fontSize: 15, alignSelf: 'center', marginTop: '22%', fontWeight: 'bold' }} />
                </View>
              </View>
            </TouchableOpacity>
            <Paginator
              sort={sort}
              isLoaderInternal
              {...noDataProps}
              services={purchasedServices}
              component={ServiceListing}
              callAPI={fetchPurchasedServices}
              page={paginationData.page}
              page_count={paginationData.page_count}
              navigation ={this.props.navigation}
            />
          </View>
         {this.state.isDropDownclick? <ServiceDropDownView selectedIndex = {-1} isDropDownclick={this.state.isDropDownclick} closePopup={this.closePopup} navigation ={this.props.navigation}/>:null}
          </KeyboardAwareScrollView>
          {this.state.isNotificationShow ? <Notifications navigation={navigation} hidePopup={() => this.hideNotificationView()} /> : null}
          {this.state.isSideMenuClick ? <SideMenu navigation={this.props.navigation} hidePopup={() => this.hidePopup()} showNotification={() => this.showNotification()} /> : null}
        </View>
      </SafeAreaView>
    );
  }
}

export default PurchasedServicesComponent;
