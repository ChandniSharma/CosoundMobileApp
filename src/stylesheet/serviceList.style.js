import { Dimensions } from "react-native";
import { scale, verticalScale } from 'react-native-size-matters';

const { height, width } = Dimensions.get('window');
const deviceHeight = height;
let deviceWidth = width;

export default {
    container: {
        flex: 1,
    },
    viewMore: {
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    topUserImage:{
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
    },
    textSeeMoreBtnTitle: {
        fontSize: 16,
        color:'#ff277b',
        fontWeight:'500',  
    },
    seeMoreBtn: {
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0,0.12)',
        shadowOffset: {
            width: .4,
            height: .11
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
    },
    buttonSort1:{
        height:40,
        justifyContent:'center',
        backgroundColor:'white',   
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10, 
        marginTop:'1%'    
     },
    buttonSort:{
        height:40,
        justifyContent:'center',
        backgroundColor:'white',        
    },
    buttonSort3:{
        height:40,
        justifyContent:'center',
        backgroundColor:'white',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,        
     },
    viewSort:{
        backgroundColor: 'rgb(245,245,245)', 
        width:scale(130),
        height: verticalScale(95),
        top:'140%',
        right:20,
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            width: .5,
            height: .5
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        borderRadius:20,
        alignSelf: 'flex-end',
        position: 'absolute',
    },
    popupText:{
        fontSize:13,
        color:'rgba(38, 38, 38, 0.52)',
        fontFamily:'Montserrat-light',
        marginLeft:'10%'
    },
    selectedText:{
        fontSize:13,
        color:'rgb(140,91,204)',
        fontFamily:'Montserrat-light',
       marginLeft:'10%'
    },
    loginText:{
        marginBottom:'5%',
        alignSelf:'center',
        fontSize:14,
        color:'white',
        fontFamily:'Montserrat-light',
    },
    noServiceText:{
        marginBottom:'5%',
        alignSelf:'center',
        fontSize:26,
        color:'#262626',
        fontFamily:'Montserrat-Regular',
    },
    subTitle:{
        marginBottom:'5%',
        alignSelf:'center',
        fontSize:14,
        color:'#262626',
        fontFamily:'Montserrat-Regular',
    },
    textLight:{
        alignSelf:'center',
        fontSize:14,
        color:'rgba(38, 38, 38, 0.52)',
        fontFamily:'Montserrat-light',
    },
    loginButton:{
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: "15%",
        marginRight:"15%",
        shadowColor: 'rgba(0,0,0,0.12)',
        shadowOffset: {
            width: .4,
            height: .11
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        backgroundColor: '#ff277b',
        marginBottom:'15%',
    },
    serviceTitleBtn:{
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0,0.12)',
        shadowOffset: {
            width: .4,
            height: .11
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        justifyContent: 'center',
        backgroundColor: '#ff277b',
    },
    textCreateService:{
        fontSize: 16,
        color:'white',
        fontWeight:'500',
    },
    textButtonTitle: {
        fontSize: 16,
        color:'white',
        fontWeight:'500',
        marginBottom:'10%'
    },
    findingView: {
        backgroundColor: 'white',
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgSideTitle: {
        color: 'white',
        margin: '2%',
        alignSelf: 'flex-start',
        flex: 0.3,
        width: 50,
        height: 40
    },
    titleAccount: {
        color: '#262626',
        fontSize: 14,
        fontFamily: 'Montserrat-light',
    },
    findingView: {
        backgroundColor: 'white',
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonSettings: {
        height: 40,
        marginLeft: '2%',
        marginRight: '2%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textSettings: {
        color: 'rgba(38,38,38,0.52)',
        fontSize: 12,
        fontFamily: 'Montserrat-light',
        marginLeft:'3%',
        marginRight:'3%'
    },

    textAccountPopup: {
        color: 'rgba(38,38,38,0.52)',
        fontSize: 14,
        fontFamily: 'Montserrat-light',
    },
    textPremium: {
        color: '#319B9D',
        fontSize: 13,
        fontFamily: 'Montserrat-light',
        marginTop:'3.5%'
    },
    imgMenu: {
        margin: '5%',
    },
    imgMainTitle: {
        alignSelf: 'center',
        margin: '5%',
    },
    datePickerStyle: {
        marginLeft: '15%',
        marginRight: '5%',
        height: 60,
        width: deviceWidth - 20,
        alignSelf: 'center',
        backgroundColor: 'transparant',
        marginTop: '5%',
        fontFamily: 'Montserrat-Regular',
        fontWeight: '300',
        fontSize: 16,
        color: '#262626',
        paddingTop: 21,
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
    },
    locationLabel:{
        fontFamily:'Montserrat-Regular',
        fontWeight:'300',
        fontSize:16,
        color:'#262626',
        textAlign:'left'
      },
    inputStyle: {
        marginLeft: '5%',
        marginRight: '5%',
        height: 60,
        backgroundColor: 'white',
        marginTop: '5%',
        shadowColor: 'rgba(0,0,0,0.7)',
        shadowOffset: {
            width: 2,
            height: 4
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        borderRadius: 8,
        fontFamily: 'Montserrat-Regular',
        fontWeight: '300',
        fontSize: 16,
        color: '#262626',
        paddingTop: 21,
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
    },
    searchBarView:{
        flexDirection:'row',
        margin: '5%',
        height: 60,
        borderRadius: 25,
    },
    inputSearchStyle: {
        height: 60,
        fontFamily: 'Montserrat-Regular',
        fontWeight: '300',
        fontSize: 16,
        width:'70%',
        color: 'black',
        marginLeft:'15%',
    },
    btnBottomMob:{
        marginLeft: '5%',
        marginRight: '5%',
        height: 60,
        backgroundColor: 'red',
        shadowColor: 'rgba(0,0,0,0.7)',
        shadowOffset: {
            width: 2,
            height: 4
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        borderRadius: 8,
    },
    viewForgotPwd: {
    },
    rememberView: {
        flexDirection: 'row',
        flex: 1,
        marginTop: '5%',
        marginBottom: '5%',
        marginLeft: '5%',
        marginRight: '5%',
        height: 30,
    },
    imgMenuBar: {
        width: 40,
        height: 40,
        tintColor: 'white',
        alignSelf: 'flex-end',
    },
    viewTopBackground: {
        width: '100%',
        height: 300,
    },
    searchView: {
    },
    bckgndImage:{
    }, 
    imgMenuBar: {
        width: 40,
        height: 40,
        tintColor: 'white',
        alignSelf: 'flex-end',
    },
    viewBottomContent: {
        flexDirection: 'row',
        height: 30,
    },
    bellButton: {
        width: 64,
        height: 64,
        right: '5%',
        alignSelf: 'flex-end',
        marginTop: '5%',
    },
    bellIcon: {
        width: 64,
        height: 64,
    },
    imgUser: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
    },
    textUserName: {
        color: '#ffffff',
        fontSize: 34,
        marginBottom: '10%',
        alignSelf: 'center',
    },
    viewButtons:
    {
        flexDirection: "row",
        backgroundColor: 'red',
        marginTop: '10%',
        height: 70,
        marginBottom: '2%',
        alignItems: 'center'
    },
    viewDropDown: {
        backgroundColor: 'white',
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex:99999
    },
    viewModalAccount: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: deviceWidth,
        height: deviceHeight - 44,
        position: 'absolute'
    },
    flatList: {
        width: '100%',
        marginBottom:'10%',
        backgroundColor:'red',
        zIndex:99999,
    },
    flatListSearchbar:{
        width: '90%',
        backgroundColor:'white',
        borderRadius:15,
        marginTop:-20,
        alignSelf:'center'
    },
    viewModal: {
        backgroundColor: 'black',
        width: deviceWidth,
        height: deviceHeight,
        position: 'absolute'
    },
    viewPremium: {
        flexDirection: 'row',
        flex: 1,
        alignSelf: 'center',
        marginTop:'2%'
    },
    btnPremium: {
        backgroundColor: 'white',
        width: '40%',
        height: 40,
        borderRadius: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: '2%',
    },
    errorText: {
        margin: '2%',
        color: 'red',
        alignSelf: 'center',
    },
    textModalData: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Montserrat-light',
        alignSelf: 'center'
    },
    viewSocial: {
        marginLeft: '5%',
        marginRight: '5%',
        height: 60,
        backgroundColor: 'white',
        marginTop: '5%',
        shadowColor: 'rgba(0,0,0,0.7)',
        shadowOffset: {
            width: 2,
            height: 4
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        borderRadius: 8,
        fontFamily: 'Montserrat-Regular',
        fontWeight: '300',
        fontSize: 16,
        color: '#262626',
        justifyContent:'center',
    },
    socialInput:{
        marginLeft: '5%',
        marginRight: '2%',
        height: 60,
        fontFamily: 'Montserrat-Regular',
        fontWeight: '300',
        fontSize: 16,
        color: '#262626',
    },
    plusCircleBtn: {
        right: '3%',
        marginTop: '1%',
        flex: 0.15,
        width:40,
        height:40,
        justifyContent:'center',
        alignItems: 'center',
    },
    plusCircle: {
    },
    viewCircleCompleted: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'rgb(41,139,139)',
        shadowColor: 'rgba(0,0,0,0.7)',
        shadowOffset: {
            width: .5,
            height: .5
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        marginTop: '-2%',
        zIndex: 999,
    },
    multiSelectDownStyle: {
        height: 60,
        backgroundColor: 'white',
        marginRight: '2%',
        shadowColor: 'rgba(0,0,0,0.7)',
        shadowOffset: {
            width: 2,
            height: 4
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        borderRadius: 8,
        fontFamily: 'Montserrat-Regular',
        fontWeight: '300',
        fontSize: 16,
        color: '#262626',
        paddingLeft: 30
    },
    multiSelectStyle: {
        marginTop: '2%',
        height: 60,
        backgroundColor: 'white',
        marginRight: '2%',
        shadowColor: 'rgba(0,0,0,0.7)',
        shadowOffset: {
            width: 2,
            height: 4
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        borderRadius: 8,
        fontFamily: 'Montserrat-Regular',
        fontWeight: '300',
        fontSize: 16,
        color: '#262626',
        paddingLeft: 30
    },
    multiSelectListStyle: {
        marginTop: '5%',
        backgroundColor: 'white',
        shadowColor: 'rgba(0,0,0,0.7)',
        shadowOffset: {
            width: 2,
            height: 4
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        borderRadius: 8,
        marginBottom:'2%',
    },
    textSubTitleNotSelected: {
        fontSize: 16,
        color: '#20ACAC',
        fontFamily: 'Montserrat-light',
    },
    textSubtitleSelected: {
        fontSize: 16,
        color: '#8E5ACD',
        fontFamily: 'Montserrat-light',
        alignSelf:'flex-start',
    },
    textDescription: {
        fontSize: 14,
        color: 'rgba(38,38,38,0.52)',
        fontFamily: 'Montserrat-light',
        margin:'2%',
    },
}