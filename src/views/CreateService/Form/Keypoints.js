import React from "react";
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../../stylesheet/createservice.style';
import * as Animatable from 'react-native-animatable';
import { Icon } from "native-base";

class Keypoints extends React.Component {
  moveTextUp1 = () => this.refs.viewTxtInput1.fadeInUp(1000).then();

  componentDidMount() {
    this.moveTextUp1();
  }

  render() {
    const {
      data,
      errors,
      submitKeypoints,
      handleKeypoints,
      addMoreKeypoints
    } = this.props;

    return (
      <View>
        <Animatable.View ref={"viewTxtInput1"}>
          <View>
            <Text style={styles.subTitle}>Mention atleast one Keypoint of your service</Text>
            {data.key_points.map((item, index) => {
              if (item.isVisible) {
                return (
                  <View>
                    <View
                      key={index}
                      style={[styles.viewSocial, { flexDirection: 'row', flex: 1 }]}>
                      <TextInput
                        style={[styles.socialInput, { flex: 0.85 }]}
                        placeholder={'Keypoints'}
                        onChangeText={val => handleKeypoints(item.id, val)}
                        value={item.value}
                        name={"description"}
                      />
                      {!item.isReady && (
                        <TouchableOpacity onPress={() => addMoreKeypoints(item.id)} style={[styles.plusCircleBtn]}>
                          <Icon name="ios-add-circle-outline" size={30} color="gray" style={styles.plusCircle} />
                        </TouchableOpacity>
                      )}
                    </View>
                    {errors[item.id] ? <Animatable.Text animation="fadeIn" style={styles.errorText}> {errors[item.id]}</Animatable.Text> : null}
                  </View>
                );
              }
              return null;
            })}
            {errors.key_points && <Text style={styles.errorText}>{errors.key_points} </Text>}
          </View>
          <View style={styles.viewContainButton}>
            <TouchableOpacity style={styles.nextButton}
              onPress={() => submitKeypoints()}
            >
              <Text style={[styles.nextButtonTitle]}>Next</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    );
  }
}

export default Keypoints;
