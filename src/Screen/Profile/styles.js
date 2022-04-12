import {Dimensions,StyleSheet} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    MainContainer : {
        backgroundColor:CommonStyle.AppThemeDark,
        width:windowWidth*1.0,
        height:windowHeight*1.0,
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
    ImagesStyle: {
        width:'100%',
        height:'100%'
      },
      inputFields:{
          width:'90%',
          height: 43,
          backgroundColor:CommonStyle.AppThemeLight,
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
        marginVertical:10

      },
      inputField:{
        width:'90%',
        height: 43,
        backgroundColor:CommonStyle.AppThemeLight,
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
      flexDirection:'row',
      alignItems:'center'

    },
      inputContainer:{
          marginVertical:20
      },
      inputFieldsText:{
        fontFamily: CommonStyle.Regular,
        fontSize: 16,
        width: '85%',
        alignSelf: 'center',
      }
})
export default styles;