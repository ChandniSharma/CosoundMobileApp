import { Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');
const deviceHeight = height;
let deviceWidth = width;
let top;


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
        width:50,
        height:40
    },
    imgBottomCosound: {
        // flex:0.3,
        alignSelf: 'flex-start',
        width:120,
        height:30,
        marginTop:'2%',
    },
    imgMainTitle:{
        alignSelf: 'center',
        width:200,
        height:40,
        marginTop:'5%',
    },
    textMusicDescription: {
        color: 'white',
        fontSize: 18,
        alignSelf:'center',
        marginTop:'5%', 
        marginBottom:'1%',
        fontFamily: 'Montserrat-Light',
    },
    textMusicDescription2: {
        color: 'white',
        fontSize: 18,
        alignSelf:'center',
        marginTop:'1%', 
        marginBottom:'5%',
        fontFamily: 'Montserrat-Light',
    },

    textTitleCosoundBottom: {
        fontSize: 20,
        alignSelf: 'flex-start',
    },
    textTitleJoin: {
        fontSize: 30,
        margin: '2%',
        color:'#262626',
        fontWeight: '300',
        fontFamily:'Montserrat-Regular'
    },
    textDescriptionJoin: {
        fontSize: 14,
        marginTop: '2%',
        marginLeft:'3%',
        color:'rgba(38,38,38,0.52)',
        fontFamily:'Montserrat-Regular',
        fontWeight:'300',
        
    },
    mobileImage: {
        alignSelf: 'center',
        marginTop: 25,
        width: '100%',
    },
    textOptionTitle: {
        color: 'white',
        fontSize: 15,
        marginBottom: '1%',
        fontFamily:'Montserrat-Regular',
        fontWeight:'300',
    },
    textFooterTitle: {
        marginTop: '4%',
        marginBottom: '4%',
        color: 'white',
        fontSize: 16,
        fontFamily:'Montserrat-Regular',
        fontWeight:'300',
        color:'rgba(255,255,255,0.52)',
    },
    btnMenuBar: {
        // alignSelf: 'flex-end',
        top:'1%',
        right:'4%',
        justifyContent: 'center',
        alignItems: 'center',
        flex:0.1,
        width: 40,
        height: 40,
    },
    imgMenuBar:{
        width: 40,
        height: 40,
    },
    textBottomDescription: {
        color: 'white',
        fontSize: 14,
        marginLeft: '5%',
        fontFamily:'Montserrat-Regular',
        fontWeight:'300',
        color:'rgba(255,255,255,0.52)',
    },
    textColorTemp: {
        color: 'white'
    },
    viewShareButtons: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        flex:0.1,
    },
    viewLoginButton: {
        flex: 1,
        flexDirection: 'row',
        marginTop:'2%',
        marginBottom:"7%",
    },
    loginButton: {
        borderRadius: 22,
        height: 40,
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        // margin: '10%',
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            width: .5,
            height: .5
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        backgroundColor:'white',
        marginLeft: "1%",
        marginRight:"5%",
        
    },
    signupButton: {
        borderRadius: 22,
        height: 40,
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
         marginLeft: "5%",
         marginRight:"1%",
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
        borderRadius: 12,
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            width: .5,
            height: .5
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        //margin: '15%',
        width:345,
        height:129,
        alignSelf:'center',
        marginTop:'10%',
        marginBottom:'10%',
    },
    backgroundVideo: {
        marginLeft:'15%',
       marginRight:'15%',
       marginTop: '15%',
       marginBottom:'15%',
    },
    textLoginButtonTitle: {
        fontSize: 16,
        color:'rgb(33,180,174)',
    },
    textSignupButtonTitle: {
        fontSize: 16,
        color:'white',
    },
    viewBottom: {
        flex:0.2,
        backgroundColor: 'black',
    },
    viewFooterSocialShareOption: {
        flexDirection: 'row',
        marginLeft: '5%',
        marginRight: '2%',
    },
    textBottomMark: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 14,
        color: 'white',
        marginLeft: '5%',
        
    },
    shareButtons: {
        width: 15,
        height: 15,
       
    },
    viewFooterText: {
        // marginTop: "20%",
        marginLeft: '5%',
    },
};