import { FlatList, Image, Text, View } from "react-native";

import styles from "../../stylesheet/profile.style";

export default class ImagesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
    renderImage = (music) => {
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
                <View style={styles.viewMoreImage}>
                    <Text style={styles.textViewMore}>View More...</Text>
                </View>
            </View>
        </View>
      );
    }
  }