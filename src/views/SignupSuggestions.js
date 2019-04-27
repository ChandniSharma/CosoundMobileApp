import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions, ScrollView, FlatList } from 'react-native';
//import SvgUri from 'react-native-svg-uri';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/signupSuggestions.style';
import RecoverPwd from './RecoverPwd';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-navigation';
import CustomFooter from '../components/common/CustomFooter';


const { width, height } = Dimensions.get('window');

export default class SignupSuggestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            postalCode: '',
            arrayArtistData: [{ "artistName": "Randy Montgomery", "icon": "../assets/avatar1.jpg" }, { "artistName": "Randy Montgomery", "icon": "../assets/avatar2.jpg" }, { "artistName": "Randy Montgomery", "icon": "../assets/avatar3.jpg" }, { "artistName": "Randy Montgomery", "icon": "../assets/avatar4.jpg" }],
            arrayGraphicDesigner: [{ "artistName": "Randy Montgomery", "icon": "../assets/avatar1.jpg" }, { "artistName": "Randy Montgomery", "icon": "../assets/avatar2.jpg" }, { "artistName": "Randy Montgomery", "icon": "../assets/avatar3.jpg" }, { "artistName": "Randy Montgomery", "icon": "../assets/avatar4.jpg" }],
            imageTick: '',
            isPersonAdd: false,
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

    renderItem = (index) => {
        console.log(" index is ", index);
        let item = this.state.arrayArtistData[index];
        console.log(" item is ", item);

        return (

            <View style={styles.itemView} >
                <TouchableOpacity onPress={this.personAddOrNot()}>
                    <View style={styles.viewArtistPhoto}>
                        <Image style={styles.imageArtist} source={require('../assets/avatar1.jpg')} />
                    </View>

                    <Text style={styles.artistName}> Randy Montgomery</Text>
                    <Text style={styles.artistJobTitle}> Job Title/ Artist Name.</Text>
                    {this.state.isPersonAdd ? <View style={styles.viewCircleFilled}>
                        <Image style={styles.imgTickMark} source={require('../../src/assets/tickMark.png')} />
                    </View> :
                        <View style={styles.viewCircleUnFilled}>
                            <Image style={styles.imgAdd} source={require('../../src/assets/Add-New.png')} />
                        </View>
                    }

                </TouchableOpacity>

            </View>)
    }
    render() {

        return (

            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
                <ScrollView style={{ backgroundColor: 'rgb(245,245,245)', flex: 1 }}>

                    <Animatable.View ref={"mainView"} style={{ flex: 0.9 }}>
                        
                        <View style={{ backgroundColor: 'rgb(37,182,173)' }}>

                            <Animatable.Image animation="fadeInDown" style={styles.imgMainTitle} source={require('../assets/cosoundTitle.png')} />
                            <Animatable.Text animation="fadeInDown" style={styles.textWelcome}>Here are suggested connections ..</Animatable.Text>


                            <Animatable.View ref={'view2'} style={styles.viewDescription}>

                                <Text style={styles.textMusicDescription2}>We think these suggestions are going to  help you move forward! </Text>

                            </Animatable.View>
                            <Text style={styles.textTitle}> Artist/Musicians</Text>
                        </View>
                        <FlatList
                            style={styles.flatListStyle}
                            data={this.state.arrayArtistData}
                            renderItem={this.renderItem}
                            scrollEnabled={false}
                        />

                        <View style={styles.viewRecoverButton}>
                            <TouchableHighlight underlayColor="#25b6ad" style={[styles.seeMoreBtn]}>
                                <Text style={styles.textSeeMoreBtnTitle} >See more...</Text>
                            </TouchableHighlight>
                        </View>

                        <View style={styles.viewSingleLine}/>

 <Text style={styles.textTitleGraphicDesigner}> Graphic Designer</Text>

 <FlatList
                            style={styles.flatListStyle}
                            data={this.state.arrayArtistData}
                            renderItem={this.renderItem}
                            scrollEnabled={false}
                        />

<View style={styles.viewRecoverButton}>
                            <TouchableHighlight underlayColor="#ff277b" style={[styles.seeMoreBtn]}>
                                <Text style={styles.textSeeMoreBtnTitle} >See more...</Text>
                            </TouchableHighlight>
                        </View>

                        <View style={styles.viewRecoverButton}>
                            <TouchableHighlight underlayColor="#25b6ad" onPress={()=>this.props.navigation.navigate('Login')} style={[styles.loginButton]}>
                                <Text style={styles.textButtonTitle} >Done</Text>
                            </TouchableHighlight>
                        </View>
                        <CustomFooter />
                    </Animatable.View>

                </ScrollView>
            </SafeAreaView>)
    }
}