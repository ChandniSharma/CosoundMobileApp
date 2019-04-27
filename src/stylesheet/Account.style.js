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
    titleAccount:{
        color: 'black',
        fontSize: 20,
        fontFamily: 'Montserrat-Regular',
    
    },
    buttonSettings:{
 height: 40,
 backgroundColor:'green',
 margin:'2%'
    },
    imgMenu:{
       margin:'5%',
    },
    imgMainTitle:{
      alignSelf:'center',
      margin:'5%',

    },
    imgMenuBar:{
        width: 40,
        height: 40,
        tintColor:'white',
        alignSelf:'flex-end',
    },
    viewTopBackground: {
      width:'100%',
      height:300,  
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
    viewBottomContent: {
        flexDirection: 'row',
        height: 30,
        
    },
    bellButton: {
        width: 64,
        height: 64,
        right: '5%',
        alignSelf:'flex-end',
        marginTop: '5%',
       
    },
    bellIcon: {
        width: 64,
        height: 64,
    },
    imgUser: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
    },
    textUserName: {
        color: '#ffffff',
        fontSize: 34,
       // fontFamily: 'Montserrat-regular',
        marginBottom: '10%',
        alignSelf:'center',
    },
}