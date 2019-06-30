import { Component } from "react";
import styles from "../stylesheet/Account.style";
import { SafeAreaView } from 'react-navigation';
import React from "react";
import { FlatList, Image, ImageBackground, Text, TextInput, Modal, TouchableHighlight, View, TouchableOpacity, ScrollView } from "react-native";
//import { Icon, Row } from "native-base";
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { getThumbnail, getUsername, getUserInfo } from "../utils";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Logo from './common/logo';
import HeaderMenuAndBell from './common/HeaderMenuAndBell';
import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/EvilIcons";
import Icon3 from "react-native-vector-icons/Ionicons";
import Icon4 from "react-native-vector-icons/MaterialIcons";
import Icon5 from 'react-native-vector-icons/FontAwesome';
import Icon6 from 'react-native-vector-icons/FontAwesome5';
import CustomFooter from '../components/common/CustomFooter'
import Notifications from '../containers/Notifications'
import MultiSelect from 'react-native-multiple-select';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// import custom from './c'

import Hamburger from 'react-native-hamburger';
import SideMenu from './common/SideMenu';

// import { ScrollView } from "react-native-gesture-handler";

//  import Icon from 'react-native-vector-icons/FontAwesome'

const buttonName = {
    contactInfo: "Contact Information",
    coverPhoto: 'Cover Photo',
    notificationSettings: 'Notification Settings',
    paymentDetail: "Payment Details",
    other: "Other",

}
class NoService extends Component {

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
            isCreateServiceViewShow:false,
            isServiceDescViewShow:false,
        }
        this.arrayGeneres =["Blues", "Classic", 'Jazz'];
        this.arrayMobileNumber = [];
        this.arrayButtons = [];
        this.dropDownOptions = [{ name: 'Offered Services', image: '' }, { name: 'Historic', image: 'wechat' }, { name: 'Support Center', image: 'customerservice' }],

            this.arrayData = [{ name: 'Market', image: '', count: 0 }, { name: 'Messages', image: 'message', count: 3 }, { name: 'Profile', image: '', count: 0 }, { name: 'Notifications', image: 'bell', count: 24 }, { name: 'Cart', image: '', count: 2 }]
    }
    fadeInDown = () => this.refs.userImageView.fadeInDown(1000);
    fadeInCreateView = () => this.refs.createServiceView.fadeIn(2000).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))
    fadeInUpServiceDescView = () => this.refs.serviceDescView.fadeInUp(1000);

    
    
    zoomInPopup = () => this.refs.viewModalRef.zoomIn().then(endState => console.log(" now end zoomin"));


    _navigateToAdvanceSearchView() {
        this.props.navigation.navigate("AdvancedSearchView");
    }
    _navigateToNotificationView() {
        this.props.navigation.navigate('Notification');
    }

    _onScroll = event => {
        const currentOffset = event.nativeEvent.contentOffset.y;
        const dif = currentOffset - (this.offset || 0);
        if (currentOffset <= 20) {

            if (this.state.isScrollDown) {
                this.setState({ isScrollDown: false });
            }

        } else {
            if (currentOffset > 5) {
                if (!this.state.isScrollDown)
                    setTimeout(() => {
                        this.setState({ isScrollDown: true });

                    }, 500);
            }
        }
        this.offset = currentOffset;
    };

    onClickSettingsButton(name) {
        //   switch(name){
        //       case buttonName.contactInfo:
        //          this.setState({isContactInfoClick:true})

        //   }
    }
    showPopup() {
        this.setState({ isSideMenuClick: true ,
            isNotificationShow: false})
        // setTimeout(() => {
        //     this.zoomInPopup();
        // }, 10);

    }
    hidePopup() {
        this.setState({ isSideMenuClick: false })
    }
    onChangeSearchText = () => {
        this.setState({ isSearchbarDataShow: true })
    }
    onChangeMobileNumber = (value) => {
        // this.setState({
        //     mobileNumber: value,
        //     isBottomMobileShow: true
        // });

    }
    onClickMobBottom = () => {

        let button = <TouchableOpacity style={{ width: 200, height: 40, backgroundColor: 'pink' }} onPress={this.removeMobileNumber()}>
            <View>
                <Text>{this.state.mobileNumber}</Text>
            </View>
        </TouchableOpacity>

        this.arrayMobileNumber.push(this.state.mobileNumber);
        this.arrayButtons.push(button);
        this.setState({
            isBottomMobileShow: false,
            mobileNumber: ''
        });
        return this.arrayButtons
    }
    showServiceDescView (){
        this.setState({isServiceDescViewShow:true});
        setTimeout(() => {
            this.fadeInUpServiceDescView();
        }, 100);
    }
    removeMobileNumber() {

    }
    renderSearchRow = (item) => {
        return (

            <View style={{ height: 50, justifyContent: 'center' }}>
                <TouchableOpacity style={{ margin: '2%' }} onPress={() => this.setState({ isDropDownclick: false })}>
                    <View style={{ flexDirection: "row" }}>
                        <Image style={{ width: 25, height: 25 }} />
                        <Text style={[styles.textModalData, { marginRight: '5%', color: 'black' }]}>{item.item.name}</Text>

                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    renderModalItem = (item) => {
        let icon = "";
        let viewNotification = <View />
        let view
        if (item.index === 0) {
            icon = <Icon1 name="briefcase" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 18, color: 'white' }} />

        } else if (item.index === 1) {
            icon = <Icon1 color="white" name="message" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 18 }} />
            viewNotification = <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: '#424242', justifyContent: 'center' }}>
                <Text style={styles.textModalData}>{item.item.count}</Text>
            </View>
        } else if (item.index === 2) {
            icon = <Icon name="user" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 18, tintColor: 'white' }} />

        } else if (item.index === 3) {
            icon = <Icon2 name="bell" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 18, tintColor: 'white' }} />
            viewNotification = <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: '#424242', justifyContent: 'center' }}>
                <Text style={styles.textModalData}>{item.item.count}</Text>
            </View>
        } else if (item.index === 4) {
            icon = <Icon name="shoppingcart" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 18, tintColor: 'white' }} />
            viewNotification = <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: '#424242', justifyContent: 'center' }}>
                <Text style={styles.textModalData}>{item.item.count}</Text>
            </View>
        }

        return (

            <View style={{ height: 50, justifyContent: 'center' }}>
                <TouchableOpacity style={{ margin: '2%' }} onPress={() => this.setState({ isDropDownclick: false })}>
                    <View style={{ flexDirection: "row" }}>
                        {icon}
                        <Text style={[styles.textModalData, { marginRight: '5%' }]}>{item.item.name}</Text>
                        {viewNotification}
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    renderItem = (item, ) => {
        let index = item.index;
        let icon = "";

        if (index === 0) {
            icon = <Image source={require('../assets/Image/privacy.png')} style={{ tintColor: 'rgb(59, 147, 187)', marginRight: '7%', width: 20, height: 20 }} />
        } else if (index === 1) {
            icon = <Icon4 name="history" style={{ flex: 0.1, color: 'rgb(59, 147, 187)', marginRight: '3%', fontSize: 18 }} />
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
    showCreateService =() =>{
       this.props.navigation.navigate("CreateService");
        // this.setState({isCreateServiceViewShow:true});
        // setTimeout(() => {
        //     this.fadeInCreateView();
        // }, 50);
       
    }
    showNotification() {
        this.setState({ isNotificationShow: true, isSideMenuClick: false })
      }
    // multiSelectView(){
    //     return(
    //         <View>
    //     <MultiSelect
    //     styleDropdownMenu={styles.multiSelectDownStyle}
    //     styleInputGroup={styles.multiSelectStyle}
    //     styleMainWrapper={{ marginLeft: '5%', marginRight: '5%', marginTop: '5%' }}
    //     styleListContainer={styles.multiSelectListStyle}
    //     hideTags
    //     items={this.genres}
    //     uniqueKey="value"
    //     ref={(component) => { this.multiSelect = component }}
    //     onSelectedItemsChange={(selectedItems) => handleMultiSelect(selectedItems, 'genres')}
    //     selectedItems={this.genres}
    //     selectText="Select Genres"
    //     searchInputPlaceholderText="Select Genres"
    //     onChangeInput={(text) => console.log(text)}
    //     altFontFamily="Montserrat-light"
    //     tagRemoveIconColor="black"
    //     tagBorderColor="#CCC"
    //     tagTextColor="#black"
    //     selectedItemTextColor="rgb(60, 205, 53)"
    //     selectedItemIconColor="rgb(60, 205, 53)"
    //     itemTextColor="#000"
    //     displayKey="label"
    //     searchInputStyle={{ color: '#CCC' }}
    //     submitButtonColor="#ff277b"
    //     submitButtonText="Submit"
    //     name="genres"
    //   />
    //   <View>
    //     {this.multiSelect && this.multiSelect.getSelectedItemsExt(this.genres)}
    //   </View>
    // </View>
    //     )
    // }

    render() {
        const {user} = this.props;

        return (

            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
                {/* {!this.state.isSideMenuClick ? <LinearGradient start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} colors={this.state.isBottomViewShow ? this.state.headerColor : this.state.headerColorMix} style={{ flexDirection: 'row', height: 100, width: '100%', alignItems: 'space-between', justifyContent: 'center' }}>

                    <TouchableOpacity style={{ color: 'white', marginTop: '14%', flex: 0.1, marginLeft: '4%' }} onPress={() => this.showPopup()}>
                        <Hamburger color="white" active={false} type="spinCross" onPress={() => this.showPopup()} />
                    </TouchableOpacity>


                    <Logo color={'#ffffff'} style={{ flex: 0.7, marginLeft: '25%' }} width="130px" height="44px" />

                    <View style={{ flex: 0.3 }} />
                    <TouchableOpacity style={[styles.searchView, { flex: 0.2, alignSelf: 'flex-end', marginRight: '5%' }]} onPress={() => this.setState({ isNotificationShow: !this.state.isNotificationShow })}>
                    {this.state.isNotificationShow?<Icon name="close" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 38, tintColor: 'white' }} />: <Icon2 name="bell" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 40, tintColor: 'white' }} />}
                    </TouchableOpacity>
                </LinearGradient> : null} */}

                {!this.state.isSideMenuClick ? <HeaderMenuAndBell notificationCount = {this.props.notificationCount} colors={this.state.isBottomViewShow ? this.state.headerColor : this.state.headerColorMix} onPressPopup={() => this.showPopup()} isNotificationShow={this.state.isNotificationShow} onPressBell={() => this.setState({ isNotificationShow: !this.state.isNotificationShow })} /> : null}


                <View style={{ flex: 1 }}>
                    <KeyboardAwareScrollView style={{ backgroundColor: 'rgb(245,245,245)' }}>

                        {/* Once api setup use this code for showing user 
                        <View style={{flex:0.3, backgroundColor:'red'}}>
                <SettingsHeader
                    user={user}
                  
                    uploadable={false}
                />
         </View>        */}

                        <LinearGradient start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} colors={this.state.headerColorMix} style={{ width: '100%', height: 200, flex: 0.3, }}>
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
                                <Image style={styles.imgUser} source={{ uri:getThumbnail(user.data)}} />
                                {/* <Image style={styles.imgUser} source={require('../assets/avatar-main-1.jpg')} /> */}
                            </Animatable.View>
                            <Text style={styles.textUserName}> {getUsername(user.data)} </Text>
                        </LinearGradient>


                        <TouchableOpacity style={{ marginTop: '2%', marginBottom: '2%' }} onPress={() => this.setState({ isDropDownclick: true })}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ marginLeft: '2%', marginBottom: '1%', flex: 0.1, }}>
                                    {/* <Icon6 name="shopping-cart" style={{ marginLeft: '2%', marginBottom: '1%', flex: 0.1, color: 'rgb(140,91,204)', fontSize: 18 }} />
                                    <Icon5 name="hand-holding" color='#20ACAC' style={{ fontSize: 18 }} /> */}
                                    <Icon3 name="ios-settings" style={{ color: 'rgb(140,91,204)', fontSize: 25 }} />
                                </View>

                                <Text style={[styles.titleAccount, { flex: 0.8, marginTop: '0.5%' }]}> Offered Services</Text>

                                <View style={{ width: 30, height: 30, borderRadius: 18, marginRight: '5%', marginBottom: '5%', flex: 0.1, backgroundColor: 'white' }}>
                                    <Icon name="down" color='#8E8E8E' style={{ fontSize: 15, alignSelf: 'center', marginTop: '22%', fontWeight: 'bold' }} />
                                </View>


                                {/* <Animatable.Image source={require('../../src/assets/Image/arrow_small_down.png')} style={{borderRadius:13,alignSelf:'flex-end' ,width: 26, height: 26 }} /> */}
                            </View>
                        </TouchableOpacity>

                       {this.state.isCreateServiceViewShow? <Animatable.View ref={"createServiceView"} style={{ alignSelf: 'center', marginTop: '10%', flex: 0.7 }}>
                            
                            <Text style={[styles.noServiceText, { marginLeft: '10%', marginRight: '10%', marginTop: '5%' }]}> Nice! Let's create your first service! </Text>
                           {this.state.isServiceDescViewShow?<Animatable.View ref={"serviceDescView"} style={{height:'40%'}}>
                           <Text style={[styles.subTitle, { marginLeft: '10%', marginRight: '10%', marginTop: '5%' }]}> Nice… describe your service in more detail! (give as much information as possible!) </Text>
                           <TextInput
              style={[styles.inputStyle, {height:'30%'}]}
              placeholder={'Description'}
              numberOfLines={5}
            //   onChangeText={val => handleChange('artist_name', val)}
            //   value={data.artist_name}
            //   name={"artist_name"}
            />
                           </Animatable.View>:
                           <View>
                                <Text style={[styles.textLight, { alignSelf: 'center', marginTop: '5%' }]}> What type of service are you offering?</Text>
                                {/* Music genres */}
                                {this.multiSelect()}
                            </View>
                           }
                            <TouchableHighlight underlayColor="#25b6ad" style={[styles.loginButton, { marginTop: '5%', justifyContent: 'center', }]} onPress={()=>this.showServiceDescView()} >
                                <Text style={styles.textButtonTitle} >Next</Text>
                            </TouchableHighlight>
                            </Animatable.View> : 
                            
                            <View style={{ alignSelf: 'center', marginTop: '10%', flex: 0.7 }}>
                            <View style={{ alignSelf: 'center' }}>
                                <Icon  color='#20ACAC' style={{ fontSize: 25 }} />
                                <Icon5  color='#20ACAC' style={{ fontSize: 25 }} />

                            </View>
                            <Text style={[styles.noServiceText, { marginLeft: '10%', marginRight: '10%', marginTop: '5%' }]}> You don't offer any services :( </Text>
                            <Text style={[styles.textLight, { alignSelf: 'center', marginTop: '5%' }]}> Want to create your first one now? </Text>
                          
                          
                            <TouchableHighlight underlayColor="#25b6ad" style={[styles.loginButton, { marginTop: '5%', justifyContent: 'center', }]} onPress={this.showCreateService}>
                                <Text style={[styles.textButtonTitle,{marginBottom:'15%'}]} >Create Service</Text>
                            </TouchableHighlight>
                            </View> 
                       
                     }


                        {/* Show Account Setting button dropdown  */}

                        {this.state.isDropDownclick ?
                            <View style={styles.viewModalAccount}>

                                <TouchableOpacity style={{ marginTop: '55.5%', backgroundColor: 'white', height: 40 }} onPress={() => this.setState({ isDropDownclick: false })}>
                                    <View style={{ flexDirection: 'row', height: 50, marginTop: '2%' }}>
                                        <Icon3 name="ios-settings" style={{ marginLeft: '2%', marginBottom: '1%', flex: 0.1, color: 'rgb(140,91,204)', fontSize: 25 }} />

                                        <Text style={[styles.titleAccount, { flex: 0.8 }]}> Purchased Services</Text>
                                        <View style={{ width: 30, height: 30, borderRadius: 18, marginRight: '5%', marginBottom: '5%', flex: 0.1, backgroundColor: 'white', borderColor: '#8E8E8E', borderWidth: 0.3 }}>
                                            <Icon name="up" color='#8E8E8E' style={{ fontSize: 15, alignSelf: 'center', marginTop: '22%', fontWeight: 'bold' }} />
                                        </View>

                                    </View>
                                </TouchableOpacity>

                                {/* <View style={styles.viewDropDown}>
                                    <FlatList
                                        style={styles.flatList}
                                        data={this.dropDownOptions}
                                        renderItem={this.renderItem}
                                        keyExtractor={(item, index) => index.toString()}
                                    />
                                </View> */}
                            </View> : null}
                        <View style={{marginTop:'22%'}}>
                            <CustomFooter />

                        </View>
                       
                    </KeyboardAwareScrollView>

                    {/* Side Menu button modal  */}
                    {this.state.isSideMenuClick ? <SideMenu navigation={this.props.navigation}   hidePopup={() => this.hidePopup()} showNotification={() => this.showNotification()} /> : null}

                    {/* notification view show */}
                    {this.state.isNotificationShow ? <Notifications hidePopup={() => this.hideNotificationView()} /> : null}

                </View>
            </SafeAreaView>

        )
    }

}


// eslint-disable-next-line
const mapStateToProps = state => {
    return {
        user: state.user
    };
};

// eslint-disable-next-line


export default connect(
    mapStateToProps,
    null
)(NoService);



{/* <KeyboardAwareScrollView onScroll={this._onScroll} style={{ backgroundColor: 'rgb(42, 173,177)' }}>
<View style={{ backgroundColor: 'rgb(248,249,248)' }} >

<LinearGradient start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} colors={['rgb(42, 173,177)', 'rgb(131, 110, 198)', 'rgb(134, 103, 200)']} style={styles.viewTopBackground}>

<Animatable.View
    ref={'userImageView'}
    style={{
        marginTop: "-15%",
        height: 100, width: 100,
        borderRadius: 50, elevation: 3,
        backgroundColor: "white",
        alignSelf: "center",
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.8,
    }}>
    {/* <Image style={styles.imgUser} source={getThumbnail(user.data)} /> */}


// </Animatable.View>

// </LinearGradient>
// </View>
// </KeyboardAwareScrollView> */}