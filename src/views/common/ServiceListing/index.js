import React, {Component} from "react";
import { isEmpty } from "lodash";
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions, FlatList, ActivityIndicator } from 'react-native';
 import styles from "../../../stylesheet/serviceList.style";

import SortList from '../../common/SortList';
import NoDataWithLink from '../../common/NoDataWithLink';
import * as Animatable from 'react-native-animatable'


export default class ServiceListing extends Component {

  fadeInUp = () => this.refs.viewServiceCard.fadeInUp(1000);

  componentDidMount() {
    if(!isEmpty(this.props.services.data)){
      this.fadeInUp();
    }
  }

  renderServiceItem = (itemDetail) => {

    let item = itemDetail.item;
    return (
      <View>

        <TouchableHighlight>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Image style={{ marginLeft: '2%', marginTop: '2%' }} source={require('../../../assets/avatar3.jpg')} />
              <View style={{ margin: '2%', flex: 1 }}>

                <Text style={[styles.textSubTitleNotSelected, { flex: 0.8, color: item.is_read ? "#20acac" : "#8e5acd" }]}>{item.title} </Text>
                <Text style={[styles.textSubTitleNotSelected, { flex: 0.8, color: item.is_read ? "#20acac" : "#8e5acd" }]}>{item.category.name} </Text>
                <View >
                  <Text style={styles.textDescription}> {item.description} </Text>
                </View>
              </View>
            </View>
            <View style={{ width: '80%', height: 1, backgroundColor: 'rgba(38,38,38, 0.52)', marginTop: '2%', alignSelf: 'center' }} />
          </View>
        </TouchableHighlight>
      </View>)
  }

  render() {
    const {
      icon,
      link,
      sort,
      services,
      linkName,
      loadMore,
      noDataDesc,
      callingAPI,
      noDataMessage
    } = this.props;

    const { data, isRequesting, error } = services;
    return (
      <View>
        {isRequesting && !callingAPI && (
          <ActivityIndicator color="gray" size="large" style={{ marginTop: '10%' }} />
        )}
        {!isRequesting && !isEmpty(error) && <Text >{error.message} </Text>}

        {!isEmpty(data) && <SortList type={services.sortType} sort={sort} />}

        {isEmpty(data) && !isRequesting && isEmpty(error) && (
          <NoDataWithLink
            icon={icon}
            link={link}
            linkName={linkName}
            noDataDesc={noDataDesc}
            noDataMessage={noDataMessage}
          />
        )}
        {!isEmpty(data) && (
          <Animatable.View ref={'viewServiceCard'}>

            <FlatList
              renderItem={this.renderServiceItem}
              extraData={this.props}
              data={data}
              keyExtractor={(item, index) => index.toString()}
            />
            {/* {data.map((item, index) => {
            return <ServiceListingCard item={item} key={index} />;
          })} */}

          </Animatable.View>
        )}
        {/* {!isEmpty(data) && (
        <ViewMoreFlat callingAPI={callingAPI} loadMore={loadMore} />
      )}*/}
        {/* {!isEmpty(data) && <CreateLink link={link} linkName={linkName} />}*/}

        {!isEmpty(data) &&
          <View style={styles.viewMore}>
            <TouchableHighlight underlayColor="#25b6ad" style={[styles.seeMoreBtn]} onPress={() => loadMore()}>
              <Text style={styles.textViewMore} > {callingAPI ? "Fetching..." : "View More..."}</Text>
            </TouchableHighlight>
          </View>
        }
        {!isEmpty(data) && <TouchableHighlight underlayColor="#25b6ad" style={[styles.loginButton, { marginTop: '5%', justifyContent: 'center', }]} onPress={() => this.props.navigation.navigate("CreateService")}>
          <Text style={[styles.textButtonTitle, { marginBottom: '15%' }]} >Create Service</Text>
        </TouchableHighlight>}

      </View>
    );
  }
};


