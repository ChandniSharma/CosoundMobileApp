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
    const updateCondition =
      (this.props.navigation.state.params.slug !== prevProps.navigation.state.params.slug ||
        this.props.navigation.state.params.subcategorySlug !==
          prevProps.navigation.state.params.subcategorySlug) &&
      !isNull(this._getCategoryId());

    if (updateCondition) {
      this._fetchServices(1).then(() => {
      //  performWow(this.props.wowActions);
      });
    }
  }

  /**
   * Rest api calls
   */
  _restCalls = () => {
    this._fetchCategories().then(() => {
      this._fetchFeaturedServices().then(() => {
        console.log(" _fetchFeaturedServices ====")
        if (!isNull(this._getCategoryId())) {
console.log(" Cat condition");
          this._fetchServices(1).then(() => {
            console.log(" Fetchservice s====")
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
    const { headerCategories, navigation } = this.props;
    return getCategoryId(headerCategories.data, navigation.state.params);
  };

  /**
   * Get sub_category from route :subcategorySlug
   */
  _getSubCategoryId = () => {
    const { headerCategories, navigation } = this.props;
    return getSubCategoryId(headerCategories.data, navigation.state.params);
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
  _fetchServices =  pageNo => {
    console.log("call 86")
    if (!isNull(this._getCategoryId())) {
      console.log("call 87")
      return this.props.marketPlaceActions.fetchServices(
        this._getCategoryId(),
        this._getSubCategoryId(),
        pageNo
      );
    }
  };

  render() {

    console.log(" in market place ======", this.props);
    const { user, services, categories, featuredServices, headerCategories } = this.props;

    return (
      <MarketPlaceComponent
        user={user}
        services={services}
        categories={categories}
        featuredServices={featuredServices}
        fetchServices={this._fetchServices}
        navigation={this.props.navigation}
        headerCategories={this.props.headerCategories}
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
    featuredServices: state.featuredServices, 
     
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