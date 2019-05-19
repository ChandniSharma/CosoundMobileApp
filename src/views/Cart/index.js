import React from "react";

import { Paginator } from "../../hoc";
import CartList from "./CartList";
// import Sidebar from "./Sidebar";
import { FlatList, Image, ImageBackground, Text, TextInput, Modal, TouchableHighlight, View, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import styles from "../stylesheet/Cart.style";

class Cart extends React.PureComponent {
  render() {
    const { cart, fetchCart, _removeFromCart, removeFromCart } = this.props;
    const { paginationData } = cart;

    return(
      <View style={{flex: 1,}}>
        <Text >Your Cart</Text>
        <View>
              <Paginator
                    isLoaderInternal
                    cart={cart}
                    callAPI={fetchCart}
                    component={CartList}
                    page={paginationData.page}
                    removeFromCart={removeFromCart}
                    _removeFromCart={_removeFromCart}
                    page_count={paginationData.page_count}
                  />
                  </View>
                  {/* <Sidebar cart={cart} /> */}
      </View>
    )
    // return (
    //   <React.Fragment>
    //     <Helmet title={"Cart"} />
    //     <div className="cart">
    //       <div className="container container--wide">
    //         <div className="product__wrapper">
    //           <div className="product__content">
    //             <div className="product__box wow fadeInUp">
    //               <div className="product__title">Your Cart</div>
                  // <Paginator
                  //   isLoaderInternal
                  //   cart={cart}
                  //   callAPI={fetchCart}
                  //   component={CartList}
                  //   page={paginationData.page}
                  //   removeFromCart={removeFromCart}
                  //   _removeFromCart={_removeFromCart}
                  //   page_count={paginationData.page_count}
                  // />
    //             </div>
    //           </div>
              // <Sidebar cart={cart} />
    //         </div>
    //       </div>
    //     </div>
    //   </React.Fragment>
    // );
  }
}

export default Cart;
