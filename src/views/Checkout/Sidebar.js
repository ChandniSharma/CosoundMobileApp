import React from "react";
//import { Link } from "react-router-dom";
import { isEmpty } from "lodash";
import styles from "../../stylesheet/Cart.style";
import Icon from 'react-native-vector-icons/FontAwesome';


//import { Svg, DollarSpan, SubmitButtonDiv, Loader } from "../Commons";
import { FlatList, Image, ImageBackground, Text, TextInput, Modal, TouchableHighlight, View, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
class Sidebar extends React.PureComponent {
  render() {
    const {
      cart,
      payment,
      cardExists,
      placeOrder,
      confirmPayment
    } = this.props;
    const confirm = cardExists && payment === "payment_2";

    return (
      <View>
        <View>
          <Text>Summary</Text>
          <View>
            <View>
              <Text>Subtotal</Text>
              <Text>{cart.sub_total} </Text>
            </View>

            <View>
              <Text>Tax</Text>
              <Text>{cart.vat} </Text>
            </View>
          </View>
        </View>

        <View>
          <View>
            <View>
              <Text>Total</Text>
              <Text>{cart.total} </Text>
            </View>
          </View>
          {cart.total && (
            <View>
              {confirm ? (
                <SubmitButtonDiv
                  wow={false}
                  className="cart-sidebar"
                  onClick={confirmPayment}
                  loading={placeOrder.isRequesting}
                  loaderComponent={<Loader fill={"#ffffff"} height={"21px"} />}
                  buttonText={<span>Place payment</span>}
                />
              ) : (
                <View>
                  {/* <Link
                    to={"/pay"}
                    className="btn btn-primary btn-primary--red"
                  > */}
                    <Text>Place payment</Text>
                  {/* </Link> */} 
                </View>
              )}
            </View>
          )}
        </View>

        { /* <View className="cart-sidebar__payments wow fadeInUp">
          <View className="cart-sidebar__payments-logos">
            <i className="icon icon-pay-discover" />
            <i className="icon icon-pay-visa" />
            <i className="icon icon-pay-maestro-old" />
            <i className="icon icon-pay-jcb" />
            <i className="icon icon-pay-paypal" />
            <i className="icon icon-pay-amex" />
            <i className="icon icon-pay-mastercard-old" />
          </View>
          <View className="cart-sidebar__payments-title">
            Payment Methods Accepted
          </View>
        </View>

        <View className="cart-sidebar__ssl wow fadeInUp">
          <View className="cart-sidebar__ssl-icon">
            <Svg name="ico-ssl" />
          </View>
          <View className="cart-sidebar__ssl-title">Secure Payment SLL</View>
        </View> */ }
      </View>
    );
  }
}

export default Sidebar;
