import React , {Component} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity, Dimensions} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import Icon3 from "react-native-vector-icons/Ionicons";

const { height, width } = Dimensions.get('window');
const deviceHeight = height;
let deviceWidth = width;

export default class ServiceDropDownView extends Component{
    constructor (props){
        super(props);
        this.state={
          isDropDownclick: true,
        }
        this.dropDownOptions = [{ name: 'Offered Services', image: '' }, { name: 'Historic', image: 'wechat' }, { name: 'Support Center', image: 'customerservice' }];
    }
   moveToView =(index)=>{

    this.props.closePopup();
if(index === 0){
  this.props.navigation.navigate("OfferedServices");
}else if(index ===1){
//move to Historic
}else{
  // Support center
}
   }
    renderItem = (item, ) => {
        let index = item.index;
        let icon = "";
    
        if (index === 0) {
          icon = <Image source={require('../../assets/Image/privacy.png')} style={{ tintColor: 'rgb(59, 147, 187)', marginRight: '7%', width: 20, height: 20 }} />
        } else if (index === 1) {
          icon = <Icon name="wechat" style={{ flex: 0.1, color: 'rgb(59, 147, 187)', marginRight: '3%', fontSize: 18 }} />
        } else {
          icon = <Icon name="customerservice" style={{ flex: 0.1, color: 'rgb(59, 147, 187)', marginRight: '3%', fontSize: 18 }} />
        }
        return (
    
          <View style={{ height: 50, justifyContent: 'center' }}>
            <TouchableOpacity style={{ margin: '2%' }} onPress={() => this.moveToView(index)}>
              <View style={{ flexDirection: "row" }}>
    
                {icon}
    
                <Text style={this.props.selectedIndex === index? styles.textSelected:styles.textNotSelected}>{item.item.name}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )
      }
    render(){
        return(
          <View style={this.state.isDropDownclick? styles.viewModalMain:styles.viewTransparant}>
          {this.state.isDropDownclick ? 
            <View style={styles.viewModalAccount}>

                    <TouchableOpacity style={{ marginTop: '54.0%', backgroundColor: 'white', height: 40 }} onPress={() => this.props.closePopup()}>
                      <View style={{ flexDirection: 'row', height: 50, marginTop: '2%' }}>
                        <Icon3 name="ios-settings" style={{ marginLeft: '2%', marginBottom: '1%', flex: 0.1, color: 'rgb(59, 147, 187)', fontSize: 25 }} />
                        <Text style={this.props.selectedIndex === -1? styles.textSelected:styles.textNotSelected}> Purchased Services</Text>
                        <View style={{ width: 30, height: 30, borderRadius: 18, marginRight: '5%', marginBottom: '5%', flex: 0.1, backgroundColor: 'white', borderColor: '#8E8E8E', borderWidth: 0.3 }}>
                          <Icon name="up" color='#8E8E8E' style={{ fontSize: 15, alignSelf: 'center', marginTop: '22%', fontWeight: 'bold' }} />
                        </View>
                      </View>
                    </TouchableOpacity>
            <View style={styles.viewDropDown}>
            <FlatList
              style={styles.flatList}
              data={this.dropDownOptions}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          </View> :<View />}
          </View>
        )
    }
}

const styles ={
viewTransparant:{
  width:1,
  height:1
},
viewModalMain:{
  width: deviceWidth,
  height: deviceHeight - 44,
  position: 'absolute',
  top:0,
  bottom:0,
  zIndex:9999,
},
  viewModalAccount: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: deviceWidth,
    height: deviceHeight - 44,
    position: 'absolute',
    top:0,
    bottom:0,
    zIndex:9999,
},
    viewDropDown: {
       
        backgroundColor: 'white',
        width: deviceWidth,
        // height: deviceHeight - 400,
        alignItems: 'center',
        justifyContent: 'center',
      
    },
    flatList: {
        width: '100%',
        marginBottom:'10%'
        //height: deviceHeight-300,
    },
    
    textNotSelected: {
      color: 'rgba(38,38,38,0.52)',
      fontSize: 14,
      fontFamily: 'Montserrat-light',
      flex:0.8,
  },
  textSelected:{
    color:  'rgb(59, 147, 187)',
    fontSize: 14,
    fontFamily: 'Montserrat-light',
    flex:0.8,
  }
}
