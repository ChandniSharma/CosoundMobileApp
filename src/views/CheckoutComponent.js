
import React, { Component } from "react";
// import Helmet from "react-helmet";
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import styles from '../stylesheet/Checkout.style';
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/Zocial";
import Icon2 from "react-native-vector-icons/EvilIcons";
import Icon3 from "react-native-vector-icons/FontAwesome";
import Icon4 from "react-native-vector-icons/MaterialIcons";

import Hamburger from 'react-native-hamburger';
import SideMenu from '../../src/views/common/SideMenu';
import Logo from '../../src/views/common/logo';
import HeaderMenuAndBell from '../../src/views/common/HeaderMenuAndBell';
import CustomFooter from '../components/common/CustomFooter';
import Notifications from '../containers/Notifications'
//TabHeader
// import { servicesHeaders } from "../../constants/tabs";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from 'react-navigation';
import CardView from '../views/common/CardView';
import { getServiceLink, getThumbnail, getServiceThumbnail } from "../utils";
import Card from "../views/common/CardView";
import SidebarCheckout from "./Checkout/SideBarCheckout";

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
    console.log(" sidemnu ", this.state.isSideMenuClick);
  }
  hidePopup() {
    this.setState({ isSideMenuClick: false })
  }
  showNotification() {
    this.setState({ isNotificationShow: true, isSideMenuClick: false })
  }
  render() {
    const {navigation} = this.props;
    return (

      <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={{ flex: 1 }}>

        {/* {!this.state.isSideMenuClick ? <LinearGradient start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} colors={this.state.isBottomViewShow ? this.state.headerColor : this.state.headerColorMix} style={{ flexDirection: 'row', height: 100, width: '100%', alignItems: 'space-between', justifyContent: 'center' }}>

          <TouchableOpacity style={{ color: 'white', marginTop: '14%', flex: 0.1, marginLeft: '4%' }} onPress={() => this.showPopup()}>
            <Hamburger color="white" active={false} type="spinCross" onPress={() => this.showPopup()} />
          </TouchableOpacity>

          <Logo color={'#ffffff'} style={{ flex: 0.7, marginLeft: '25%' }} width="130px" height="44px" />

          <View style={{ flex: 0.3 }} />
          <TouchableOpacity style={[styles.searchView, { flex: 0.2, alignSelf: 'flex-end', marginRight: '5%' }]} onPress={() => this.setState({ isNotificationShow: !this.state.isNotificationShow })}>
          {this.state.isNotificationShow?<Icon name="close" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 38, tintColor: 'white' }} />: <Icon2 name="bell" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 40, tintColor: 'white' }} />}

             </TouchableOpacity>
        </LinearGradient> : null} */}

        {!this.state.isSideMenuClick ? <HeaderMenuAndBell notificationCount = {this.props.notificationCount} colors={this.state.isBottomViewShow ? this.state.headerColor : this.state.headerColorMix} onPressPopup={() => this.showPopup()} isNotificationShow={this.state.isNotificationShow} onPressBell={() => this.setState({ isNotificationShow: !this.state.isNotificationShow })} /> : null}


        <View style={{ flex: 1 }}>
        {!this.state.isNotificationShow? <KeyboardAwareScrollView style={{ backgroundColor: 'rgb(245,245,245)' }}>
            <View style={{ flex: 0.4, marginBottom: '5%' }}>


              {/* Making like a card  */}
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
                  <TouchableOpacity style={[styles.circleButton, {marginLeft:'5%'} ]} >
                    {/* <Icon name="checkcircleo" style={{ fontSize: '', marginLeft: '5%', }} /> */}
                  </TouchableOpacity>

                  {/* <Image source={{uri:getCardIcon(cardDetails.data)}} /> this will replace user image*/}

                  <Icon name="creditcard" style={{marginLeft: '2%',fontSize:25}}/>
                  {/* <Image style={{ marginLeft: '2%', width: 80, height: 80, borderRadius: 40 }} source={{ uri: getThumbnail(user.data) }} />  */}
                  <Text style={[styles.subTitle, { marginLeft: '2%', }]}>Credit Card</Text>

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

                  {/* <Image source={{uri:getCardIcon(cardDetails.data)}} /> this will replace user image*/}

                  {/* <Image style={{ marginLeft: '2%', width: 80, height: 80, borderRadius: 40 }} source={{ uri: getThumbnail(user.data) }} />  */}
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
              <SidebarCheckout />

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

//   {/* render1() {
//     return (

//       <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={{ flex: 1 }}>

//        

//         <View style={{ flex: 1, backgroundColor: 'pink' }}>
//           <KeyboardAwareScrollView style={{ backgroundColor: 'rgb(245,245,245)' }}>

//             <Text>Saved Payment Options</Text>
//             {/* Making like a card  */}
//             <View>
//               <View style={{ width: '95%', height: '0.5', backgroundColor: 'lightgray', marginTop: '1%' }} />
//               <View style={{ flexDirection: 'row', marginTop: '5%', justifyContent: 'center', }}>
//                 <TouchableOpacity  >
//                   <Icon name="checkcircleo" style={{ fontSize: '25', marginLeft: '5%', }} />
//                 </TouchableOpacity>

//                 <Image style={{ marginLeft: '2%', width: 80, height: 80, borderRadius: 40 }} source={{ uri: getThumbnail(user.data) }} style={} />
//                 <Text style={{marginLeft:'2%'}}>Account balance</Text>
//               </View>
//             </View>

//           </KeyboardAwareScrollView>
//         </SafeAreaView>




//         <View>
//           <View>
//             <View>
//               <View>
//                 <View>

//                   <View>
//                     <View
//                     >
//                       <View>
//                         { /* <input type="radio" name="payment" id="payment_1" /> */}
//                       </View>
//                       <View>
//                         { /* <img src={getThumbnail(user.data)} alt="avatar" /> */}
//                       </View>
//                       <Text>Account balance</Text>
//                     </View>
//                     { /* <View
//                        className={`cart-payment ${
//                          payment === "payment_2" ? "is-selected" : ""
//                        }`}
//                        onClick={() => onRadioSelect("payment_2")}
//                      > */ }
//                     <View>
//                       { /* <input
//                            type="radio"
//                            name="payment"
//                            id="payment_2"
//                            value="payment_2"
//                          /> */ }
//                     </View>
//                     <View>
//                       { /* <i
//                            className={`icon ${getCardIcon(cardDetails.data)}`}
//                          /> */ }
//                     </View>
//                     <Text>
//                       {getCardDetails(cardDetails.data).type} manraj
//                     </Text>
//                     <Text>
//                       {getCardDetails(cardDetails.data).number} manraj
//                     </Text>
//                     { /* </View> */}

//                     { /*
//                      <View
//                        className={`cart-payment ${
//                          payment === "payment_3" ? "is-selected" : ""
//                        }`}
//                        onClick={() => onRadioSelect("payment_3")}
//                      >
//                        <View className="cart-payment__checkbox">
//                          <input
//                            type="radio"
//                            name="payment"
//                            id="payment_3"
//                            value="payment_3"
//                          />
//                        </View>
//                        <View className="avatar">
//                          <i className="icon icon-pay-paypal" />
//                        </View>
//                        <View className="cart-payment__name">Paypal</View>
//                        <View className="cart-payment__secured" />
//                      </View>

//                      <View
//                        className={`cart-payment ${
//                          payment === "payment_4" ? "is-selected" : ""
//                        }`}
//                        onClick={() => onRadioSelect("payment_4")}
//                      >
//                        <View className="cart-payment__checkbox">
//                          <input
//                            type="radio"
//                            name="payment"
//                            id="payment_4"
//                            value="payment_4"
//                          />
//                        </View>
//                        <View className="avatar">
//                          <i className="icon icon-pay-paypal" />
//                        </View>
//                        <View className="cart-payment__name">Bitcoin</View>
//                        <View className="cart-payment__secured" />
//                      </View>
//                    */ }
//                   </View>

//                   <View>
//                     { /* <Link to={"#"}> */}
//                     <Text>Add Payment Option</Text>
//                     <View>
//                       { /* <Svg name="ico-plus" /> */}
//                     </View>
//                     { /* </Link> */}
//                   </View>
//                 </View>
//               </View>
//               { /* Sidebar view */}
//               <View>
//                 <View>
//                   <Text>Summary</Text>
//                   <View>
//                     <View>
//                       <Text>Subtotal</Text>
//                       <Text>{cart.sub_total} </Text>
//                     </View>
//                     <View>
//                       <Text>Tax</Text>
//                       <Text>{cart.vat} </Text>
//                     </View>
//                   </View>
//                 </View>
//                 <View>
//                   <View>
//                     <View>
//                       <Text>Total</Text>
//                       <Text>{cart.total} </Text>
//                     </View>
//                   </View>
//                   {cart.total && (
//                     <View>
//                       {confirm ? (
//                         <Text>Place payment</Text>
//                         // <SubmitButtonDiv
//                         //   wow={false}
//                         //   className="cart-sidebar"
//                         //   onClick={confirmPayment}
//                         //   loading={placeOrder.isRequesting}
//                         //   loaderComponent={<Loader fill={"#ffffff"} height={"21px"} />}
//                         //   buttonText={<span>Place payment</span>}
//                         // />
//                       ) : (
//                           <View>
//                             {/* <Link
//                           to={"/pay"}
//                           className="btn btn-primary btn-primary--red"
//                         > */}
//                             <Text>Place payment</Text>
//                             {/* </Link> */}
//                           </View>
//                         )}
//                     </View>
//                   )}
//                 </View>
//                 { /* <View className="cart-sidebar__payments wow fadeInUp">
//                 <View className="cart-sidebar__payments-logos">
//                   <i className="icon icon-pay-discover" />
//                   <i className="icon icon-pay-visa" />
//                   <i className="icon icon-pay-maestro-old" />
//                   <i className="icon icon-pay-jcb" />
//                   <i className="icon icon-pay-paypal" />
//                   <i className="icon icon-pay-amex" />
//                   <i className="icon icon-pay-mastercard-old" />
//                 </View>
//                 <View className="cart-sidebar__payments-title">
//                   Payment Methods Accepted
//                 </View>
//               </View>
//               <View className="cart-sidebar__ssl wow fadeInUp">
//                 <View className="cart-sidebar__ssl-icon">
//                   <Svg name="ico-ssl" />
//                 </View>
//                 <View className="cart-sidebar__ssl-title">Secure Payment SLL</View>
//               </View> */ }
//               </View>
//               { /* end sidebar view */}
//             {/* </View>
//           </View>
//         </View>
//        </View>
//     );*/} 
//   {/* } 
// } 