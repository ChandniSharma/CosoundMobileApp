import React from "react";
import { isEmpty } from "lodash";
import { FlatList, Image, Text, TouchableHighlight, View, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "../../stylesheet/Cart.style";
import { getServiceThumbnail } from "../../utils";
import StarView from '../common/StarView';
import { noDataProps } from "./data";
import CardOptions from "./CardOptions";
import * as Animatable from 'react-native-animatable';
import IconAntDesign from "react-native-vector-icons/AntDesign";


fadeInUpPopup = () => this.refs.viewpopup.fadeInUp(1000);

class CartList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      isDeletePopupShow: false,
    }
  }

  showDeletePopup = () => {
    let isDeletePopupShow = this.state.isDeletePopupShow;
    this.setState({ isDeletePopupShow: !isDeletePopupShow });
  }

  renderCartItem = (itemDetail) => {
    let item = itemDetail.item;
    const { isVisible } = this.state;
    const { removeFromCart, _removeFromCart } = this.props;
    return (
      <View style={{  height:300}}>
        <View style={{ width: '95%', alignSelf: 'center', marginTop: '2%', height: 0.5, backgroundColor: 'lightgray' }} />

        <TouchableOpacity onPress={() => this.showDeletePopup()}>
          <IconAntDesign name="ellipsis1" style={{ marginTop: '2%', right: '5%', fontSize: 25, color: 'lightGray', alignSelf: 'flex-end' }} />
        </TouchableOpacity>


        {/* Main service Image */}
        <TouchableOpacity style={{ alignSelf: 'center', width: 100, height: 100, marginTop: '1%', marginBottom: '2%', }}>
          <Image style={{ alignSelf: 'center', width: 100, height: 100, borderRadius: 10 }} source={{ uri: getServiceThumbnail(item.media) }} />
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', flex: 1, marginBottom: '2%', marginTop: '2%'}}>

          <Image style={[styles.imgUser, { marginRight: '2%', marginLeft: '2%', marginBottom: '2%', marginTop: '2%' }]} source={{ uri: getServiceThumbnail(item.media) }} />

          <View style={{ flex: 0.85 }}>
            <TouchableOpacity style={{ marginTop: '2%' }}>
              <Text style={styles.textServiceTitle}> {item.title}</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '0.5%' }}>
              {/* Rating view */}
              {/* <Text style={styles.textServiceTitle}>Star Rating </Text> */}
              <StarView starCount={item.review_count} />
              <Text style={[styles.textRatingCount, { marginLeft: '2%' }]}>{item.review_count}</Text>
            </View>
          </View>
          <Text style={[styles.textPrice, { flex: 0.15 }]}>${item.price}  </Text>
        </View>


       {this.state.isDeletePopupShow?
              <CardOptions
                        id={item.id}
                        postedBySelf={true}
                        isVisible={isVisible}
                        className={"cart-item"}
                        _delete={_removeFromCart}
                        deleteState={removeFromCart}
                        toggleVisible={this._toggleVisible}
                      />
                :null}
      </View>


    )
  }

  render() {
    const {
      cart,
      page,
      page_count,
      callApi,
      loadMore,
      callingAPI,
      removeFromCart,
      _removeFromCart
    } = this.props;
    const { isRequesting, data, error } = cart;

    return (
      <View style={{ width: '100%', flex:1}}>
        <View>
          <Text style={[styles.titleAccount, { marginTop: '5%', marginLeft: '2%' }]}>Your Cart</Text>
          <View>
            {isRequesting && !callingAPI && (
              <ActivityIndicator color='gray' style={{ marginTop: '10%', alignSelf: 'center' }} />
            )}
            {!isRequesting && !isEmpty(error) && <Text style={styles.errorText}>{error.message}</Text>}
            {isEmpty(data) && !isRequesting && isEmpty(error) && (
              <View>
                <Text style={[styles.titleAccount, { marginBottom: '5%', marginTop: '10%', alignSelf: 'center' }]}>{noDataProps.noDataMessage} </Text>
                <Text style={[styles.textSettings, { marginBottom: '5%', alignSelf: 'center' }]}> {noDataProps.noDataDesc}</Text>
                <TouchableOpacity style={styles.loginButton} onPress={() => this.props.naviation.navigate("PurchasedServicesComponent")}>
                  <Text style={[styles.textButtonTitle, { marginLeft: '10%', marginRight: '10%' }]}>Purchase Service </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <FlatList
            data={cart.data}
            renderItem={this.renderCartItem}
            keyExtractor={(item, index) => index.toString()}
            extraData={this.state}
          />

          {/* {!isEmpty(data) && !callingAPI && page !== page_count && !isNull(page_count) && !callApi(
            <View style={styles.viewMoreImage}>
              <TouchableHighlight underlayColor="#25b6ad" style={[styles.seeMoreBtn]} onPress={loadMore}>
                <Text style={styles.textViewMore} > {callingAPI ? "Fetching..." : "View More..."}</Text>
              </TouchableHighlight>
            </View>
          )} */}
        </View>
      </View>
    );
  }
}

export default CartList;
