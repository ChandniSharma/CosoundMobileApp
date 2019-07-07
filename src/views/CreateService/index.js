import React from "react";
// import Helmet from "react-helmet";
import { View, Text, Dimensions } from 'react-native';
import styles from '../../stylesheet/createservice.style';
import SideMenu from '../common/SideMenu';
import HeaderMenuAndBell from '../common/HeaderMenuAndBell';
import Notifications from '../../containers/Notifications';
import SettingsHeader from "../common/SettingsHeader";
const { height } = Dimensions.get('window');
const deviceHeight = height;
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from 'react-navigation';
import CreateServiceForm from "./CreateServiceForm";

class CreateServiceComponent extends React.Component {
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
    this.setState({ isSideMenuClick: true,isNotificationShow: false })    
  }
  hidePopup() {
    this.setState({ isSideMenuClick: false,
    })
   
  }
  showNotification() {
    this.setState({ isNotificationShow: true, isSideMenuClick: false })
  }
  render() {
    return (
      <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={{ flex: 1 }}>
        {!this.state.isSideMenuClick ? <HeaderMenuAndBell notificationCount = {this.props.notificationCount} colors={this.state.isBottomViewShow ? this.state.headerColor : this.state.headerColorMix} onPressPopup={() => this.showPopup()} isNotificationShow={this.state.isNotificationShow} onPressBell={() => this.setState({ isNotificationShow: !this.state.isNotificationShow })} /> : null}
        <View style={{ flex: 1 }}>
          <KeyboardAwareScrollView style={{ backgroundColor: 'rgb(245,245,245)',overflow: 'scroll' }}>
            <View style={{minHeight:deviceHeight-150}}>
              <View style={{ flex: 0.3 }}>
                <SettingsHeader
                  user={this.props.user}
                  uploadable={false}
                />
              </View>
              <View style={{flex:0.2}}>
                <Text style={[styles.noServiceText, { marginLeft: '10%', marginRight: '10%', marginTop: '5%', textAlign: 'center' }]}>
                  {"Nice! Let's create your service!"}
                </Text>
              </View>
              <View style={{flex:0.5, marginBottom:'10%'}}>
                <CreateServiceForm {...this.props} />
              </View>
            </View>
            {this.state.isSideMenuClick ? <SideMenu navigation={this.props.navigation}  hidePopup={() => this.hidePopup()} showNotification={() => this.showNotification()} /> : null}
          </KeyboardAwareScrollView>
          {/* notification view show */}
          {this.state.isNotificationShow ? <Notifications navigation={this.props.navigation} hidePopup={() => this.hideNotificationView()} /> : null}
        </View>
      </SafeAreaView>
    );
  }
}

export default CreateServiceComponent;
