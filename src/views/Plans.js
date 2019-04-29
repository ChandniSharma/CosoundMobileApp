import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions, ScrollView, FlatList } from 'react-native';
//import SvgUri from 'react-native-svg-uri';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/Plans.style';
import RecoverPwd from './RecoverPwd';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-navigation';
import CustomFooter from '../components/common/CustomFooter';
import CustomHeader from '../components/common/CustomHeader'


const { width, height } = Dimensions.get('window');

export default class SignupStep5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            postalCode: '',
            arrayArtistData: [{ "artistName": "Artist", "icon": "../assets/img-plans-0.png" }, { "artistName": "Band", "icon": "../assets/img-plans-1.png" }, { "artistName": "Professional", "icon": "../assets/img-plans-2.png" }],
            arrayGraphicDesigner: [{ "artistName": "Tempor incididunt", "icon": "../assets/img-plans-0.png" }, { "artistName": "Ut enim ad minim veniam", "icon": "../assets/avatar2.jpg" }, { "artistName": "Tempor incididunt", "icon": "../assets/avatar3.jpg" }, { "artistName": "llamco laboris", "icon": "../assets/avatar4.jpg" }, { "artistName": "Tempor incididunt", "icon": "../assets/avatar4.jpg" }, { "artistName": "llamco laboris", "icon": "../assets/avatar4.jpg" }, { "artistName": "Magna aliqua", "icon": "../assets/avatar4.jpg" }],
            imageTick: '',
            isPersonAdd: false,
            isFeatureTableVisible: false,
        }
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
    showFeatures = () => {
        this.setState({ isFeatureTableVisible: true });
    }

    renderItem = (index) => {
        let item = index.item; //this.state.arrayArtistData[index];

        return (

            <View>
                <TouchableHighlight style={styles.itemView} >
                    <View>
                        <View style={styles.viewArtistPhoto}>
                            <Image style={styles.imageArtist} source={require("../assets/img-plans-0.png")} />
                        </View>
                        <Text style={styles.artistName}>Artist</Text>
                        <Text style={styles.artistJobTitle}> Sit amet, consectetur adipisic
                                        Ut enim ad minim veniam
                                    Aliquip ex ea commodo consequat</Text>
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
                        <Animatable.Image style={styles.imageSearchIcon} source={require("../assets/img-plans-0.png")} />
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
                        <CustomHeader />
                        <View style={{ backgroundColor: 'rgb(37,182,173)' }}>

                            <Animatable.Image animation="fadeInDown" style={styles.imgMainTitle} source={require('../assets/cosoundTitle.png')} />
                            <Animatable.Text animation="fadeInDown" style={styles.textWelcome}>Please select Plan ..</Animatable.Text>


                            <Animatable.View ref={'view2'} style={styles.viewDescription}>

                                <Text style={styles.textMusicDescription2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
                            </Animatable.View>
                        </View>
                        <FlatList
                            style={styles.flatListStyle}
                            data={this.state.arrayArtistData}
                            renderItem={this.renderItem}
                            scrollEnabled={false}
                        />


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


                        <CustomFooter />
                    </Animatable.View>

                </ScrollView>
            </SafeAreaView>)
    }
}
