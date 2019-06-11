import { FlatList, Image, Text, View, TouchableHighlight } from "react-native";
import React, {Component} from 'react';
import styles from "../../stylesheet/profile.style";
import { isEmpty, isNull } from "lodash";
import { getImageThumbnail } from "../../utils";

export default class ImagesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
            isOpen: false,
            images: [
                {
                    image: require('../../assets/homepage-video-placeholder.jpg')
                },
                {
                    image: require('../../assets/homepage-video-placeholder.jpg')
                },
                {
                    image: require('../../assets/homepage-video-placeholder.jpg')
                },
                {
                    image: require('../../assets/homepage-video-placeholder.jpg')
                },
                {
                    image: require('../../assets/homepage-video-placeholder.jpg')
                },
                {
                    image: require('../../assets/homepage-video-placeholder.jpg')
                },
            ]
        }
    }

 /**
   * Browse through lightbox
   */
  _browse = photoIndex => {
    const { myImages } = this.props;
    const { data } = myImages;
    if (photoIndex >= 0 && photoIndex < data.length) {
      this.setState({ photoIndex });
    }
  };

  /**
   * Toggle Lightbox
   */
  _toggleLightbox = photoIndex => {
    this.setState({
      isOpen: !this.state.isOpen,
      photoIndex: isNaN(photoIndex) ? 0 : photoIndex
    });
  };
      
    renderImage = (image) => {
        console.log(" Imge is =====", image);
        const thumbnail = getImageThumbnail(image.item);
        console.log(" thumnail ====", thumbnail);

        // () => _toggleLightbox(index)
        return (
            <View style={{ padding: 10 }}>
                <Image style={{
                    width: 100,
                    height: 100,
                    borderRadius: 10,
                    shadowColor: 'rgba(0,0,0,1)',
                    shadowOffset: {
                        width: 0.8,
                        height: 0.8
                    },
                    shadowOpacity: 0.2,
                    zIndex: -1
                }}
                    source={{uri:thumbnail}}>
                </Image>
            </View>
        )
    };


    render() {

     const { photoIndex, isOpen } = this.state;
     const { loadMore, callingAPI, myImages, page,
        callAPI,
        
        page_count, } = this.props;
     const { data } = myImages;
  
      return (
        <View style= {{flex:1}}>
         <View style={styles.midView}>
            </View>
            <View>
                <FlatList
                    numColumns={3}
                    data={data}
                    renderItem={this.renderImage}
                    keyExtractor={(item, index) => index.toString()}
                />
            
                {!isEmpty(data) && !callingAPI && page !== page_count && !isNull(page_count) && 
                    <View style={styles.viewMoreImage}>
                        <TouchableHighlight underlayColor="#25b6ad" style={[styles.seeMoreBtn]} onPress={loadMore}>
                            <Text style={styles.textViewMore} > {callingAPI ? "Fetching..." : "View More..."}</Text>
                        </TouchableHighlight>
                    </View>
                }
            </View>
        </View>
      );
    }
  }