import { isNull, isEmpty } from "lodash";
import { getServiceNormalImage } from "../utils";
import { SafeAreaView } from 'react-navigation';
import React from "react";
import styles from '../stylesheet/marketPlace.style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ActivityIndicator, FlatList, Image, ImageBackground, Text, TextInput, TouchableHighlight, View, TouchableOpacity, Clipboard, AlertIOS, Platform, StyleSheet, Dimensions, Animated,Easing } from "react-native";
import * as Animatable from 'react-native-animatable';
import { getThumbnail, getUsername, getCurrentCategory } from "../utils";
import { Paginator } from "../hoc";
import Icon1 from "react-native-vector-icons/AntDesign";
import Icon3 from "react-native-vector-icons/FontAwesome";
import Notifications from '../containers/Notifications'
import HeaderMenuAndBell from './common/HeaderMenuAndBell';
import SideMenu from '../../src/views/common/SideMenu';
import Carousel from 'react-native-snap-carousel';
import StarView from './common/StarView';
import CustomFooter from '../components/common/CustomFooter';
import MarketplaceDetail from './ServiceComponent';
import NoDataWithLink from '../../src/views/common/NoDataWithLink';

const { deviceWidth } = Dimensions.get('window');

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
        return (
            <View style={{ flex: 1 }}>
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
             isClockWise:false,
        }
         this.spinValue = new Animated.Value(0);
    }

    fadeInMainView = () => this.refs.mainView.fadeInUp(1000).then(setTimeout(() => {
        this.fadeInUpGraphicDesign()
    }, 200))

    fadeInMarketDetailView = () => this.refs.marketPlaceDetailViewRef.fadeIn(500).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))

    fadeInUpGraphicDesign = () => this.refs.flatListGraphicDesign.fadeInUp(1000).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))

    componentDidMount = () => {
    	 this.spinValue = new Animated.Value(0);
        this.fadeInMainView();
    };

    spinIcon() {
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 200,
                easing: Easing.linear
            }
        ).start();
        this.setState({isClockWise:!this.state.isClockWise});
    }

    moveToMarketPlaceDetailView = (item) => {
        this.props.navigation.navigate('Service', { slug: item.category.slug, subcategorySlug: item.sub_category.slug, id: item.id});
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
        this.props.navigation.navigate('MarketPlaceContainer', { slug: itemId });

        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 200,
                easing: Easing.linear
            }
        ).start();

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

    _renderCarouselItem =(itemDetail, index)=> {
        let item = itemDetail.item;
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
        this.setState({ isSideMenuClick: true,
        isNotificationShow:false
        })
    }
    hidePopup() {
        this.setState({ isSideMenuClick: false })
    }
    handleSnapToItem(index) {
        this.setState({ numberValue: String(index + 1) });
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
        let slug = "";
        
        current = getCurrentCategory(headerCategories.data, this.props.navigation.state.params.slug);
        return (

            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
                {!this.state.isSideMenuClick ? <HeaderMenuAndBell notificationCount={this.props.notificationCount} colors={this.state.isBottomViewShow ? this.state.headerColor : this.state.headerColorMix} onPressPopup={() => this.showPopup()} isNotificationShow={this.state.isNotificationShow} onPressBell={() => this.setState({ isNotificationShow: !this.state.isNotificationShow })}  /> : null}
                {/* Top view Graphic design which will open modal view by side button click */}
                <View style={{ marginTop: '2%', marginBottom: '2%' }}>
                    <TouchableOpacity onPress={() => this.setState({ isDropDownclick: true })}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.titleAccount, { flex: 0.9, marginTop: '0.5%', marginLeft: '5%' }]}>  {!isNull(current) && current.label && current.label} </Text>
                            <View style={{ width: 30, height: 30, borderRadius: 18, marginRight: '5%', marginBottom: '5%', flex: 0.1, backgroundColor: 'white' }}>
                                <TouchableOpacity onPress={this.showGraphicDesignPopup}>
                                    {this.state.isGraphicDesignPopupShow
            ? <Animated.View style={{ transform: [
                                {rotate: this.spinValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0deg', '180deg']
                                })
                                }
                            ],
                            }}>
                                <Icon1 name="up" color='#8E8E8E' style={{ fontSize: 15, alignSelf: 'center', marginTop: '22%', fontWeight: 'bold' }} />
                                </Animated.View>
                            : <Animated.View  style={{
                                
                                transform: [
                                    {rotate: this.spinValue.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['180deg', '0deg']
                                    })
                                    }
                                ],
                        }}>
                        <Icon1 name="down" color='#8E8E8E' style={{ fontSize: 15, alignSelf: 'center', marginTop: '22%', fontWeight: 'bold' }} />
                        </Animated.View> }
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
                            <View style={{ alignSelf: 'center', flex: 0.4, width: '80%', borderRadius: 20, marginBottom: '3%', flexDirection: 'row',  }}>
                                {isRequesting && (
                                    <ActivityIndicator color="gray" style={{ marginLeft:'50%'}}/>
                                )}
                                {!isRequesting && !isEmpty(error) && error.message && (
                                    <Text style={styles.errorText}>{error.message} </Text>
                                )}
                                {!isRequesting && data && data.data && !isEmpty(data.data) && (
                                    <Carousel
                                        layout={'default'} layoutCardOffset={`18`}
                                        ref={ref => this.carousel = ref}
                                        data={data.data}
                                        sliderWidth={350}
                                        itemWidth={400}
                                        renderItem={this._renderCarouselItem}
                                        onSnapToItem={index => this.setState({ activeIndex: index })}
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

