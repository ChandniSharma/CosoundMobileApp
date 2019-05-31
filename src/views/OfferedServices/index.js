import React from "react";

import ServiceListing from "../Commons/ServiceListing";
import SettingsHeader from "../Commons/SettingsHeader";
import { Paginator } from "../../hoc";

import { servicesHeaders } from "../../constants/tabs";
import { noDataProps } from "./data";

import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import styles from '../../stylesheet/createservice.style';


class OfferedServices extends React.PureComponent {
  render() {
    const { user, offeredServices, fetchOfferedServices, sort } = this.props;
    const { paginationData } = offeredServices;
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
              services={offeredServices}
              component={ServiceListing}
              callAPI={fetchOfferedServices}
              page={paginationData.page}
              page_count={paginationData.page_count}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default OfferedServices;
