
import { Dimensions, Platform } from "react-native";

const { height, width } = Dimensions.get('window');
const deviceHeight = height;
let deviceWidth = width;

export default {
    containerSafeArea: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#131420',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
    },
    textButtonTitle: {
        fontSize: 16,
        color: 'white',
        fontWeight: '500',
        
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
    titleAccount: {
        color: '#262626',
        fontSize: 14,
        fontFamily: 'Montserrat-light',
        // marginLeft:'-5%'

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