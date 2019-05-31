import { Dimensions, Platform } from "react-native";

const { height, width } = Dimensions.get('window');
const deviceHeight = height;
let deviceWidth = width;
let top;
const statusBarHeight = Platform.OS === 'ios' ? 0 : 0;

export default {

    errorText: {
        margin: '2%',
        color: 'red',
        alignSelf: 'center',
    },
    container: {
        flex: 1,
    },
    leftView: {
        marginTop: '15%',
        alignSelf: 'flex-end',
        flex: 0.4,
        // backgroundColor:'red'
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
        // fontSize: 21,
        margin: '2%',
        alignSelf: 'flex-start',
        //  fontFamily: 'Montserrat-Bold',
        flex: 0.3,
        width: 50,
        height: 40
    },
    textDull: {
        color: 'rgba(255,255,255,0.72)',
        fontFamily: 'Montserrat-Regular',
        // fontWeight:'200',
        fontSize: 12,
    },
    getStarted: {
        color: 'white',
        fontFamily: 'Montserrat-Regular',
        //fontWeight:'200',
        fontSize: 14,
        marginRight: '5%',
        alignSelf: 'flex-end',
    },
    loginText: {
        marginTop: '10%',
        marginBottom: '10%',
        alignSelf: 'center',
        fontSize: 30,
        color: 'white',
        fontFamily: 'Montserrat-Regular',
        // fontWeight:'100',
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
    viewForgotPwd: {

    },
    viewSelected: {
        marginLeft: '24.5%',
        flexDirection: 'row'
    },
    viewNotSelected: {
        // alignSelf:'center',
        marginLeft: '22.5%',
        flexDirection: 'row',

    },
    viewProgressbar: {
        marginTop: '5%',
        marginBottom: '5%',
        height: 500,
    },
    textCompleted: {
        marginLeft: '5%',
        marginTop: '2.5%',
        fontFamily: 'Montserrat-light',
        fontSize: 19,
        color: '#2A8B8B',
    },
    textSelected: {
        marginLeft: '5%',
        marginTop: '2.5%',
        fontFamily: 'Montserrat-light',
        fontSize: 19,
        color: 'black',
    },
    textNotSelected: {
        marginLeft: '5%',
        fontFamily: 'Montserrat-light',
        fontSize: 18,
        color: 'gray'
    },

    viewCircleFilled: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'rgb(60,205,53)',
        borderColor: 'rgb(60,205,53)',
        borderWidth: .2,
        shadowColor: 'rgb(60,205,53)',
        shadowOffset: {
            width: .5,
            height: .9
        },
        shadowOpacity: 0.9,
        shadowRadius: 1,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        zIndex: 999,
    },
    viewCircleEmpty: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'white',
        borderColor: 'rgb(225,225,225)',
        borderWidth: 3,
        zIndex: 999,
        marginLeft: '3%'
    },

    viewSingleLine: {
        width: '3.5%',
        height: '22%',
        backgroundColor: 'rgb(225,225,225)',

        marginLeft: '27%',
        marginTop: '-2%',
        zIndex: -999,
    },
    tickMarkView: {
        width: 20,
        height: 20,
        flex: 0.05,
        marginRight: '3%',
        borderColor: 'gray',
        borderWidth: .2,
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            width: .5,
            height: .5
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        borderRadius: .2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgTickMark: {
        width: 34,
        height: 34,
        tintColor: 'white',
    },
    rememberBtn: {
        flex: 0.45,
        marginTop: '1%',
        height: 20
        //  backgroundColor:'green',
    },
    rememberText: {
        color: 'rgb(37,182,173)'
    },
    forgotPwdBtn: {
        flex: 0.5,
        //alignSelf:'flex-end',
        marginTop: '1%',
    },
    forgotPwdText: {
        alignSelf: 'flex-end',
        height: 20
    },
    bigButton: {
        borderRadius: 15,
        height: 172,
        width: 240,
        borderColor: 'rgba(0,0,0,0.12)',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: "15%",
        marginRight: "15%",
        shadowColor: 'rgba(0,0,0,0.12)',
        shadowOffset: {
            width: .4,
            height: .11
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        borderWidth: 0.3,
        //marginBottom:'10%',
        backgroundColor: 'rgba(255,255,255,0.7)',
        marginTop: "5%",
        marginBottom: '5%',
        justifyContent: 'center',
    },
    socialMediaLoginView: {
        flexDirection: 'row',
        marginTop: '20%',
        marginBottom: '2%',
        // backgroundColor:'yellow',
        flex: 1,
        height: 60,
        marginLeft: '5%',
        marginRight: '5%',
    },
    fbText: {
        color: '#4867AA',
        fontFamily: 'Montserrat-Hairline',
        fontSize: 16,
        fontWeight: '300',
    },
    twitterText: {
        fontFamily: 'Montserrat-Hairline',
        color: '#1CA1F3',
        fontSize: 16,
        fontWeight: '300',

    },
    googlePlusText: {
        color: '#EA4336',
        fontSize: 16,
        fontFamily: 'Montserrat-Hairline',
        fontWeight: '300',

    },
    buttonLeft: {
        borderRadius: 22,
        height: 55,
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0,0.12)',
        shadowOffset: {
            width: .4,
            height: .11
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        backgroundColor: 'white',
        marginRight: '2%'
    },
    viewCenterButton: {
        marginBottom: '10%'
    },
    buttonCenter: {
        borderRadius: 22,
        height: 55,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0,0.12)',
        shadowOffset: {
            width: .4,
            height: .11
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        backgroundColor: 'white',
        alignSelf: 'center',


    },
    buttonRight: {
        borderRadius: 22,
        height: 55,
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0,0.12)',
        shadowOffset: {
            width: .4,
            height: .11
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        backgroundColor: 'white',
        marginLeft: '2%'
    },
    textButtonTitle: {
        fontSize: 18,
        fontFamily: 'Montserrat-Regular',
        color: 'rgba(38,38,38,0.52)',
        fontWeight: '300',
        alignSelf: 'center',
    },
    viewButton: {
        //backgroundColor:'pink',
        flex: 1,
        justifyContent: 'center',

    },
    musician: {
        width: 40,
        height: 60,
        alignSelf: 'center',
        marginBottom: '1%'

    },
    industryProfessional: {
        width: 59,
        height: 63,
        alignSelf: 'center',
        marginBottom: '1%'
    },
    viewShareButtons: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        flex: 0.4,

        height: 50,
        marginBottom: '5%',
        marginLeft: '13%',
        marginRight: '2%'
    },
    textColorTemp: {
        // color: 'white',
    },
    textBottomMark: {
        marginTop: 20,
        // marginBottom: 20,
        fontSize: 14,
        color: 'white',
        marginLeft: '5%',
        flex: 0.6,
    },
    shareButtons: {
        width: 15,
        height: 15,

    },
    viewBottom: {
        //flex:0.1,
        // marginTop:'5%',
        position: 'absolute',
        bottom: '0.1%',
        backgroundColor: 'black',
        //alignItems: 'space-between',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    imgMainTitle: {
        alignSelf: 'center',
        width: 200,
        height: 40,
        marginTop: '25%',
    },
    textWelcome: {
        color: 'white',
        fontSize: 28,
        alignSelf: 'center',
        marginTop: '5%',
        marginBottom: '5%',
        fontFamily: 'Montserrat-Regular',
        fontWeight: '300',
    },
    viewDescription: {
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '2%',
        marginTop: '5%'
    },
    textMusicDescription2: {
        color: 'rgba(255,255,255,0.52)',
        fontSize: 14,
        // alignSelf:'center',

        marginTop: '1%',
        marginBottom: '5%',
        fontFamily: 'Montserrat-Light',
    },
    textSubTitle: {
        marginTop: '5%',
        marginBottom: '5%',
        color: 'white',
        fontSize: 20,
        fontFamily: 'Montserrat-Regular',
    },
    imageSearchIcon: {
        width: 56,
        height: 56,

    },
    textCompleted: {
        marginLeft: '5%',
        marginTop: '2.5%',
        fontFamily: 'Montserrat-light',
        fontSize: 19,
        color: '#2A8B8B',
    },
    viewCircleCompleted: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'rgb(41,139,139)',
        borderColor: 'gray',
        borderWidth: .2,
        shadowColor: 'rgba(0,0,0,0.7)',
        shadowOffset: {
            width: .5,
            height: .5
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        marginTop: '-2%',
        // marginLeft:'-%',
        zIndex: 999,
    },
    viewSingleLineFilled: {
        width: '1.5%',
        height: '24%',
        backgroundColor: 'rgb(41,139,139)',
        borderColor: 'gray',
        borderWidth: .2,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: .5,
            height: .5
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        borderRadius: .2,
        marginLeft: '27.5%',
        marginTop: '-2%'
    },
}