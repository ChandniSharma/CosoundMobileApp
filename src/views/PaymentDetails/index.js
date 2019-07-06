import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions, FlatList, ActivityIndicator } from 'react-native';
//import SvgUri from 'react-native-svg-uri';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '../../stylesheet/PaymentDetail.style';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-navigation';
import CustomFooter from '../../components/common/CustomFooter';
import CustomHeader from '../../components/common/CustomHeader';
import Notifications from '../../containers/Notifications';
import BackButton from '../../../src/views/common/BackButton';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../../src/views/common/logo';

import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/EvilIcons";
import Icon3 from "react-native-vector-icons/Ionicons";
import { TextInputMask } from 'react-native-masked-text'


import { checkError } from "../../utils";

class PaymentsComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {

      isClick: false,
      isNotificationShow: false,

    }
  }
  // fadeIn = () => this.refs.mainView.fadeIn(500).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))
  fadeInUp = () => this.refs.notificationView.fadeInUp(500).then(endState => console.log(" end state"))

  fadeInView1 = () => this.refs.view1.fadeInUp(1000).then(setTimeout(() => {
    this.fadeInView2();
  }, 10));

  fadeInView2 = () => this.refs.view2.fadeInUp().then(setTimeout(() => {
    this.fadeInView3();
  }, 30))
  fadeInView3 = () => this.refs.view3.fadeInUp().then(setTimeout(() => {
    // this.fadeInView4();
  }, 60))

  // fadeInView4 = () => this.refs.view4.fadeInUp().then(setTimeout(() => {
  //   this.fadeInView5();
  // }, 30))

  // fadeInView5 = () => this.refs.view5.fadeInUp().then(setTimeout(() => {
  //   this.fadeInView6();
  // }, 30))

  // fadeInView6 = () => this.refs.view6.fadeInUp().then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))


  componentDidMount() {
    // this.fadeIn();
    this.fadeInView1();
  }
  onClickRememberMe = () => {
    this.setState({
      isRememberMe: !this.state.isRememberMe
    })
  }
  hideNotificationView() {
    this.setState({ isNotificationShow: false })
  }
  onClickNotification = () => {
    this.setState({ isClick: !this.state.isClick })
  }

  hideNotificationView() {
    this.setState({ isNotificationShow: false })
  }

  showNotificationView = () => {

    this.setState({ isNotificationViewShow: true })
    setTimeout(() => {
      this.fadeInUp
    }, 200);
  }
  render() {
    const {
      mask,
      data,
      errors,
      submit,
      handleChange,
      paymentDetails,
      error
    } = this.props;
    //const error = checkError(paymentDetails.error);
    const formatChars = {
      d: "[0-9]",
      s: "[0-1]"
    };
    console.log("****** Card number is =====", data);
    return (
      <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>

        <LinearGradient start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} colors={['rgb(42, 173,177)', 'rgb(131, 110, 198)', 'rgb(134, 103, 200)']} style={{ flexDirection: 'row', height: 100, width: '100%', alignItems: 'space-between', justifyContent: 'center' }}>

          <BackButton style={{ fontSize: 30, marginTop: '10%', marginLeft: '4%' }} onPress={() => this.props.navigation.goBack(null)} />


          <Logo color={'#ffffff'} style={{ flex: 0.7, marginLeft: '25%' }} width="130px" height="44px" />

          <View style={{ flex: 0.3 }} />
          <TouchableOpacity style={[styles.searchView, { flex: 0.2, alignSelf: 'flex-end', marginRight: '5%' }]} onPress={() => this.setState({ isNotificationShow: !this.state.isNotificationShow })}>

            {this.state.isNotificationShow ? <Icon name="close" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 38, tintColor: 'white' }} /> : <Icon2 name="bell" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 40, tintColor: 'white' }} />}

          </TouchableOpacity>
        </LinearGradient>

        {!this.state.isNotificationShow ? <KeyboardAwareScrollView style={{ backgroundColor: 'rgb(245,245,245)', flex: 0.9 }}>

          <Animatable.View ref={'view1'}>
            <Text style={styles.loginText}>Please add your card info</Text>
            <Text style={styles.subTitle}> We wont keep any personal information about your card in our
           system.
         </Text>
          </Animatable.View>

          <Animatable.View ref={'view2'}>

            <TextInputMask
              style={styles.inputStyle}
              type={'credit-card'}
              options={{
                obfuscated: false,
                issuer: 'visa-or-mastercard'
              }}
              value={data.number}
              onChangeText={val => handleChange('number', val)}
              placeholder={'XXXX XXXX XXXX XXXX'}

            />
          </Animatable.View>

          {errors && errors.number && <Text style={styles.errorText}>{errors.number}</Text>}
          {/* {error &&
            error.error &&
            error.error.number &&
            error.error.number.map((item, index) => {
              return <Text>{item} </Text>;
            })} */}

          <Animatable.View ref={'view3'}>
            <TextInputMask
              style={styles.inputStyle}
              type={'datetime'}
              options={{
                format: 'MM/YY'
              }}
              value={data.expiry_date}
              onChangeText={val => handleChange('expiry_date', val)}
              placeholder={"MM/YY"}
            />
          </Animatable.View>

          {errors && errors.expiry_date && (
            <Text style={styles.errorText}>{errors.expiry_date} </Text>
          )}
          {/* {error &&
            error.error &&
            error.error.exp_month &&
            error.error.exp_month.map((item, index) => {
              return <Text>{item}</Text>;
            })}
          {error &&
            error.error &&
            error.error.exp_year &&
            error.error.exp_year.map((item, index) => {
              return <Text>{item} </Text>;
            })} */}

          <Animatable.View ref={'view4'}>

            <TextInputMask
              style={styles.inputStyle}
              type={'custom'}
              options={{
                mask: '999'
              }}
              placeholder={'CVC'}
              value={data.cvc}
              name={"cvc"}
              onChangeText={val => handleChange('cvc', val)}
            />
          </Animatable.View>
          {errors && errors.cvc && <Text style={styles.errorText}>{errors.cvc} </Text>}
          {/* {error &&
            error.error &&
            error.error.cvc &&
            error.error.cvc.map((item, index) => {
              return <Text>{item} </Text>;
            })}  */}
          <Animatable.View ref={'view5'} style={[styles.rememberView]}>

            <TouchableOpacity onPress={() => handleChange('remember', !data.remember)} style={styles.tickMarkView}>
              {data.remember ? <Image style={styles.imgTickMark} source={require('../../assets/tickMark.png')} /> : <Image />}
            </TouchableOpacity>


            <Text style={[styles.description]}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
               aliqua. Ut enim ad Ankit</Text>



          </Animatable.View>

          <Animatable.View ref={'view6'}>
            {data.isRequesting ? <ActivityIndicator color="white" />
              : <TouchableHighlight underlayColor="#25b6ad" onPress={submit} style={[styles.loginButton]}>
                <Text style={styles.textButtonTitle} >Pay</Text>
              </TouchableHighlight>}
          </Animatable.View>

          <View style={{ flex: 0.1, marginTop: '12%' }}>
            <CustomFooter />
          </View>
        </KeyboardAwareScrollView> :
          <View>
            <Notifications /></View>}
      </SafeAreaView>
    );
  }
}

