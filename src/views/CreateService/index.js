import React from "react";
// import Helmet from "react-helmet";
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import styles from '../../stylesheet/createservice.style';
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/EvilIcons";
import Icon3 from "react-native-vector-icons/Ionicons";
import Hamburger from 'react-native-hamburger';
import SideMenu from '../common/SideMenu';
import Logo from '../common/logo';
import HeaderMenuAndBell from '../common/HeaderMenuAndBell';
import Notifications from '../../containers/Notifications';
import SettingsHeader from "../common/SettingsHeader";
const { height, width } = Dimensions.get('window');
const deviceHeight = height;
let deviceWidth = width;
//TabHeader
// import { servicesHeaders } from "../../constants/tabs";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from 'react-navigation';
import CustomFooter from '../../components/common/CustomFooter'

import CreateServiceForm from "./CreateServiceForm";

class CreateServiceComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrollDown: false,
      headerColorMix: ['rgb(42, 173,177)', 'rgb(131, 110, 198)', 'rgb(134, 103, 200)'],
      headerColor: ['rgb(42, 173,177)', 'rgb(93, 152, 179)'],
      isContactInfoClick: false,
      isDropDownclick: false,
      isSideMenuClick: false,
      isSearchbarDataShow: false,
      isCrossClick: false,
      active: false,
      isBottomMobileShow: true,
      mobileNumber: '',
      isNotificationShow: false,
    }
  }
  showPopup() {
    this.setState({ isSideMenuClick: true,isNotificationShow: false })    
  }
  hidePopup() {
    this.setState({ isSideMenuClick: false,
      
     })
   
  }
  showNotification() {
    this.setState({ isNotificationShow: true, isSideMenuClick: false })
  }
  render() {
    return (
      <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={{ flex: 1 }}>

        {/* {!this.state.isSideMenuClick ? <LinearGradient start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} colors={this.state.isBottomViewShow ? this.state.headerColor : this.state.headerColorMix} style={{ flexDirection: 'row', height: 100, width: '100%', alignItems: 'space-between', justifyContent: 'center' }}>

          <TouchableOpacity style={{ color: 'white', marginTop: '14%', flex: 0.1, marginLeft: '4%' }} onPress={() => this.showPopup()}>
            <Hamburger color="white" active={false} type="spinCross" onPress={() => this.showPopup()} />
          </TouchableOpacity>


          <Logo color={'#ffffff'} style={{ flex: 0.7, marginLeft: '25%' }} width="130px" height="44px" />

          <View style={{ flex: 0.3 }} />
          <TouchableOpacity style={[styles.searchView, { flex: 0.2, alignSelf: 'flex-end', marginRight: '5%' }]} onPress={() => this.setState({ isNotificationShow: !this.state.isNotificationShow, isSideMenuClick: false })}>
          {this.state.isNotificationShow?<Icon name="close" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 38, tintColor: 'white' }} />: <Icon2 name="bell" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 40, tintColor: 'white' }} />}
          </TouchableOpacity>
        </LinearGradient> : null} */}

        {!this.state.isSideMenuClick ? <HeaderMenuAndBell notificationCount = {this.props.notificationCount} colors={this.state.isBottomViewShow ? this.state.headerColor : this.state.headerColorMix} onPressPopup={() => this.showPopup()} isNotificationShow={this.state.isNotificationShow} onPressBell={() => this.setState({ isNotificationShow: !this.state.isNotificationShow })} /> : null}


        <View style={{ flex: 1 }}>
          <KeyboardAwareScrollView style={{ backgroundColor: 'rgb(245,245,245)',overflow: 'scroll' }}>

            <View style={{minHeight:deviceHeight-150}}>
              <View style={{ flex: 0.3 }}>
                <SettingsHeader
                  user={this.props.user}
                  uploadable={false}
                />
              </View>
              <View style={{flex:0.2}}>
                <Text style={[styles.noServiceText, { marginLeft: '10%', marginRight: '10%', marginTop: '5%', textAlign: 'center' }]}>
                  {"Nice! Let's create your service!"}
                </Text>
              </View>
              <View style={{flex:0.5, marginBottom:'10%'}}>
                <CreateServiceForm {...this.props} />
              </View>
            </View>

            { /* <FormToast /> */}
            {/* Side Menu button modal  */}
            {this.state.isSideMenuClick ? <SideMenu navigation={this.props.navigation}  hidePopup={() => this.hidePopup()} showNotification={() => this.showNotification()} /> : null}

            {/* <View style={{marginTop:'10%'}}>
              <CustomFooter />
            </View> */}

          </KeyboardAwareScrollView>


          {/* notification view show */}
          {this.state.isNotificationShow ? <Notifications navigation={this.props.navigation} hidePopup={() => this.hideNotificationView()} /> : null}

        </View>
      </SafeAreaView>
    );
    //  return (
    //   <React.Fragment>
    //     <Helmet title={"Create Service"} />

    //     <div className="profile">
    //       <SettingsHeader user={this.props.user} />

    //       <div className="container">
    //         <TabHeader headers={servicesHeaders} />
    //       </div>

    //       <div className="container container--wide">
    //         <div className="services services--wide">
    //           <div className="services-create">
    //             <div className="services-create__title wow fadeInUp">
    //               {"Nice! Let's create your service!"}
    //             </div>
    //             <CreateServiceForm {...this.props} />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <FormToast />
    //   </React.Fragment>
    // );

  }
}

export default CreateServiceComponent;
