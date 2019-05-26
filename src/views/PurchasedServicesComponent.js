import React from "react";
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions, FlatList, ActivityIndicator } from 'react-native';
import styles from "../stylesheet/PurchasedService.style";
import { SafeAreaView } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../views/common/logo';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/EvilIcons";
import Icon3 from "react-native-vector-icons/Ionicons";
import Hamburger from 'react-native-hamburger';
import SideMenu from '../views/common/SideMenu';
import SettingsHeader from '../views/common/SettingsHeader';
import Notifications from '../../src/containers/Notifications';
import CustomFooter from '../components/common/CustomFooter'
import * as Animatable from 'react-native-animatable';

// import { SettingsHeader, TabHeader, FormToast } from "../Commons";
// import TabComponent from "./TabComponent";
// import { purchasedServices } from "../reducers/userService";

//  import { settingsHeaders } from "../constants/tabs";

const buttonName = {
  contactInfo: "Contact Information",
  details: 'Details',
  changePassword: 'Change Password',
  paymentDetail: "Payment Details",
  other: "Other",
  notificationSettings: 'Notification Settings'
}

class PurchasedServicesComponent extends React.PureComponent {
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
      selectedSortValue: "Name",
      isSortValuePopupShow: false,
    }
    this.arrayMobileNumber = [];
    this.arrayButtons = [];
    this.arraySortBy = ["Name", "Date", "Value"];
    this.dropDownOptions = [{ name: 'Privacy', image: '' }, { name: 'Communication', image: 'wechat' }, { name: 'Support Center', image: 'customerservice' }],
      this.arrayData = [{ name: 'Market', image: '', count: 0 }, { name: 'Messages', image: 'message', count: 3 }, { name: 'Profile', image: '', count: 0 }, { name: 'Notifications', image: 'bell', count: 24 }, { name: 'Cart', image: '', count: 2 }]

  this.arrayData = [
    {Title:"Service Title", subTitle:"Bassline Drift ", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"},

    {Title:"Service Title", subTitle:"Bassline Drift ", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"},

    {Title:"Long Service Title which may be in another line ", subTitle:"Bassline Drift ", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"},
]
    }
  onClickSettingsButton(name) {
    //   switch(name){
    //       case buttonName.contactInfo:
    //          this.setState({isContactInfoClick:true})

    //   }
  }
  selectSortValue(name) {
    let selectedSortValue = '';
    if (name === this.arraySortBy[0]) {
      selectedSortValue = 'Name';
    } else if (name === this.arraySortBy[1]) {
      selectedSortValue = 'Date';
    } else if (name === this.arraySortBy[2]) {
      selectedSortValue = 'Value';
    }
    this.setState({ 
      selectedSortValue: selectedSortValue, 
      isSortValuePopupShow:false
    });
  }
  showPopup() {
    this.setState({ isSideMenuClick: true })
    console.log(" sidemnu ", this.state.isSideMenuClick);
  }
  hidePopup() {
    this.setState({ isSideMenuClick: false })
  }
  hideNotificationView() {
    this.setState({ isNotificationShow: false })
  }
  _navigateToNotificationView() {
    this.setState({ isNotificationShow: true })
    //this.props.navigation.navigate('Notification');
  }
  showSortValuePopup() {
    this.setState({ isSortValuePopupShow: true });

  }
  renderItem = (item, ) => {
    console.log(" item is ", item);
    let index = item.index;
    let icon = "";

    if (index === 0) {
      icon = <Image source={require('../assets/Image/privacy.png')} style={{ tintColor: 'rgb(59, 147, 187)', marginRight: '7%', width: 20, height: 20 }} />
    } else if (index === 1) {
      icon = <Icon name="wechat" style={{ flex: 0.1, color: 'rgb(59, 147, 187)', marginRight: '3%', fontSize: 18 }} />
    } else {
      icon = <Icon name="customerservice" style={{ flex: 0.1, color: 'rgb(59, 147, 187)', marginRight: '3%', fontSize: 18 }} />
    }
    return (

      <View style={{ height: 50, justifyContent: 'center' }}>
        <TouchableOpacity style={{ margin: '2%' }} onPress={() => this.setState({ isDropDownclick: false })}>
          <View style={{ flexDirection: "row" }}>

            {icon}

            <Text style={styles.textAccountPopup}>{item.item.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  renderServiceItem = (itemDetail) => {

    let item = itemDetail.item;
    console.log("read &&&&&& ", this.props);
    return (
      <View>

        <TouchableHighlight>
          <View>
            <View style={{ flexDirection: 'row' }}>

              <Image style={{ marginLeft: '2%', marginTop: '2%' }} source={require('../assets/avatar3.jpg')} />

              <View style={{ margin: '2%', flex: 1 }}>

               
                  <Text style={[styles.textSubTitleNotSelected, { flex: 0.8, color: item.is_read ? "#20acac" : "#8e5acd" }]}>Service Title </Text>
                 
                  <Text style={[styles.textSubTitleNotSelected, { flex: 0.8, color: item.is_read ? "#20acac" : "#8e5acd" }]}>Subtitle of Service </Text>
               

                <View >
                 <Text style={styles.textDescription}> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </Text>
                </View>
              </View>

            </View>
            <View style={{ width: '80%', height: 1, backgroundColor: 'rgba(38,38,38, 0.52)', marginTop: '2%', alignSelf: 'center' }} />
          </View>
        </TouchableHighlight>
      </View>)
  }



  
  render() {
    const {
      user,
      tabs,
      genres,
      details,
      tabIndex,
      switchTab,
      profilePic,
      contactInfo,
      _updateUser,
      changePassword,
      paymentDetails,
      _changePassword,
      uploadProfilePic,
      navigation
    } = this.props;

    console.log("this.props-=", this.props)
    return (
      <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>

        {!this.state.isSideMenuClick ? <LinearGradient start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} colors={this.state.isBottomViewShow ? this.state.headerColor : this.state.headerColorMix} style={{ flexDirection: 'row', height: 100, width: '100%', alignItems: 'space-between', justifyContent: 'center' }}>

          <TouchableOpacity style={{ color: 'white', marginTop: '14%', flex: 0.1, marginLeft: '4%' }} onPress={() => this.showPopup()}>
            <Hamburger color="white" active={false} type="spinCross" onPress={() => this.showPopup()} />
          </TouchableOpacity>


          <Logo color={'#ffffff'} style={{ flex: 0.7, marginLeft: '25%' }} width="130px" height="44px" />

          <View style={{ flex: 0.3 }} />
          <TouchableOpacity style={[styles.searchView, { flex: 0.2, alignSelf: 'flex-end', marginRight: '5%' }]} onPress={() => this.setState({ isNotificationShow: !this.state.isNotificationShow })}>
          {this.state.isNotificationShow?<Icon name="close" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 38, tintColor: 'white' }} />: <Icon2 name="bell" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 40, tintColor: 'white' }} />}
          </TouchableOpacity>
        </LinearGradient> : null}

        <View style={{ flex: 1 }}>
          <KeyboardAwareScrollView style={{ backgroundColor: 'rgb(245,245,245)' }}>

            <View style={{ flex: 0.3, backgroundColor: 'red' }}>
            <LinearGradient start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} colors={this.state.headerColorMix} style={{ width: '100%', height: 200 }}>
                            {/* <SvgUri width="200" height="200" source={require('../assets/Image/SVG/sprite.svg')} /> */}


                            <Animatable.View
                                ref={'userImageView'}
                                style={{
                                    marginTop: "5%",
                                    width: 100,
                                    borderRadius: 50, elevation: 3,
                                    backgroundColor: "white",
                                    alignSelf: "center",
                                    shadowColor: 'rgba(0,0,0,1)',
                                    shadowOffset: {
                                        width: 1,
                                        height: 1
                                    },
                                    shadowOpacity: 0.8,
                                    marginBottom: '5%',
                                }}>
                                {/* <Image style={styles.imgUser} source={getThumbnail(user.data)} /> */}
                                <Image style={styles.imgUser} source={require('../assets/avatar-main-1.jpg')} />
                            </Animatable.View>
                            <Text style={styles.textUserName}> Lois Stokes </Text>
                        </LinearGradient>
              {/* <SettingsHeader
                    user={user}
                    profilePic={profilePic}
                    uploadProfilePic={uploadProfilePic}
                    uploadable={true}
                /> */}
            </View>
            <View style={{ marginTop: '2%', marginBottom: '2%', flex: 0.1 }}>
              <TouchableOpacity onPress={() => this.setState({ isDropDownclick: true })}>
                <View style={{ flexDirection: 'row' }}>
                  <Icon3 name="ios-settings" style={{ marginLeft: '2%', marginBottom: '1%', flex: 0.1, color: 'rgb(140,91,204)', fontSize: 25 }} />
                  <Text style={[styles.titleAccount, { flex: 0.8, marginTop: '0.5%' }]}> Account Settings</Text>

                  <View style={{ width: 30, height: 30, borderRadius: 18, marginRight: '5%', marginBottom: '5%', flex: 0.1, backgroundColor: 'white' }}>
                    <Icon name="down" color='#8E8E8E' style={{ fontSize: 15, alignSelf: 'center', marginTop: '22%', fontWeight: 'bold' }} />
                  </View>

                  {/* <Animatable.Image source={require('../../src/assets/Image/arrow_small_down.png')} style={{borderRadius:13,alignSelf:'flex-end' ,width: 26, height: 26 }} /> */}
                </View>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignSelf:'flex-end', marginRight:'5%' }}>
                  <Text>Sort By:</Text>
                  <View>
                    <TouchableOpacity onPress={this.showSortValuePopup.bind(this)}>
                      <Text style={styles.selectedText}>Name</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* View Sort By */}
                {this.state.isSortValuePopupShow ? <View style={styles.viewSort}>
                  <TouchableHighlight underlayColor="#20ACAC" style={styles.buttonSort1} onPress={this.selectSortValue.bind(this)}>
                    <Text style={styles.popupText}>Name</Text>
                  </TouchableHighlight>

                  <TouchableHighlight underlayColor="#20ACAC" style={styles.buttonSort} onPress={this.selectSortValue.bind(this)}>
                    <Text style={styles.popupText}>Date</Text>
                  </TouchableHighlight>

                  <TouchableHighlight underlayColor="#20ACAC" style={styles.buttonSort3} onPress={this.selectSortValue.bind(this)}>
                    <Text style={styles.popupText}>Value</Text>
                  </TouchableHighlight>
                </View> : null}


               
