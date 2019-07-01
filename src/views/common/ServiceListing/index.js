import React, {Component} from "react";
import { isEmpty } from "lodash";
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions, FlatList, ActivityIndicator } from 'react-native';
 import styles from "../../../stylesheet/serviceList.style";
 import {  getServiceThumbnail } from "../../../utils";

import SortList from '../../common/SortList';
import NoDataWithLink from '../../common/NoDataWithLink';
import * as Animatable from 'react-native-animatable'


export default class ServiceListing extends Component {

  fadeInUpMainView = () => this.refs.viewServiceCard.fadeInUp(1000);
  fadeInUpList = () => this.refs.viewList.fadeInUp(2000);

  componentDidMount() {
    if(!isEmpty(this.props.services.data)){
      setTimeout(() => {
        this.fadeInUpMainView();
      }, 100);
      // setTimeout(() => {
      //   this.fadeInUpList();
      //  }, 800);
    
    }
  }

   getServiceLink = (item, id = null) => {
    console.log("item 30==sss===",item)
    this.props.navigation.navigate('Service', { slug: item.category.slug, subcategorySlug: item.sub_category.slug, id: item.id});

  };

  renderServiceItem = (itemDetail) => {

    let item = itemDetail.item;
    console.log("item===",item)
    return (
      <View>
        <TouchableOpacity onPress={() => this.getServiceLink(item)}>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Image style={{ marginLeft: '2%', marginTop: '2%', width: 100, height: 100, borderRadius: 10  }} source={{uri :getServiceThumbnail(item.media)}} />
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
        </TouchableOpacity>
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
      noDataMessage,
      navigation
    } = this.props;

    const { data, isRequesting, error } = services;
    return (
      <Animatable.View ref={'viewServiceCard'}>
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
            navigation ={navigation}
            
          />
        
        )}
        {!isEmpty(data) && (
          <Animatable.View ref={'viewList'}>

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
              <Text style={styles.textSeeMoreBtnTitle} > {callingAPI ? "Fetching..." : "View More..."}</Text>
            </TouchableHighlight>
          </View>
        }
     

        {!isEmpty(data) && <View style={{ marginTop: '5%',   marginLeft: "15%", marginRight: "15%",marginBottom: '15%',}}>
        <TouchableHighlight underlayColor="#25b6ad" style={[styles.serviceTitleBtn]} onPress={() => this.props.navigation.navigate("CreateService")}>
                <Text style={[styles.textCreateService]} >Create Service</Text>
            </TouchableHighlight>
        </View>}
      </Animatable.View>
    );
  }
};


