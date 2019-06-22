import React,{Component} from "react";
import { isNull } from "lodash";
import Icon from 'react-native-vector-icons/Entypo';
import WaveForm from 'react-native-audiowaveform';
import PlayVideo from '../common/PlayVideo';
import { FlatList, Image, ImageBackground, Text, TextInput, TouchableHighlight, View, TouchableOpacity, Clipboard, AlertIOS, Platform } from "react-native";
import PlayAudioClass from "../PlayAudioClass";


// import { CloseIcon } from "../../components/Commons/";

const RenderTempFile = ({ urls, applyRef, applyAudioRef, removeMedia }) => {
  return (

    <View style={styles.wrapper}>
      {urls.map(item => {
        if (isNull(item.type)) return null;

        const typeArray = item.type.split("/");
        const primaryType = typeArray[0];
        return (
          <View
            style={styles.main}

          >
            <RenderMedia
              item={item}
              removeMedia={removeMedia}
              applyRef={applyRef}
              primaryType={primaryType}
              applyAudioRef={applyAudioRef}
            />
          </View>
        );
      })}
    </View>
  );
};

export default RenderTempFile;


class RenderMedia extends Component{
  constructor(props){
    super(props);
    this.state ={
        playAudio: false,
        stopAudio: true,
    }
}
changestate = () => {
    this.setState({ playAudio: !this.state.playAudio, stopAudio: !this.state.stopAudio });
}
render(){
 const {
  item,
  applyRef,
  primaryType,
  removeMedia,
  applyAudioRef
 } = this.props;

console.log(" ============in temp ", primaryType, "item ===",item.file.filePath);

  switch (primaryType) {
    case "image":
      return (
        <View>
          {/* <CloseIcon close={removeMedia} id={item.id} /> */}

          <TouchableOpacity style={{ width: 30, height: 30 }} onPress={() => removeMedia(item.id)}>
            <Icon name="circle-with-cross" style={{ fontSize: 20 }} />
          </TouchableOpacity>
          <View style={styles.content}>
            <Image source={{ uri: item.file.filePath.replace("file://", "") }} style={{ alignSelf:'center',width: "90%", height: 200, margin:10,padding:5 }}/>
          </View>
        </View>
      );
    case "video":
      console.log(" in video =====", item);
      return (
        <View>
          <TouchableOpacity style={{ width: 30, height: 30 }} onPress={() => removeMedia(item.id)}>
            <Icon name="circle-with-cross" style={{ fontSize: 20 }} />
          </TouchableOpacity>
          <PlayVideo
            key={item.id}
            id={`player-${item.id}`}
            mediaType="video"
            preload="none"
            controls
            width={"100%"}
            height={'20%'}
            // poster={
            //   !isNull(media.metadata) && !isNull(media.metadata.thumbnail)
            //     ? media.metadata.thumbnail
            //     : poster
            // }
            uri={item.file.filePath}//{JSON.stringify(media)}
            // options={JSON.stringify(config)}
            // tracks={JSON.stringify(tracks)}
            parentComponent="renderTempFile"
          />
        </View>

      );
    case "music":
     
      return (
        <View>
          <TouchableOpacity style={{ width: 30, height: 30 }} onPress={() => removeMedia(item.id)}>
            <Icon name="circle-with-cross" style={{ fontSize: 20 }} />
          </TouchableOpacity>

          <PlayAudioClass 
          source={{ uri: item.file.filePath }}

         />

          {/* <WaveForm
            style={{
                flex: 1,
                margin: 10,
                backgroundColor: "white", height: 50
            }}
            onPress={() => this.changestate()}
            source={{ uri: 'https://s3.eu-west-2.amazonaws.com/cosound-primary/uploads/audio/E6UOLuDNpwnlf9279FMEPriMZCtaXQFlfD48r0e1.mpga' }}
            //source={{ uri: item.file.filePath }}
            stop={this.state.stopAudio}
            play={this.state.playAudio}
            autoPlay={false}
            waveFormStyle={{ waveColor: 'gray', scrubColor: 'red', width: 'auto' }}
        /> */}
        </View>
      );
    default:
      return null;
  }
};
}

const styles = {
  wrapper: {

    flex: 1,
    
  },
  main: { margin: '5%' },
  content: {
    // borderRadius: "unset",
    width: 300,
    height: 225,
    justifyContent: "center"
  }
};
