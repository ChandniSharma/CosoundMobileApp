import React from "react";
//import { Link } from "react-router-dom";
import { isEmpty } from "lodash";
import { FlatList, Image, ImageBackground, Text, TextInput, Modal, TouchableHighlight, View, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import styles from "../../stylesheet/Cart.style";
//import { Svg, DollarSpan } from "../Commons";

class Sidebar extends React.PureComponent {
  render() {
    const { cart } = this.props;
      return (
      <View style={{backgroundColor:'pink', alignSelf:'center', borderRadius:20, marginTop:'5%', marginBottom:'5%'}}>
            <Text style={[styles.titleAccount, {alignSelf:'center', marginBottom:'2%', marginTop:'2%'}]}>Summary</Text>

        <View>
          <View>
            <View style={{flexDirection:'row'}}>
              <Text>Subtotal</Text>
              <Text>{cart.sub_total} </Text>
            </View>

            <View style={{flexDirection:'row'}}>
              <Text>Tax</Text>
              <Text>{cart.vat} </Text>
            </View>
          </View>
        </View>

        <View>
          <View>
            <View style={{flexDirection:'row'}}>
              <Text>Total</Text>
              <Text>{cart.total} </Text>
            </View>
          </View>
          <View>
            {!isEmpty(cart.data) && (
              // Redirect to checkout page
              // <Link
              //   to={"/checkout"}
              //   className="btn btn-primary btn-primary--red"
              // >
                <Text>Proceed to payment</Text>
              // </Link>
            )}
          </View>
        </View>

        <View>
          <View>
          { /*
            <i className="icon icon-pay-discover" />
            <i className="icon icon-pay-visa" />
            <i className="icon icon-pay-maestro-old" />
            <i className="icon icon-pay-jcb" />
            <i className="icon icon-pay-paypal" />
            <i className="icon icon-pay-amex" />
            <i className="icon icon-pay-mastercard-old" />
            */ }
          </View>
          <View>
            <Text>Payment Methods Accepted</Text>
          </View>
        </View>

        <View>
          <View>
            { /* <Svg name="ico-ssl" /> */ }
          </View>
          <View>
          <Text>Secure Payment SLL</Text>
          </View>
        </View>
      </View>
    );
    // return (
    //   <View className="product__sidebar cart-sidebar">
    //     <View className="cart-sidebar__wrap wow fadeInUp">
    //       <View className="cart-sidebar__title">Summary</View>
    //       <View className="cart-sidebar__table">
    //         <View className="cart-sidebar__line">
    //           <span>Subtotal</span>
    //           <DollarSpan price={cart.sub_total} />
    //         </View>

    //         <View className="cart-sidebar__line">
    //           <span>Tax</span>
    //           <DollarSpan price={cart.vat} />
    //         </View>
    //       </View>
    //     </View>

    //     <View className="cart-sidebar__bottom wow fadeInUp">
    //       <View className="cart-sidebar__table cart-sidebar__table--bold">
    //         <View className="cart-sidebar__line">
    //           <span>Total</span>
    //           <DollarSpan price={cart.total} />
    //         </View>
    //       </View>
    //       <View className="cart-sidebar__cta">
    //         {!isEmpty(cart.data) && (
    //           <Link
    //             to={"/checkout"}
    //             className="btn btn-primary btn-primary--red"
    //           >
    //             <span>Proceed to payment</span>
    //           </Link>
    //         )}
    //       </View>
    //     </View>

    //     <View className="cart-sidebar__payments wow fadeInUp">
    //       <View className="cart-sidebar__payments-logos">
    //         <i className="icon icon-pay-discover" />
    //         <i className="icon icon-pay-visa" />
    //         <i className="icon icon-pay-maestro-old" />
    //         <i className="icon icon-pay-jcb" />
    //         <i className="icon icon-pay-paypal" />
    //         <i className="icon icon-pay-amex" />
    //         <i className="icon icon-pay-mastercard-old" />
    //       </View>
    //       <View className="cart-sidebar__payments-title">
    //         Payment Methods Accepted
    //       </View>
    //     </View>

    //     <View className="cart-sidebar__ssl wow fadeInUp">
    //       <View className="cart-sidebar__ssl-icon">
    //         <Svg name="ico-ssl" />
    //       </View>
    //       <View className="cart-sidebar__ssl-title">Secure Payment SLL</View>
    //     </View>
    //   </View>
    // );
  }
}

export default Sidebar;
