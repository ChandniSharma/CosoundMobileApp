
import { Component } from "react";
import styles from "../../stylesheet/Account.style";
import { SafeAreaView } from 'react-navigation';
import React from "react";
import { FlatList, Image, ImageBackground, Text, TextInput, Modal, TouchableHighlight, View, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
//import { Icon, Row } from "native-base";
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Logo from '../common/logo';
import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/EvilIcons";
import Icon3 from "react-native-vector-icons/Ionicons";
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchActions } from "../../actions/";
import { isEmpty, isNull } from "lodash";
import Notifications from '../../containers/Notifications';

import {
    getSubcategories, getThumbnail, getUsername, getUserInfo, isError,
    getSearchType,
    getSearchPlaceholder,
    getCategoryDataFromPath
} from "../../utils";

import SearchBar from 'react-native-search-bar'
import Hamburger from 'react-native-hamburger';

class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearchbarDataShow: false,
            isCrossClick: false,
            searchBarBgColor: 'rgb(64,66, 67)',
            searchTextColor: 'white',
            searchIconColor: 'white',
            textSearch: '',
            query: "",
            visible: true,
            isNotificationShow: false,
        }
        this.arrayData = [{ name: 'Account Settings', image: '', count: 0 }, { name: 'Plans', image: 'message', count: 0 }, { name: 'Profile', image: '', count: 0 }, { name: 'Notifications', image: 'bell', count: 24 }, { name: 'Cart', image: '', count: 2 }, { name: 'Logout', image: '', count: 0 }]

    }

    //   componentDidUpdate(prevProps) {
    //     if (
    //       prevProps."user" !== this.props."user" &&
    //       this.state.visible
    //     ) {
    //       this.setState({
    //         visible: false
    //       });
    //     }
    //   }
    componentDidMount() {
        setTimeout(() => {
            this.zoomInPopup();
        }, 5);
    }

    /**
   * Get category from route :slug
   */
    _getCategoryId = () => {
        const { headerCategories, location } = this.props;
        return getCategoryDataFromPath(headerCategories.data, "user")
            .categoryId;
    };

    _search = query => {
        const type = getSearchType('user');
        switch (type) {
            case "user":
                return this.props.searchActions.searchUsers(type, query);
            case "marketplace":
                if (!isNull(this._getCategoryId())) {
                    return this.props.searchActions.searchServices(
                        type,
                        this._getCategoryId(),
                        query
                    );
                }
        }
    };

    _applyRef = node => {
        this.node = node;
    };

    _resetState = () => {
        return this.props.searchActions.resetState();
    };

    _onChange = (name, value) => {
        let text = value;
        if (text.length > 0) {
            this.setState({
                isSearchbarDataShow: true,
                searchBarBgColor: 'white',
                searchTextColor: 'black',
                searchIconColor: 'black'
            })
        } else {
            this.setState({
                isSearchbarDataShow: false,
                searchBarBgColor: 'rgb(64,66, 67)',
                searchTextColor: 'white',
                searchIconColor: 'white',
            })
        }
        this.setState(
            {
                [name]: value
            },
            () => {
                const query = value.trim();
                if (!isEmpty(query)) {
                    this._search(query);
                } else {
                    this._resetState();
                }
            }
        );
    };

    _hideResults = () => {
        this.setState({
            visible: false
        });
    };

    _onFocus = () => {
        this.setState({
            visible: true
        });
    };

    fadeInDown = () => this.refs.userImageView.fadeInDown(1000);

    zoomInPopup = () => this.refs.viewModalRef.zoomIn().then(endState => console.log(" now end zoomin"));

    // onChangeSearchText = (text) => {
    //     console.log(" Lenth ===", text.length, "text ==", text);
    //     if (text.length > 0) {
    //         this.setState({
    //             isSearchbarDataShow: true,
    //             searchBarBgColor: 'white',
    //             searchTextColor: 'black',
    //             searchIconColor: 'black'
    //         })
    //     } else {
    //         this.setState({
    //             isSearchbarDataShow: false,
    //             searchBarBgColor: 'rgb(64,66, 67)',
    //             searchTextColor: 'white',
    //             searchIconColor: 'white',
    //         })
    //     }

    // }
    moveToUserProfile(userId) {
        this.setState({ isDropDownclick: false });
        this.props.navigation.navigate('UserProfile', { id: userId });
    }


    renderSearchRow = (item) => {
        console.log(" item is ", item);

        return (

            <View style={{ height: 50, justifyContent: 'center' }}>
                <TouchableOpacity style={{ margin: '2%' }} onPress={() => this.moveToUserProfile(item.item.id)}>
                    <View style={{ flexDirection: "row" }}>
                        <Image style={{ width: 25, height: 25 }} />
                        <Text style={[styles.textModalData, { marginRight: '5%', color: 'black' }]}> {getUsername(item.item)}</Text>

                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    renderModalItem = (item) => {
        console.log(" item is ", item);
        let icon = "";
        let viewNotification = <View />

        let viewComplete = <View />



        if (item.index === 0) {
            viewComplete = <View style={{ height: 50, justifyContent: 'center' }}>
                <TouchableOpacity style={{ margin: '2%' }} onPress={() => this.props.navigation.navigate('AccountSettings')}>
                    <View style={{ flexDirection: "row" }}>
                        <Icon4 name="briefcase-outline" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 18, color: 'white' }} />
                        <Text style={[styles.textModalData, { marginRight: '5%' }]}>{item.item.name}</Text>

                    </View>
                </TouchableOpacity>
            </View>

        } else if (item.index === 1) {

            viewComplete = <View style={{ height: 50, justifyContent: 'center' }}>
                <TouchableOpacity style={{ margin: '2%' }} onPress={() => this.props.navigation.navigate('Plans')}>
                    <View style={{ flexDirection: "row" }}>
                        <Icon4 name="message-outline" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 18, color: 'white' }} />
                        <Text style={[styles.textModalData, { marginRight: '5%' }]}>{item.item.name}</Text>

                    </View>
                </TouchableOpacity>
            </View>

        } else if (item.index === 2) {

            viewComplete = <View style={{ height: 50, justifyContent: 'center' }}>
                <TouchableOpacity style={{ margin: '2%' }} onPress={() => this.props.navigation.navigate('Profile')}>
                    <View style={{ flexDirection: "row" }}>
                        <Icon name="user" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 18, tintColor: 'white' }} />
                        <Text style={[styles.textModalData, { marginRight: '5%' }]}>{item.item.name}</Text>

                    </View>
                </TouchableOpacity>
            </View>

        } else if (item.index === 3) {

            viewComplete = <View style={{ height: 50, justifyContent: 'center' }}>
                <TouchableOpacity style={{ margin: '2%' }} onPress={() => this.setState({ isNotificationShow: !this.state.isNotificationShow })}>

                    <View style={{ flexDirection: "row" }}>
                        <Icon2 name="bell" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 18, tintColor: 'white' }} />
                        <Text style={[styles.textModalData, { marginRight: '5%' }]}>{item.item.name}</Text>
                        <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: '#424242', justifyContent: 'center' }}>
                            <Text style={styles.textModalData}>{item.item.count}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>


        } else if (item.index === 4) {


            viewComplete = <View style={{ height: 50, justifyContent: 'center' }}>
                <TouchableOpacity style={{ margin: '2%' }} onPress={() => this.props.navigation.navigate('Cart')}>
                    <View style={{ flexDirection: "row" }}>
                        <Icon name="shoppingcart" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 18, tintColor: 'white' }} />
                        <Text style={[styles.textModalData, { marginRight: '5%' }]}>{item.item.name}</Text>
                        <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: '#424242', justifyContent: 'center' }}>
                            <Text style={styles.textModalData}>{item.item.count}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>


        } else if (item.index === 5) {

            viewComplete = <View style={{ height: 50, justifyContent: 'center' }}>
                <TouchableOpacity style={{ margin: '2%' }} onPress={() => this.props.navigation.navigate('Login')}>
                    <View style={{ flexDirection: "row" }}>
                        <Icon name="logout" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 18, color: 'white' }} />
                        <Text style={[styles.textModalData, { marginRight: '5%' }]}>{item.item.name}</Text>

                    </View>
                </TouchableOpacity>
            </View>
        }
        return (
            <View>
                {viewComplete}
            </View>

        )
    }

    render() {
        const { query, visible } = this.state;
        const { searchResults, location, headerCategories } = this.props;
        const { data, type, isRequesting } = searchResults;
        const placeholder = getSearchPlaceholder(
            headerCategories.data,
            "user"
        );

        const { hidePopup, user } = this.props;
        console.log("user====", user)
        return (
            <Animatable.View ref={'viewModalRef'} style={styles.viewModal}>
                <KeyboardAwareScrollView style={{ flex: 1 }}>
                    <TouchableOpacity style={{ color: 'white', marginTop: '9%', marginLeft: '5%', width: 50, height: 35 }} onPress={hidePopup}>

                        <Hamburger color="white" active={true} type="spinCross" onPress={hidePopup} />
                    </TouchableOpacity>

                    <View style={[styles.searchBarView, { backgroundColor: this.state.searchBarBgColor }]}>
                        <Icon2 name="search" color={this.state.searchIconColor} style={{ position: 'absolute', marginLeft: '3%', marginTop: '4%', marginRight: '1%', fontSize: 40 }} />
                        <TextInput
                            placeholderTextColor={this.state.searchTextColor}
                            placeholder='Search ...'
                            style={[styles.inputSearchStyle, { color: 'black' }]}
                            value={query}
                            onChangeText={text => this._onChange("query", text)}
                            name="query"

                        />
                        {/* <input
            type="text"
            name="query"
            value={query}
            autoComplete="off"
            placeholder={placeholder}
            onFocus={this._onFocus}
            onChange={this._onChange}
          /> */}

                    </View>
                    {/* Search bar flatlist  */}
                    {isRequesting && (

                        <ActivityIndicator color="white" />

                    )}
                    {isError(searchResults) && (

                        <Text style={styles.errorText}> {searchResults.error.message}</Text>
                    )}

                    {this.state.isSearchbarDataShow ?
                        <FlatList
                            style={styles.flatListSearchbar}
                            data={data}
                            renderItem={this.renderSearchRow}
                            keyExtractor={(item, index) => index.toString()}
                        /> : null}

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
                        <Image style={styles.imgUser} source={{ uri: getThumbnail(user.data) }} />
                        {/* <Image style={styles.imgUser} source={require('../../assets/avatar-main-1.jpg')} /> */}
                    </Animatable.View>

                    <TouchableOpacity style={styles.btnPremium} onPress={() => this.props.navigation.navigate("Plan")}>
                        <View style={styles.viewPremium}>
                            <Logo color={'rgb(42, 173,177)'} style={{ marginBottom: '15%' }} width="60px" height="30px" />

                            <Text style={styles.textPremium}> Premium</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.textUserName}> {getUsername(user.data)} </Text>

                    <FlatList
                        style={styles.flatList}
                        data={this.arrayData}
                        renderItem={this.renderModalItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </KeyboardAwareScrollView>
                 {/* notification view show */}
          {this.state.isNotificationShow ? <Notifications navigation={this.props.navigation} hidePopup={() => this.hideNotificationView()} /> : null}
      
            </Animatable.View>

        )
    }
}

// eslint-disable-next-line
const mapStateToProps = state => {
    return {
        user: state.user,
        searchResults: state.searchResults,
        headerCategories: state.headerCategories
    };
};

// eslint-disable-next-line
const mapDispatchToProps = dispatch => {
    return {
        searchActions: bindActionCreators(searchActions, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideMenu);


{/* */ }