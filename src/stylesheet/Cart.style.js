import { Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');
const deviceHeight = height;
let deviceWidth = width;

export default {

    container: {
        flex: 1,
    },
    errorText: {
        margin: '2%',
        color: 'red',
        alignSelf: 'center',
    },
    seeMoreBtn:{
        marginTop:'1%',
        marginBottom:'1%',
        borderRadius: 25,
        height: 50,
        flex: 0.3,
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
        backgroundColor: 'white'
    },
    topUserImage: {
        marginTop: "5%",
        width: 100,
        borderRadius: 50, elevation: 3,
        backgroundColor: "white",
        alignSelf: "center",
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.8,
        marginBottom: '5%',
    },
    textButtonTitle: {
        fontSize: 16,
        color: 'white',
        fontWeight: '500',
    },
    textCartButtonTitle: {
        color: '#ff277b',
        fontSize: 16,
        fontWeight: '500',

    },
    viewSubtotal:{
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
    findingView: {
        backgroundColor: 'white',
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewLoginButton:{
        marginLeft: "15%",
        marginRight: "15%",
        marginBottom:'10%',
        marginTop: '2%' 
    },
    loginButton: {
        borderRadius: 25,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0,0.12)',
        shadowOffset: {
            width: .4,
            height: .11
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        alignSelf:'center',
        backgroundColor: '#ff277b'
    },
    imgSideTitle: {
        color: 'white',
        margin: '2%',
        alignSelf: 'flex-start',
        flex: 0.3,
        width: 50,
        height: 40
    },
    titleAccount: {
        color: '#262626',
        fontSize: 26,
        fontFamily: 'Montserrat-light',
    },
    findingView: {
        backgroundColor: 'white',
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonSettings: {
        height: 40,
        marginLeft: '2%',
        marginRight: '2%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textSettings: {
        color: 'rgba(38,38,38,0.52)',
        fontSize: 12,
        fontFamily: 'Montserrat-light',
    },

    textRatingCount: {
        color: 'rgba(38,38,38,0.52)',
        fontSize: 14,
        fontFamily: 'Montserrat-light',

    },
    textServiceTitle: {
        color: '#262626',
        fontSize: 16,
        fontFamily: 'Montserrat-light',
        backgroundColor:'white',
    },
    textPrice: {
        color: '#8E5ACD',
        fontSize: 26,
        fontFamily: 'Montserrat-light',
    },
    imgMenu: {
        margin: '5%',
    },
    imgMainTitle: {
        alignSelf: 'center',
        margin: '5%',
    },
    inputStyle: {
        marginLeft: '5%',
        marginRight: '5%',
        height: 60,
        backgroundColor: 'white',
        marginTop: '5%',
        shadowColor: 'rgba(0,0,0,0.7)',
        shadowOffset: {
            width: 2,
            height: 4
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        borderRadius: 8,
        fontFamily: 'Montserrat-Regular',
        fontWeight: '300',
        fontSize: 16,
        color: '#262626',
        paddingTop: 21,
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
    },
    searchBarView: {
        flexDirection: 'row',
        margin: '5%',
        height: 60,
        borderRadius: 25,

    },
    inputSearchStyle: {
        height: 60,
        fontFamily: 'Montserrat-Regular',
        fontWeight: '300',
        fontSize: 16,
        width: '70%',
        color: 'black',
        marginLeft: '15%',
    },
    btnBottomMob: {
        marginLeft: '5%',
        marginRight: '5%',
        height: 60,
        backgroundColor: 'red',
        shadowColor: 'rgba(0,0,0,0.7)',
        shadowOffset: {
            width: 2,
            height: 4
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        borderRadius: 8,
    },
    viewForgotPwd: {
    },
    rememberView: {
        flexDirection: 'row',
        flex: 1,
        marginTop: '5%',
        marginBottom: '5%',
        marginLeft: '5%',
        marginRight: '5%',
        height: 30,
    },
    imgMenuBar: {
        width: 40,
        height: 40,
        tintColor: 'white',
        alignSelf: 'flex-end',
    },
    viewTopBackground: {
        width: '100%',
        height: 300,
    },
    searchView: {
    },
    bckgndImage: {
    },
    imgMenuBar: {
        width: 40,
        height: 40,
        tintColor: 'white',
        alignSelf: 'flex-end',
    },
    viewBottomContent: {
        flexDirection: 'row',
        height: 30,
    },
    bellButton: {
        width: 64,
        height: 64,
        right: '5%',
        alignSelf: 'flex-end',
        marginTop: '5%',
    },
    bellIcon: {
        width: 64,
        height: 64,
    },
    imgUser: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    textSummary: {
        color: '#262626',
        fontSize: 16,
        fontFamily: 'Montserrat-light',
    },
    textDays:{
        color: '#262626',
        fontSize: 14,
        fontFamily: 'Montserrat-light',
    },

    textSubtotal: {
        color: 'rgba(38, 38, 38, 0.52)',
        fontSize: 14,
        fontFamily: 'Montserrat-light',
    },
    textSubtotalValue: {
        color: '#262626',
        fontSize: 14,
        fontFamily: 'Montserrat-light',
    },

    textUserName: {
        color: '#ffffff',
        fontSize: 34,
        // fontFamily: 'Montserrat-regular',
        marginBottom: '10%',
        alignSelf: 'center',
    },
    viewButtons:
    {
        flexDirection: "row",
        backgroundColor: 'red',
        marginTop: '10%',
        height: 70,
        marginBottom: '2%',
        alignItems: 'center'
    },
    viewDropDown: {
        backgroundColor: 'white',
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewModalAccount: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: deviceWidth,
        height: deviceHeight - 44,
        position: 'absolute'
    },
    flatList: {
        width: '100%',
        marginBottom: '10%'
    },
    flatListSearchbar: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 15,
        marginTop: -20,
        alignSelf: 'center'
    },
    viewModal: {
        backgroundColor: 'black',
        width: deviceWidth,
        height: deviceHeight,
        position: 'absolute'
    },
    viewPremium: {
        flexDirection: 'row',
        flex: 1,
        alignSelf: 'center',
        marginTop: '2%'
    },
    btnPremium: {
        backgroundColor: 'white',
        width: '40%',
        height: 40,
        borderRadius: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: '2%',
    },
    textModalData: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Montserrat-light',
        alignSelf: 'center'
    },
}