import React from "react";
import { isEmpty } from "lodash";
import { getThumbnail, getUsername, refactorCarbonDate } from "../utils";
import { FlatList, Image, Text, TouchableHighlight, View, ActivityIndicator } from "react-native";

class ServiceReview extends React.PureComponent {
    renderItem = (data) => {
        let item = data.item;
        return (
            <View style={{ backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row', flex: 1, marginLeft: '5%', marginRight: '5%', marginTop: '5%' }}>
                    <Image source={{uri: getThumbnail(item.creator)}} style={{ width: 50, height: 50, borderRadius: 25 }} />
                    <View style={{ flex: 0.85 }}>
                        <Text style={styles.commentorName}>{getUsername(item.creator)}</Text>
                        <View style={{ flexDirection: 'row', marginTop: '2%', marginLeft: '0.5%' }}>
                           <StarView starCount={item.rating} />
                            <Text style={[styles.textRatingCount, { marginLeft: '2%' }]}>{item.rating}</Text>
                        </View>
                    </View>
                    <Text style={[styles.commentTime, { flex: 0.15 }]}>{refactorCarbonDate(item.created_at)}</Text>
                </View>
                <Text style={styles.commentDescription}>{item.description}</Text>
                <View style={styles.ViewSingleLine} />
            </View>
        )
    }  
    render() {
    const { reviews, isRequesting, callingAPI, loadMore } = this.props;
    const { data } = reviews;
    return (
        <View style={{ flex: 0.4, marginBottom: '2%' }}>
            {isRequesting && !callingAPI && (
           <ActivityIndicator size="large" color="gray" />
        )}
        <FlatList
            data={data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
        />
         {!isEmpty(data) && !isRequesting && 
                <View style={styles.viewMore}>
                    <TouchableHighlight underlayColor="#25b6ad" style={[styles.seeMoreBtn]} onPress={() => loadMore()}>
                        <Text style={styles.textViewMore} > {callingAPI ? "Fetching..." : "View More..."}</Text>
                    </TouchableHighlight>
                </View>
            }
    </View>
    )
  }
}

export default ServiceReview;
