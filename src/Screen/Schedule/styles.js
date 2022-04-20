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
        paddingHorizontal:40,
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
    ButtonContainer: {
        // width: windowWidth * 1.0,
        // height: windowHeight * 0.08,
      },
      Buttontext: {
        fontSize: 14,
        // textAlign: 'center',
        color: CommonStyle.dark,
        fontFamily: CommonStyle.Regular,
      },
      Buttontexts: {
        fontSize: 14,
        textAlign: 'center',
        color: CommonStyle.white,
        fontFamily: CommonStyle.Regular,
      },
      time:{backgroundColor:'white',height:55,width:150,justifyContent:'center',alignItems:'center',margin:15,shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      
      elevation: 3,}
})
export default styles;