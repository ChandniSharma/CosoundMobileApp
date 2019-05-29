import React from "react";
import { isEmpty } from "lodash";
import { FlatList, Image, ImageBackground, Text, TextInput, TouchableHighlight, TouchableWithoutFeedback,View, TouchableOpacity,Clipboard, AlertIOS,Platform, ActivityIndicator } from "react-native";

import ServiceListingCard from "./ServiceListingCard";
// import {
//   Sort,
//   Error,
//   Loader,
//   CreateLink,
//   ViewMoreFlat,
//   NoDataWithLink
// } from "../index";

const ServiceListing = ({
  icon,
  link,
  sort,
  services,
  linkName,
  loadMore,
  noDataDesc,
  callingAPI,
  noDataMessage
}) => {
  const { data, isRequesting, error } = services;
  return (
    <View>
      {/*isRequesting && !callingAPI && (
        <ActivityIndicator color="gray" size="large" style={{marginTop:'10%'}}/>
      )*/}
      {!isRequesting && !isEmpty(error) && <Text>{error.message} </Text>}

      {/*!isEmpty(data) && <Sort type={services.sortType} sort={sort} />*/}

      {/*isEmpty(data) && !isRequesting && isEmpty(error) && (
        <NoDataWithLink
          icon={icon}
          link={link}
          linkName={linkName}
          noDataDesc={noDataDesc}
          noDataMessage={noDataMessage}
        />
      )*/}
      {!isEmpty(data) && (
        <View className="services__wrapper wow fadeInUp">
          {data.map((item, index) => {
            return <ServiceListingCard item={item} key={index} />;
          })}
        </View>
      )}
     {/* {!isEmpty(data) && (
        <ViewMoreFlat callingAPI={callingAPI} loadMore={loadMore} />
      )}*/}
     {/* {!isEmpty(data) && <CreateLink link={link} linkName={linkName} />}*/}
    </View>
  );
};

export default ServiceListing;
