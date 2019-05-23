import React from "react";
import { isNull } from "lodash";

// import { ErrorMsg, Svg, Loader, SubmitButtonDiv } from "../../Commons";
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import styles from '../../../stylesheet/createservice.style';

class Images extends React.Component {
  render() {
    const {
      data,
      errors,
      publishService,
      _publishService,
      handleFileChange
    } = this.props;
    
    return (
      <View>
        <View>
          <View>
            <View>
              Add some pictures to your service!
            </View>
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
              <Text>
                {errors.image}
              </Text>
            )}
          </View>
          <View>
            <View>
              Featured picture
            </View>
            <View>
              <View>
                <View>
                 { /*
                     
                     <input
                    type="file"
                    name="featuredImage_1"
                    id="featuredImage_1"
                    onChange={handleFileChange}
                    accept="image/png, image/jpeg"
                  />

                  */} 
                  <View className="photo-uploader__placeholder">
                    { /*
                    <img
                      src={data.featuredImage_1Url}
                      alt="photo-uploader__placeholder"
                    />
                    <Svg name="ico-uploader-add" />
                    */} 
                  </View>
                </View>
              </View>

              <View>
                <View>
                 { /* <input
                    type="file"
                    name="featuredImage_2"
                    id="featuredImage_2"
                    onChange={handleFileChange}
                    accept="image/png, image/jpeg"
                  /> */} 
                  <View>
                     { /* <img
                      src={data.featuredImage_2Url}
                      alt="photo-uploader__placeholder"
                    />
                    <Svg name="ico-uploader-add" />
                  */ }
                  </View>
                </View>
              </View>
            
