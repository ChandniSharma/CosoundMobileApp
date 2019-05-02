import { Dimensions, Platform } from "react-native";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const { height, width } = Dimensions.get('window');
const deviceHeight = height;
let deviceWidth = width;
let top;
const statusBarHeight = Platform.OS === 'ios' ? 0 : 0;

export default {

    container: {
        flex: 1,
    },
    imgSideTitle: {
        color: 'white',
        // fontSize: 21,
        margin: '2%',
        alignSelf: 'flex-start',
        //  fontFamily: 'Montserrat-Bold',
        flex: 0.3,
        width: 50,
        height: 40
    },
    titleAccount: {
        color: '#262626',
        fontSize: 14,
        fontFamily: 'Montserrat-light',

    },

    buttonSettings: {
        height: 40,
        marginLeft: '2%',
        marginRight: '2%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'green'
    },
    textSettings: {
        color: 'rgba(38,38,38,0.52)',
        fontSize: 12,
        fontFamily: 'Montserrat-light',
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
        // backgroundColor:'pink'

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
       // alignSelf: 'flex-end',
        // marginRight:5,
        // justifyContent: 'center',
        // width: 30,
        // height: 30,
        
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
        // fontFamily: 'Montserrat-regular',
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
        // marginTop: '35%',
        backgroundColor: 'white',
        width: deviceWidth,
        // height: deviceHeight - 400,
        alignItems: 'center',
        justifyContent: 'center',

    },
    viewModalAccount: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: deviceWidth,
        height: deviceHeight - 44,
        position: 'absolute'
    },
    flatList: {
        width: '100%',
        height: deviceHeight-300,
    },
    flatListSearchbar:{
        width: '90%',
       
        backgroundColor:'white',
        borderRadius:20,
        marginTop:-30,
        alignSelf:'center'
    },
    viewModal: {
        //top:-100,
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
       // backgroundColor:'pink'
    },

    textModalData: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Montserrat-light',
        alignSelf: 'center'
    },

}