import { isNull, isEmpty } from "lodash";

import { getServiceNormalImage, getServiceLink } from "../utils";
import { connect } from "react-redux";

import { Component } from "react";
import { SafeAreaView } from 'react-navigation';
import React from "react";
import styles from '../stylesheet/marketPlace.style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ActivityIndicator, FlatList, Image, ImageBackground, Text, TextInput, TouchableHighlight, View, TouchableOpacity, Clipboard, AlertIOS, Platform, StyleSheet, Dimensions } from "react-native";
import { Icon } from "native-base";
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { getThumbnail, getUsername, getUserInfo, getCurrentCategory } from "../utils";
import { Paginator, InfiniteScroller } from "../hoc";
import MusicList from './common/MusicList';
import ImagesList from './common/ImagesList';
import Posts from './common/Posts';
import Hamburger from 'react-native-hamburger';
import Icon1 from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/EvilIcons";
import Icon3 from "react-native-vector-icons/FontAwesome";
import Icon4 from "react-native-vector-icons/Ionicons";
import WaveForm from 'react-native-audiowaveform';
import SoundCloudWaveform from 'react-native-soundcloud-waveform';
import Notifications from '../containers/Notifications'
import Logo from './common/logo';
import HeaderMenuAndBell from './common/HeaderMenuAndBell';
import SideMenu from '../../src/views/common/SideMenu';

import Carousel from 'react-native-snap-carousel';
import StarView from './common/StarView';
import CustomFooter from '../components/common/CustomFooter';
import MarketplaceDetail from './ServiceComponent';
import NoDataWithLink from '../../src/views/common/NoDataWithLink';

