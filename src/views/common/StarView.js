import React from "react";
import { FlatList, Image, ImageBackground, Text, TextInput, Modal, TouchableHighlight, View, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import { Rating, AirbnbRating } from 'react-native-ratings';

//const WATER_IMAGE = require('./water.png')

export default class StarView extends React.Component {
    render() {
        return (
            <View style={{ height:50,marginTop:'-10%'  }}>
                
                <AirbnbRating
                    count={6}
                    // reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
                    defaultRating={3}
                    size={20}
                    
                />

            </View>
        )
    }
    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }
}



// Star views for future 
{/* <Rating
showRating
onFinishRating={this.ratingCompleted}
style={{ paddingVertical: 10 }}
/>
  <AirbnbRating />
<Rating
type='heart'
ratingCount={3}
imageSize={60}
showRating
onFinishRating={this.ratingCompleted}
/>

<Rating
type='custom'
// ratingImage={WATER_IMAGE}
ratingColor='#3498db'
ratingBackgroundColor='#c8c7c8'
ratingCount={10}
imageSize={30}
onFinishRating={this.ratingCompleted}
style={{ paddingVertical: 10 }}
/> */}