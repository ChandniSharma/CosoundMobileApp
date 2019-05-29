
import { Dimensions, Platform } from "react-native";

const { height, width } = Dimensions.get('window');
const deviceHeight = height;
let deviceWidth = width;

export default {
   

    container: {
        flex: 1,
    },

    textSpotify: {
        fontSize: 18,
        color: 'rgba(38, 38, 38, 0.52)',
        fontFamily: 'Montserrat-light',
        marginLeft: '5%',
        marginTop:'5%'
    },
    textListTitle:{
        fontSize: 26,
        color: '#262626',
        fontFamily: 'Montserrat-Regular',
        marginLeft: '5%',
        marginTop:'5%',
        marginBottom:'10%',

    },
    textPrice:{
        fontSize: 34,
        color: '#8E5ACD',
        fontFamily: 'Montserrat-light',
        marginLeft: '5%',
        marginBottom:'10%'
    }, 
    textDeliveryTime:{
        fontSize: 14,
        color: 'rgba(38, 38, 38, 0.52)',
        fontFamily: 'Montserrat-light',
        marginLeft: '2%',
        marginBottom:'10%'
    },
    titleCarousel: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Montserrat-light',
        marginLeft: '5%',
        marginBottom: '3%',
        //padding: '5%',
    },
    titleMainCarousel: {
        color: 'white',
        fontSize: 36,
        fontFamily: 'Montserrat-light',
        marginLeft: '5%',
        marginBottom: '10%',
        padding: '5%'
    },
    descriptionCarousel: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Montserrat-light',
        marginLeft: '5%',
        marginBottom: '5%',
        marginRight: '5%',
        
    },
personalRecommended:{
    marginTop:'5%',
    fontSize: 20,
    fontFamily: 'Montserrat-light',
    marginLeft: '5%',
    marginBottom: '5%',
    color:'#262626',
    alignSelf: 'center',
},
textTop:{
    color: '#20ACAC',
    fontSize: 13,
    fontFamily: 'Montserrat-light',
    textDecorationLine: 'underline',
    marginLeft:'2%',
    marginRight:'2%'

},
    textJobDescription: {
        color: '#262626',
        fontSize: 14,
        fontFamily: 'Montserrat-light',
        textAlign:'center',
    },
    viewSubtotal:{
        
        // shadowColor: 'rgba(0,0,0,0.12)',
        // shadowOffset: {
        //     width: 0.9,
        //     height: 1
        // },
        // shadowOpacity: 0.6,
        // shadowRadius: 3,
        backgroundColor:'white'
    },
    ViewSingleLine:{
        shadowColor: 'rgba(0,0,0)',
        shadowOffset: {
            width: 0.2,
            height: 0.8
        },
        shadowOpacity: 0.9,
        shadowRadius: 0.8,
       height:0.5,
       width:'95%',
      backgroundColor:'rgba(245,245,245, 0.3)',
       alignSelf:'center'
    },

    viewTotal:{
        alignSelf:'center', marginBottom:'2%', 
        shadowColor: 'rgba(0,0,0,0.12)',
        shadowOffset: {
            width: .4,
            height: .11
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
    },
    seeMoreBtn:{
        borderRadius: 25,
        height: 50,
        
        alignItems: 'center',
        justifyContent: 'center',
      
        shadowColor: 'rgba(0,0,0,0.12)',
        shadowOffset: {
            width: .4,
            height: .11
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,

        //marginBottom:'10%',
        backgroundColor: '#ff277b'
    },
    loginButton: {
        borderRadius: 25,
        height: 50,
        flex: 0.5,
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

        //marginBottom:'10%',
        backgroundColor: '#ff277b'
    },
}