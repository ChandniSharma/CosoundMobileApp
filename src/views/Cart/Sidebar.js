import React from "react";
//import { Link } from "react-router-dom";
import { isEmpty } from "lodash";

//import { Svg, DollarSpan } from "../Commons";

class Sidebar extends React.PureComponent {
  render() {
    const { cart } = this.props;

    return (
      <div className="product__sidebar cart-sidebar">
        <div className="cart-sidebar__wrap wow fadeInUp">
          <div className="cart-sidebar__title">Summary</div>
          <div className="cart-sidebar__table">
            <div className="cart-sidebar__line">
              <span>Subtotal</span>
              <DollarSpan price={cart.sub_total} />
            </div>

            <div className="cart-sidebar__line">
              <span>Tax</span>
              <DollarSpan price={cart.vat} />
            </div>
          </div>
        </div>

        <div className="cart-sidebar__bottom wow fadeInUp">
          <div className="cart-sidebar__table cart-sidebar__table--bold">
            <div className="cart-sidebar__line">
              <span>Total</span>
              <DollarSpan price={cart.total} />
            </div>
          </div>
          <div className="cart-sidebar__cta">
            {!isEmpty(cart.data) && (
              <Link
                to={"/checkout"}
                className="btn btn-primary btn-primary--red"
              >
                <span>Proceed to payment</span>
              </Link>
            )}
          </div>
        </div>

        <div className="cart-sidebar__payments wow fadeInUp">
          <div className="cart-sidebar__payments-logos">
            <i className="icon icon-pay-discover" />
            <i className="icon icon-pay-visa" />
            <i className="icon icon-pay-maestro-old" />
            <i className="icon icon-pay-jcb" />
            <i className="icon icon-pay-paypal" />
            <i className="icon icon-pay-amex" />
            <i className="icon icon-pay-mastercard-old" />
          </div>
          <div className="cart-sidebar__payments-title">
            Payment Methods Accepted
          </div>
        </div>

        <div className="cart-sidebar__ssl wow fadeInUp">
          <div className="cart-sidebar__ssl-icon">
            <Svg name="ico-ssl" />
          </div>
          <div className="cart-sidebar__ssl-title">Secure Payment SLL</div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
