import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, FlatList } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import Logo from './common/logo';
import SideMenu from './common/SideMenu';
import BackButton from './common/BackButton';
import Icon2 from "react-native-vector-icons/EvilIcons";


export default class MarketPlace extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            isSideMenuClick:false,
            carouselItems: [
                {
                    title: "Item 1"
                },
                {
                    title: "Item 2"
                },
                {
                    title: "Item 3"
                },
                {
                    title: "Item 4"
                },
                {
                    title: "Item 5"
                }
            ], 
        
            arrayPersonalRecommendations= [
            {
            
                userImage:"",
                title:"Get you on 200 Spotify Playlists",
                ratingCount:'',
                like:"10",
                price:'45$',
                comment:"56",
                name:"Bryan Garza",
                image:require('../assets/signup-type-pro.png'),
            },
            {
                userImage:"",
                title:"Get you on 200 Spotify Playlists",
                ratingCount:'',
                like:"10",
                price:'45$',
                comment:"56",
                name:"Bryan Garza",
                image:require('../assets/signup-type-pro.png'),

            },

            {
                userImage:"",
                title:"Get you on 200 Spotify Playlists",
                ratingCount:'',
                like:"10",
                price:'45$',
                comment:"56",
                name:"Bryan Garza",
                image:require('../assets/signup-type-pro.png'),
            },

        ],
     }
    }

    _renderCarouselItem({ item, index }) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={require('./assets/usericon.png')}
                />
                <Text style={{ color: '#fff' }} >{item.title}</Text>
            </View>
        )
    }
    renderItem(item, index){
console.log(" item is ",item);
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

    render() {
        return (

            <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={styles.container}>

                {!this.state.isSideMenuClick ? <LinearGradient start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} colors={this.state.headerColorMix} style={{ flexDirection: 'row', height: 60, width: '100%', alignItems: 'space-between', justifyContent: 'center' }}>

                    <TouchableOpacity style={{ color: 'white', marginTop: '14%', flex: 0.1 }} onPress={() => this.showPopup()}>
                        <Hamburger color="white" active={false} type="spinCross" onPress={() => this.showPopup()} />
                    </TouchableOpacity>


                    <Logo color={'#ffffff'} style={{ flex: 0.7, marginLeft: '25%' }} width="130px" height="44px" />

                    <View style={{ flex: 0.3 }} />
                    <TouchableOpacity style={[styles.searchView, { flex: 0.2, alignSelf: 'flex-end', marginRight: '1%' }]} >
                    <Icon2 name="bell" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 40, tintColor: 'white' }} />

                    </TouchableOpacity>
                </LinearGradient> : null}
                <KeyboardAwareScrollView onScroll={this._onScroll} style={{ backgroundColor: 'rgb(245, 245,245)' }}>

                    {/* For Carousel View  */}
                    <View style={{ backgroundColor: 'white' }} >

                        <TouchableHighlight
                            onPress={
                                () => { this.carousel._snapToItem(this.state.activeIndex - 1) }
                            }>
                            <Image source={require('./assets/leftarrow.png')} />
                        </TouchableHighlight>

                        <View>
                            <Carousel

                                ref={ref => this.carousel = ref}
                                data={this.state.carouselItems}
                                sliderWidth={250}
                                itemWidth={250}
                                renderItem={this._renderCarouselItem}
                                onSnapToItem={index => this.setState({ activeIndex: index })}
                            />
                        </View>

                        <TouchableHighlight
                            onPress={
                                () => { this.carousel._snapToItem(this.state.activeIndex + 1) }
                            }>
                            <Image source={require('./assets/rightarrow.png')} />
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor="#25b6ad" onPress={onSubmit} style={[styles.loginButton]}>
                            <Text style={styles.textButtonTitle} >My Market</Text>
                        </TouchableHighlight>

<Text> Your Personal Reccomendations</Text>

{/* <FlatList
data={this.arrayPersonalRecommendations}
renderItem = {
    
/> */}


                    </View>

                  

                </KeyboardAwareScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#131420',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
