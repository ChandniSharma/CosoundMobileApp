import React from "react";

import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import styles from '../../../stylesheet/createservice.style';

class Title extends React.PureComponent {
  render() {
    const { data, errors, handleChange, submitTitle } = this.props;
     return (
      <View>
        <View>
          <View>
            <Text>Name your service</Text>
            <TextInput
              placeholder={'Service name'}
              onChangeText={val => handleChange("title", val)}
              value={data.title}
              name={"title"}
            />
            {errors.title && <Text>{errors.title} </Text>}
          </View>
          <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center', marginTop: '5%', width: '40%', height: '15%', borderRadius: 10, backgroundColor: '#ff277b' }}
          onPress={()=> submitTitle()}
           >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
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
