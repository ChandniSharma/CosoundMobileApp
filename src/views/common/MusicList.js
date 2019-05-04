import { FlatList, Image, Text, View } from "react-native";

import styles from "../../stylesheet/profile.style";

export default class MusicList extends Component {
    constructor(props) {
        super(props);
        this.state = {
           music: [
                {
                    id: 1,
                    music: "o mere dil ke chain",
                    time: "5.20"
                },
                {
                    id: 2,
                    music: "o mere dil ke chain",
                    time: "5.20"
                },
                {
                    id: 3,
                    music: "o mere dil ke chain",
                    time: "5.20"
                },
            ]
        }
    }       
    renderItem = (music) => {
        return (
            <View style={{ paddin: 10 }}>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 9, flexDirection: "row" }}>
                        <Text style={styles.songTitle}>{music.item.id}.</Text>
                        <Text style={styles.songTitle}>{music.item.music}</Text>
                    </View>
                    <Text style={styles.songDuration}>{music.item.time}</Text>
                </View>
                <View style={{ marginTop: "5%", marginBottom: "5%", width: "100%", justifyContent: "center", height: 0.5, backgroundColor: "#d3d3d3" }}>
                </View>
            </View>
        )
    };

    render() {
      return (
        <View style= {{flex:1}}>
          <View style={styles.midView}>
        </View>
        <View>
            <View style={{ padding: 5, marginBottom: "5%" }}>
                <View style={{ flexDirection: "row", padding: 10 }}>
                    <View style={{ flex: 4, }}>
                        <Image style={styles.videoPlaceholder}
                            source={require('../../assets/homepage-video-placeholder.jpg')}>
                        </Image>
                        <Icon name="ios-play" size={40} color={"white"} />
                    </View>
                    <View style={{ flex: 6 }}>
                        <Text style={styles.musicTitle}>Kygo</Text>

                        <Text style={styles.musicDescription}>Of Monsters and Men - Dirty Paws (Kygo remix)</Text>
                    </View>
                </View>
                <View style={styles.viewMusicImage}>
                    <Image style={styles.musicAnimatedImg} source={require('../../assets/noise.gif')} />
                </View>
                <View style={{ width: "100%", justifyContent: "center", flexDirection: "row", marginTop: "5%", marginBottom: "5%" }}>
                    <Text style={styles.musicCurrentTime}>0.00</Text>
                    <Text style={styles.musicDescription}>2.03</Text>
                </View>
            </View>
            <FlatList
                data={this.state.music}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
            <View style={styles.viewMore}>
                <Text style={styles.textViewMore}>View More...</Text>
            </View>
        </View>
        </View>
      );
    }
  }