import React from "react";
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import styles from '../../../stylesheet/createservice.style';

class Keypoints extends React.Component {
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
        <View>
          <View>
            <Text>Mention atleast one Keypoint of your service</Text>
            {data.key_points.map((item, index) => {
              if (item.isVisible) {
                return (
                  <View>
                    { /*<input
                      type="text"
                      name={item.id}
                      placeholder="Keypoints"
                      onKeyPress={e => handleKeyPress(e)}
                      onChange={e => handleKeypoints(e)}
                      value={item.value}
                    />*/ }
                     <TextInput
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
                    {errors[item.id] && <Text>{errors[item.id]} </Text>}
                  </View>
                );
              }
              return null;
            })}
            {errors.key_points && <Text>{errors.key_points} </Text>}
          </View>
          <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center', marginTop: '5%', width: '40%', height: '15%', borderRadius: 10, backgroundColor: '#ff277b' }}
          onPress={()=> submitKeypoints()}
           >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
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
