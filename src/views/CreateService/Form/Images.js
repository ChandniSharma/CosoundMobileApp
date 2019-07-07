import React from "react";
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from '../../../stylesheet/createservice.style';
import * as Animatable from 'react-native-animatable';
import { Icon } from "native-base";
import Icon2 from 'react-native-vector-icons/AntDesign';
var ImagePicker = require('react-native-image-picker');

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowDatePicker: true,
    }
  }

  moveViewUp1 = () => this.refs.view1.fadeInUp(2000);

  componentDidMount() {
    this.moveViewUp1();
  }
  chooseFile = (name) => {
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
        let filePath = source.uri;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.props.handleFileChange(name, filePath)
      }
    });
  };


  render() {
    const {
      data,
      errors,
      publishService,
      _publishService,
      handleFileChange
    } = this.props;

    return (
      <Animatable.View ref={'view1'} style={{ height: 1700 }}>

        <View>
          <Text style={[styles.addPictureText, { marginTop: '10%', alignSelf: 'center', }]}>
            Add some pictures to your service!
        </Text>
          <View style={{ marginTop: 10 }}>
            <TouchableOpacity style={styles.findingView} onPress={() => this.chooseFile("image")}>
              {!data.image ?
                <Icon name="camera" style={{ fontSize: 60, color: 'gray', alignSelf: 'center', }} />
                : <Image
                  source={{
                    uri: data.image,
                  }}
                  style={{ width: 100, height: 100, borderRadius: 50 }}
                />}

            </TouchableOpacity>
          </View>
          <Text style={[styles.featuredText, { marginTop: '10%', alignSelf: 'center' }]}> Featured picture </Text>
          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <TouchableOpacity style={styles.viewAddImage} onPress={() => this.chooseFile("featuredImage_1")}>
              {!data.featuredImage_1 ?
                <Icon2 name="pluscircleo" style={{ alignSelf: 'center', fontSize: 45, color: '#20ACAC' }} />

                : <Image
                  source={{
                    uri: data.featuredImage_1,
                  }}
                  style={{ width: 100, height: 100, borderRadius: 50, marginTop: '33.5%' }}
                />}
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <TouchableOpacity style={styles.viewAddImage} onPress={() => this.chooseFile("featuredImage_2")}>
              {!data.featuredImage_2 ?
                <Icon2 name="pluscircleo" style={{ alignSelf: 'center', fontSize: 45, color: '#20ACAC' }} />
                : <Image
                  source={{
                    uri: data.featuredImage_2,
                  }}
                  style={{ width: 100, height: 100, borderRadius: 50, marginTop: '33.5%' }}
                />}
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <TouchableOpacity style={styles.viewAddImage} onPress={() => this.chooseFile("featuredImage_3")}>
              {!data.featuredImage_3 ?
                <Icon2 name="pluscircleo" style={{ alignSelf: 'center', fontSize: 45, color: '#20ACAC' }} />
                : <Image
                  source={{
                    uri: data.featuredImage_3,
                  }}
                  style={{ width: 100, height: 100, borderRadius: 50, marginTop: '33.5%' }}
                />}
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <TouchableOpacity style={styles.viewAddImage} onPress={() => this.chooseFile("featuredImage_4")}>
              {!data.featuredImage_4 ?
                <Icon2 name="pluscircleo" style={{ alignSelf: 'center', fontSize: 45, color: '#20ACAC' }} />
                : <Image
                  source={{
                    uri: data.featuredImage_4,
                  }}
                  style={{ width: 100, height: 100, borderRadius: 50, marginTop: '33.5%' }}
                />}
            </TouchableOpacity>
          </View>
          <View>
          </View>
          {errors.image && (
            <Animatable.Text animation="fadeIn" style={styles.errorText}>
              {errors.image}
            </Animatable.Text>
          )}
        </View>
        <View style={styles.viewContainButton}>
          <TouchableOpacity
            onPress={() => _publishService()}
            style={styles.nextButton}
          >
           {publishService.isRequesting?<ActivityIndicator color="white" />:<Text style={styles.nextButtonTitle}>publish Service</Text>
           }
          </TouchableOpacity>
        </View>
      </Animatable.View>
    )
  }
}

export default Images;
