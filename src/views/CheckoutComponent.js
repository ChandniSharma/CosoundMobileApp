
export default class CheckoutComponent extends Component {
    render() {
      return (
        <View style={{flex: 1}}>
         <View>
           <View>
             <View>
               <View>
                 <View>
                   <Text>Saved Payment Options</Text>
                   <View>
                     <View 
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
               { /* Sidebar view */}
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
                      <Text>Place payment</Text>
                      // <SubmitButtonDiv
                      //   wow={false}
                      //   className="cart-sidebar"
                      //   onClick={confirmPayment}
                      //   loading={placeOrder.isRequesting}
                      //   loaderComponent={<Loader fill={"#ffffff"} height={"21px"} />}
                      //   buttonText={<span>Place payment</span>}
                      // />
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
            { /* end sidebar view */}
            </View>
           </View>
         </View>
       </View>
     );
    }
  }