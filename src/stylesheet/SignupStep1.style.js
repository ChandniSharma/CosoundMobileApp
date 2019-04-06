import { Dimensions, Platform } from "react-native";

const { height, width } = Dimensions.get('window');
const deviceHeight = height;
let deviceWidth = width;
let top;
const statusBarHeight = Platform.OS === 'ios' ? 0 : 0;

export default{
    
    errorText:{
        margin:'2%',
        color:'red',
        alignSelf:'center',
    },
    container: {
        flex: 1,
    },
    leftView:{
        marginTop:'15%',
        alignSelf:'flex-end',
        flex:0.4,
       // backgroundColor:'red'
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
    textDull:{
        color:'rgba(255,255,255,0.72)',
        fontFamily:'Montserrat-Regular',
       // fontWeight:'200',
        fontSize:12,
    },
    getStarted:{
        color:'white',
        fontFamily:'Montserrat-Regular',
        //fontWeight:'200',
        fontSize:14,
        marginRight:'5%',
        alignSelf:'flex-end',
    },
    loginText:{
        marginTop:'10%',
        marginBottom:'10%',
        alignSelf:'center',
        fontSize:30,
        color:'white',
        fontFamily:'Montserrat-Regular',
       // fontWeight:'100',
    },
    
    inputStyle:{
      marginLeft: '5%',
      marginRight:'5%',
      height:60,
      backgroundColor:'white',
      marginTop:'5%',
      shadowColor: 'rgba(0,0,0,0.7)',
        shadowOffset: {
            width: 2,
            height: 4
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        borderRadius:8,
        fontFamily:'Montserrat-Regular',
        fontWeight:'300',
        fontSize:16,
        color:'#262626',
        paddingTop: 21,
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 30 ,
    },
    viewForgotPwd:{

    },
    viewSelected:{
        alignSelf:'center',
        flexDirection:'row'
   },
   viewNotSelected:{
       // alignSelf:'center',
       marginLeft:'22.5%',
        flexDirection:'row',
        
   },
   viewProgressbar:{
      marginTop:'5%',
      marginBottom:'5%',
      height:500,
   },
    textSelected:{
      marginLeft:'5%',
      marginTop:'2.5%',
      fontFamily:'Montserrat-Regular',
      fontSize:18,
      color: '#2A8B8B',
    },
    textNotSelected:{
        marginLeft:'5%',
        fontFamily:'Montserrat-Regular',
        fontSize:18,
        color:'gray'
    },
    viewCircleFilled:{
        width:50,
        height:50,
        borderRadius:25,
        backgroundColor:'rgb(60,205,53)',
        borderColor: 'gray',
        borderWidth: .2,
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            width: .5,
            height: .5
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        alignItems: 'center',
        alignSelf:'center',
        justifyContent:'center'
    },
    viewCircleEmpty:{
        width:30,
        height:30,
        borderRadius:15,
        backgroundColor:'rgb(225,225,225)',
        borderColor: 'gray',
        borderWidth: .2,
        shadowColor: 'rgba(0,0,0,0.7)',
        shadowOffset: {
            width: .5,
            height: .5
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        marginLeft:'4%',
        //marginTop:'-2%'
        // marginLeft:'-%',
       
    },
    viewSingleLine:{
        width:'3.5%',
        height:'20%',
        backgroundColor:'white',
        borderColor: 'gray',
        borderWidth: .2,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: .5,
            height: .5
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        borderRadius:.2,
        marginLeft:'27.5%'
    },
    
    tickMarkView:{
        width:20,
        height:20,
        flex:0.05,
        marginRight:'3%',
        borderColor: 'gray',
        borderWidth: .2,
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            width: .5,
            height: .5
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        borderRadius:.2,
        alignItems: 'center',
        justifyContent:'center'
    },
    imgTickMark:{
        width:34,
        height:34,
        tintColor:'white',
    },
    rememberBtn:{
        flex:0.45,
        marginTop:'1%',
        height:20
      //  backgroundColor:'green',
    },
    rememberText:{
        color: 'rgb(37,182,173)'
    },
    forgotPwdBtn:{
        flex:0.5,
        //alignSelf:'flex-end',
        marginTop:'1%',
       
    },
    forgotPwdText:{
       alignSelf: 'flex-end',
       height:20
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
        marginTop:"5%",
        marginBottom:'5%',
        justifyContent:'center',
    },
    socialMediaLoginView:{
        flexDirection: 'row',
        marginTop: '20%',
        marginBottom: '2%',
       // backgroundColor:'yellow',
        flex:1,
        height:60,
        marginLeft:'5%',
        marginRight:'5%',
    },
    fbText:{
      color:'#4867AA',
      fontFamily:'Montserrat-Hairline',
      fontSize:16,
         fontWeight:'300',
    },
    twitterText:{
        fontFamily:'Montserrat-Hairline',
        color:'#1CA1F3',
        fontSize:16,
         fontWeight:'300',
       
    },
    googlePlusText:{
        color:'#EA4336',
        fontSize:16,
        fontFamily:'Montserrat-Hairline',
        fontWeight:'300',
       
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
        marginRight:'2%'
    },
    viewCenterButton:{
      marginBottom:'10%'
    },
    buttonCenter: {
        borderRadius: 22,
        height: 55,
        width:200,
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
        alignSelf:'center',
       
        
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
        marginLeft:'2%'
    },
    textButtonTitle: {
        fontSize: 16,
        color:'white',
        fontWeight:'500',
        alignSelf:'center',
        marginBottom:'14%'
    
    },
    viewShareButtons: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        flex:0.4,
       
        height:50,
        marginBottom:'5%',
        marginLeft:'13%',
        marginRight:'2%'
    },
    textColorTemp:{
       // color: 'white',
    },
    textBottomMark: {
        marginTop: 20,
       // marginBottom: 20,
        fontSize: 14,
        color: 'white',
        marginLeft: '5%',
        flex:0.6,
    },
    shareButtons: {
        width: 15,
        height: 15,
       
    },
    viewBottom:{
        flex:0.1,
        marginBottom:0,
        backgroundColor:'black',
       //alignItems: 'space-between',
       justifyContent:'center',
       flexDirection:'row',
    },
    imgMainTitle:{
        alignSelf: 'center',
        width:200,
        height:40,
        marginTop:'5%',
    },
    textWelcome:{
        color: 'white',
        fontSize: 28,
        alignSelf:'center',
        marginTop:'5%', 
        marginBottom:'5%',
        fontFamily: 'Montserrat-Regular',
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
    
}