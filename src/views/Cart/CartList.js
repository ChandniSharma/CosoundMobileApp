import React from "react";
import { isEmpty } from "lodash";
import { FlatList, Image, ImageBackground, Text, TextInput, Modal, TouchableHighlight, View, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import styles from "../../stylesheet/Cart.style";
//import { Loader, ViewMoreFlat, NoDataWithLink, Error } from "../Commons";
//import CartItem from "./CartItem";
import { getServiceLink, getThumbnail, getServiceThumbnail } from "../../utils";
import StarView from '../common/StarView';
import { noDataProps } from "./data";
import CardOptions from "./CardOptions";

class CartList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    }
  }

  renderCartItem = (itemDetail) => {
    let item = itemDetail.item;
    console.log(" itemde-----", itemDetail);
    const { isVisible } = this.state;
    const { removeFromCart, _removeFromCart } = this.props;
    return (
      <View style={{ flex: 1 }}>
        {/* View single line */}
        <View style={{ width: '95%', alignSelf: 'center',marginTop:'2%', height: 0.5, backgroundColor: 'lightgray' }} />

{/* Main service Image */}
        <TouchableOpacity style={{alignSelf:'center', width:100, height:100, marginTop:'5%', marginBottom:'2%',}}>
          <Image style={{ alignSelf: 'center', width:100, height:100, borderRadius:10 }} source={{ uri: getServiceThumbnail(item.media) }} />
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', flex:1, marginBottom:'2%', marginTop:'2%' }}>

          <Image style={[styles.imgUser, {marginRight:'2%', marginLeft:'2%',  marginBottom:'2%', marginTop:'2%'} ]}  source={{ uri: getServiceThumbnail(item.media) }} />

          <View style={{flex:0.85}}>
            <TouchableOpacity style={{marginTop:'2%'}}>
              <Text style={styles.textServiceTitle}> {item.title}</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginTop:'5%',marginLeft:'0.5%' }}>
              {/* Rating view */}
              {/* <Text style={styles.textServiceTitle}>Star Rating </Text> */}
              <StarView  starCount={3}/>
              <Text style={[styles.textRatingCount, {marginLeft:'2%'}]}>{item.review_count}</Text>
            </View>
          </View>
          <Text style={[styles.textPrice, { flex:0.15}]}>${item.price}  </Text>
        </View>

        <CardOptions
          id={item.id}
          postedBySelf={true}
          isVisible={isVisible}
          className={"cart-item"}
          _delete={_removeFromCart}
          deleteState={removeFromCart}
          toggleVisible={this._toggleVisible}
        />
      </View>
    )
  }
  /*render() {
      const { isVisible } = this.state;
      const { item, removeFromCart, _removeFromCart } = this.props;
  
      return (
        <div className="cart-item">
          <Link className="cart-item__image" to={getServiceLink(item)}>
            <img src={getServiceThumbnail(item.media)} alt="image" />
          </Link>
          <div className="cart-item__info">
            <div className="avatar">
              <img src={getThumbnail(item.user)} alt={"avatar"} />
            </div>
            <div className="cart-item__info-content">
              <Link
                to={getServiceLink(item, item.service_id)}
                className="cart-item__name"
              >
                {item.title}
              </Link>
              <div className="cart-item__rating">
                <RatingStars rating={item.rating} />
                <span>{item.review_count}</span>
              </div>
            </div>
          </div>
          <div className="cart-item__price">
            <DollarSpan price={item.price} />
          </div>
  
          <CardOptions
            id={item.id}
            postedBySelf={true}
            isVisible={isVisible}
            className={"cart-item"}
            _delete={_removeFromCart}
            deleteState={removeFromCart}
            toggleVisible={this._toggleVisible}
          />
        </div>
      );
    } */

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
    console.log(" rendeer ================-----");

    return (

      <View style={{ width: '100%', backgroundColor: 'white', marginTop:'5%', height:'40%' }}>
       
        <View>
        <Text style={[styles.titleAccount, {marginTop:'5%', marginLeft:'2%'} ]}>Your Cart</Text>
        <View>
          {isRequesting && !callingAPI && (
            <ActivityIndicator color='gray' style={{marginTop:'10%', alignSelf:'center'}}/>
          )}
          {!isRequesting && !isEmpty(error) && <Text style={styles.errorText}>{error.message}</Text>}
          {isEmpty(data) && !isRequesting && isEmpty(error) && (
            <View>
              <Text style={[styles.titleAccount, {marginBottom:'5%', marginTop:'10%', alignSelf:'center'}]}>{noDataProps.noDataMessage} </Text>
              <Text style={[styles.textSettings,{marginBottom:'5%', alignSelf:'center'}]}> {noDataProps.noDataDesc}</Text>
              <TouchableOpacity style={styles.loginButton}>
                <Text style={[styles.textButtonTitle,{marginLeft:'10%', marginRight:'10%'}]}>Purchase Service </Text>
              </TouchableOpacity>

            </View>
          )}
        </View>
          <FlatList
            data={cart.data}
            renderItem={this.renderCartItem}
            keyExtractor={(item, index) => index.toString()}
          />
          
          {!isEmpty(data) && !callingAPI && page !== page_count && !isNull(page_count) && !callApi(
            <View style={styles.viewMoreImage}>
              <TouchableHighlight underlayColor="#25b6ad" style={[styles.seeMoreBtn]} onPress={loadMore}>
                <Text style={styles.textViewMore} > {callingAPI ? "Fetching..." : "View More..."}</Text>
              </TouchableHighlight>
            </View>
          )} 
        </View>
      </View>
    );
    // return (
    //   <div className="cart-list">
    // {isRequesting && !callingAPI && (
    //   <Loader fill={"#53b2af"} height={"18px"} className={"playLoader"} />
    // )}
    // {!isRequesting && !isEmpty(error) && <Error message={error.message} />}
    // {isEmpty(data) && !isRequesting && isEmpty(error) && (
    //   <NoDataWithLink {...noDataProps} />
    // )}
    //     {cart.data.map((item, index) => {
    //       return (
    //         <CartItem
    //           item={item}
    //           key={index}
    //           removeFromCart={removeFromCart}
    //           _removeFromCart={_removeFromCart}
    //         />
    //       );
    //     })}
    //     {!isEmpty(data) && (
    //       <ViewMoreFlat callingAPI={callingAPI} loadMore={loadMore} />
    //     )}
    //   </div>
    //  );
  }
}

export default CartList;