</View>

                {/* Notification view */}
                <View style={{ flex: 0.4 }}>
 
                </View>
                {this.state.isDropDownclick ?
                  <View style={styles.viewModalAccount}>

                    <TouchableOpacity style={{ marginTop: '54.0%', backgroundColor: 'white', height: 40 }} onPress={() => this.setState({ isDropDownclick: false })}>
                      <View style={{ flexDirection: 'row', height: 50, marginTop: '2%' }}>
                        <Icon3 name="ios-settings" style={{ marginLeft: '2%', marginBottom: '1%', flex: 0.1, color: 'rgb(140,91,204)', fontSize: 25 }} />
                        <Text style={[styles.titleAccount, { flex: 0.8 }]}> Account Settings</Text>
                        <View style={{ width: 30, height: 30, borderRadius: 18, marginRight: '5%', marginBottom: '5%', flex: 0.1, backgroundColor: 'white', borderColor: '#8E8E8E', borderWidth: 0.3 }}>
                          <Icon name="up" color='#8E8E8E' style={{ fontSize: 15, alignSelf: 'center', marginTop: '22%', fontWeight: 'bold' }} />
                        </View>

                      </View>
                    </TouchableOpacity>

                    <View style={styles.viewDropDown}>
                      <FlatList
                        style={styles.flatList}
                        data={this.dropDownOptions}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                      />
                    </View>
                  </View> : null}

                  <FlatList
          renderItem={this.renderServiceItem}
          extraData={this.props}
          data={this.arrayData}
          keyExtractor={(item, index) => index.toString()}
        />


                {/* Side Menu button modal  */}
                {this.state.isSideMenuClick ? <SideMenu navigation={navigation} hidePopup={() => this.hidePopup()} /> : null}
                       
                       <CustomFooter />
                </KeyboardAwareScrollView>
              {/* notification view show */}
              {this.state.isNotificationShow ? <Notifications navigation={navigation} hidePopup={() => this.hideNotificationView()} /> : null}
            </View>
            </SafeAreaView>
          )
      
      }
  }
  
  export default PurchasedServicesComponent
  ;
