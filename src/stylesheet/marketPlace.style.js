
import { Dimensions, Platform } from "react-native";

const { height, width } = Dimensions.get('window');
const deviceHeight = height;
let deviceWidth = width;

export default {
    container: {
        flex: 1,
    },
    textButtonTitle: {
        fontSize: 16,
        color:'white',
        fontWeight:'500',
        
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
        backgroundColor: '#ff277b'
    },
}