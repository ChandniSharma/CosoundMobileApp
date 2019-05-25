import React from "react";
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import styles from '../../../stylesheet/createservice.style';
import * as Animatable from 'react-native-animatable';
import { Icon } from "native-base";
import Icon1 from "react-native-vector-icons/AntDesign";


class Keypoints extends React.Component {
  moveTextUp1 = () => this.refs.viewTxtInput1.fadeInUp(1000).then();

  componentDidMount() {
    this.moveTextUp1();
  }

showInputWithAddButton = (index) => {
  let data = this.props.data;
  let inputKey = null;
  if(index < 2){
  return <TouchableHighlight onPress={() => this.props.addMoreKeypoints(index)} underlayColor="#25b6ad" style={[styles.plusCircleBtn]}>
  {index + 1 === data.key_points.length ? <Icon name="ios-add-circle-outline" size={30} color="gray" style={styles.plusCircle} /> : <Icon name="ios-add-circle-outline" size={30} color="gray" style={styles.plusCircle} />}
  </TouchableHighlight>
  }
  return inputKey;
}


  render() {
    const {
      data,
      errors,
      handleKeyPress,
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
                  <View
                    key={index}
                    style={[styles.viewSocial, { flexDirection: 'row', flex: 1 }]}>
                    { /*<input
                      type="text"
                      name={item.id}
                      placeholder="Keypoints"
                      onKeyPress={e => handleKeyPress(e)}
                      onChange={e => handleKeypoints(e)}
                      value={item.value}
                    />*/ }
                    <TextInput
                      style={[styles.socialInput, { flex: 0.85 }]}
                      placeholder={'Keypoints'}
                      onChangeText={val => handleKeypoints(item.id, val)}
                      value={item.value}
                      name={"description"}
                     
                    />
                    {/*!item.isReady && (
                      <Svg
                        name="ico-plus"
                        modClass="js-multiple-inputs-plus"
                        handleClick={() => addMoreKeypoints(item.id)}
                      />
                    )*/}

                   {this.showInputWithAddButton(index)}

                    {errors[item.id] && <Text style={styles.errorText}>{errors[item.id]} </Text>}
                  </View>
                );
              }
              return null;
            })}
            {errors.key_points && <Text style={styles.errorText}>{errors.key_points} </Text>}
          </View>
          <TouchableOpacity style={[styles.loginButton, { marginTop: '5%', justifyContent: 'center', }]}
            onPress={() => submitKeypoints()}
          >
            <Text style={[styles.loginText, {marginTop:'4%'} ]}>Next</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    );
    // return (
    //   <View className="services-create__step is-active" data-step="3">
    //     <View className="services-create__View">
    //       <View
    //         className="ui-group wow fadeInUp"
    //         data-wow-delay=".4s"
    //         style={{ zIndex: 2 }}
    //       >
    //         <label>Mention atleast one Keypoint of your service</label>
    //         {data.key_points.map((item, index) => {
    //           if (item.isVisible) {
    //             return (
    //               <View
    //                 className={`ui-group ${item.id === 1 && "wow fadeInUp"}`}
    //                 data-wow-delay=".4s"
    //                 key={index}
    //               >
    //                 <input
    //                   type="text"
    //                   name={item.id}
    //                   placeholder="Keypoints"
    //                   onKeyPress={e => handleKeyPress(e)}
    //                   onChange={e => handleKeypoints(e)}
    //                   value={item.value}
    //                 />
    //                 {!item.isReady && (
    //                   <Svg
    //                     name="ico-plus"
    //                     modClass="js-multiple-inputs-plus"
    //                     handleClick={() => addMoreKeypoints(item.id)}
    //                   />
    //                 )}
    //                 {errors[item.id] && <ErrorMsg message={errors[item.id]} />}
    //               </View>
    //             );
    //           }
    //           return null;
    //         })}
    //         {errors.key_points && <ErrorMsg message={errors.key_points} />}
    //       </View>
    //       <SubmitButtonDiv
    //         wow={".5s"}
    //         className="services-create"
    //         onClick={submitKeypoints}
    //         loading={false}
    //         loaderComponent={null}
    //         buttonText={<span>Next</span>}
    //       />
    //     </View>
    //   </View>
    // );
  }
}

export default Keypoints;