export default PaymentsComponent;

// {
//   <View style={{flex:1}}>

//   <View>
//      <View>
//        <View>
//          <Text>Please add your card info</Text>
//        </View>
//        <View>
//         <Text> We wont keep any personal information about your card in our
//          system. 
//          </Text>
//        </View>
//        <View>
//          <View>
//           {/* <InputMask
//              name={"number"}
//              maskChar={null}
//              mask={mask}
//              placeholder={"XXXX  XXXX  XXXX  XXXX"}
//              onChange={handleChange}
//              value={data.number}
//            />*/}
//            {errors.number && <Text>{errors.number}</Text>}
//            {error &&
//              error.error &&
//              error.error.number &&
//              error.error.number.map((item, index) => {
//                return <Text>{item} </Text>;
//              })}
//          </View>
//          <View>
//            <View>
//              {/*<InputMask
//                name={"expiry_date"}
//                maskChar={null}
//                mask={"sd/dd"}
//                formatChars={formatChars}
//                placeholder={"MM/YY"}
//                onChange={handleChange}
//                value={data.expiry_date}
//              />*/}
//              {errors.expiry_date && (
//                <Text>{errors.expiry_date} </Text>
//              )}
//              {error &&
//                error.error &&
//                error.error.exp_month &&
//                error.error.exp_month.map((item, index) => {
//                  return <Text>{item}</Text>;
//                })}
//              {error &&
//                error.error &&
//                error.error.exp_year &&
//                error.error.exp_year.map((item, index) => {
//                  return <Text>{item} </Text>;
//                })}
//            </View>>
//              {/*<InputMask
//                name={"cvc"}
//                maskChar={null}
//                mask={"999"}
//                placeholder={"CVC"}
//                onChange={handleChange}
//                value={data.cvc}
//              />*/}
//              {errors.cvc && <Text>{errors.cvc} </Text>}
//              {error &&
//                error.error &&
//                error.error.cvc &&
//                error.error.cvc.map((item, index) => {
//                  return <Text>{item} </Text>;
//                })}
//            </View>
//          </View>
//          <View>
//           {/* <input
//              type="checkbox"
//              name="remember"
//              id="remember"
//              onChange={handleChange}
//              checked={data.remember}
//              value={data.remember}
//            />*/}
//            <Text>
//                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
//                sed do eiusmod tempor incididunt ut labore et dolore magna
//                aliqua. Ut enim ad minim
//            </Text>
//          </View>
//          {/*<SubmitButtonDiv
//            wow={"1s"}
//            className="f-page__form"
//            onClick={submit}
//            appendClass={"-cta"}
//            loading={paymentDetails.isRequesting}
//            loaderComponent={
//              <Loader fill={"#ffffff"} height={"15px"} width={"15px"} />
//            }
//            buttonText={<span>Pay</span>}
//          />*/}
//        </View>
//      </View>
//    </View>

// }