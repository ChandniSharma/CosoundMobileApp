//import styles from "../stylesheet/Account.style";
import { SafeAreaView } from 'react-navigation';
import React,{ Component } from "react";
import { FlatList, Image, ImageBackground, Text, TextInput, Modal, TouchableHighlight, View, TouchableOpacity, ScrollView } from "react-native";
//import { Icon, Row } from "native-base";
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
//import { getThumbnail, getUsername, getUserInfo } from "../../utils";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Logo from '../common/logo';
import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/EvilIcons";
import Icon3 from "react-native-vector-icons/Ionicons";
import Icon4 from "react-native-vector-icons/MaterialIcons";
import Icon5 from 'react-native-vector-icons/FontAwesome';
import Icon6 from 'react-native-vector-icons/Feather';
import CustomFooter from '../../components/common/CustomFooter'

import Notifications from '../../../src/views/common/Notifications';

import Hamburger from 'react-native-hamburger';
import SideMenu from '../common/SideMenu';

import { isNull } from "lodash";

//import { Svg, FormToast } from "../Commons";
// import Sidebar from "./Sidebar";
import styles from '../../stylesheet/Checkout.style'

class Checkout extends React.PureComponent {
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
    // setTimeout(() => {
    //     this.zoomInPopup();
    // }, 10);

}
hidePopup() {
    this.setState({ isSideMenuClick: false })
}

  render() {
    const {
      user,
      cart,
      payment,
      placeOrder,
      cardDetails,
      onRadioSelect,
      confirmPayment
    } = this.props;

    
    return (
      <View style={{ flex: 1 }}>

        {!this.state.isSideMenuClick ? <LinearGradient start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} colors={this.state.isBottomViewShow ? this.state.headerColor : this.state.headerColorMix} style={{ flexDirection: 'row', height: 100, width: '100%', alignItems: 'space-between', justifyContent: 'center' }}>

          <TouchableOpacity style={{ color: 'white', marginTop: '14%', flex: 0.1, marginLeft: '4%' }} onPress={() => this.showPopup()}>
            <Hamburger color="white" active={false} type="spinCross" onPress={() => this.showPopup()} />
          </TouchableOpacity>


          <Logo color={'#ffffff'} style={{ flex: 0.7, marginLeft: '25%' }} width="130px" height="44px" />

          <View style={{ flex: 0.3 }} />
          <TouchableOpacity style={[styles.searchView, { flex: 0.2, alignSelf: 'flex-end', marginRight: '5%' }]} onPress={() => this.setState({ isNotificationShow: !this.state.isNotificationShow })}>
            <Icon2 name="bell" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 40, tintColor: 'white' }} />
          </TouchableOpacity>
        </LinearGradient> : null}


        <View>
          <View>
            <View>
              <View>
                <View>
                  <Text style={styles.textTitle}>Saved Payment Options</Text>

                  <View>
                    <View onClick={() => onRadioSelect("payment_1")}
                    >
                      <View>
                        { /* <input type="radio" name="payment" id="payment_1" /> */}
                      </View>
                      <View>
                        { /* <img src={getThumbnail(user.data)} alt="avatar" /> */}
                      </View>
                      <Text>Account balance</Text>
                    </View>

                    { /* <View
                      className={`cart-payment ${
                        payment === "payment_2" ? "is-selected" : ""
                      }`}
                      onClick={() => onRadioSelect("payment_2")}
                    > */ }
                    <View>
                      { /* <input
                          type="radio"
                          name="payment"
                          id="payment_2"
                          value="payment_2"
                        /> */ }
                    </View>
                    <View>
                      { /* <i
                          className={`icon ${getCardIcon(cardDetails.data)}`}
                        /> */ }
                    </View>
                    <Text>
                      Account balance
                      {/* {getCardDetails(cardDetails.data).type} */}
                    </Text>
                    <Text>
                      12345
                      {/* {getCardDetails(cardDetails.data).number} */}
                    </Text>
                    { /* </View> */}

                    { /*
                    <View
                      className={`cart-payment ${
                        payment === "payment_3" ? "is-selected" : ""
                      }`}
                      onClick={() => onRadioSelect("payment_3")}
                    >
                      <View className="cart-payment__checkbox">
                        <input
                          type="radio"
                          name="payment"
                          id="payment_3"
                          value="payment_3"
                        />
                      </View>
                      <View className="avatar">
                        <i className="icon icon-pay-paypal" />
                      </View>
                      <View className="cart-payment__name">Paypal</View>
                      <View className="cart-payment__secured" />
                    </View>

                    <View
                      className={`cart-payment ${
                        payment === "payment_4" ? "is-selected" : ""
                      }`}
                      onClick={() => onRadioSelect("payment_4")}
                    >
                      <View className="cart-payment__checkbox">
                        <input
                          type="radio"
                          name="payment"
                          id="payment_4"
                          value="payment_4"
                        />
                      </View>
                      <View className="avatar">
                        <i className="icon icon-pay-paypal" />
                      </View>
                      <View className="cart-payment__name">Bitcoin</View>
                      <View className="cart-payment__secured" />
                    </View>
                  */ }
                  </View>

                  <View>
                    { /* <Link to={"#"}> */}
                    <Text>Add Payment Option</Text>
                    <View>
                      { /* <Svg name="ico-plus" /> */}
                    </View>
                    { /* </Link> */}
                  </View>
                </View>
              </View>

              {/* <Sidebar
                cart={cart}
                payment={payment}
                placeOrder={placeOrder}
                confirmPayment={confirmPayment}
                cardExists={!isNull(getCardDetails(cardDetails.data).number)}
              /> */}
            </View>
          </View>
        </View>
      </View>
    );

    { /*
    // return (
    //   <React.Fragment>
    //     <Helmet title={"Checkout"} />
    //     <View className="cart">
    //       <View className="container container--wide">
    //         <View className="product__wrapper">
    //           <View className="product__content">
    //             <View className="product__box wow fadeInUp">
    //               <View className="product__title">Saved Payment Options</View>

    //               <View className="cart-payments">
    //                 <View className={`cart-payment ${
    //                     payment === "payment_1" ? "is-selected" : ""
    //                   }`}
    //                   onClick={() => onRadioSelect("payment_1")}
    //                 >
    //                   <View className="cart-payment__checkbox">
    //                     <input type="radio" name="payment" id="payment_1" />
    //                   </View>
    //                   <View className="avatar">
    //                     <img src={getThumbnail(user.data)} alt="avatar" />
    //                   </View>
    //                   <View className="cart-payment__name">Account balance</View>
    //                 </View>

    //                 <View
    //                   className={`cart-payment ${
    //                     payment === "payment_2" ? "is-selected" : ""
    //                   }`}
    //                   onClick={() => onRadioSelect("payment_2")}
    //                 >
    //                   <View className="cart-payment__checkbox">
    //                     <input
    //                       type="radio"
    //                       name="payment"
    //                       id="payment_2"
    //                       value="payment_2"
    //                     />
    //                   </View>
    //                   <View className="avatar">
    //                     <i
    //                       className={`icon ${getCardIcon(cardDetails.data)}`}
    //                     />
    //                   </View>
    //                   <View className="cart-payment__name">
    //                     {getCardDetails(cardDetails.data).type}
    //                   </View>
    //                   <View className="cart-payment__secured">
    //                     {getCardDetails(cardDetails.data).number}
    //                   </View>
    //                 </View>

    //                 <View
    //                   className={`cart-payment ${
    //                     payment === "payment_3" ? "is-selected" : ""
    //                   }`}
    //                   onClick={() => onRadioSelect("payment_3")}
    //                 >
    //                   <View className="cart-payment__checkbox">
    //                     <input
    //                       type="radio"
    //                       name="payment"
    //                       id="payment_3"
    //                       value="payment_3"
    //                     />
    //                   </View>
    //                   <View className="avatar">
    //                     <i className="icon icon-pay-paypal" />
    //                   </View>
    //                   <View className="cart-payment__name">Paypal</View>
    //                   <View className="cart-payment__secured" />
    //                 </View>

    //                 <View
    //                   className={`cart-payment ${
    //                     payment === "payment_4" ? "is-selected" : ""
    //                   }`}
    //                   onClick={() => onRadioSelect("payment_4")}
    //                 >
    //                   <View className="cart-payment__checkbox">
    //                     <input
    //                       type="radio"
    //                       name="payment"
    //                       id="payment_4"
    //                       value="payment_4"
    //                     />
    //                   </View>
    //                   <View className="avatar">
    //                     <i className="icon icon-pay-paypal" />
    //                   </View>
    //                   <View className="cart-payment__name">Bitcoin</View>
    //                   <View className="cart-payment__secured" />
    //                 </View>
    //               </View>

    //               <View className="cart-payments__more">
    //                 <Link to={"#"}>
    //                   <span>Add Payment Option</span>
    //                   <View className="cart-payments__more-icon">
    //                     <Svg name="ico-plus" />
    //                   </View>
    //                 </Link>
    //               </View>
    //             </View>
    //           </View>

    //           <Sidebar
    //             cart={cart}
    //             payment={payment}
    //             placeOrder={placeOrder}
    //             confirmPayment={confirmPayment}
    //             cardExists={!isNull(getCardDetails(cardDetails.data).number)}
    //           />
    //         </View>
    //       </View>
    //     </View>
    //     <FormToast />
    //   </React.Fragment>
    // );
  */ }
  }
}

export default Checkout;
