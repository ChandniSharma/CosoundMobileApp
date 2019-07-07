import React from "react";

import ServiceListing from "../common/ServiceListing";
import SettingsHeader from "../common/SettingsHeader";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Paginator } from "../../hoc";

import { noDataProps } from "./data";
import SideMenu from '../common/SideMenu';
import Icon3 from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/AntDesign";

import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../stylesheet/createservice.style';
import ServiceDropDownView from '../common/ServiceDropDownView';
import HeaderMenuAndBell from '../common/HeaderMenuAndBell';
import Notifications from '../../../src/containers/Notifications'

import { SafeAreaView } from 'react-navigation';

class OfferedServicesComponent extends React.PureComponent {
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
  closePopup=() =>{
    this.setState({ isDropDownclick: !this.state.isDropDownclick })
  }
  _navigateToNotificationView() {
      this.setState({ isNotificationShow: true })
      //this.props.navigation.navigate('Notification');
  }
  render() {
    const { user, offeredServices, fetchOfferedServices, sort,
      navigation } = this.props;
    const { paginationData } = offeredServices;
    return (
     
      <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
      {!this.state.isSideMenuClick ? <HeaderMenuAndBell colors={this.state.isBottomViewShow ? this.state.headerColor : this.state.headerColorMix} onPressPopup={() => this.showPopup()} isNotificationShow={this.state.isNotificationShow} onPressBell={() => this.setState({ isNotificationShow: !this.state.isNotificationShow })} /> : null}
      <View style={{ flex: 1 }}>
       <KeyboardAwareScrollView style={{ backgroundColor: 'rgb(245,245,245)' }}>        
        <View style={{ flex: 0.3, backgroundColor: 'red' }}>
          <SettingsHeader user={user} navigation ={this.props.navigation} />
          </View>
          <View>
            {/* Router tabs */}
            {/*<TabHeader headers={servicesHeaders} />*/}
            {/* Router tabs end */}
            <TouchableOpacity style={{ backgroundColor: 'white', height: 40, marginBottom:'2%' }} onPress={() => this.setState({ isDropDownclick: true })}>
                      <View style={{ flexDirection: 'row', height: 50, marginTop: '2%' }}>
                        <Icon3 name="ios-settings" style={{ marginLeft: '2%', marginBottom: '1%', flex: 0.1, color: 'rgb(140,91,204)', fontSize: 25 }} />
                        <Text style={[styles.titleAccount, { flex: 0.8 }]}> Offered Services</Text>
                        <View style={{ width: 30, height: 30, borderRadius: 18, marginRight: '5%', marginBottom: '5%', flex: 0.1, backgroundColor: 'white', borderColor: '#8E8E8E', borderWidth: 0.3 }}>
                          <Icon name="up" color='#8E8E8E' style={{ fontSize: 15, alignSelf: 'center', marginTop: '22%', fontWeight: 'bold' }} />
                        </View>
                      </View>
                    </TouchableOpacity>
            <Paginator
              sort={sort}
              isLoaderInternal
              {...noDataProps}
              services={offeredServices}
              component={ServiceListing}
              callAPI={fetchOfferedServices}
              page={paginationData.page}
              page_count={paginationData.page_count}
              navigation ={this.props.navigation}
            />
          </View>
          {this.state.isDropDownclick? <ServiceDropDownView selectedIndex={0}  isDropDownclick={this.state.isDropDownclick} closePopup={this.closePopup} navigation ={this.props.navigation}/>:null}
          </KeyboardAwareScrollView>
          {this.state.isNotificationShow ? <Notifications navigation={this.props.navigation} hidePopup={() => this.hideNotificationView()} /> : null}
          {this.state.isSideMenuClick ? <SideMenu navigation={this.props.navigation} hidePopup={() => this.hidePopup()} showNotification={() => this.showNotification()} /> : null}
          </View>
      </SafeAreaView>
    );
  }
}

export default OfferedServicesComponent;
