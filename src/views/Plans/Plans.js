import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions, ScrollView, FlatList } from 'react-native';
//import SvgUri from 'react-native-svg-uri';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../../stylesheet/Plans.style';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-navigation';
import CustomFooter from '../../components/common/CustomFooter';
import CustomHeader from '../../components/common/CustomHeader';
import Logo from '../common/logo';
import WaveAnimation from '../common/WaveAnimation';

import BackButton from '../common/BackButton';
import data from "./data";

const { width, height } = Dimensions.get('window');

export default class SignupStep5 extends Component {
    // arrayArtistData: [{ "artistName": "Artist", "icon": "../../assets/img-plans-0.png" }, { "artistName": "Band", "icon": "../../assets/img-plans-1.png" }, { "artistName": "Professional", "icon": "../../assets/img-plans-2.png" }],
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            postalCode: '',
            arrayArtistData: data,
            arrayGraphicDesigner: [{ "artistName": "Tempor incididunt", "icon": "../../assets/img-plans-0.png" }, { "artistName": "Ut enim ad minim veniam", "icon": "../../assets/avatar2.jpg" }, { "artistName": "Tempor incididunt", "icon": "../../assets/avatar3.jpg" }, { "artistName": "llamco laboris", "icon": "../../assets/avatar4.jpg" }, { "artistName": "Tempor incididunt", "icon": "../../assets/avatar4.jpg" }, { "artistName": "llamco laboris", "icon": "../../assets/avatar4.jpg" }, { "artistName": "Magna aliqua", "icon": "../../assets/avatar4.jpg" }],
            imageTick: '',
            isPersonAdd: false,
            isFeatureTableVisible: false,
        }
    }
    fadeInMain = () => this.refs.mainView.fadeIn(1000).then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))

    fadeInView1 = () => this.refs.view1.fadeInUp().then(setTimeout(() => {
        this.fadeInView2();
    }, 30))
    fadeInView2 = () => this.refs.view2.fadeInUp().then(setTimeout(() => {
        this.fadeInView3();
    }, 60))

    fadeInView3 = () => this.refs.view3.fadeInUp().then(endState => console.log(endState.finished ? 'fadein finished' : " cancelled"))

    // bounce = () => this.view.bounce(800).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));

    componentDidMount() {
        //  this.fadeInMain();
        this.fadeInView1();
    }
    personAddOrNot() {

        this.setState({ isPersonAdd: !this.state.isPersonAdd });

    }
    showFeatures = () => {
        this.setState({ isFeatureTableVisible: true });
    }

    renderItem = (itemDetails) => {
        let item = itemDetails.item; //this.state.arrayArtistData[index];
        return (

            <View>
                <TouchableHighlight style={styles.itemView} >
                    <View>
                        <View style={styles.viewArtistPhoto}>
                            <Image style={styles.imageArtist} source={item.img} />
                        </View>
                        <Text style={styles.artistName}>{item.name}</Text>
                        <Text style={styles.artistJobTitle}>{item.desc}</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor='rgb(130, 98,203)' style={styles.selectPlanBtnGreen} onPress={this.showFeatures} >
                    <Text style={styles.textButtonTitle}>Select plan</Text>
                </TouchableHighlight>
            </View>
        )
    }
    renderItemFeatures = (index) => {
        return (
            <View>
                <Animatable.View ref={'view1'} style={{ marginBottom: '5%' }}>
                    <View style={styles.featureView}>
                        <Animatable.Image style={styles.imageSearchIcon} source={require("../../assets/img-plans-0.png")} />
                    </View>
                    <Text style={styles.fatureName}>Tempor incididunt</Text>
                    <Text style={styles.featureDescription}> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo …</Text>
                </Animatable.View>
            </View>
        )
    }
    render() {

        return (

            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
                <ScrollView style={{ backgroundColor: 'rgb(245,245,245)', flex: 1 }}>
                    <Animatable.View ref={"mainView"} style={{ flex: 0.9 }}>
                        <View style={{ position: 'absolute', top: 0 }}>
                            <WaveAnimation />
                        </View>
                        {/* <CustomHeader /> */}
                        <View style={{ backgroundColor: 'transparent' }}>
                            <BackButton style={{ fontSize: 30, marginTop: '10%', alignSelf: 'flex-start', position: 'absolute', marginLeft: '4%' }} onPress={() => this.props.navigation.goBack()} />
                            <Logo color={'#ffffff'} style={{ flex: 0.7, alignSelf: 'center', marginTop: '13%' }} width="230px" height="44px" />

                            {/* <Animatable.Image animation="fadeInDown" style={styles.imgMainTitle} source={require('../../assets/cosoundTitle.png')} /> */}
                            <Animatable.Text animation="fadeInDown" style={styles.textWelcome}>Please Select Plan...</Animatable.Text>

                            <Animatable.View ref={'view1'} style={styles.viewDescription}>

                                <Text style={styles.textMusicDescription2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
                            </Animatable.View>
                        </View>
                        <Animatable.View ref={"view2"}>
                            <FlatList
                                style={styles.flatListStyle}
                                data={this.state.arrayArtistData}
                                renderItem={this.renderItem}
                                scrollEnabled={false}
                            />
                        </Animatable.View>
                        <Animatable.View ref={"view3"}>
                            {this.state.isFeatureTableVisible ? <View>
                                <Text style={styles.premimumFeatureTitle}> Premium Features for Professionals</Text>

                                <Text style={styles.premiumFeatureDescription}> Lorem ipsum dolor sit amet, consectetur adipisicing elit</Text>
                                <FlatList
                                    style={styles.flatListStyle}
                                    data={this.state.arrayArtistData}
                                    renderItem={this.renderItemFeatures}
                                    scrollEnabled={false}
                                />

                                <TouchableHighlight underlayColor="#25b6ad" style={[styles.loginButton]}>
                                    <Text style={styles.textContinueBtnTitle}>Continue</Text>
                                </TouchableHighlight>
                            </View> : null}

                        </Animatable.View>

                    </Animatable.View>
                    <CustomFooter />
                </ScrollView>
            </SafeAreaView>)
    }
}
