import { Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');
const deviceHeight = height;
let deviceWidth = width;
let top;


export default {
    container: {
        flex: 1,
    },
    textSideTitle: {
        color: 'white',
        fontSize: 21,
        margin: 15,
        alignSelf: 'flex-start',
        fontFamily: 'Montserrat-Bold',
    },
    textTitleCosound: {
        color: 'white',
        fontSize: 42,
        alignSelf: 'center',
        // fontFamily: "POLITICA-BOLD",
    },
    textMusicDescription: {
        color: 'white',
        fontSize: 18,
        margin: 15,
    },
    textTitleCosoundBottom: {
        fontSize: 20,
        alignSelf: 'flex-start',
    },
    textTitleJoin: {
        // fontFamily: '',
        fontSize: 22,
        margin: 15,
    },
    textDescriptionJoin: {
        fontSize: 14,
        margin: 15,
    },
    mobileImage: {
        alignSelf: 'center',
        marginTop: 25,
        width: '100%',
    },
    textOptionTitle: {
        color: 'white',
        fontSize: 15,
        marginBottom: 10
    },
    textFooterTitle: {
        marginTop: 15,
        marginBottom: 15,
        color: 'white',
        fontSize: 20
    },
    imageMenuBar: {
        width: 20,
        height: 20,
        right: "4%",
        alignSelf: 'flex-end',
        top: '10%',
        marginRight: 2,

    },
    
    textBottomDescription: {
        color: 'white',
        fontSize: 15,
        margin: 15,
    },
    textColorTemp: {
        color: 'white'
    },
    viewShareButtons: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
    },
    viewLoginButton: {
        flex: 1,
        flexDirection: 'row'
    },
    loginButton: {
        borderRadius: 14,
        height: 40,
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: '10%',
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            width: .5,
            height: .5
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
    },
    signupButton: {
        borderRadius: 14,
        height: 40,
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: "10%",
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            width: .5,
            height: .5
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        backgroundColor: 'rgb(255,38,123)'
    },
    videoStyle: {
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            width: .5,
            height: .5
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        margin: 15
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },

    textLoginButtonTitle: {
        fontSize: 16,
    },
    textSignupButtonTitle: {
        fontSize: 16,
    },
    viewBottom: {
        backgroundColor: 'black',
    },
    viewFooterSocialShareOption: {
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 15,
    },
    textBottomMark: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 15,
        color: 'white',
        marginLeft: 15,
        marginRight: 15,
    },
    shareButtons: {
        width: 15,
        height: 15,
        margin: 15
    },
    viewFooterText: {
        marginTop: "20%",
        marginLeft: 15,
    },
};