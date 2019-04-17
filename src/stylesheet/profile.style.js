import { Dimensions, Platform } from "react-native";

const { height, width } = Dimensions.get('window');
const deviceHeight = height;
let deviceWidth = width;
let top;
const statusBarHeight = Platform.OS === 'ios' ? 0 : 0;

export default{

container: {
        flex: 1,
    },
    imgUser:{
    width: 100, 
    height:100,
    borderRadius:50,
    alignSelf:'center',
    },
textUserName:{
    color:'#262626',
    fontSize:34,
    fontFamily: 'Montserrat-regular',
},

textDesignation:{
 color:'rgba(38,38,38,0.52)',
 fontSize:14, 
 fontFamily:'Montserrat-light',
},
textConnection:{
    color:'rgba(38,38,38,0.52)',
    fontSize:14, 
    fontFamily:'Montserrat-light',
},
textConnectionCount:{
    marginTop:10,
    color:'#20ACAC',
    fontSize:20, 
    fontFamily:'Montserrat-light',
 },
textDescription:{
    color:'#262626',
    fontSize:13, 
    fontFamily:'Montserrat-light',
    fontSize:15,marginTop:20,textAlign:"justify"
   },
   titleFollow:{
    color:'#20ACAC',
    fontSize:13,
    fontFamily:'Montserrat-light',
   },
   myMusicTitle:{
    flex:9,colo:"black",fontSize:25,marginTop:5,
   },
   musicPlus:
   {
    flex:1,
    colo:"black",
    fontSize:30
    },
    midView:{
        marginTop:"5%",marginBottom:"5%",width:"100%",justifyContent:"center",height:0.5,backgroundColor:"#d3d3d3"
    },
    videoPlaceholder:{
        width:100,
        height:100,
        borderRadius:10,
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            width: 0.8,
            height: 0.8
        },
        shadowOpacity: 0.2,
        zIndex:-1
    },
    buttonClose:{
        width:60,
        height:60,
        borderRadius:10,
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            width: 0.8,
            height: 0.8
        },
        shadowOpacity: 0.2,
        position:"relative",
        right:"-50%",
        top:"-20%",
        zIndex:999
    },
    viewLoginButton: {
        flex: 1,
        flexDirection: 'row',
        marginTop:'7%',
        marginBottom:"7%",
        marginLeft:"10%",
        marginRight:"10%",
        padding:10
    },
    loginButton: {
        padding:5,
        borderRadius: 22,
        height: 40,
        width:160,
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
        marginRight:10,

    },

    viewPostButton: {
        flex: 1,
        marginTop:'4%',
        marginBottom:"7%",
        marginLeft:"10%",
        padding:10

    },
    postButton: {
        alignSelf:"flex-end",
        padding:5,
        borderRadius: 22,
        height: 40, 
        width:120,
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
    },
    imageButton: {
        padding:5,
        borderRadius: 22,
        height: 40,
        width:100,
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
    },
    textLoginButtonTitle: {
        fontSize: 16,
        color:'rgb(33,180,174)',
    },


}