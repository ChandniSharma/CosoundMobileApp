import React from "react";

import { getSubcategories } from "../../../utils";

// import { Select, ErrorMsg, SubmitButtonDiv } from "../../Commons";
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import styles from '../../../stylesheet/createservice.style';

class CategoryForm extends React.PureComponent {
  render() {
    const {
      data,
      errors,
      categories,
      handleSelect,
      submitCategory
    } = this.props;

    const subCategories = getSubcategories(data.category_id, categories.data);
    return (
      <View>
        <View>
          <Text>What type of service are you offering?</Text>
          { /* <Select
            name={"category_id"}
            resource={categories}
            placeholder={"Select Category"}
            handleSelect={handleSelect}
            selectedId={data.category_id}
          /> */ }
          {errors.category_id && <Text>{errors.category_id}</Text>}
        </View>
        <View>
         { /* 
         <Select
            name={"sub_category_id"}
            resource={subCategories}
            placeholder={"Select Sub Category"}
            handleSelect={handleSelect}
            selectedId={data.sub_category_id}
          /> */ } 
          {errors.sub_category_id && <Text>{errors.sub_category_id}</Text>}
        </View>
        { /* <SubmitButtonDiv
          wow={".5s"}
          className="services-create"
          onClick={submitCategory}
          loading={false}
          loaderComponent={null}
          buttonText={<span>Next</span>}
        />  */ } 
         <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center', marginTop: '5%', width: '40%', height: '15%', borderRadius: 10, backgroundColor: '#ff277b' }}
          onPress={()=> submitCategory()}
         >
            <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>  
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
