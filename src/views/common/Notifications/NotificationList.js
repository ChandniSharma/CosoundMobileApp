import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions, FlatList, ActivityIndicator } from 'react-native';
//import SvgUri from 'react-native-svg-uri';
import styles from '../../../stylesheet/AdvancedSearchView.style'
// import RecoverPwd from './RecoverPwd';
import * as Animatable from 'react-native-animatable';

import { isEmpty } from "lodash";
import { isError } from "../../../utils";



//import { Error, LoadMore, Loader } from "../../components/Commons";
import {
  getNotificationTitle,
  getThumbnail,
  refactorCarbonDate
} from "../../../utils";

import NotificationDescription from "./NotificationDescription";



class NotificationList extends React.PureComponent {

  renderItem = (itemDetail) => {

    let item = itemDetail.item;
    console.log("read &&&&&& ", this.props);
    return (
      <View>

        <TouchableHighlight onPress={this.onClickNotification}>
          <View>
            <View style={{ flexDirection: 'row' }}>

              <Image style={{ marginLeft: '2%', marginTop: '2%' }} source={require('../../../assets/avatar3.jpg')} />
              <View style={{ margin: '2%', flex: 1 }}>
                {/* <Image source={{uri:getThumbnail(item.activities[0].user)}} /> */}

                <View style={{ flexDirection: 'row' }}>
                  <Text style={[styles.textSubTitleNotSelected, { flex: 0.8, color: item.is_read ? "#20acac" : "#8e5acd" }]}>{getNotificationTitle(item.verb).title} </Text>
                  {/* {this.state.isClick? <Text style={styles.textSubtitleSelected}>Viewed your profile </Text>
                :  <Text style={styles.textSubTitleNotSelected}> Viewed your profile </Text>} */}
                  <Text style={[styles.textNotificationTime, { flex: 0.2 }]}> {refactorCarbonDate({ date: item.updated_at })}</Text>
                </View>
                <View >
                  <NotificationDescription item={item} markAsRead={this.props.markAsRead} />
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
      callApi,
      loadMore,
      callingAPI,
      markAsRead,
      notifications,
      page_count,
      page,

    } = this.props;
    console.log(" Notifica==========", this.props);
    return (
      <View style={{marginBottom:'5%'}}>

        {notifications.isRequesting && !callingAPI && (
          <ActivityIndicator color="gray" size="large" style={{marginTop:'10%'}}/>
        )}
        {isError(notifications) && (
          <View>
            <Animatable.Text animation="fadeIn" style={styles.errorText}> {notifications.error.message}  </Animatable.Text>
          </View>)}

        {!isError(notifications) &&
          !notifications.isRequesting &&
          isEmpty(notifications.data) && (
            <View>
              <Text style={styles.noNotificationText}>No notifications to show </Text>
            </View>)}

        {notifications && notifications.data && 
        <FlatList
          renderItem={this.renderItem}
          extraData={this.props}
          data={notifications.data}
          keyExtractor={(item, index) => index.toString()}
        />}

      </View>
    );
  }
}

export default NotificationList;

{/* {!isEmpty(notifications.data) && callApi && (
          <LoadMore loadMore={loadMore} callingAPI={callingAPI} />
        )} */}
{/* {!isEmpty(data) && !callingAPI && page !== page_count && !isNull(page_count) && !callApi(
                <View style={styles.viewMore}>
                    <TouchableHighlight underlayColor="#25b6ad" style={[styles.seeMoreBtn]} onPress={loadMore}>
                        <Text style={styles.textViewMore} > {callingAPI ? "Fetching..." : "View More..."}</Text>
                    </TouchableHighlight>
                </View>
         )} */}