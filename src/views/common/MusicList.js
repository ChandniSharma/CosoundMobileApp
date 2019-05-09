import { FlatList, Image, Text, View, TouchableHighlight } from "react-native";
import React, {Component} from "react";
import { connect } from "react-redux";
import { isEmpty, isNull } from "lodash";
import * as Animatable from 'react-native-animatable';
import { Icon } from "native-base";

import styles from "../../stylesheet/profile.style";
import { getDuration, getTrackName, getMetadata, formatCurrentTime } from "../../utils";
import { TouchableOpacity } from "react-native-gesture-handler";

 class MusicList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          current: {},  
          pos: 0,
          volume: 8,
          isActive: false,
          isPlaying: false,
          loading: true
         
        }
    } 

    componentDidUpdate() {
        const { myMusic, postDetails } = this.props;
        const { data } = myMusic;

        if (!isEmpty(data) && isEmpty(this.state.current)) {
          const current = data.slice(0, 1)[0];
          this._setCurrent(current);
        }

        if (
          !isEmpty(postDetails.data) &&
          postDetails.data.data &&
          !isEmpty(this.state.current)
        ) {
          const post = postDetails.data.data;
          const current = post.media[0];
          if (
            current &&
            current.file_type === "audio" &&
            this.state.current.id === current.id
          ) {
            const { metadata } = current;
            if (!isNull(metadata)) {
              this._setCurrent(current);
            }
          }
        }
    }

   

    renderItem = (music) => {
      console.log(" music is ====", music);
      let { current } = this.state;
     let style = { paddin: 10 };
     if(current.id === music.item.id){
      style = { paddin: 10, color: "#7373c6", fontWeight: 500 };
     }
        return (
      
            <TouchableOpacity onPress={() =>this._setCurrent(music.item)} style={{style}}>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 9, flexDirection: "row" }}>
                        <Text style={styles.songTitle}>{music.index+1}.</Text>
                        <Text style={styles.songTitle}>  {  getTrackName(music.index, music.item.metadata)  }</Text>
                    </View>
                    <Text style={styles.songDuration}> {  getDuration(music.item.metadata)  } </Text>
                </View>
                <View style={{ marginTop: "5%", marginBottom: "5%", width: "100%", justifyContent: "center", height: 0.5, backgroundColor: "#d3d3d3" }}>
                </View>
            </TouchableOpacity>
        )
    };

  /**
   * Set Current player track
   */
  _setCurrent = current => {
    this.setState({
      current
    });
  };

    render() {
      let { current, pos } = this.state;
      const { myMusic, postDetails, loadMore, callingAPI, page, page_count, callApi } = this.props;
      const { data } = myMusic;
      console.log(" data === ",data);
      console.log("current====",current)
      const { duration, albumart, album, artistName, title } = getMetadata(
        current
      );
      const currentTime = formatCurrentTime(pos);
      return (
        <View>
          <View style={styles.midView}>
          </View>
        <View>

        {!isEmpty(current) && (
            <View style={{ padding: 5, marginBottom: "5%" }}>
                <View style={{ flexDirection: "row", padding: 10 }}>
                    <View style={{ flex: 4, }}>
                        <Image style={styles.videoPlaceholder}
                            source={require('../../assets/homepage-video-placeholder.jpg')}>
                        </Image>
                        <Icon name="ios-play" size={40} color={"white"} />
                    </View>
                    <View style={{ flex: 6 }}>
                        <Text style={styles.musicTitle}> {`${!isNull(album) ? album : ""} ${
                  !isNull(title) ? ` - ${title}` : ""
                }`}</Text>

                        <Text style={styles.musicDescription}>Of Monsters and Men - Dirty Paws (Kygo remix)</Text>
                    </View>
                </View>
                <View style={styles.viewMusicImage}>
                    <Image style={styles.musicAnimatedImg} source={require('../../assets/noise.gif')} />
                </View>
                <View style={{ width: "100%", justifyContent: "center", flexDirection: "row", marginTop: "5%", marginBottom: "5%" }}>
                    <Text style={styles.musicCurrentTime}>{duration}</Text>
                    <Text style={styles.musicDescription}>{currentTime}</Text>
                </View>
            </View>
        )}

            <FlatList
                data={data}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
            />

            {!isEmpty(data) && !callingAPI && page !== page_count && !isNull(page_count) && !callApi(
                <View style={styles.viewMore}>
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


// eslint-disable-next-line
const mapStateToProps = state => {
  return {
    postDetails: state.postDetails
  };
};

export default connect(mapStateToProps)(MusicList);
