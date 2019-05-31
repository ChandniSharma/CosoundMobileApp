import React from "react";
import { isNull } from "lodash";
import Icon from 'react-native-vector-icons/Entypo';
import PlayVideo from '../common/PlayVideo';
import { FlatList, Image, ImageBackground, Text, TextInput, TouchableHighlight, View, TouchableOpacity, Clipboard, AlertIOS, Platform } from "react-native";

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

const RenderMedia = ({
  item,
  applyRef,
  primaryType,
  removeMedia,
  applyAudioRef
}) => {
  switch (primaryType) {
    case "image":
      return (
        <View>
          {/* <CloseIcon close={removeMedia} id={item.id} /> */}

          <TouchableOpacity style={{ width: 30, height: 30 }} onPress={() => removeMedia(item.id)}>
            <Icon name="circle-with-cross" style={{ fontSize: 20 }} />
          </TouchableOpacity>
          <View style={styles.content}>
            <Image source={{ uri: item.url }} />
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
            // poster={
            //   !isNull(media.metadata) && !isNull(media.metadata.thumbnail)
            //     ? media.metadata.thumbnail
            //     : poster
            // }
            uri={item.url}//{JSON.stringify(media)}
            // options={JSON.stringify(config)}
            // tracks={JSON.stringify(tracks)}
            parentComponent="renderTempFile"
          />
        </View>

      );
    case "audio":
      return (
        <View>
          <TouchableOpacity style={{ width: 30, height: 30 }} onPress={() => removeMedia(item.id)}>
            <Icon name="circle-with-cross" style={{ fontSize: 20 }} />
          </TouchableOpacity>

          <Text>Render Temp Audio file</Text>

        </View>
      );
    default:
      return null;
  }
};

const styles = {
  wrapper: {

    flex: 1,
    backgroundColor: 'pink'
  },
  main: { margin: '5%' },
  content: {
    // borderRadius: "unset",
    width: 300,
    height: 225,
    justifyContent: "center"
  }
};