            { /*
              <View>
                <View>
                  <input
                    type="file"
                    name="featuredImage_3"
                    id="featuredImage_3"
                    onChange={handleFileChange}
                    accept="image/png, image/jpeg"
                  />
                  <View className="photo-uploader__placeholder">
                    <img
                      src={data.featuredImage_3Url}
                      alt="photo-uploader__placeholder"
                    />
                    <Svg name="ico-uploader-add" />
                  </View>
                </View>
              </View>

              <View className="services-create__images-col">
                <View
                  className={`photo-uploader photo-uploader--boxed ${
                    !isNull(data.featuredImage_4Url) ? "has-file" : ""
                  }`}
                >
                  <input
                    type="file"
                    name="featuredImage_4"
                    id="featuredImage_4"
                    onChange={handleFileChange}
                    accept="image/png, image/jpeg"
                  />
                  <label htmlFor="featuredImage_4">
                    <View className="photo-uploader__placeholder">
                      <img
                        src={data.featuredImage_4Url}
                        alt="photo-uploader__placeholder"
                      />
                      <Svg name="ico-uploader-add" />
                    </View>
                  </label>
                </View>
              </View>
            */ }
            </View>
          </View>
          <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center', marginTop: '5%', width: '40%', height: '15%', borderRadius: 10, backgroundColor: '#ff277b' }}
          onPress={()=> submitDescription()}
           >
            <Text style={styles.buttonText}>>Publish Service</Text>
          </TouchableOpacity>
        </View>
      </View>
    );

    // return (
    //   <div className="services-create__step is-active" data-step="7">
    //     <form className="services-create__form services-create__form--full">
    //       <div
    //         className={`photo-uploader photo-uploader--top-label wow fadeInUp ${
    //           !isNull(data.url) ? "has-file" : ""
    //         }`}
    //         data-wow-delay=".4s"
    //         style={{ zIndex: 2 }}
    //       >
    //         <div className="photo-uploader__name">
    //           Add some pictures to your service!
    //         </div>
    //         <input
    //           type="file"
    //           name="image"
    //           id="image"
    //           onChange={handleFileChange}
    //           accept="image/png, image/jpeg"
    //         />
    //         <label htmlFor="image">
    //           <div className="photo-uploader__placeholder">
    //             <img src={data.url} alt="photo-uploader__placeholder" />
    //             <Svg name="ico-camera" />
    //           </div>
    //         </label>
    //         {errors.image && (
    //           <ErrorMsg
    //             message={errors.image}
    //             style={{ textAlign: "center" }}
    //           />
    //         )}
    //       </div>
    //       <div
    //         className="services-create__images wow fadeInUp"
    //         data-wow-delay=".5s"
    //       >
    //         <div className="services-create__section-title">
    //           Featured picture
    //         </div>
    //         <div className="services-create__images-wrap">
    //           <div className="services-create__images-col">
    //             <div
    //               className={`photo-uploader photo-uploader--boxed ${
    //                 !isNull(data.featuredImage_1Url) ? "has-file" : ""
    //               }`}
    //             >
    //               <input
    //                 type="file"
    //                 name="featuredImage_1"
    //                 id="featuredImage_1"
    //                 onChange={handleFileChange}
    //                 accept="image/png, image/jpeg"
    //               />
    //               <label htmlFor="featuredImage_1">
    //                 <div className="photo-uploader__placeholder">
    //                   <img
    //                     src={data.featuredImage_1Url}
    //                     alt="photo-uploader__placeholder"
    //                   />
    //                   <Svg name="ico-uploader-add" />
    //                 </div>
    //               </label>
    //             </div>
    //           </div>

    //           <div className="services-create__images-col">
    //             <div
    //               className={`photo-uploader photo-uploader--boxed ${
    //                 !isNull(data.featuredImage_2Url) ? "has-file" : ""
    //               }`}
    //             >
    //               <input
    //                 type="file"
    //                 name="featuredImage_2"
    //                 id="featuredImage_2"
    //                 onChange={handleFileChange}
    //                 accept="image/png, image/jpeg"
    //               />
    //               <label htmlFor="featuredImage_2">
    //                 <div className="photo-uploader__placeholder">
    //                   <img
    //                     src={data.featuredImage_2Url}
    //                     alt="photo-uploader__placeholder"
    //                   />
    //                   <Svg name="ico-uploader-add" />
    //                 </div>
    //               </label>
    //             </div>
    //           </div>

    //           <div className="services-create__images-col">
    //             <div
    //               className={`photo-uploader photo-uploader--boxed ${
    //                 !isNull(data.featuredImage_3Url) ? "has-file" : ""
    //               }`}
    //             >
    //               <input
    //                 type="file"
    //                 name="featuredImage_3"
    //                 id="featuredImage_3"
    //                 onChange={handleFileChange}
    //                 accept="image/png, image/jpeg"
    //               />
    //               <label htmlFor="featuredImage_3">
    //                 <div className="photo-uploader__placeholder">
    //                   <img
    //                     src={data.featuredImage_3Url}
    //                     alt="photo-uploader__placeholder"
    //                   />
    //                   <Svg name="ico-uploader-add" />
    //                 </div>
    //               </label>
    //             </div>
    //           </div>

    //           <div className="services-create__images-col">
    //             <div
    //               className={`photo-uploader photo-uploader--boxed ${
    //                 !isNull(data.featuredImage_4Url) ? "has-file" : ""
    //               }`}
    //             >
    //               <input
    //                 type="file"
    //                 name="featuredImage_4"
    //                 id="featuredImage_4"
    //                 onChange={handleFileChange}
    //                 accept="image/png, image/jpeg"
    //               />
    //               <label htmlFor="featuredImage_4">
    //                 <div className="photo-uploader__placeholder">
    //                   <img
    //                     src={data.featuredImage_4Url}
    //                     alt="photo-uploader__placeholder"
    //                   />
    //                   <Svg name="ico-uploader-add" />
    //                 </div>
    //               </label>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <SubmitButtonDiv
    //         wow={".5s"}
    //         className="services-create"
    //         onClick={_publishService}
    //         loading={publishService.isRequesting}
    //         loaderComponent={<Loader fill={"#ffffff"} height={"21px"} />}
    //         buttonText={<span>Publish Service</span>}
    //       />
    //     </form>
    //   </div>
    // );
  }
}

export default Images;
