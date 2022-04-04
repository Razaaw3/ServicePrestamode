import {Dimensions,StyleSheet} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    MainContainer : {
        backgroundColor:CommonStyle.AppThemeDark,
        // height:windowHeight*1.0,
        height:'100%',
    },
    MainDrawer:{
      width:'100%',
      // height:windowHeight*1.0,
      backgroundColor:CommonStyle.AppThemeDark
    },
    HeaderContainer:{
        backgroundColor:CommonStyle.white,
        height:126,
        width:'100%',shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
        paddingHorizontal:20,
        paddingVertical:15
    },
    tabContainer:{
        paddingHorizontal:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#DCE5F4',
        height:34,
        width:'87%',
        marginLeft:'auto',
        marginRight:'auto',
        marginVertical:20,
        borderRadius:7
    },
    tabContainer2:{
    flexDirection:'row',
    height:26,
    backgroundColor:'white',
    borderRadius:8,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
paddingHorizontal:5,
paddingVertical:3

    },
    inputFields:{
        backgroundColor:CommonStyle.white,
        height:43,
        width:'85%',
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius:9,
        flexDirection:'row',
        marginVertical:5,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.29,
shadowRadius: 4.65,

elevation: 7,
    },
    inputFieldDropdown:{
        backgroundColor:CommonStyle.white,
        height:'auto',
        width:'85%',
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius:9,
        flexDirection:'row',
        marginVertical:5,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.29,
shadowRadius: 4.65,

elevation: 7,
    },
    sliderContainer:{
        marginHorizontal:25,
        marginVertical:5
    },
    inputField:{
        backgroundColor:CommonStyle.white,
        width:'87%',
        borderRadius:9,
        flexDirection:'row',
borderWidth:0

    },
    ButtonContainer: {
        // width: windowWidth * 1.0,
        // height: windowHeight * 0.08,
      },
      Buttontext: {
        fontSize: 16,
        textAlign: 'center',
        color: CommonStyle.white,
        fontFamily: CommonStyle.Regular,
      },
})
export default styles;