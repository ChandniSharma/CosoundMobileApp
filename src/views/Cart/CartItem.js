import React from "react";
import { Link } from "react-router-dom";

import { getServiceLink, getThumbnail, getServiceThumbnail } from "../../utils";

import { RatingStars, DollarSpan, CardOptions } from "../Commons";

class CartItem extends React.PureComponent {
  state = {
    isVisible: false
  };

  _toggleVisible = () => {
    return this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
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
  }
}

export default CartItem;
