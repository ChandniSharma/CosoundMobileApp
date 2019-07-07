
import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../stylesheet/Checkout.style';
import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/Zocial";
import Icon3 from "react-native-vector-icons/FontAwesome";
import Icon4 from "react-native-vector-icons/MaterialIcons";
import SideMenu from '../../src/views/common/SideMenu';
import HeaderMenuAndBell from '../../src/views/common/HeaderMenuAndBell';
import CustomFooter from '../components/common/CustomFooter';
import Notifications from '../containers/Notifications'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from 'react-navigation';
import CardView from '../views/common/CardView';
import SidebarCheckout from "./Checkout/SideBarCheckout";
import { isNull } from "lodash";
import { getCardDetails } from "../utils";
export default class CheckoutComponent extends Component {
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
    this.setState({ isSideMenuClick: true })
  }
  hidePopup() {
    this.setState({ isSideMenuClick: false })
  }
  showNotification() {
    this.setState({ isNotificationShow: true, isSideMenuClick: false })
  }
  render() {
   
      const {
        user,
        cart,
        payment,
        placeOrder,
        cardDetails,
        onRadioSelect,
        confirmPayment,
        navigation
      } = this.props;
    
    return (
      <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={{ flex: 1 }}>
      {!this.state.isSideMenuClick ? <HeaderMenuAndBell notificationCount = {this.props.notificationCount} colors={this.state.isBottomViewShow ? this.state.headerColor : this.state.headerColorMix} onPressPopup={() => this.showPopup()} isNotificationShow={this.state.isNotificationShow} onPressBell={() => this.setState({ isNotificationShow: !this.state.isNotificationShow })} /> : null}
        <View style={{ flex: 1 }}>
        {!this.state.isNotificationShow? <KeyboardAwareScrollView style={{ backgroundColor: 'rgb(245,245,245)' }}>
            <View style={{ flex: 0.4, marginBottom: '5%' }}>
              <CardView>
                <Text style={[styles.titleText, { paddingTop: '5%', paddingBottom: '5%' },]}>Saved Payment Options</Text>
                {/* Single line row */}
                <View style={{ width: '95%', height: 2, backgroundColor: 'lightgray', alignSelf: 'center', bottom: 0 }} />
              </CardView>
              {/* A/c Balance View */}
              <CardView>
                <View style={{ flexDirection: 'row', marginTop: '5%', marginBottom: '5%' }}>
                  <TouchableOpacity style={[styles.circleButton, {marginLeft:'5%'} ]} >
                    {/* <Icon name="checkcircleo" style={{ fontSize: '', marginLeft: '5%', }} /> */}
                  </TouchableOpacity>
                  <Icon4 name= "account-balance"  style={{marginLeft: '2%',fontSize:25}}/>
                  {/* <Image style={{ marginLeft: '2%', width: 80, height: 80, borderRadius: 40 }} source={{ uri: getThumbnail(user.data) }} />  */}
                  <Text style={[styles.subTitle, { marginLeft: '2%', }]}>Account balance</Text>
                </View>
                {/* Single line row */}
                <View style={{ width: '95%', height: 0.5, backgroundColor: 'lightgray', alignSelf: 'center', bottom: 5 }} />
              </CardView>
              {/* Credit Card View */}
              <CardView>
                <View style={{ flexDirection: 'row',  marginTop: '5%', marginBottom: '5%', }}>
                  <TouchableOpacity style={[styles.circleButton, {marginLeft:'5%', justifyContent:'center'} ]} >
                    {/* <Icon name="checkcircleo" style={{ fontSize: '', marginLeft: '5%', }} /> */}
                    {getCardDetails(cardDetails.data)? <Image style={styles.imgTickMark} source={require('../assets/tickMark.png')} /> : <Image />}
                  </TouchableOpacity>
                  {/* <Image source={{uri:getCardIcon(cardDetails.data)}} /> this will replace user image*/}
                  <Icon name="creditcard" style={{marginLeft: '2%',fontSize:25}}/>
                  {/* <Image style={{ marginLeft: '2%', width: 80, height: 80, borderRadius: 40 }} source={{ uri: getThumbnail(user.data) }} />  */}
                  {!getCardDetails(cardDetails.data)? <Text style={[styles.subTitle, { marginLeft: '2%', }]}>Card</Text>
                  :<View style={{flexDirection:'row', flex:1}}> 
                     <Text style={[styles.subTitle, { marginLeft: '2%',flex:0.8 }]}>{getCardDetails(cardDetails.data).type}</Text>
                    <Text style={[styles.subTitle, { right: '2%', flex:0.3}]}>{getCardDetails(cardDetails.data).number}</Text>
                    </View> 
                  }
                </View>
                {/* Single line row */}
                <View style={{ width: '95%', height: 0.5, backgroundColor: 'lightgray', alignSelf: 'center', bottom: 0 }} />
              </CardView>
              {/* Credit Card View */}
              <CardView>
                <View style={{ flexDirection: 'row', marginTop: '5%', marginBottom: '5%', }}>
                  <TouchableOpacity style={[styles.circleButton, {marginLeft:'5%'} ]} >
                    {/* <Icon name="checkcircleo" style={{ fontSize: '', marginLeft: '5%', }} /> */}
                  </TouchableOpacity>
                  {/* <Image source={{uri:getCardIcon(cardDetails.data)}} /> this will replace user image*/}
                  <Icon1 name="paypal" style={{marginLeft: '2%',fontSize:25}}/>
                  {/* <Image style={{ marginLeft: '2%', width: 80, height: 80, borderRadius: 40 }} source={{ uri: getThumbnail(user.data) }} />  */}
                  <Text style={[styles.subTitle, { marginLeft: '2%', }]}>Paypal</Text>
                </View>
                {/* Single line row */}
                <View style={{ width: '95%', height: 0.5, backgroundColor: 'lightgray', alignSelf: 'center', bottom: 0 }} />
              </CardView>
              {/* Credit Card View */}
              <CardView>
                <View style={{ flexDirection: 'row', marginTop: '5%', marginBottom: '5%', }}>
                  <TouchableOpacity style={[styles.circleButton, {marginLeft:'5%'} ]} >
                    {/* <Icon name="checkcircleo" style={{ fontSize: '', marginLeft: '5%', }} /> */}
                  </TouchableOpacity>
                  {/* <Image source={{uri:getCardIcon(cardDetails.data)}} /> this will replace user image*/}
                  <Icon3 name="bitcoin" style={{marginLeft: '2%',fontSize:25}}/>
                  {/* <Image style={{ marginLeft: '2%', width: 80, height: 80, borderRadius: 40 }} source={{ uri: getThumbnail(user.data) }} />  */}
                  <Text style={[styles.subTitle, { marginLeft: '2%', }]}>Bitcoin</Text>
                </View>
                {/* Single line row */}
                <View style={{ width: '95%', height: 0.5, backgroundColor: 'lightgray', alignSelf: 'center', bottom: 0 }} />
              </CardView>
              {/* Credit Card View */}
              <CardView>
                <View style={{ flexDirection: 'row', marginTop: '5%', marginBottom: '5%', }}>
                  <Text style={[styles.addPaymentText, { marginLeft: '5%', }]}>Add Payment Option</Text>
                  <TouchableOpacity style={{ marginLeft: '2%' }} >
                    <Icon name="pluscircle" style={{ fontSize: 30, marginLeft: '2%', color: '#20ACAC' }} />
                  </TouchableOpacity>
                </View>
                {/* Single line row */}
                <View style={{ width: '95%', height: 0.5, backgroundColor: 'lightgray', alignSelf: 'center', bottom: -8 }} />
              </CardView>
            </View>
            <View style={{ marginTop: '20%', flex: 0.3 }}>
              <SidebarCheckout  
                cart={cart}
                payment={payment}
                placeOrder={placeOrder}
                confirmPayment={confirmPayment}
                cardExists={!isNull(getCardDetails(cardDetails.data).number)}
                navigation ={navigation}
             />
            </View>
            <View style={{ flex: 0.3 }}>
            <CustomFooter />
            </View>
            {/* Side Menu button modal  */}
          {this.state.isSideMenuClick ? <SideMenu navigation={this.props.navigation}  hidePopup={() => this.hidePopup()} showNotification={() => this.showNotification()} /> : null}

          </KeyboardAwareScrollView>
          :    
          <View>
        <Notifications navigation={navigation} hidePopup={() => this.hideNotificationView()} /></View> }
        </View>
      </SafeAreaView>
    )
  }
}