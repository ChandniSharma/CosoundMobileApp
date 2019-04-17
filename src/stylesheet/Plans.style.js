import { Dimensions, Platform } from "react-native";

const { height, width } = Dimensions.get('window');
const deviceHeight = height;
let deviceWidth = width;
let top;
const statusBarHeight = Platform.OS === 'ios' ? 0 : 0;

export default {
    container: {
        flex: 1,
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
        fontSize: 16,
        alignSelf: 'center',
       
        marginTop: '1%',
        marginBottom: '5%',
        fontFamily: 'Montserrat-Light',
        lineHeight:22,
    },
    textTitle: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: '5%',
        marginBottom: '10%',
        fontFamily: 'Montserrat-Regular',
    },
    textTitleGraphicDesigner:{
        color: '#20acac',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: '5%',
        marginBottom: '10%',
        fontFamily: 'Montserrat-Regular',
    },
    textSubTitle: {
        color: 'white',
        fontSize: 16,
        alignSelf: 'center',
        marginTop: '1%',
        marginBottom: '5%',
        fontFamily: 'Montserrat-Regular',
    },
    flatListStyle: {
        marginTop: '5%',
        marginBottom: '5%',
    },
    viewRecoverButton:{
        marginTop:'15%',
        marginBottom:'15%'
     },
     textButtonTitle: {
        fontSize: 16,
        color:'white',
        fontWeight:'500',
        marginBottom:'7%'
        
    },
    textContinueBtnTitle:{
            fontSize: 16,
            color:'white',
            fontWeight:'500',
            height:30,
            alignSelf:'center',
            marginTop:'20%',
    },
    textSeeMoreBtnTitle: {
        fontSize: 16,
        color:'#ff277b',
        fontWeight:'500',
        
    },
    loginButton:{
        borderRadius: 25,
        height: 55,
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
         marginLeft: "25%",
         marginRight:"25%",
        shadowColor: 'rgba(0,0,0,0.12)',
        shadowOffset: {
            width: .4,
            height: .11
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        marginTop:'2%',
        marginBottom:'2%',
        //marginBottom:'10%',
        backgroundColor: '#ff277b'
    },
    selectPlanBtnPurple:{
        marginTop:'-5%',
       
        borderRadius: 25,
        height: 50,
        flex: 0.3,
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
        
        //marginBottom:'10%',
        backgroundColor: 'rgb(130, 98,203)'
    },
    selectPlanBtnGreen:{
        marginTop:'-12%',
        marginBottom:'1%',
        borderRadius: 25,
        height: 50,
        flex: 0.4,
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
        
        //marginBottom:'10%',
        backgroundColor: 'rgb(49, 155,157)'
    },
    itemView: {
        width: deviceWidth-40,
        height: 450,
        backgroundColor: 'white',
        borderColor: 'transparant',
        borderWidth: .1,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: {
            width: .5,
            height: .5
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        borderRadius: 10,
        marginBottom: '5%',
        marginTop: '1%',
        alignSelf: 'center'

    },
    viewSingleLine:{
      height:1,
      width:'80%',
      alignSelf:'center',
      backgroundColor:'rgba(38,38,38,0.52)',
      marginTop:'2%',
      marginBottom:'2%',

      
    },
    viewArtistPhoto: {
        width: 150,
        height: 150,
        
        backgroundColor: 'transparant',
        borderColor: 'gray',
        borderWidth: .2,
        shadowColor: 'rgba(0,0,0,0.7)',
        shadowOffset: {
            width: .5,
            height: .5
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: "center",
        marginTop: '5%',
        marginBottom: '5%',

        // marginLeft:'-%',

    },
    imageArtist: {
        width: 140,
        height: 140,
       // borderRadius: 20,
    },
    artistName: {
        color: '#262626',
        fontSize: 26,
        alignSelf: 'center',
        marginTop: '10%',
        marginBottom: '10%',
        fontFamily: 'Montserrat-Light',
    },
    artistJobTitle: {
        color: 'rgba(38,38,38,0.52)',
        fontSize: 14,
        alignSelf: 'center',
        marginTop: '1%',
        marginBottom: '10%',
        fontFamily: 'Montserrat-Light',
        lineHeight: 22,
        marginLeft:'5%',
        marginRight:'5%',

    },

    premimumFeatureTitle:{
        color:'#20ACAC',
        fontSize:30,
        alignSelf:'center',
    },

    premiumFeatureDescription:{
        color:'rgba(38, 38, 38, 0.52)',
        fontSize:14,
        lineHeight:22,
        marginLeft: '5%',
        marginRight:'5%',
        fontFamily: 'Montserrat-Light',
    },

    featureView:{
        backgroundColor:'white',
        width:100,
        height:100,
        borderRadius:50,
        alignSelf:'center',
        alignItems: 'center',
        justifyContent:'center'
     },
     imageSearchIcon:{
        width:56,
        height:56,
        
    },

    fatureName: {
        color: '#262626',
        fontSize: 15,
        alignSelf: 'center',
        marginTop: '1%',
        marginBottom: '5%',
        fontFamily: 'Montserrat-Light',
    },
    featureDescription:{
        color: '#262626',
        fontSize: 12,
        alignSelf: 'center',
        marginTop: '1%',
        marginBottom: '5%',
        fontFamily: 'Montserrat-Light',
        lineHeight:22
    },
    loginButton:{
        borderRadius: 25,
        height: 50,
        flex: 0.5,
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
        
        //marginBottom:'10%',
        backgroundColor: '#ff277b',
        marginTop:'5%',
        marginBottom:'5%',
    },
}