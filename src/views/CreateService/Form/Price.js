import React from "react";
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import styles from '../../../stylesheet/createservice.style';
// import { ErrorMsg, Svg, SubmitButtonDiv } from "../../Commons";

class Price extends React.PureComponent {
  render() {
    const { data, errors, handleChange, submitPrice } = this.props;
    return (
      <View>
        <View>
          <View>
            <Text>
              What is the cost
              &#36; of
              this service?
            </Text>
             <TextInput
                placeholder={'Cost'}
                onChangeText={val => handleChange("price", val)}
                value={data.price}
                name={"price"}
              />
            {errors.price && <Text>{errors.price} </Text>}
          </View>
          <View>
            <Text>Price will be given after a consultation</Text>
            {/*<Svg name="ico-check-outline" />*/}
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
    //   <View className="services-create__step is-active" data-step="5">
    //     <form className="services-create__form">
    //       <View
    //         className="ui-group wow fadeInUp"
    //         data-wow-delay=".4s"
    //         style={{ zIndex: 2 }}
    //       >
    //         <label>
    //           What is the cost
    //           <span className="services-create__dollar-sign"> &#36; </span>of
    //           this service?
    //         </label>
    //         <input
    //           type="text"
    //           name="price"
    //           placeholder="Cost"
    //           value={data.price}
    //           onChange={e => handleChange(e)}
    //         />

    //         {errors.price && <ErrorMsg message={errors.price} />}
    //       </View>
    //       <View
    //         className="services-create__price-hint wow fadeInUp"
    //         data-wow-delay=".4s"
    //       >
    //         <span>Price will be given after a consultation</span>
    //         <Svg name="ico-check-outline" />
    //       </View>

    //       <SubmitButtonDiv
    //         wow={".5s"}
    //         className="services-create"
    //         onClick={submitPrice}
    //         loading={false}
    //         loaderComponent={null}
    //         buttonText={<span>Next</span>}
    //       />
    //     </form>
    //   </View>
    // );
  }
}

export default Price;
