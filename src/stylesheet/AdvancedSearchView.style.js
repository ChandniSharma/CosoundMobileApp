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
    container:{
        flex: 1,
    },
    containerNotification: {
        flex: 1,
        position:'absolute',
       // marginTop:44,
        width:deviceWidth,
        height:deviceHeight-44,
        backgroundColor:'rgb(255, 255,255)',
        marginBottom:'12%'
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

    noNotificationText:{
       
       // marginBottom:'10%',
        alignSelf:'center',
        fontSize:24,
       color:'#262626',
        fontFamily:'Montserrat-light',
       // fontWeight:'100',
    },

    loginText:{
        marginTop:'20%',
        marginBottom:'10%',
        alignSelf:'center',
        fontSize:24,
       color:'#262626',
        fontFamily:'Montserrat-light',
       // fontWeight:'100',
    },
    textSideTitle:{
       fontSize:14,
       fontFamily:'Montserrat-light',
       marginTop: '5%',
       marginLeft: '5%',
       color:'#262626',
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
    
    rememberView:{
        flexDirection: 'row', 
        flex:1,
        marginTop:'5%',
        marginBottom:'5%',
        marginLeft:'5%',
        marginRight:'5%',
        height:50,
    },
    tickMarkView:{
        width:204,
        height:24,
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
        width:24,
        height:24
    },
    rememberBtn:{
        flex:0.45,
        marginTop:'1%',
        height:20
      //  backgroundColor:'green',
    },
    rememberText:{
        color: 'rgb(37,182,173)',
        width:300,
      
    },
    rememberTextNotSelected:{
       
        width:300,
        //backgroundColor:'red',
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
        width:'50%',
        //flex: 0.8,
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
        alignSelf:'center',
        //marginBottom:'10%',
        backgroundColor: '#ff277b'
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

    // Notification view styles 

    topView: {
        backgroundColor: 'rgb(245,245,245)',
        height:'5%',
        width:'100%', 
        justifyContent:'center',
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
        fontSize: 16,
        color: '#20ACAC',
        fontFamily: 'Montserrat-light',
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
    textDescription: {
        fontSize: 14,
        color: 'rgba(38,38,38,0.52)',
        fontFamily: 'Montserrat-light',
        margin:'2%',
    },
    textNotificationTime: {
        fontSize: 12,
        color: 'rgba(38,38,38,0.52)',
        fontFamily: 'Montserrat-light',
        
        right:'2%'
    },
    
}