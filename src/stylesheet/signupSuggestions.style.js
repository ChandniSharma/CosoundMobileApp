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
        fontWeight:'300',
    },
    viewDescription:{
        marginLeft:'10%',
        marginRight:'10%',
        marginBottom:'2%',
        marginTop:'5%'
    },
    textMusicDescription2: {
        color: 'rgba(38,38,38,0.52)',
        fontSize: 16,
       // alignSelf:'center',

        marginTop:'1%', 
        marginBottom:'5%',
        fontFamily: 'Montserrat-Light',
    },
}