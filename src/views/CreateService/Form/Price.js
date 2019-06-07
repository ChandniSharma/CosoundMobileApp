import React from "react";
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import styles from '../../../stylesheet/createservice.style';
// import { ErrorMsg, Svg, SubmitButtonDiv } from "../../Commons";
import * as Animatable from 'react-native-animatable';

import Icon1 from "react-native-vector-icons/AntDesign";


class Price extends React.PureComponent {

  moveTextUp1 = () => this.refs.viewTxtInput1.fadeInUp(1000);

  componentDidMount() {
    this.moveTextUp1();
  }

  render() {
    const { data, errors, handleChange, submitPrice, submitKeypoints } = this.props;
    return (
      <View>
        <Animatable.View ref={"viewTxtInput1"}>
          <View>
            <Text style={styles.subTitle}>
              What is the cost
             of
              this service?
            </Text>
             <TextInput
                placeholder={'Cost'}
                onChangeText={val => handleChange("price", val)}
                value={data.price}
                name={"price"}
                style={styles.inputStyle}
                keyboardType="number-pad"
              />
            {errors.price && <Text style={styles.errorText}>{errors.price} </Text>}
          </View>
          <View style={{flexDirection: 'row', marginTop:'5%', alignSelf:'center'}}>
            <Animatable.Text animation="fadeIn" style={styles.priceText}>Price will be given after a consultation</Animatable.Text>
            <Icon1 name= "checkcircleo"  style={{fontSize:25, color: '#3B93BB', marginLeft:'2%'}}/>
          </View>

<View style={styles.viewContainButton}>
          <TouchableOpacity style={[styles.nextButton]}
          onPress={()=> submitKeypoints()}
           >
            <Text style={styles.nextButtonTitle}>Next</Text>
          </TouchableOpacity>
          </View>
          
        </Animatable.View>
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
