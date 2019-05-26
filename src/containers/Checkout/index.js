import React from "react";
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

  _confirmPayment = e => {
    e.preventDefault();
    alert("Need to use reat native confirm box");
    // const { cardDetails, marketPlaceActions } = this.props;
    // confirmAlert({
    //   title: "Confirm to pay",
    //   message: `Do you want to continue with ${
    //     getCardDetails(cardDetails.data).brand
    //   } card ${getCardDetails(cardDetails.data).number}`,
    //   buttons: [
    //     {
    //       label: "Yes",
    //       onClick: () => {
    //         marketPlaceActions.placeOrder().then(() => {
    //           const { placeOrder } = this.props;
    //           if (isSuccess(placeOrder)) {
    //             history.push("/purchased-services");
    //           }
    //           if (isError(placeOrder)) {
    //             alert(placeOrder.error.message);
    //            // toast.error(placeOrder.error.message);
    //           }
    //         });
    //       }
    //     },
    //     {
    //       label: "Change Card",
    //       onClick: () => {
    //         history.push("/pay");
    //       }
    //     },
    //     {
    //       label: "Cancel",
    //       onClick: () => {}
    //     }
    //   ]
    // });
  };

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
      />
    );
  }
}

// eslint-disable-next-line
const mapStateToProps = state => {
  return {
    cart: state.cart,
    placeOrder: state.placeOrder,
    cardDetails: state.cardDetails
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
