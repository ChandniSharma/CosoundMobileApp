import { Dimensions, Platform } from "react-native";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const { height, width } = Dimensions.get('window');
const deviceHeight = height;
let deviceWidth = width;
let top;
const statusBarHeight = Platform.OS === 'ios' ? 0 : 0;

export default {

    container: {
        flex: 1,
    },
    
    textComment: {
        color: 'rgba(38, 38, 38, 0.52)',
        fontSize: 14,
        fontFamily: 'Montserrat-light',
       // backgroundColor:'red',
        // marginLeft:'-5%'

    },
}