import React from "react";
import SelectInput from 'react-native-select-input-ios'

import { getSubcategories } from "../../../utils";
import * as Animatable from 'react-native-animatable';
// import { Select, ErrorMsg, SubmitButtonDiv } from "../../Commons";
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import styles from '../../../stylesheet/createservice.style';

class CategoryForm extends React.PureComponent {


moveTextUp1 = () => this.refs.viewTxtInputCat.fadeInUp(1000).then(this.moveSecondViewUp());

moveTextUp2 = () => this.refs.viewTxtInputSubCat.fadeInUp(2000).then(endState => endState.finished ? "finish " : console.log('finish not'));

componentDidMount(){
  this.moveTextUp1();
}
moveSecondViewUp(){
  setTimeout(() => {
    this.moveTextUp2();
  }, 100);
}
  render() {
    const {
      data,
      errors,
      categories,
      handleSelect,
      submitCategory
    } = this.props;

console.log(" ******** categ====", this.props);

    const subCategories = getSubcategories(data.category_id, categories.data);
    console.log("subCategories===", subCategories)
    return (
    <View>
        <Animatable.View ref={"viewTxtInputCat"}>
        <Animatable.Text animation="fadeIn" style={[styles.textLight, { alignSelf: 'center', marginTop: '5%' }]}>What type of service are you offering?</Animatable.Text>

       
        <SelectInput style={styles.inputStyle}  placeholder={"Select Category"} labelStyle={styles.locationLabel} value={data.category_id} options={categories.data} onSubmitEditing={val => handleSelect(val, 'category_id')} />
                            
         
          {errors.category_id && <Text style={styles.errorText}>{errors.category_id}</Text>}
        </Animatable.View>

        <Animatable.View ref={"viewTxtInputSubCat"}>
        <SelectInput style={styles.inputStyle} labelStyle={styles.locationLabel} value={data.sub_category_id} options={subCategories.data} onSubmitEditing={val => handleSelect(val,'sub_category_id')} />
      
         <TouchableOpacity style={[styles.loginButton, { marginTop: '5%', justifyContent: 'center', }]}
          onPress={()=> submitCategory()}
         >
            <Text style={styles.textButtonTitle}>Next</Text>
        </TouchableOpacity>  
        </Animatable.View>
        </View>
    );
    // return (
    //   <View className="services-create__step is-active" data-step="1">
    //     <form className="services-create__form">
    //       <View
    //         className="ui-group wow fadeInUp"
    //         data-wow-delay=".4s"
    //         style={{ zIndex: 3 }}
    //       >
    //         <label>What type of service are you offering?</label>
    //         <Select
    //           name={"category_id"}
    //           resource={categories}
    //           placeholder={"Select Category"}
    //           handleSelect={handleSelect}
    //           selectedId={data.category_id}
    //         />
    //         {errors.category_id && <ErrorMsg message={errors.category_id} />}
    //       </View>
    //       <View
    //         className="ui-group wow fadeInUp"
    //         data-wow-delay=".4s"
    //         style={{ zIndex: 2 }}
    //       >
    //         <Select
    //           name={"sub_category_id"}
    //           resource={subCategories}
    //           placeholder={"Select Sub Category"}
    //           handleSelect={handleSelect}
    //           selectedId={data.sub_category_id}
    //         />
    //         {errors.sub_category_id && (
    //           <ErrorMsg message={errors.sub_category_id} />
    //         )}
    //       </View>
    //       <SubmitButtonDiv
    //         wow={".5s"}
    //         className="services-create"
    //         onClick={submitCategory}
    //         loading={false}
    //         loaderComponent={null}
    //         buttonText={<span>Next</span>}
    //       />
    //     </form>
    //   </View>
    // );
  }
}

export default CategoryForm;
