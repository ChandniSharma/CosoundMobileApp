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
     buttonText:{
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
    }
}