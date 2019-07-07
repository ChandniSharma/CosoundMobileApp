import React from "react";
import SelectInput from 'react-native-select-input-ios'
import { getSubcategories } from "../../../utils";
import * as Animatable from 'react-native-animatable';
import { View, Text, TouchableOpacity } from 'react-native';
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

    const subCategories = getSubcategories(data.category_id, categories.data);

    let placeholder = [{"label": "Select Category", value: null}];
    let categoriesData = placeholder.concat(categories.data);

    let placeholderSubCat = [{"label": "Select Subcategory", value: null}];
    let subCategoriesData = placeholderSubCat.concat(subCategories.data);

    return (
    <View>
        <Animatable.View ref={"viewTxtInputCat"}>
        <Animatable.Text animation="fadeIn" style={[styles.textLight, { alignSelf: 'center', marginTop: '5%' }]}>What type of service are you offering?</Animatable.Text>
        <SelectInput style={ styles.inputStyle}  placeholder={"Select Category"} labelStyle={ data.category_id === null? styles.placeholderLabel: styles.locationLabel} value={data.category_id} options={categoriesData} onSubmitEditing={val => handleSelect(val, 'category_id')} /> 
          {errors.category_id && <Text style={styles.errorText}>{errors.category_id}</Text>}
        </Animatable.View>
        <Animatable.View ref={"viewTxtInputSubCat"}>
        <SelectInput style={styles.inputStyle} labelStyle={data.sub_category_id? styles.locationLabel:styles.placeholderLabel} value={data.sub_category_id} options={subCategoriesData} onSubmitEditing={val => handleSelect(val,'sub_category_id')} />
        {errors.sub_category_id && <Text style={styles.errorText}>{errors.sub_category_id}</Text>}
        <View style={styles.viewContainButton}>
         <TouchableOpacity style={styles.nextButton}
          onPress={()=> submitCategory()}
         >
        <Text style={styles.nextButtonTitle}>Next</Text>
        </TouchableOpacity>  
        </View>
        </Animatable.View>
        </View>
    );
  }
}

export default CategoryForm;
