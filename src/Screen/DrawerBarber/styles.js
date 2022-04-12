import {Dimensions,StyleSheet} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    MainContainer : {
        backgroundColor:CommonStyle.AppThemeDark,
        width:windowWidth*1.0,
        height:windowHeight*1.0,
        // paddingBottom:15
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
    },
    ImagesStyle: {
        width:'100%',
        height:'100%'
      },
      inputFields:{
          flexDirection:'row',
          width:'90%',
          height: 56,
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
        justifyContent:'center'

      },
      inputField:{
        width:'90%',
        height: 56,
        backgroundColor:'#DFE7F5',
        alignSelf:'center',
        borderRadius:7,
      marginVertical:10,
      flexDirection:'row',
      alignItems:'center'

    },
      inputContainer:{
          marginVertical:20
      },
    textStyle:{
        fontFamily: CommonStyle.Regular,
        fontSize: 14,
        width: '80%',
        alignSelf: 'center',
        color: '#042C5C',
        marginLeft: 25,
      }
})
export default styles;