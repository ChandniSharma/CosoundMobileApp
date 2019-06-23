import React from "react";
import { isNull } from "lodash";

// import { ErrorMsg, Svg, Loader, SubmitButtonDiv } from "../../Commons";
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import styles from '../../../stylesheet/createservice.style';
import * as Animatable from 'react-native-animatable';
import { Icon } from "native-base";
import Icon2 from 'react-native-vector-icons/AntDesign';

var ImagePicker = require('react-native-image-picker');

export default class ImagesTemp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      isShowDatePicker: true,

    }
  }


//   moveViewUp1= () => this.refs.view1.fadeInUp(2000).then(this.moveViewUp2());
//   moveViewUp2= () => this.refs.view2.fadeInUp(2000).then(this.moveViewUp3());
//   moveViewUp3= () => this.refs.view3.fadeInUp(2000).then(this.moveViewUp4());
//   moveViewUp4= () => this.refs.view4.fadeInUp(2000);

  componentDidMount() {
    //this.moveViewUp1();
  }
  chooseFile = () => {
    var options = {
      title: 'Image',

      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {

      if (response.didCancel) {

      } else if (response.error) {

      } else if (response.customButton) {
        alert(response.customButton);

      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

       // this.props.handleFileChange('avatar', 'data:image/jpeg;base64,' + source.data)

      }
    });
  };


render()
{
  const {
    data,
    errors,
    publishService,
    _publishService,
    handleFileChange
  } = this.props;

  return(
    <Animatable.View style={{flex:1,backgroundColor:'pink'}}>

    <Animatable.View>
      <Text style={[styles.addPictureText, {marginTop:'10%',alignSelf:'center', }]}>
        Add some pictures to your service!
        </Text>

        <View style={styles.findingView}>

<TouchableOpacity style={{  height: 80, width: 80, borderRadius:40, backgroundColor:'white', justifyContent:'center' }} onPress={this.chooseFile.bind(this)}>
  {/* {!data.url ? */}
    <Icon name="camera" style={{ fontSize: 60,  color: 'gray', alignSelf: 'center', }} /> 
    {/* <Image
      source={{
        uri: data.url,
      }}
      style={{ width: 100, height: 100, borderRadius: 50, marginTop: '33.5%' }}
    />} */}

</TouchableOpacity>

</View>
<Text style={[styles.featuredText,{marginTop:'10%', alignSelf:'center' }]}> Featured picture </Text>

<TouchableOpacity style={styles.viewAddImage}>
    <Icon2 name= "pluscircleo" style={{alignSelf:'center', fontSize:45, color:'#20ACAC'}}/>
    </TouchableOpacity>

          </Animatable.View>
          </Animatable.View>
  )
}
}

