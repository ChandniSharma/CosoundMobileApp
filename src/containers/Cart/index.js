import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { cartActions } from "../../actions";
import CartComponent from "../../views/Cart";

class Cart extends React.PureComponent {
  componentDidMount() {
    this._restCalls();
  }

  /**
   * Rest api calls
   */
  _restCalls = () => {
    this._fetchCart(1).then(() => {
    });
  };

  /**
   * Fetch Cart details
   */
  _fetchCart = pageNo => {
    return this.props.cartActions.fetch(pageNo);
  };

  /**
   * Remove from cart
   */
  _removeFromCart = id => {
    return this.props.cartActions.toggle(id, "remove").then(() => {
      return this._restCalls();
    });
  };

  render() {
    const { cart, reviews, removeFromCart } = this.props;

    return (
      <CartComponent
        cart={cart}
        reviews={reviews}
        fetchCart={this._fetchCart}
        removeFromCart={removeFromCart}
        _removeFromCart={this._removeFromCart}
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
    removeFromCart: state.removeFromCart,
    notificationCount: state.notificationCount
  };
};

// eslint-disable-next-line
const mapDispatchToProps = dispatch => {
  return {
    cartActions: bindActionCreators(cartActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
