import React from "react";

import { Paginator } from "../../hoc";
import CartList from "./CartList";
import Sidebar from "./Sidebar";
import { FlatList, Image, ImageBackground, Text, TextInput, Modal, TouchableHighlight, View, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import styles from "../../stylesheet/Cart.style";
import { SafeAreaView } from 'react-navigation';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../common/logo';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/EvilIcons";
import Icon3 from "react-native-vector-icons/Ionicons";
import Hamburger from 'react-native-hamburger';
import SideMenu from '../common/SideMenu';
import SettingsHeader from '../common/SettingsHeader';
import Notifications from '../../../src/containers/Notifications'


class Cart extends React.PureComponent {
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
    const { cart, fetchCart, _removeFromCart, removeFromCart } = this.props;
    const { paginationData } = cart;

    return (
      <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
        {!this.state.isSideMenuClick ? <LinearGradient start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} colors={this.state.isBottomViewShow ? this.state.headerColor : this.state.headerColorMix} style={{ flexDirection: 'row', height: 100, width: '100%', alignItems: 'space-between', justifyContent: 'center' }}>

          <TouchableOpacity style={{ color: 'white', marginTop: '14%', flex: 0.1, marginLeft: '4%' }} onPress={() => this.showPopup()}>
            <Hamburger color="white" active={false} type="spinCross" onPress={() => this.showPopup()} />
          </TouchableOpacity>


          {/* <Logo color={'#ffffff'} style={{ flex: 0.7, marginLeft: '25%' }} width="130px" height="44px" /> */}

          <View style={{ flex: 0.3 }} />
          <TouchableOpacity style={[styles.searchView, { flex: 0.2, alignSelf: 'flex-end', marginRight: '5%' }]}  onPress={()=>this.setState({isNotificationShow: !this.state.isNotificationShow})}>
            <Icon2 name="bell" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 40, tintColor: 'white' }} />
          </TouchableOpacity>
        </LinearGradient> : null}

        <View style={{ flex: 1 }}>
          <KeyboardAwareScrollView style={{ backgroundColor: 'rgb(245,245,245)' }}>
            {/* <Text style={[styles.titleAccount, {marginTop:'2%', marginLeft:'2%'} ]}>Your Service</Text> */}

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

            <Sidebar cart={cart} />

          </KeyboardAwareScrollView>
          {/* Side Menu button modal  */}
          {this.state.isSideMenuClick ? <SideMenu hidePopup={() => this.hidePopup()} /> : null}
          {/* notification view show */}
          {this.state.isNotificationShow ? <Notifications hidePopup={() => this.hideNotificationView()} /> : null}


        </View>
      </SafeAreaView>


      //   <View style={{flex: 1, backgroundColor:'red', marginTop:'20%', }}>
      //     <Text >Your Cart</Text>
      //     <View>

      //     <Text >Cosound </Text>

      //   </View>
      // )
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
    );
  }
}

export default Cart;
