import React from "react";
import { Paginator } from "../../hoc";
import CartList from "./CartList";
import Sidebar from "./Sidebar";
import { View } from "react-native";
import styles from "../../stylesheet/Cart.style";
import { SafeAreaView } from 'react-navigation';
import HeaderMenuAndBell from '../common/HeaderMenuAndBell';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SideMenu from '../common/SideMenu';
import Notifications from '../../../src/containers/Notifications'
import CustomFooter from '../../components/common/CustomFooter';

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
    this.setState({ isSideMenuClick: true ,
      isNotificationShow: false})
  }
  hidePopup() {
    this.setState({ isSideMenuClick: false })
  }
  showNotification() {
    this.setState({ isNotificationShow: true, isSideMenuClick: false })
  }
  render() {
    const { cart, fetchCart, _removeFromCart, removeFromCart, notificationCount } = this.props;
    const { paginationData } = cart;

    return (
      <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
        {!this.state.isSideMenuClick ? <HeaderMenuAndBell notificationCount={notificationCount} colors={this.state.isBottomViewShow ? this.state.headerColor : this.state.headerColorMix} onPressPopup={() => this.showPopup()} isNotificationShow={this.state.isNotificationShow} onPressBell={() => this.setState({ isNotificationShow: !this.state.isNotificationShow })} /> : null}
        <View style={{ flex: 1 }}>
          {!this.state.isNotificationShow ? <KeyboardAwareScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ flex: 0.2 }}>
              <Paginator
                isLoaderInternal
                cart={cart}
                callAPI={fetchCart}
                component={CartList}
                page={paginationData.page}
                removeFromCart={removeFromCart}
                _removeFromCart={_removeFromCart}
                page_count={paginationData.page_count}
                navigation={this.props.navigation}
              />
            </View>
            <View style={{ flex: 0.6 }}>
              <Sidebar cart={cart} navigation={this.props.navigation} />
            </View>
            <View style={{ flex: 0.2 }}>
              <CustomFooter />
            </View>
          </KeyboardAwareScrollView> :
            <View>
              <Notifications hidePopup={() => this.hideNotificationView()} />
            </View>}
          {/* Side Menu button modal  */}
          {this.state.isSideMenuClick ? <SideMenu navigation={this.props.navigation} hidePopup={() => this.hidePopup()} showNotification={() => this.showNotification()} /> : null}
        </View>
      </SafeAreaView>
    );
  }
}

export default Cart;
