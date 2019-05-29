import React from "react";
import { Link } from "react-router-dom";
import { isNull } from "lodash";

import { UserCard, Loader, SubmitButtonDiv } from "../Commons";

class Sidebar extends React.PureComponent {
  render() {
    const { data, addToCart, _addToCart } = this.props;
    const userData = {
      data: data.user
    };
    return (
      <React.Fragment>
        <div className="product-sidebar__wrap wow fadeInUp">
          <UserCard user={userData} showRating={true} rating={4} />
        </div>
        <div className="product-sidebar__bottom wow fadeInUp">
          <div className="product-sidebar__title">Service</div>
          <ul className="product-sidebar__list">
            {data.key_points &&
              !isNull(data.key_points) &&
              data.key_points.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
          </ul>
          <div className="product-sidebar__message">
            <Link to={"#"} className="btn btn-message">
              <span>Message seller</span>
            </Link>
          </div>
          <SubmitButtonDiv
            className="product-sidebar"
            onClick={_addToCart}
            loading={addToCart.isRequesting}
            loaderComponent={
              <Loader
                fill={"#ffffff"}
                height={"15px"}
                width={"133px"}
                className="playLoader"
              />
            }
            buttonText={<span>Process to Order</span>}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Sidebar;