const { deviceWidth, deviceHeight } = Dimensions.get('window');
let screenWidth = deviceWidth - 100;

 const noDataProps = {
    noDataMessage: "No services in this category yet :(",
    noDataDesc: "Want to create your service now?",
    linkName: "Create Service",
    link: "CreateService"
  };

 class ServiceGrid extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            isSideMenuClick: false,
            isNotificationShow: false,
            isDropDownclick: false,
            isMarketDetailViewShow: false,
            headerColorMix: ['rgb(42, 173,177)', 'rgb(131, 110, 198)', 'rgb(134, 103, 200)'],
        }
    }

    moveToMarketPlaceDetailView = (item) => {
        console.log(" move to Detail view ", item);
        //this.setState({ isMarketDetailViewShow: true });
        // return `/marketplace/${item.category.slug}/${item.sub_category.slug}/${item.id
        //   }`;
        this.props.navigation.navigate('Service', { slug: item.category.slug, subcategorySlug: item.sub_category.slug, id: item.id});
    }

    renderItem = (itemDetail) => {
        let item = itemDetail.item;
        return (
            <View style={{ flex: 1 }}>
                {/* View single line */}
                <View style={{ width: '95%', alignSelf: 'center', marginTop: '2%', height: 0.5, backgroundColor: 'lightgray' }} />
                {/* Main service Image */}
                <View style={{ marginTop: '2%', width: '100%' }}>
                    <TouchableOpacity style={{ alignSelf: 'center', width: '100%' }} onPress={() => this.moveToMarketPlaceDetailView(item)}>
                        {/* <Image style={{ width: '100%' }} source={item.image} /> */}
                        <Image style={{ width: '100%', height: 200 }} source={{ uri: getServiceNormalImage(item.media) }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, marginBottom: '2%', marginTop: '2%' }}>
                    <Image style={[styles.imgUser, { marginRight: '2%', marginLeft: '2%', marginBottom: '2%', marginTop: '2%' }]} source={{ uri: getThumbnail(item.user) }} />
                    <View style={{ flex: 0.85 }}>
                        <TouchableOpacity style={{ marginTop: '2%' }}>
                            <Text style={styles.textServiceTitle}>{getUsername(item.user)}</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '0.5%' }}>
                            {/* Rating view */}
                            {/* <Text style={styles.textServiceTitle}>Star Rating </Text> */}
                            <StarView starCount={item.review_count} />
                            <Text style={[styles.textRatingCount, { marginLeft: '2%' }]}>{item.review_count}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.ViewSingleLine} />
                <View style={{ flexDirection: 'row', flex: 1, marginTop: '5%', marginBottom: '5%' }}>
                    <Text style={[styles.textPrice, { flex: 0.9, marginLeft: '5%' }]}>${item.price}</Text>
                    <Icon3 name="heart" style={{ fontSize: 20, color: "#8e8e8e", right: '4%', flex: 0.1 }} />
                </View>
            </View>
        )
    }

    render() {
        const { services, loadMore, callingAPI, page, page_count, navigation } = this.props;
       
        const { data, isRequesting, error } = services;
        // const { isRequesting, data } = headerCategories;

         console.log("headerCategories =====", services);
       // let data = [{ "id": "90cceaa8-f95b-45c7-b47c-d758b9d8c8d2", "category": { "id": 3, "name": "Publishing", "slug": "publishing" }, "sub_category": { "id": 8, "name": "Sub category 3.2", "slug": "sub-category-32" }, "title": "Media publishing", "description": "Description of publishing service", "about": "About publishing service", "key_points": ["Publish"], "price": 49, "delivery_time": 1, "delivery_time_unit": "Week", "rating": 0, "review_count": 0, "media": [{ "id": "c7f28c82-fde7-4477-ba5d-67b21cd27f08", "path": "https://s3.eu-west-2.amazonaws.com/cosound-primary/services/images/YDQGkH50XTeUNylgVDmI8nCxW57fLhpSUACBO4wy.jpeg", "file_type": "image", "user_id": "0d1e55f9-6b06-4b6f-ad97-67bfeb5eb08e", "metadata": { "isMain": true, "thumbnail_small": "https://s3.eu-west-2.amazonaws.com/cosound-primary/thumbnails/image_thumb_small_c7f28c82-fde7-4477-ba5d-67b21cd27f08.png", "thumbnail_normal": "https://s3.eu-west-2.amazonaws.com/cosound-primary/thumbnails/image_thumb_normal_c7f28c82-fde7-4477-ba5d-67b21cd27f08.png" }, "created_at": "2018-12-20 14:23:34" }], "is_featured": 1, "user": { "id": "0d1e55f9-6b06-4b6f-ad97-67bfeb5eb08e", "avatar": null, "thumbnail": null, "first_name": "Vishal", "last_name": "Chhabra", "type": "Musician", "artist_name": "vi$hal" } }];
        return (
            <View style={{ flex: 1 }}>
                {/*<Link
            to={"/purchased-services"}
            className="btn btn-primary btn-primary--red"
          >
            <Text>My Market</Text>
         </Link>*/}

                <TouchableHighlight underlayColor="#25b6ad" style={[styles.loginButton]}>
                    <Text style={styles.textButtonTitle} >My Market</Text>
                </TouchableHighlight>
                <Text style={styles.personalRecommended}> Your Personal Reccomendations</Text>
                {isRequesting && !callingAPI && (
            <ActivityIndicator color="gray" style={{alignSelf:'center'}}/>
          )}

                {!isRequesting && !isEmpty(error) && <Text>{error.message} </Text>}

                {!isRequesting && isEmpty(error) && isEmpty(data) && (
                <View>
                    <NoDataWithLink navigation={navigation} {...noDataProps} />
                </View>
                )}
                <FlatList
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />

                {/*!isEmpty(data) && (
                    <ViewMore callingAPI={callingAPI} loadMore={loadMore} />
                )*/}
                {!isEmpty(data) && !callingAPI && page !== page_count && !isNull(page_count) && !callApi(
                    <View style={styles.viewMoreImage}>
                        <TouchableHighlight underlayColor="#25b6ad" style={[styles.seeMoreBtn]} onPress={loadMore}>
                            <Text style={styles.textViewMore} > {callingAPI ? "Fetching..." : "View More..."}</Text>
                        </TouchableHighlight>
                    </View>
                )}
            </View>
        );
    }
}

 export default class MarketPlaceComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isGraphicDesignPopupShow: false,
            activeIndex: 0,
            isSideMenuClick: false,
            isNotificationShow: false,
            isDropDownclick: false,
            isMarketDetailViewShow: false,
            headerColorMix: ['rgb(42, 173,177)', 'rgb(131, 110, 198)', 'rgb(134, 103, 200)'],
        }
    }

    fadeInMainView = () => this.refs.mainView.fadeIn(1000).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))

    fadeInMarketDetailView = () => this.refs.marketPlaceDetailViewRef.fadeIn(500).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))

    fadeInDownGraphicDesign = () => this.refs.flatListGraphicDesign.fadeInDown(500).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))

    fadeInUpGraphicDesign = () => this.refs.flatListGraphicDesign.fadeInUp(1000).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))

    componentDidMount = () => {
        this.fadeInMainView();
    };

    moveToMarketPlaceDetailView = () => {
        console.log(" move to Detail view ");
        //this.setState({ isMarketDetailViewShow: true });
        // return `/marketplace/${item.category.slug}/${item.sub_category.slug}/${item.id
        //   }`;
       // this.props.navigation.navigate('Service', { slug: item.category.slug, subcategorySlug: item.sub_category.slug, id: item.id});
    }

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
    moveToView(itemId) {
        console.log(" view id is =======", itemId);
        this.props.navigation.navigate('MarketPlaceContainer', { slug: itemId });
        this.setState({ isGraphicDesignPopupShow: false });

        setTimeout(() => {
            this.fadeInUpGraphicDesign();
        }, 20);
    }

    showGraphicDesignPopup = () => {

        if (!this.state.isGraphicDesignPopupShow) {

            this.setState({ isGraphicDesignPopupShow: true });

            setTimeout(() => {
                this.fadeInDownGraphicDesign();
            }, 10);

        } else {
            this.setState({ isGraphicDesignPopupShow: false });

            setTimeout(() => {
                this.fadeInUpGraphicDesign();
            }, 20);
        }
    }

    renderSearchRow = (itemDetail) => {
        let item = itemDetail.item;
        console.log(" item is ", item);

        return (
            <View style={{ height: 50, justifyContent: 'center' }}>
                <TouchableOpacity style={{ margin: '2%' }} onPress={() => this.moveToView(item.slug)}>
                    <View style={{ flexDirection: "row" }}>

                        <Text style={[styles.textModalData, { marginRight: '5%', color: 'black' }]}> {item.label}</Text>

                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    _renderCarouselItem(itemDetail, index) {
        console.log("itemDetail====", itemDetail)
        let item = itemDetail.item;
        //let item = itemDetail;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 20, }}>
                <ImageBackground source={{
                    uri: getServiceNormalImage(
                        item.media
                    )
                }} style={{ width: 500, height: 500 }}>
                    <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', width: '100%', height: '100%', borderRadius: 20, alignItems: 'center' }}>
                        <View style={{ width: '60%', height: '100%', marginRight: '10%' }}>
                            <Text style={styles.titleCarousel} >{item.category.name}</Text>
                            <Text style={styles.titleMainCarousel} >{item.title}</Text>
                            <Text style={styles.descriptionCarousel} >{item.description}</Text>
                            <View style={{ marginLeft: "15%", marginRight: "15%", }}>
                                <TouchableHighlight underlayColor="#25b6ad" style={[styles.seeMoreBtn]} onPress={() => this.moveToMarketPlaceDetailView(item)}>
                                    <Text style={styles.textButtonTitle}>See more...</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }



    showPopup() {
        this.setState({ isSideMenuClick: true })
        console.log(" sidemnu ", this.state.isSideMenuClick);
        // setTimeout(() => {
        //     this.zoomInPopup();
        // }, 10);

    }
    hidePopup() {
        this.setState({ isSideMenuClick: false })
    }
    handleSnapToItem(index) {
        this.setState({ numberValue: String(index + 1) });
        //    let temp;
        //    if (this.state.numberValue >= 0) {
        //        temp = "0" + String(this.state.numberValue)
        //    } else {
        //        temp = "01"
        //    }

        // this.textAnimated = <Animatable.Text animation="fadeInUp" style={styleText.textTopNumber}> {this.textCombineValue} </Animatable.Text>


        // }
    }
    showNotification() {
        this.setState({ isNotificationShow: true, isSideMenuClick: false })
    }
    hideNotificationView() {
        this.setState({ isNotificationShow: false })
    }
    render() {
        const { user, services, fetchServices, featuredServices, headerCategories } = this.props;
        const paginationData = services;
        const { isRequesting, error, data } = featuredServices;
        console.log("data====", data)
        let slug = "";
        
        current = getCurrentCategory(headerCategories.data, this.props.navigation.state.params.slug);
console.log(this.props.navigation.state.params,"current ==== ", current)
        return (

            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>

                {/* {!this.state.isSideMenuClick ? <LinearGradient start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} colors={this.state.isBottomViewShow ? this.state.headerColor : this.state.headerColorMix} style={{ flexDirection: 'row', height: '10%', width: '100%', alignItems: 'space-between', justifyContent: 'center' }}>
                    <TouchableOpacity style={{ color: 'white', marginTop: '20%', flex: 0.15, height: 38, }} onPress={() => this.showPopup()}>
                        <Hamburger color="white" style={{ paddingTop: '12%', }} active={false} type="spinCross" onPress={() => this.showPopup()} />
                    </TouchableOpacity>
                    <Logo color={'#ffffff'} style={{ flex: 0.7, marginLeft: '25%' }} width="130px" height="44px" />
                    <View style={{ flex: 0.3 }} />
                    <TouchableOpacity style={[styles.searchView, { flex: 0.2, alignSelf: 'flex-end', marginRight: '5%' }]} onPress={() => this.setState({ isNotificationShow: !this.state.isNotificationShow })}>
                        {this.state.isNotificationShow ? <Icon name="close" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 38, tintColor: 'white' }} /> : <Icon2 name="bell" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 40, tintColor: 'white' }} />}
                    </TouchableOpacity>
                </LinearGradient> : null} */}

                {!this.state.isSideMenuClick ? <HeaderMenuAndBell notificationCount={this.props.notificationCount} colors={this.state.isBottomViewShow ? this.state.headerColor : this.state.headerColorMix} onPressPopup={() => this.showPopup()} isNotificationShow={this.state.isNotificationShow} onPressBell={() => this.setState({ isNotificationShow: !this.state.isNotificationShow })} /> : null}


                {/* Top view Graphic design which will open modal view by side button click */}
                <View style={{ marginTop: '2%', marginBottom: '2%' }}>

                    <TouchableOpacity onPress={() => this.setState({ isDropDownclick: true })}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.titleAccount, { flex: 0.9, marginTop: '0.5%', marginLeft: '5%' }]}>  {!isNull(current) && current.label && current.label} </Text>
                            <View style={{ width: 30, height: 30, borderRadius: 18, marginRight: '5%', marginBottom: '5%', flex: 0.1, backgroundColor: 'white' }}>
                                <TouchableOpacity onPress={this.showGraphicDesignPopup}>
                                    {this.state.isGraphicDesignPopupShow ? <Icon1 name="up" color='#8E8E8E' style={{ fontSize: 15, alignSelf: 'center', marginTop: '22%', fontWeight: 'bold' }} /> : <Icon1 name="down" color='#8E8E8E' style={{ fontSize: 15, alignSelf: 'center', marginTop: '22%', fontWeight: 'bold' }} />}
                                </TouchableOpacity>
                            </View>
                            {/* <Animatable.Image source={require('../../src/assets/Image/arrow_small_down.png')} style={{borderRadius:13,alignSelf:'flex-end' ,width: 26, height: 26 }} /> */}
                        </View>
                    </TouchableOpacity>
                </View>


                <KeyboardAwareScrollView onScroll={this._onScroll} style={{ backgroundColor: 'rgb(245, 245,245)' }}>
                    {this.state.isMarketDetailViewShow ? <Animatable.View style={{ backgroundColor: 'white', flex: 1, marginTop: '20%' }}>
                        <MarketplaceDetail />
                    </Animatable.View> :
                        <Animatable.View ref={'mainView'} style={{ backgroundColor: 'white', flex: 1 }} >

                            {/* <TouchableHighlight
                            onPress={
                                () => { this.carousel._snapToItem(this.state.activeIndex - 1) }
                            }>
                            {/* <Image source={require('../assets/leftarrow.png')} /> */}
                            {/* </TouchableHighlight> */}

                            <View style={{ alignSelf: 'center', flex: 0.4, width: '80%', borderRadius: 20, marginBottom: '3%', flexDirection: 'row',  }}>


                                {isRequesting && (
                                    <ActivityIndicator color="gray" style={{ marginLeft:'50%'}}/>
                                )}
                                {!isRequesting && !isEmpty(error) && error.message && (
                                    <Text style={styles.errorText}>{error.message} </Text>
                                )}

                                {/* {!isRequesting && data.data && isEmpty(data.data) && isEmpty(error) && (
                                <NoData {...noDataProps} />
                                )}  */}

                                {!isRequesting && data && data.data && !isEmpty(data.data) && (
                                    <Carousel
                                        layout={'default'} layoutCardOffset={`18`}
                                        ref={ref => this.carousel = ref}
                                        data={data.data}
                                        sliderWidth={350}
                                        itemWidth={400}
                                        renderItem={this._renderCarouselItem}
                                        onSnapToItem={index => this.setState({ activeIndex: index })}
                                    // onSnapToItem={this.handleSnapToItem.bind(this)}
                                    />
                                )}
                            </View>

                            <View style={{ flex: 0.6, width: '100%' }}>
                                <Paginator
                                    isLoaderInternal
                                    services={services}
                                    component={ServiceGrid}
                                    callAPI={fetchServices}
                                    page={paginationData.page}
                                    page_count={paginationData.page_count}
                                    navigation={this.props.navigation}
                                />
                            </View>

                            <View>
                                <CustomFooter />
                            </View>
                        </Animatable.View>}
                    {/* Show popup of market place  */}

                </KeyboardAwareScrollView>

                {this.state.isGraphicDesignPopupShow ?
                    <Animatable.View ref={'flatListGraphicDesign'} style={styles.graphicDesignPopup}>
                        {isRequesting ? (
                            <ActivityIndicator color="gray" />
                        ) : !isRequesting && !isEmpty(data) ? (<FlatList
                            style={styles.flatListSearchbar}
                            data={headerCategories.data}
                            renderItem={this.renderSearchRow}
                            keyExtractor={(item, index) => index.toString()}
                        />) : null}
                    </Animatable.View> : <Animatable.View ref={'flatListGraphicDesign'} />}

                {/* Side Menu button modal  */}
                {this.state.isSideMenuClick ? <SideMenu navigation={this.props.navigation} hidePopup={() => this.hidePopup()} showNotification={() => this.showNotification()} /> : null}

                {/* notification view show */}
                {this.state.isNotificationShow ?<View style={{marginTop:'25%', position:'absolute'}}>
                     <Notifications navigation={this.props.navigation} hidePopup={() => this.hideNotificationView()} /> 
                </View>: null}

            </SafeAreaView>
        );
    }
}

