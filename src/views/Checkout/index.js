import React from "react";
//import Helmet from "react-helmet";
//import { Link } from "react-router-dom";
import { isNull } from "lodash";

import { getThumbnail, getCardDetails, getCardIcon } from "../../utils";
import { FlatList, Image, ImageBackground, Text, TextInput, Modal, TouchableHighlight, View, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";

//import { Svg, FormToast } from "../Commons";
import Sidebar from "./Sidebar";

class Checkout extends React.PureComponent {
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
       <View style={{flex: 1}}>
        <View>
          <View>
            <View>
              <View>
                <View>
                  <Text>Saved Payment Options</Text>

                  <View>
                    <View onClick={() => onRadioSelect("payment_1")}
                    >
                      <View>
                        { /* <input type="radio" name="payment" id="payment_1" /> */ }
                      </View>
                      <View>
                       { /* <img src={getThumbnail(user.data)} alt="avatar" /> */ }
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
                        {getCardDetails(cardDetails.data).type}
                      </Text>
                      <Text>
                        {getCardDetails(cardDetails.data).number}
                      </Text>
                   { /* </View> */ }
                  
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
                   { /* <Link to={"#"}> */ } 
                      <Text>Add Payment Option</Text>
                      <View>
                        { /* <Svg name="ico-plus" /> */ }
                      </View>
                     { /* </Link> */ } 
                  </View>
                </View>
              </View>

              <Sidebar
                cart={cart}
                payment={payment}
                placeOrder={placeOrder}
                confirmPayment={confirmPayment}
                cardExists={!isNull(getCardDetails(cardDetails.data).number)}
              />
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
