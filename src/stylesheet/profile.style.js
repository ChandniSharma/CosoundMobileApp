import { Dimensions, Platform } from "react-native";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

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
     seeMoreBtn:{
        marginTop:'1%',
        marginBottom:'1%',
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
        backgroundColor: 'white'
    },
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
    imgMenu:{
       margin:'5%',
    },
    imgMainTitle:{
      alignSelf:'center',
      margin:'5%',

    },
    viewTopBackground: {
        width: deviceWidth+80,
        height: 220,
        borderBottomLeftRadius: deviceWidth/2+40,
        borderBottomRightRadius: deviceWidth/2+40,
        backgroundColor: '#20ACAC',
        marginTop:'-20%',
        alignSelf:'center',
    },
    searchView: {
        
        marginTop:60,
        alignSelf:'flex-end',
        marginRight:10,
        justifyContent: 'center',
       flex: 0.2,
      
        width: 40,
        height: 40,
    },
    imgMenuBar:{
        width: 40,
        height: 40,
        tintColor:'white',
        alignSelf:'flex-end',
    },
    imgUser: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
    },
    textPremium:{
        color: 'rgba(255, 255, 255, 0.52)',
        fontSize: 14,
        fontFamily: 'Montserrat-regular',
    },

    textUserName: {
        color: '#262626',
        fontSize: 34,
        fontFamily: 'Montserrat-regular',
    },

    textDesignation: {
        color: 'rgba(38,38,38,0.52)',
        fontSize: 14,
        fontFamily: 'Montserrat-light',
    },

    textConnection: {
        color: 'rgba(38,38,38,0.52)',
        fontSize: 14,
        fontFamily: 'Montserrat-light',
    },
    textLikeCount: {
        color: '#8E8E8E',
        fontSize: 12,
        fontFamily: 'Montserrat-light',
    },
    textConnectionCount: {
        marginTop: 10,
        color: '#20ACAC',
        fontSize: 20,
        fontFamily: 'Montserrat-light',
    },
    postDescription: {
        flex: 1,
        color: '#262626',
        fontSize: 13,
        fontFamily: 'Montserrat-light',
    },
    postOptionView:{
        backgroundColor: 'rgb(245,245,245)', 
        width:scale(130),
        height: verticalScale(190),
        top:'10%',
        marginRight:'3%',
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            width: .5,
            height: .5
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        borderBottomLeftRadius:10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius:10,
        alignSelf: 'flex-end',
        position: 'absolute',
    },
    postOptionViewDelete:{
        backgroundColor: 'white', 
        width:scale(130),
        height: verticalScale(40),
        top:'10%',
        marginRight:'3%',
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            width: .5,
            height: .5
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        borderBottomLeftRadius:10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius:10,
        alignSelf: 'flex-end',
        position: 'absolute',
    },
    textDescription: {
        color: '#262626',
        fontSize: 13,
        fontFamily: 'Montserrat-light',
        fontSize: 15, marginTop: 20, textAlign: "justify"
    },
    titleFollow: {
        color: '#20ACAC',
        fontSize: 15,
        fontFamily: 'Montserrat-light',
    },
    postOptionText: {
        color: '#8E8E8E',
        fontSize: 13,
        fontFamily: 'Montserrat-light',
        marginLeft:'3%'
    },
    myMusicTitle: {
        flex: 9,
        color: "#262626",
        fontSize: 20,

        fontFamily: 'Montserrat-Regular',
        marginTop: 5,
    },
    musicPlus:
    {
        flex: 1,
        // color:"#262626",
        color: 'purple',
        fontSize: 30,
        fontFamily: 'Montserrat-Regular',
        //marginBottom:10,
       // backgroundColor:'red',
        alignSelf:'center',
        paddingBottom:5
        
    },
    plusCircle: {
        color: '#8E5ACD',
        marginBottom:5,
        marginRight:'2%'
    },
    midView: {
        marginTop: "5%", marginBottom: "5%", width: "100%", justifyContent: "center", height: 1, backgroundColor: "#d3d3d3", flexDirection:'row'
    },
    musicTitle: {
        color: 'rgba(38,38,38,0.52)',
        fontSize: 16,
        fontFamily: 'Montserrat-light',
        marginBottom:'2%'
    },
    musicDescription: {
        color: '#262626',
        fontSize: 16,
        fontFamily: 'Montserrat-light',
    },
    viewMusicImage: {
        width: "100%",
        backgroundColor: "#d3d3d6",
    },
    musicAnimatedImg: {
        width: "100%", height: 50
    },
    musicCurrentTime:
    {
        flex: 8.5,
        color: "#262626",
        fontSize: 12,
        marginTop: 5,
        fontFamily: 'Montserrat-light',
    },

    musicDuration: {
        flex: 1.5,
        color: "#262626",
        fontSize: 12,
        fontFamily: 'Montserrat-light',
    },
    textCommentCount: {
        color: "rgba(38,38,38,0.52)",
        fontSize: 12,
        fontFamily: 'Montserrat-light',
    },
    songTitle: {
        fontSize: 14,
        color: "#262626",
        fontFamily: 'Montserrat-light',
    },
    songDuration: {
        flex: 1,
        fontSize: 12,
        color: "#262626",
        fontFamily: 'Montserrat-light',

    },
    viewMore: {
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    viewMoreImage: { padding: 10, marginTop: 10, justifyContent: "center", alignItems: "center" },

    textViewMore: {
        flex: 1.5,
        color: "#ff277b",
        fontSize: 14,
        fontFamily: 'Montserrat-light',
    },

    viewImagesOutside: {
        width: "100%",
        backgroundColor: "white",
        marginTop: 20,
        padding: 10,
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.2,
    },
    viewImagesInside: { width: "100%", justifyContent: "center", flexDirection: "row" },

    myImagesTitle:
    {
        flex: 9,
        color: "#262626",
        fontSize: 20,
        marginTop: 5,
        fontFamily: 'Montserrat-Regular',
    },

    myImagePlus: {
        flex: 1,
        color: "#262626",
        fontSize: 30,
        fontFamily: 'Montserrat-Regular',
    },

    videoPlaceholder: {
        width: 100,
        height: 100,
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            width: 0.8,
            height: 0.8
        },
        shadowOpacity: 0.2,
        zIndex: -1
    },
    buttonClose: {
        width: 60,
        height: 60,
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            width: 0.8,
            height: 0.8
        },
        shadowOpacity: 0.2,
        position: "relative",
        right: "-50%",
        top: "-20%",
        zIndex: 999
    },
    viewWriteSomething: {
        width: "100%",
        backgroundColor: "white",
        marginTop: 20,
        padding: 10,
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.2,
    },
    textWriteSomething: {
        height: 100,
        justifyContent: "flex-start",
        fontSize: 16,
        color: "#d3d3d3",

        fontFamily: 'Montserrat-Regular'
    },
    textUserName: {
        fontSize: 15,
        color: "#262626",
        fontFamily: 'Montserrat-Regular'
    },

    textStyle: {
        height: 100, justifyContent: "flex-start", padding: 10,
        fontSize: 16,
        color: "#262626",

        fontFamily: 'Montserrat-Regular'
    },
    music: {
        color: "#262626", fontSize: 14, paddingLeft: 5,
       
       
    },
    video: {
         fontSize: 14, paddingLeft: 5
    },
    Images: {
        fontSize: 14,
       paddingLeft:5,
    },
    videoIcon: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    imageIcon: {
        paddingLeft: 15,
    },
    viewBottomContent: {
        flexDirection: 'row',
        height: 30,
        marginBottom:'5%'
    },
    viewLoginButton: {
        flex: 1,
        flexDirection: 'row',
        marginTop: '7%',
        marginBottom: "7%",
        marginLeft: "10%",
        marginRight: "10%",
        padding: 10
    },
    loginButton: {
        padding: 5,
        borderRadius: 22,
        height: 40,
        width: 160,
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
        backgroundColor: 'white',
        marginRight: 10,

    },

    viewPostButton: {
        flex: 1,
        marginTop: '4%',
        marginBottom: "7%",
        marginLeft: "10%",
        padding: 10

    },
    postButton: {
        alignSelf: "flex-end",
        padding: 5,
        borderRadius: 22,
        height: 40,
        width: 120,
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
        backgroundColor: 'white',
    },
    viewBottom: {
        width: "100%", height: "15%", 
        backgroundColor: "rgb(52,52,52)", 
        marginBottom: "15%", padding: 5, 
        justifyContent: "center", 
        alignItems: "center"
    },
    imageButton: {
        padding: 5,
        borderRadius: 22,
        height: 40,
        width: 100,
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
        backgroundColor: 'white',
    },
    textLoginButtonTitle: {
        fontSize: 16,
        color: 'rgb(255, 38, 123)',

    },
    imageSendArraow: {
        width: 20,
        height: 20,
        tintColor: '#20ACAC',
    },
 viewBottomWhenScroll:{
    width:'100%',
    height:'10%',
    backgroundColor:'white',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
        width: 0,
        height: 0
    },
    shadowOpacity: 0.2,
    bottom:0
 },
 imgUserInBottom:{
   width: 60,
   height: 60, 
   borderRadius: 30,
   marginRight:'5%'
 },
 imgUserInComments:{
    width: 50,
    height: 50, 
    borderRadius:25,
    marginRight:'2%'
 },
 userNameInBottom:{
    fontSize: 20,
    color: "#262626",

    fontFamily: 'Montserrat-Regular'
 },
 JobDetailInBottom:{
     marginTop:'2%',
    fontSize: 12,
    color: "rgba(38,38,38,0.52)",
    fontFamily: 'Montserrat-light'
 },
 menuIcon:{
   margin:'30%',

 },
 textTitle: {
    // marginTop: '2%',
    // marginBottom: '2%',
    alignSelf: 'center',
    fontSize: 24,
    color: '#262626',
    fontFamily: 'Montserrat-light',
    // fontWeight:'100',
},
textSubTitleNotSelected: {
    // marginTop: '20%',
    // marginBottom: '10%',
    fontSize: 15,
    color: '262626',
    fontFamily: 'Montserrat-light',
    marginLeft:5,
    // fontWeight:'100',
},
textSubtitleSelected: {
    // marginTop: '20%',
    // marginBottom: '10%',
    fontSize: 16,
    color: '#8E5ACD',
    fontFamily: 'Montserrat-light',
    // marginLeft: '2%',
    alignSelf:'flex-start',
},
textDescComment: {
    fontSize: 14,
    color: 'rgba(38,38,38,0.52)',
    fontFamily: 'Montserrat-light',
    marginLeft:'1%',
    marginTop:'2%',
    marginRight:'5%',

},
textNotificationTime: {
    fontSize: 12,
    color: 'rgba(38,38,38,0.52)',
    fontFamily: 'Montserrat-light',
    right:'2%'
},

}


