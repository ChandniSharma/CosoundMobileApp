import React from "react";
//import { Link } from "react-router-dom";
import { isEmpty } from "lodash";
import { FlatList, Image, ImageBackground, Text, TextInput, Modal, TouchableHighlight, View, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import styles from "../../stylesheet/Cart.style";
import Icon from 'react-native-vector-icons/FontAwesome';


//import { Svg, DollarSpan } from "../Commons";

class Sidebar extends React.PureComponent {
  
  render() {
    const { cart } = this.props;
      return (
        <View style={{height:'80%', marginBottom:'40%'}}>
      <View style={{backgroundColor:'white', alignSelf:'center', borderRadius:20, marginTop:'5%', marginBottom:'5%', width:'75%'}}>
            <Text style={[styles.titleAccount, {alignSelf:'center', marginBottom:'2%', marginTop:'4%'}]}>Summary</Text>

        <View style={[styles.viewSubtotal, {width:'100%',marginTop:'10%', height:100,  justifyContent:'center', alignItems:'center'}]}>
          
            <View style={{flexDirection:'row', marginBottom:'2%', marginTop:'2%', marginLeft:'20%', marginRight:'20%' }}>
              <Text style={[styles.textSubtotal, {marginBottom:'2%',flex:0.5, alignSelf:'flex-start'} ]}>Subtotal</Text>
              <Text style={[styles.textSubtotalValue,{marginBottom:'2%',flex:0.5} ]}>${cart.sub_total} </Text>
            </View>

            <View style={{flexDirection:'row', marginBottom:'2%', flex:1,marginLeft:'20%', marginRight:'20%' }}>
              <Text style={[styles.textSubtotal, {marginBottom:'2%',flex:0.5, alignSelf:'flex-start' }]}>Tax</Text>
              <Text style={[styles.textSubtotalValue, {marginBottom:'2%',flex:0.5} ]}>${cart.vat} </Text>
            </View>
          
        </View>
<View style={styles.ViewSingleLine}/>
        <View style={[styles.viewTotal, {width:'100%', marginBottom:'5%', height:100, justifyContent:'center', alignItems:'center'}]}>
          
            <View style={{flexDirection:'row',  marginLeft:'20%', marginRight:'20%', alignSelf:'center'}}>
              <Text style={[styles.textSubtotalValue,{flex:0.5,}]}>Total</Text>
              <Text style={[styles.textSubtotalValue, {flex:0.5,}]}>${cart.total} </Text>
            </View>
         
            <View style={{flexDirection:'row',marginTop:'2%',marginLeft:'20%', marginRight:'20%',alignSelf:'center'}}>
              <Text style={[styles.textSubtotalValue, {flex:0.5,} ]}>Delivery Time</Text>
              <Text style={[styles.textSubtotalValue, {flex:0.5,}]}>{cart.total}days </Text>
            </View>
          </View>

            {!isEmpty(cart.data) && (
              // Redirect to checkout page
              // <Link
              //   to={"/checkout"}
              //   className="btn btn-primary btn-primary--red"
              // >
              // </Link>
              <TouchableHighlight underlayColor="#25b6ad" style={[styles.loginButton, {marginTop:'2%'}]}>
                <Text style={[styles.textButtonTitle, {marginLeft:'10%', marginRight:'10%'}]}>Proceed to payment</Text>
          </TouchableHighlight>
            )}
            <TouchableHighlight underlayColor="#25b6ad" style={{marginBottom:'5%', alignSelf:'center', marginTop:'10%', height:'10%'}}>
                <Text style={styles.textCartButtonTitle}>Add To Cart</Text>
          </TouchableHighlight>

         
        </View>
{/* <View style={{flexDirection:'row'}}>
  <TouchableOpacity style={{marginLeft:'1%'}}>
    <Icon name="cc-visa" style={{fontSize:18}}/>
  </TouchableOpacity>
</View> */}

        {/* <View>
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
          {/* </View>
          <View>
            <Text>Payment Methods Accepted</Text>
          </View>
        </View> */}

        {/* <View>
          <View>
            { /* <Svg name="ico-ssl" /> */ }
          {/* </View>
          <View>
          <Text>Secure Payment SLL</Text>
          </View>
        </View>  */}
      </View>
    );
  }
}
export default Sidebar;

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
 


