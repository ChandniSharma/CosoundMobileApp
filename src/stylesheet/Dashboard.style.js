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
    scrollView: {
        flex:1, 
        zIndex: 1
      },
    
    viewUserPhoto:{
        marginTop:"30%",
        height:80,width:80,
        borderRadius:40,
        elevation:3,
        backgroundColor:"white",
        alignSelf:"center",
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.8,
    },
    textUserName:{
        fontSize:40,padding:5
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