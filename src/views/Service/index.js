import React from "react";
import Helmet from "react-helmet";
import { isEmpty } from "lodash";

import {
  isTab,
  isMobile,
  getServiceImage,
  getBreadCrumbsForService,
  isSuccess
} from "../../utils";

import {
  Svg,
  Error,
  DollarSpan,
  BreadCrumbs,
  FallBackLoader,
  ProductTestimonials
} from "../Commons";
import Sidebar from "./Sidebar";

class ServiceComponent extends React.PureComponent {
  render() {
    const {
      id,
      service,
      reviews,
      addToCart,
      _addToCart,
      fetchReviews
    } = this.props;
    const { data } = service;
    const breadCrumbArray = getBreadCrumbsForService(data);
    const mobile = isMobile();
    const tab = isTab();

    return (
      <React.Fragment>
        <Helmet title={data.title ? data.title : null} />
        <div className="product">
          {service.isRequesting === id ? (
            <FallBackLoader />
          ) : isSuccess(service) ? (
            <div className="container container--wide">
              <BreadCrumbs data={breadCrumbArray} />

              <div className="product__wrapper">
                <div className="product__content">
                  <div className="product__box wow fadeInUp">
                    <div className="product__main product__main--cover">
                      <div className="product__cover">
                        <img src={getServiceImage(data.media)} alt="cover" />
                      </div>
                      <div className="product__scope">
                        <div className="product__artist">{data.title}</div>
                        <div className="product__name">{data.description}</div>
                        <div className="product__album">.</div>
                        <div className="product__price">
                          <DollarSpan price={data.price} />
                        </div>
                        <div className="product__delivery">
                          <Svg name="ico-time" />
                          <span>
                            {"Delivery time  "}
                            <span>{`${data.delivery_time} ${
                              data.delivery_time_unit
                            }`}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product__box wow fadeInUp">
                    <div className="product__title">About this Job</div>
                    <div className="product__info">
                      <p>{data.about}</p>
                    </div>
                  </div>
                  {/* teleport sidebar here! */}
                  <div data-teleport-target="product-sidebar">
                    {(mobile || tab) && (
                      <Sidebar
                        data={data}
                        addToCart={addToCart}
                        _addToCart={_addToCart}
                      />
                    )}
                  </div>

                  <div className="product__box product__box--no-pad wow fadeInUp">
                    <ProductTestimonials
                      reviews={reviews}
                      rating={data.rating}
                      fetchReviews={fetchReviews}
                      review_count={data.review_count}
                    />
                  </div>
                </div>

                {/* Sidebar */}
                {!mobile && !tab && (
                  <div
                    className="product__sidebar product-sidebar"
                    data-teleport-to="product-sidebar"
                    data-teleport-condition="<992"
                  >
                    <Sidebar
                      data={data}
                      addToCart={addToCart}
                      _addToCart={_addToCart}
                    />
                  </div>
                )}
              </div>
            </div>
          ) : !service.isRequesting && service.error.message ? (
            <Error message={service.error.message} />
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

export default ServiceComponent;
