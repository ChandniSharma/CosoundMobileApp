import { Dimensions } from "react-native";
const { height, width } = Dimensions.get('window');
const deviceHeight = height;
let deviceWidth = width;
let topOfBtn = '30%';

console.log(" device heigh is ===", deviceHeight);
if (deviceHeight >= 667 && deviceHeight < 736) {
    topOfBtn = '40%'
} else if (deviceHeight >= 736 && deviceHeight < 812) {

} else if (deviceHeight >= 812 && deviceHeight < 1024) {

} else if (deviceHeight >= 1024 && deviceHeight < 1112) {

} else if (deviceHeight >= 1112 && deviceHeight < 1194) {

} else if (deviceHeight >= 1194 && deviceHeight < 1366) {

} else {

}

export default {
    cameraBtn: {
        marginTop: topOfBtn, height: 200, width: 100
    },
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
    },
    imgSideTitle: {
        color: 'white',
        margin: '2%',
        alignSelf: 'flex-start',
        flex: 0.3,
        width: 50,
        height: 40
    },
    textDull: {
        color: 'rgba(255,255,255,0.72)',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
    },
    getStarted: {
        color: 'white',
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        marginRight: '5%',
        alignSelf: 'flex-end',
    },
    textWelcome: {
        color: 'white',
        fontSize: 28,
        alignSelf: 'center',
        marginTop: '5%',
        marginBottom: '5%',
        fontFamily: 'Montserrat-Regular',
        fontWeight: '300',
        textAlign: 'center',
    },
    imgMainTitle: {
        alignSelf: 'center',
        width: 200,
        height: 40,
        marginTop: '15%',
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
    imageSearchIcon: {
        width: 18,
        height: 18,
    },
    imageCameraIcon: {
        width: 56,
        height: 56,
        marginTop: 30,
        alignSelf: 'center'
    },
    loginText: {
        marginTop: '0.5%',
        marginBottom: '10%',
        alignSelf: 'center',
        fontSize: 14,
        color: 'white',
        fontFamily: 'Montserrat-Regular',
    },

    inputStyleLeft1: {
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
    inputStyleCenter: {
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
        marginLeft: '5%',
    },
    inputStyleRight: {
        marginLeft: '10%',
        marginRight: '2%',
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
        marginBottom: '2%',
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
        justifyContent: 'center',
    },
    socialInput: {
        marginLeft: '5%',
        marginRight: '2%',
        height: 60,
        fontFamily: 'Montserrat-Regular',
        fontWeight: '300',
        fontSize: 16,
        color: '#262626',
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
        width: 24,
        height: 24,
        tintColor: 'white',
        alignSelf: 'center',
    },
    rememberBtn: {
        flex: 0.45,
        marginTop: '1%',
        height: 20
    },
    rememberText: {
        color: 'rgb(37,182,173)'
    },
    forgotPwdBtn: {
        flex: 0.5,
        marginTop: '1%',
    },
    forgotPwdText: {
        alignSelf: 'flex-end',
        height: 20
    },
    viewContainButton:{
        marginLeft: "15%",
        marginRight: "15%",
        marginTop: '5%',
        marginBottom: '5%',
    },
    loginButton: {
        borderRadius: 25,
        height: 50,
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
        backgroundColor: '#ff277b',
    },
    plusCircleBtn: {
        right: '3%',
        marginTop: '2%',
        flex: 0.15,
        width: 40,
        height: 40,
        justifyContent: 'center',
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
    textCompleted: {
        marginLeft: '5%',
        marginTop: '2.5%',
        fontFamily: 'Montserrat-light',
        fontSize: 19,
        color: '#2A8B8B',
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
    socialMediaLoginView: {
        flexDirection: 'row',
        marginTop: '20%',
        marginBottom: '2%',
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
        fontSize: 16,
        color: 'white',
        fontWeight: '500',
        height: 30,
        alignSelf: 'center',
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
    },
    textBottomMark: {
        marginTop: 20,
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
        flex: 0.1,
        marginBottom: 0,
        backgroundColor: 'black',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    viewSelected: {
        marginLeft: '24.3%',
        flexDirection: 'row',
    },
    viewNotSelected: {
        marginLeft: '22.5%',
        flexDirection: 'row',
    },
    viewProgressbar: {
        marginTop: '5%',
        marginBottom: '5%',
        height: 500,
    },
    textSelected: {
        marginLeft: '5%',
        marginTop: '1.5%',
        fontFamily: 'Montserrat-light',
        fontSize: 20,
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
        justifyContent: 'center'
    },
    viewCircleEmpty: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'white',
        borderColor: 'rgb(225,225,225)',
        borderWidth: 3,
        marginLeft: '3%',
        marginTop: '-1%',
        zIndex: 999,
    },
    viewSingleLine: {
        width: '1.9%',
        height: '20%',
        backgroundColor: 'rgb(225,225,225)',
        marginLeft: '27.5%'
    },
}