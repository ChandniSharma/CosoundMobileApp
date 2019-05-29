import React from "react";
import { isEmpty } from "lodash";

import ServiceCard from "./ServiceCard";

import { noDataProps } from "./data";
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import styles from '../../stylesheet/createservice.style';

class ServiceGrid extends React.PureComponent {
  render() {
    const { services, loadMore, callingAPI } = this.props;
    const { data, isRequesting, error } = services;

    return (
      <View>
        {/*<Link
          to={"/purchased-services"}
          className="btn btn-primary btn-primary--red"
        >
          <Text>My Market</Text>
        </Link>*/}
         <Text>My Market</Text>

        <View>
          <Text>Your Personal Reccomendations</Text>
        </View>

        {/*isRequesting && !callingAPI && (
          <Loader fill={"#53b2af"} height={"18px"} className={"playLoader"} />
        )*/}

        {!isRequesting && !isEmpty(error) && <Text>{error.message} </Text>}

        {/*!isRequesting && isEmpty(error) && isEmpty(data) && (
          <NoDataWithLink {...noDataProps} />
        )*/}

        <View>
          {data.map((item, index) => {
            return <ServiceCard item={item} key={index} />;
          }
          )}
        </View>

        {/*!isEmpty(data) && (
          <ViewMore callingAPI={callingAPI} loadMore={loadMore} />
        )*/}
      </View>
    );
  }
}
export default ServiceGrid;
