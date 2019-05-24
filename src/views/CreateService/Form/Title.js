import React from "react";

import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import styles from '../../../stylesheet/createservice.style';
import * as Animatable from 'react-native-animatable';

import Icon1 from "react-native-vector-icons/AntDesign";


class Title extends React.PureComponent {
  moveTextUp1 = () => this.refs.viewTxtInput1.fadeInUp(1000);


  componentDidMount() {
    this.moveTextUp1();
  }
  render() {
    const { data, errors, handleChange, submitTitle } = this.props;
     return (
      
      <Animatable.View ref={"viewTxtInput1"}>
          <View>
            <Text style={styles.subTitle}>Name your service</Text>
            <TextInput
              placeholder={'Service name'}
              onChangeText={val => handleChange("title", val)}
              value={data.title}
              name={"title"}
              style={styles.inputStyle}
            />
            {errors.title && <Text style={styles.errorText}>{errors.title} </Text>}
          </View>
          <TouchableOpacity style={[styles.loginButton, { marginTop: '15%', justifyContent: 'center', }]}
          onPress={()=> submitTitle()}
           >
            <Text style={styles.loginText}>Next</Text>
          </TouchableOpacity>
        </Animatable.View>
    
    );
    // return (
    //   <View className="services-create__step is-active" data-step="6">
    //     <form className="services-create__form">
    //       <View
    //         className="ui-group wow fadeInUp"
    //         data-wow-delay=".4s"
    //         style={{ zIndex: 2 }}
    //       >
    //         <label>Name your service</label>
    //         <input
    //           type="text"
    //           name="title"
    //           placeholder="Service name"
    //           value={data.title}
    //           onChange={e => handleChange(e)}
    //         />

    //         {errors.title && <ErrorMsg message={errors.title} />}
    //       </View>
    //       <SubmitButtonDiv
    //         wow={".5s"}
    //         className="services-create"
    //         onClick={submitTitle}
    //         loading={false}
    //         loaderComponent={null}
    //         buttonText={<span>Next</span>}
    //       />
    //     </form>
    //   </View>
    // );
  }
}

export default Title;
