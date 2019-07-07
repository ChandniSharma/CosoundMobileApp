import React from "react";
import { View } from "react-native";
import {  AirbnbRating } from 'react-native-ratings';

export default class StarView extends React.Component {
    render() {
        const {starCount} = this.props
        return (
            <View style={{ height:50, marginTop:'-10%' }}>
                <AirbnbRating
                    count={5}
                    reviews={[""]}
                    defaultRating={starCount}
                    readonly={true}
                    size={20}
                    isDisabled={true}
                    ratingColor='red'
                    ratingBackgroundColor="red"
                />
            </View>
        )
    }
    ratingCompleted(rating) {
    }
}