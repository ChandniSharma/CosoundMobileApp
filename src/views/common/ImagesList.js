import { FlatList, Image, Text, View } from "react-native";

import styles from "../../stylesheet/profile.style";

export default class ImagesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
            isOpen: false
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
      
    renderImage = (music) => {
        const { thumbnail } = music.item;
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
                    source={require('../../assets/homepage-video-placeholder.jpg')}>
                </Image>
            </View>
        )
    };


    render() {

     const { photoIndex, isOpen } = this.state;
     const { loadMore, callingAPI, myImages } = this.props;
     const { data } = myImages;
  
      return (
        <View style= {{flex:1}}>
         <View style={styles.midView}>
            </View>
            <View>
                <FlatList
                    numColumns={3}
                    data={this.state.images}
                    renderItem={this.renderImage}
                    keyExtractor={(item, index) => index.toString()}
                />
            
                {!isEmpty(data) && (
                    <View style={styles.viewMoreImage}>
                        <TouchableHighlight underlayColor="#25b6ad" style={[styles.seeMoreBtn]} onPress={loadMore}>
                            <Text style={styles.textViewMore} > {callingAPI ? "Fetching..." : "View More..."}</Text>
                        </TouchableHighlight>
                    </View>
                )}
            </View>
        </View>
      );
    }
  }