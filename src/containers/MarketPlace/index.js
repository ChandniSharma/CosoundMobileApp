import React from "react";
import { isNull } from "lodash";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getCategoryId, getSubCategoryId } from "../../utils";

import {marketPlaceActions } from "../../actions";

import MarketPlaceComponent from "../../views/MarketPlaceComponent";


class MarketPlaceContainer extends React.PureComponent {
  state = {};
  componentDidMount() {
    console.log(" in market place ======");
    this._restCalls();
  }

  componentDidUpdate(prevProps) {
    // const updateCondition =
    //   (this.props.match.params.slug !== prevProps.match.params.slug ||
    //     this.props.match.params.subcategorySlug !==
    //       prevProps.match.params.subcategorySlug) &&
    //   !isNull(this._getCategoryId());

    // if (updateCondition) {
    //   this._fetchServices(1).then(() => {
    //   //  performWow(this.props.wowActions);
    //   });
    // }
  }

  /**
   * Rest api calls
   */
  _restCalls = () => {
    this._fetchCategories().then(() => {
      this._fetchFeaturedServices().then(() => {
        if (!isNull(this._getCategoryId())) {
          this._fetchServices(1).then(() => {
           // performWow(this.props.wowActions);
          });
        }
      });
    });
  };

  /*
   * Fetch Featured Services
   */
  _fetchFeaturedServices = () => {
    return this.props.marketPlaceActions.fetchFeaturedServices(true);
  };

  /**
   * Get category from route :slug
   */
  _getCategoryId = () => {
    const { headerCategories, match } = this.props;
    return getCategoryId(headerCategories.data, match.params);
  };

  /**
   * Get sub_category from route :subcategorySlug
   */
  _getSubCategoryId = () => {
    const { headerCategories, match } = this.props;
    return getSubCategoryId(headerCategories.data, match.params);
  };

  /**
   * Fetch all categories
   */
  _fetchCategories = () => {
    return this.props.marketPlaceActions.fetchCategories(true);
  };

  /**
   * Fetch services for category
   */
  _fetchServices = pageNo => {
    if (!isNull(this._getCategoryId())) {
      return this.props.marketPlaceActions.fetchServices(
        this._getCategoryId(),
        this._getSubCategoryId(),
        pageNo
      );
    }
  };

  render() {

    console.log(" in market place ======");
    const { user, services, categories, featuredServices } = this.props;

    return (
      <MarketPlaceComponent
        user={user}
        services={services}
        categories={categories}
        featuredServices={featuredServices}
        fetchServices={this._fetchServices}
        navigation={this.props.navigation}
      />
    );
  }
}

// eslint-disable-next-line
const mapStateToProps = state => {
  return {
    services: state.services,
    categories: state.categories,
    headerCategories: state.headerCategories,
    featuredServices: state.featuredServices
  };
};

// eslint-disable-next-line
const mapDispatchToProps = dispatch => {
  return {
    marketPlaceActions: bindActionCreators(marketPlaceActions, dispatch)
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MarketPlaceContainer);