import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions, ScrollView, FlatList, ActivityIndicator } from 'react-native';
//import SvgUri from 'react-native-svg-uri';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/signupSuggestions.style';
import RecoverPwd from './RecoverPwd';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-navigation';
import CustomFooter from '../components/common/CustomFooter';
import { isEmpty } from "lodash";
import { getThumbnail, getUsername } from "../utils";
import WaveAnimation from './common/WaveAnimation';
import BackButton from './common/BackButton';
import Logo from './common/logo';

const { width, height } = Dimensions.get('window');

export default class SignupSuggestions extends Component {
    constructor(props) {
        super(props);
    }
    fadeInMain = () => this.refs.mainView.fadeIn(1000).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))

    fadeInView1 = () => this.refs.view1.fadeIn().then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))
    fadeInView2 = () => this.refs.view2.fadeIn().then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))
    // bounce = () => this.view.bounce(800).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));

    componentDidMount() {
        this.fadeInMain();
        this.fadeInView2();
    }
    personAddOrNot() {
        this.setState({ isPersonAdd: !this.state.isPersonAdd });
    }

    _navigateToProfileView = () => {
        const { navigate } = this.props;
        console.log(" this,props ",this.props);
        navigate.navigate('Profile');
    }
    renderItem = (renderItem) => {
        const {
            suggestions,
            followUser,
            follow
        } = this.props;
        let item = renderItem.item;

        return (
            <View style={styles.itemView} >
                <TouchableOpacity onPress={() => followUser(item.id)}>
                    <View style={styles.viewArtistPhoto}>
                        <Image style={styles.imageArtist} source={{ uri: getThumbnail(item) }} />
                    </View>
                    <Text style={styles.artistName}>{getUsername(item)}</Text>
                    <Text style={styles.artistJobTitle}>{item.artist_name}</Text>
                    {follow.isFollowing && follow.isFollowing === item.id ?
                        <ActivityIndicator size="large" color="gray" /> : (
                            <View>
                                {item.isFollowed ? <View style={styles.viewCircleFilled}>
                                    <Image style={styles.imgTickMark} source={require('../../src/assets/tickMark.png')} />
                                </View> :
                                    <View style={styles.viewCircleUnFilled}>
                                        <Image style={styles.imgAdd} source={require('../../src/assets/Add-New.png')} />
                                    </View>
                                }
                            </View>
                        )
                    }

                </TouchableOpacity>

            </View>)
    }
    render() {
        const {
            follow,
            loadMore,
            callingAPI,
            followUser,
            suggestions
        } = this.props;
        const { data, paginationData } = suggestions;
        return (
            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>

                <ScrollView style={{ backgroundColor: 'rgb(245,245,245)', flex: 1 }}>

                    <Animatable.View ref={"mainView"} style={{ flex: 0.9 }}>

                    <View style={{ position: 'absolute',top:0}}>
                            <WaveAnimation />
                        </View>

                        <View>

                        {/* <BackButton style={{ fontSize: 30, marginTop: '10%', alignSelf: 'flex-start', position: 'absolute', marginLeft: '4%' }} onPress={() => this.props.navigation.goBack()} /> */}
                            <Logo color={'#ffffff'} style={{ flex: 0.7, alignSelf: 'center',marginTop:'13%' }} width="230px" height="44px" />
 <BackButton style={{ fontSize: 30, marginTop: '10%', alignSelf: 'flex-start', position: 'absolute', marginLeft: '4%' }} onPress={() => this.props.navigate.goBack()} />


                            <Animatable.Text animation="fadeInDown" style={styles.textWelcome}>Here are suggested connections ..</Animatable.Text>
                            <Animatable.View ref={'view2'} style={styles.viewDescription}>
                                <Text style={styles.textMusicDescription2}>We think these suggestions are going to  help you move forward! </Text>
                            </Animatable.View>
                            <Text style={styles.textTitle}> Artist/Musicians</Text>
                            {isEmpty(data) && (
                                <View>
                                    <Text style={styles.textTitle}> We didn't find anyone to suggest</Text>
                                    <Text style={styles.textTitle}> Click Done to enter</Text>
                                </View>
                            )}
                        </View>
                        <FlatList
                            style={styles.flatListStyle}
                            data={data}
                            renderItem={this.renderItem}
                            scrollEnabled={false}
                            extraData={this.props}
                        />
                        {!isEmpty(data) && paginationData.page_count !== paginationData.page && (
                            <View style={styles.viewRecoverButton}>
                                <TouchableHighlight underlayColor="#25b6ad" style={[styles.seeMoreBtn]} onPress={loadMore}>
                                    <Text style={styles.textSeeMoreBtnTitle} > {callingAPI ? "Fetching..." : "View More..."}</Text>
                                </TouchableHighlight>
                            </View>
                        )}
                        <View style={styles.viewRecoverButton}>
                            <TouchableHighlight underlayColor="#25b6ad" onPress={this._navigateToProfileView} style={[styles.loginButton]}>
                                <Text style={styles.textButtonTitle} >Done</Text>
                            </TouchableHighlight>
                        </View>
                        <CustomFooter />
                    </Animatable.View>
                </ScrollView>
            </SafeAreaView>)
    }
}