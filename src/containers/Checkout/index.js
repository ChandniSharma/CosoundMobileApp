import React from "react";
import {Alert} from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//import { confirmAlert } from "react-confirm-alert";
//import { toast } from "react-toastify";
//import "react-confirm-alert/src/react-confirm-alert.css";

import { cartActions, paymentActions, marketPlaceActions } from "../../actions";
// history,
import { getCardDetails, isSuccess, isError } from "../../utils";

import CheckoutComponent from "../../views/CheckoutComponent";

class Checkout extends React.PureComponent {
  state = {
    payment: "payment_2"
  };

  componentDidMount() {
    this._restCalls();
  }

  _onRadioSelect = payment => {
    this.setState({
      payment
    });
  };

  /**
   * Rest api calls
   */
  _restCalls = () => {
    this._fetchCard().then(() => {
      this._fetchCart(1);
    });
  };

  _fetchCard = () => {
    return this.props.paymentActions.fetch();
  };

  /**
   * Fetch Cart details
   */
  _fetchCart = pageNo => {
    return this.props.cartActions.fetch(pageNo);
  };

  _confirmPayment = () => {
  

     const { cardDetails, marketPlaceActions } = this.props;


     Alert.alert(
      'Confirm to pay',
      `Do you want to continue with ${
             getCardDetails(cardDetails.data).brand
         } card ${getCardDetails(cardDetails.data).number}`,
      [
       
        {text: 'Yes', onPress: () => {
          marketPlaceActions.placeOrder().then(() => {
            const { placeOrder } = this.props;
            if (isSuccess(placeOrder)) {
              this.props.navigation.navigate('PurchasedServices')
             
            }
            if (isError(placeOrder)) {
              alert(placeOrder.error.message);
             // toast.error(placeOrder.error.message);
            }
          });
        },
      },
      {
        text: 'Change Card',
        onPress: () => {
          this.props.navigation.navigate('Payments')
         
        },
        style: 'cancel',
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      ],
      {cancelable: false},
    );

  }
  render() {
    const { cart, user, cardDetails, placeOrder } = this.props;
    const { payment } = this.state;

    return (
      <CheckoutComponent
        cart={cart}
        user={user}
        payment={payment}
        placeOrder={placeOrder}
        cardDetails={cardDetails}
        onRadioSelect={this._onRadioSelect}
        confirmPayment={this._confirmPayment}
        navigation={this.props.navigation}
        notificationCount ={this.props.notificationCount}
      />
    );
  }
}

// eslint-disable-next-line
const mapStateToProps = state => {
  return {
    cart: state.cart,
    placeOrder: state.placeOrder,
    cardDetails: state.cardDetails,
    notificationCount:state.notificationCount
  };
};

// eslint-disable-next-line
const mapDispatchToProps = dispatch => {
  return {
    cartActions: bindActionCreators(cartActions, dispatch),
    paymentActions: bindActionCreators(paymentActions, dispatch),
    marketPlaceActions: bindActionCreators(marketPlaceActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
