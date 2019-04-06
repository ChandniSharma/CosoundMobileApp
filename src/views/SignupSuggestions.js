import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
//import SvgUri from 'react-native-svg-uri';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../stylesheet/SignupStep5.style';
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
    render() {

        return (

            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>
                <ScrollView style={{ backgroundColor: 'rgb(245,245,245)', flex: 1 }}>

                    <Animatable.View ref={"mainView"} style={styles.container}>
                        <CustomHeader />
                        <View style={{ backgroundColor: 'rgb(37,182,173)' }}>

                            <Animatable.Image animation="fadeInDown" style={styles.imgMainTitle} source={require('../assets/cosoundTitle.png')} />
                            <Animatable.Text animation="fadeInDown" style={styles.textWelcome}>Here are suggested connections ..</Animatable.Text>

                            
                        </View>
                        <Animatable.View ref={'view2'} style={styles.viewDescription}>

                            <Text style={styles.textMusicDescription2}>We think these suggestions are going to  help you move forward! </Text>

                        </Animatable.View>

                    </Animatable.View>
                    <CustomFooter />
                </ScrollView>
            </SafeAreaView>)
    }
}