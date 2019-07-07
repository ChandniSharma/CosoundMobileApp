import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
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
              <Icon name="camera" style={{ fontSize: 60,  color: 'gray', alignSelf: 'center', }} /> 
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

