import React from "react";
import Helmet from "react-helmet";

import { Paginator } from "../../hoc";

import ServiceListing from "../Commons/ServiceListing";
import SettingsHeader from "../Commons/SettingsHeader";

import { servicesHeaders } from "../../constants/tabs";
import { noDataProps } from "./data";

import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import styles from '../../stylesheet/createservice.style';

class PurchasedServices extends React.PureComponent {
  render() {
    const {
      user,
      sort,
      purchasedServices,
      fetchPurchasedServices
    } = this.props;
    const { paginationData } = purchasedServices;
    return (
      <View>
        <View>
          <SettingsHeader user={user} />
          <View>
            {/* Router tabs */}
            {/*<TabHeader headers={servicesHeaders} />*/}
            {/* Router tabs end */}
            <Paginator
              sort={sort}
              isLoaderInternal
              {...noDataProps}
              services={purchasedServices}
              component={ServiceListing}
              callAPI={fetchPurchasedServices}
              page={paginationData.page}
              page_count={paginationData.page_count}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default PurchasedServices;
