import React from "react";
import { isNull } from "lodash";

// import { ErrorMsg, Svg, Loader, SubmitButtonDiv } from "../../Commons";
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import styles from '../../../stylesheet/createservice.style';
import * as Animatable from 'react-native-animatable';
import { Icon } from "native-base";
import Icon2 from 'react-native-vector-icons/AntDesign';
var ImagePicker = require('react-native-image-picker');

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      isShowDatePicker: true,

    }
  }


  moveViewUp1= () => this.refs.view1.fadeInUp(2000);
  // moveViewUp2= () => this.refs.view2.fadeInUp(2000).then(this.moveViewUp3());
  // moveViewUp3= () => this.refs.view3.fadeInUp(2000).then(this.moveViewUp4());
  // moveViewUp4= () => this.refs.view4.fadeInUp(2000);

  componentDidMount() {
    this.moveViewUp1();
  }
  chooseFile = () => {
    var options = {
      title: 'Image',

      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      // console.log('Response = =============', response);

      if (response.didCancel) {
        // console.log('User cancelled image picker');

      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);

      } else if (response.customButton) {
        // console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);

      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

       // this.props.handleFileChange('avatar', 'data:image/jpeg;base64,' + source.data)

      }
    });
  };


render()
{
  const {
    data,
    errors,
    publishService,
    _publishService,
    handleFileChange
  } = this.props;

  return(
    <Animatable.View ref={'view1'}>

    <View>
    <Text style={[styles.addPictureText, {marginTop:'10%',alignSelf:'center', }]}>
        Add some pictures to your service!
        </Text>
    

        <View style={styles.findingView}>

          <TouchableOpacity style={{  height: 80, width: 80, borderRadius:40, backgroundColor:'white', justifyContent:'center' }} onPress={this.chooseFile.bind(this)}>
            {/* {!data.url ? */}
            <Icon name="camera" style={{ fontSize: 60,  color: 'gray', alignSelf: 'center', }} /> 

              {/* : <Image
                source={{
                  uri: data.url,
                }}
                style={{ width: 100, height: 100, borderRadius: 50, marginTop: '33.5%' }}
              />} */}

          </TouchableOpacity>

        </View>
        <Text style={[styles.featuredText,{marginTop:'10%', alignSelf:'center' }]}> Featured picture </Text>

        <TouchableOpacity style={styles.viewAddImage} onPress={this.chooseFile.bind(this)}>
    <Icon2 name= "pluscircleo" style={{alignSelf:'center', fontSize:45, color:'#20ACAC'}}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.viewAddImage} onPress={this.chooseFile.bind(this)}>
    <Icon2 name= "pluscircleo" style={{alignSelf:'center', fontSize:45, color:'#20ACAC'}}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.viewAddImage} onPress={this.chooseFile.bind(this)}>
    <Icon2 name= "pluscircleo" style={{alignSelf:'center', fontSize:45, color:'#20ACAC'}}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.viewAddImage} onPress={this.chooseFile.bind(this)}>
    <Icon2 name= "pluscircleo" style={{alignSelf:'center', fontSize:45, color:'#20ACAC'}}/>
    </TouchableOpacity>

      { /* <input
          type="file"
          name="image"
          id="image"
          onChange={handleFileChange}
          accept="image/png, image/jpeg"
        /> */ }
      <View>
        { /* 
            <img src={data.url} alt="photo-uploader__placeholder" />
            <Svg name="ico-camera" />
          */ }
      </View>
      {errors.image && (
        <Animatable.Text animation="fadeIn" style={styles.errorText}>
          {errors.image}
        </Animatable.Text>
      )}
    </View>
    <TouchableOpacity style={[styles.loginButton, { marginTop: '15%', justifyContent: 'center',marginBottom:'10%' }]}
          onPress={()=> submitDescription()}
           >
            <Text style={styles.loginText}>publish Service</Text>
          </TouchableOpacity>
    </Animatable.View>
  )
}

  // render1() {
  //   const {
  //     data,
  //     errors,
  //     publishService,
  //     _publishService,
  //     handleFileChange
  //   } = this.props;

  //   return (
  //     <Animatable.View>

  //       <View>
  //         <Text style={styles.subTitle}>
  //           Add some pictures to your service!
  //           </Text>
  //         <Animatable.View ref={'view1'} style={{ marginBottom: '5%' }}>

  //           <View style={styles.findingView}>

  //             <TouchableOpacity style={{ marginTop: '30%', height: 200, width: 100 }} onPress={this.chooseFile.bind(this)}>
  //               {/* {!data.url ? */}
  //                 <Icon name="camera" style={{ fontSize: 60, marginTop: '50%', color: 'gray', alignSelf: 'center', }} /> :
  //                 {/* <Image
  //                   source={{
  //                     uri: data.url,
  //                   }}
  //                   style={{ width: 100, height: 100, borderRadius: 50, marginTop: '33.5%' }}
  //                 />} */}

  //             </TouchableOpacity>

  //           </View>
  //         </Animatable.View>

  //         { /* <input
  //             type="file"
  //             name="image"
  //             id="image"
  //             onChange={handleFileChange}
  //             accept="image/png, image/jpeg"
  //           /> */ }
  //         <View>
  //           { /* 
  //               <img src={data.url} alt="photo-uploader__placeholder" />
  //               <Svg name="ico-camera" />
  //             */ }
  //         </View>
  //         {errors.image && (
  //           <Animatable.Text animation="fadeIn" style={styles.errorText}>
  //             {errors.image}
  //           </Animatable.Text>
  //         )}
  //       </View>
  //       <View>
  //         <Animatable.Text animation="fadeIn">
  //           Featured picture
  //           </Animatable.Text>
  //         <View>
  //           <View>
  //             <View>
  //               { /*
  //                    <input
  //                   type="file"
  //                   name="featuredImage_1"
  //                   id="featuredImage_1"
  //                   onChange={handleFileChange}
  //                   accept="image/png, image/jpeg"
  //                 />

  //                 */}
  //               <View >
  //                 { /*
  //                   <img
  //                     src={data.featuredImage_1Url}
  //                     alt="photo-uploader__placeholder"
  //                   />
  //                   <Svg name="ico-uploader-add" />
  //                   */}
  //               </View>
  //             </View>
  //           </View>

  //           <View>
  //             <View>
  //               { /* <input
  //                   type="file"
  //                   name="featuredImage_2"
  //                   id="featuredImage_2"
  //                   onChange={handleFileChange}
  //                   accept="image/png, image/jpeg"
  //                 /> */}
  //               <View>
  //                 { /* <img
  //                     src={data.featuredImage_2Url}
  //                     alt="photo-uploader__placeholder"
  //                   />
  //                   <Svg name="ico-uploader-add" />
  //                 */ }
  //               </View>
  //             </View>
  //           </View>

  //           { /*
  //             <View>
  //               <View>
  //                 <input
  //                   type="file"
  //                   name="featuredImage_3"
  //                   id="featuredImage_3"
  //                   onChange={handleFileChange}
  //                   accept="image/png, image/jpeg"
  //                 />
  //                 <View className="photo-uploader__placeholder">
  //                   <img
  //                     src={data.featuredImage_3Url}
  //                     alt="photo-uploader__placeholder"
  //                   />
  //                   <Svg name="ico-uploader-add" />
  //                 </View>
  //               </View>
  //             </View>

  //             <View className="services-create__images-col">
  //               <View
  //                 className={`photo-uploader photo-uploader--boxed ${
  //                   !isNull(data.featuredImage_4Url) ? "has-file" : ""
  //                 }`}
  //               >
  //                 <input
  //                   type="file"
  //                   name="featuredImage_4"
  //                   id="featuredImage_4"
  //                   onChange={handleFileChange}
  //                   accept="image/png, image/jpeg"
  //                 />
  //                 <label htmlFor="featuredImage_4">
  //                   <View className="photo-uploader__placeholder">
  //                     <img
  //                       src={data.featuredImage_4Url}
  //                       alt="photo-uploader__placeholder"
  //                     />
  //                     <Svg name="ico-uploader-add" />
  //                   </View>
  //                 </label>
  //               </View>
  //             </View>
  //           */ }
  //         </View>
  //       </View>
  //       <TouchableOpacity style={[styles.loginButton, { marginTop: '15%', justifyContent: 'center', }]}
  //         onPress={() => submitDescription()}
  //       >
  //         <Text style={styles.loginText}>Publish Service</Text>
  //       </TouchableOpacity>

  //     </Animatable.View>
  //   );

  //   // return (
  //   //   <div className="services-create__step is-active" data-step="7">
  //   //     <form className="services-create__form services-create__form--full">
  //   //       <div
  //   //         className={`photo-uploader photo-uploader--top-label wow fadeInUp ${
  //   //           !isNull(data.url) ? "has-file" : ""
  //   //         }`}
  //   //         data-wow-delay=".4s"
  //   //         style={{ zIndex: 2 }}
  //   //       >
  //   //         <div className="photo-uploader__name">
  //   //           Add some pictures to your service!
  //   //         </div>
  //   //         <input
  //   //           type="file"
  //   //           name="image"
  //   //           id="image"
  //   //           onChange={handleFileChange}
  //   //           accept="image/png, image/jpeg"
  //   //         />
  //   //         <label htmlFor="image">
  //   //           <div className="photo-uploader__placeholder">
  //   //             <img src={data.url} alt="photo-uploader__placeholder" />
  //   //             <Svg name="ico-camera" />
  //   //           </div>
  //   //         </label>
  //   //         {errors.image && (
  //   //           <ErrorMsg
  //   //             message={errors.image}
  //   //             style={{ textAlign: "center" }}
  //   //           />
  //   //         )}
  //   //       </div>
  //   //       <div
  //   //         className="services-create__images wow fadeInUp"
  //   //         data-wow-delay=".5s"
  //   //       >
  //   //         <div className="services-create__section-title">
  //   //           Featured picture
  //   //         </div>
  //   //         <div className="services-create__images-wrap">
  //   //           <div className="services-create__images-col">
  //   //             <div
  //   //               className={`photo-uploader photo-uploader--boxed ${
  //   //                 !isNull(data.featuredImage_1Url) ? "has-file" : ""
  //   //               }`}
  //   //             >
  //   //               <input
  //   //                 type="file"
  //   //                 name="featuredImage_1"
  //   //                 id="featuredImage_1"
  //   //                 onChange={handleFileChange}
  //   //                 accept="image/png, image/jpeg"
  //   //               />
  //   //               <label htmlFor="featuredImage_1">
  //   //                 <div className="photo-uploader__placeholder">
  //   //                   <img
  //   //                     src={data.featuredImage_1Url}
  //   //                     alt="photo-uploader__placeholder"
  //   //                   />
  //   //                   <Svg name="ico-uploader-add" />
  //   //                 </div>
  //   //               </label>
  //   //             </div>
  //   //           </div>

  //   //           <div className="services-create__images-col">
  //   //             <div
  //   //               className={`photo-uploader photo-uploader--boxed ${
  //   //                 !isNull(data.featuredImage_2Url) ? "has-file" : ""
  //   //               }`}
  //   //             >
  //   //               <input
  //   //                 type="file"
  //   //                 name="featuredImage_2"
  //   //                 id="featuredImage_2"
  //   //                 onChange={handleFileChange}
  //   //                 accept="image/png, image/jpeg"
  //   //               />
  //   //               <label htmlFor="featuredImage_2">
  //   //                 <div className="photo-uploader__placeholder">
  //   //                   <img
  //   //                     src={data.featuredImage_2Url}
  //   //                     alt="photo-uploader__placeholder"
  //   //                   />
  //   //                   <Svg name="ico-uploader-add" />
  //   //                 </div>
  //   //               </label>
  //   //             </div>
  //   //           </div>

  //   //           <div className="services-create__images-col">
  //   //             <div
  //   //               className={`photo-uploader photo-uploader--boxed ${
  //   //                 !isNull(data.featuredImage_3Url) ? "has-file" : ""
  //   //               }`}
  //   //             >
  //   //               <input
  //   //                 type="file"
  //   //                 name="featuredImage_3"
  //   //                 id="featuredImage_3"
  //   //                 onChange={handleFileChange}
  //   //                 accept="image/png, image/jpeg"
  //   //               />
  //   //               <label htmlFor="featuredImage_3">
  //   //                 <div className="photo-uploader__placeholder">
  //   //                   <img
  //   //                     src={data.featuredImage_3Url}
  //   //                     alt="photo-uploader__placeholder"
  //   //                   />
  //   //                   <Svg name="ico-uploader-add" />
  //   //                 </div>
  //   //               </label>
  //   //             </div>
  //   //           </div>

  //   //           <div className="services-create__images-col">
  //   //             <div
  //   //               className={`photo-uploader photo-uploader--boxed ${
  //   //                 !isNull(data.featuredImage_4Url) ? "has-file" : ""
  //   //               }`}
  //   //             >
  //   //               <input
  //   //                 type="file"
  //   //                 name="featuredImage_4"
  //   //                 id="featuredImage_4"
  //   //                 onChange={handleFileChange}
  //   //                 accept="image/png, image/jpeg"
  //   //               />
  //   //               <label htmlFor="featuredImage_4">
  //   //                 <div className="photo-uploader__placeholder">
  //   //                   <img
  //   //                     src={data.featuredImage_4Url}
  //   //                     alt="photo-uploader__placeholder"
  //   //                   />
  //   //                   <Svg name="ico-uploader-add" />
  //   //                 </div>
  //   //               </label>
  //   //             </div>
  //   //           </div>
  //   //         </div>
  //   //       </div>
  //   //       <SubmitButtonDiv
  //   //         wow={".5s"}
  //   //         className="services-create"
  //   //         onClick={_publishService}
  //   //         loading={publishService.isRequesting}
  //   //         loaderComponent={<Loader fill={"#ffffff"} height={"21px"} />}
  //   //         buttonText={<span>Publish Service</span>}
  //   //       />
  //   //     </form>
  //   //   </div>
  //   // );
  // }
}

export default Images;
