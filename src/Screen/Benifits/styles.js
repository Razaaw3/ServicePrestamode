import {Dimensions,StyleSheet} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    MainContainer : {
        backgroundColor:CommonStyle.pureWhite,
        width:windowWidth*1.0,
        height:windowHeight*1.0,
        paddingBottom:84
    },
    HeaderContainer:{
        backgroundColor:CommonStyle.white,
        height:126,
        width:'100%',
        shadowColor: "#000",
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
    container:{
        width:289,
        height:90,
        // backgroundColor:'red',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        marginTop:50
    },
    ImagesStyle: {
        width:'100%',
        height:'100%'
      },
      borderContainer:{
          flexDirection:'row',
          alignItems:'center',
          marginHorizontal:30,
          borderBottomWidth:1,
          borderBottomColor:'#E4EBF9',
      },
      whiteContainer:{
          backgroundColor:CommonStyle.AppThemeLight,
          paddingVertical:15,
        
      },
      inputFields:{
          width:'90%',
          height: 43,
          backgroundColor:CommonStyle.pureWhite,
          alignSelf:'center',
          borderRadius:7,
          shadowColor: "#000",
          shadowOffset: {
              width: 0,
              height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          
          elevation: 4,
        marginVertical:10,
        justifyContent:'center'

      },
      inputField:{
        width:'90%',
        height: 160,
        backgroundColor:CommonStyle.pureWhite,
        alignSelf:'center',
        borderRadius:7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
      marginVertical:10,

    },
      inputContainer:{
        //   marginVertical:5
        marginTop:35
      },
      ButtonContainer: {
        width: windowWidth * 1.0,
        height: windowHeight * 0.075,
      },
      Buttontext: {
        fontSize: 16,
        textAlign: 'center',
        color: CommonStyle.white,
        fontFamily: CommonStyle.Regular,
      },
})
export default styles;