import React from "react";
import { FlatList, Image, ImageBackground, Text, TextInput, Modal, TouchableHighlight, View, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/EvilIcons";
import Icon3 from "react-native-vector-icons/Ionicons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


export default class SideMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
           
            isSideMenuClick: true,
          
            isCrossClick: false,
        }
        this.arrayData = [{ name: 'Market', image: '', count: 0 }, { name: 'Messages', image: 'message', count: 3 }, { name: 'Profile', image: '', count: 0 }, { name: 'Notifications', image: 'bell', count: 24 }, { name: 'Cart', image: '', count: 2 }]
    }

    zoomInPopup = () => this.refs.viewModalRef.zoomIn().then(endState => console.log(" now end zoomin"));

    renderModalItem = (item) => {
        console.log(" item is ", item);
        let icon = "";
        let viewNotification = <View />
        let view
        if (item.index === 0) {
            icon = <Icon1 name="briefcase" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 18, color: 'white' }} />

        } else if (item.index === 1) {
            icon = <Icon1 color="white" name="message" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 18 }} />
            viewNotification =  <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: '#424242', justifyContent: 'center' }}>
            <Text style={styles.textModalData}>{item.item.count}</Text>
                 </View>
        } else if (item.index === 2) {
            icon = <Icon name="user" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 18, tintColor: 'white' }} />

        } else if (item.index === 3) {
            icon = <Icon2 name="bell" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 18, tintColor: 'white' }} />
            viewNotification =  <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: '#424242', justifyContent: 'center' }}>
            <Text style={styles.textModalData}>{item.item.count}</Text>
                 </View>
        } else if (item.index === 4) {
            icon = <Icon name="shoppingcart" color="white" style={{ marginLeft: '5%', marginTop: '2%', marginRight: '5%', fontSize: 18, tintColor: 'white' }} />
            viewNotification =  <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: '#424242', justifyContent: 'center' }}>
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
    render() {

        return (
            <Animatable.View ref={'viewModalRef'} style={styles.viewModal}>
            <KeyboardAwareScrollView style={{ flex: 1 }}>
                <TouchableOpacity style={{ color: 'white', marginTop: '14%', flex: 0.1 }} onPress={() => this.hidePopup()}>

                    <Hamburger color="white" active={true} type="spinCross" onPress={() => this.hidePopup()} />
                </TouchableOpacity>

                <View style={{ margin: '5%' }}>
                    <SearchBar
                        ref='searchBar'
                        placeholder='Search'
                        onChangeText={this.onChangeSearchText}
                        // onSearchButtonPress={...}
                        onCancelButtonPress={() => this.setState({ isSearchbarDataShow: false })}
                    />
                </View>
                {this.state.isSearchbarDataShow ? <FlatList
                    style={styles.flatListSearchbar}
                    data={this.arrayData}
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
                    {/* <Image style={styles.imgUser} source={getThumbnail(user.data)} /> */}
                    <Image style={styles.imgUser} source={require('../assets/avatar-main-1.jpg')} />
                </Animatable.View>

                <TouchableOpacity style={styles.btnPremium} onPress={() => this.props.navigation.navigate("Plan")}>
                    <View style={styles.viewPremium}>


                        <Logo color={'rgb(42, 173,177)'} style={{ marginBottom: '15%' }} width="60px" height="30px" />


                        <Text style={styles.textPremium}> Premium</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.textUserName}> Lois Stokes </Text>

                <FlatList
                    style={styles.flatList}
                    data={this.arrayData}
                    renderItem={this.renderModalItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </KeyboardAwareScrollView>
        </Animatable.View> 


        )
}