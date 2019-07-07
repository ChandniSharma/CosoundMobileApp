import React,{Component} from "react";
import { isNull } from "lodash";
import Icon from 'react-native-vector-icons/Entypo';
import PlayVideo from '../common/PlayVideo';
import { Image, View, TouchableOpacity } from "react-native";
import PlayAudioClass from "../PlayAudioClass";

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
  primaryType,
  removeMedia,
 } = this.props;

  switch (primaryType) {
    case "image":
      return (
        <View>
          <TouchableOpacity style={{ width: 30, height: 30 }} onPress={() => removeMedia(item.id)}>
            <Icon name="circle-with-cross" style={{ fontSize: 20 }} />
          </TouchableOpacity>
          <View style={styles.content}>
            <Image source={{ uri: item.file.filePath.replace("file://", "") }} style={{ alignSelf:'center',width: "90%", height: 200, margin:10,padding:5 }}/>
          </View>
        </View>
      );
    case "video":
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
            uri={item.file.filePath}
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
    width: 300,
    height: 225,
    justifyContent: "center"
  }
};
