import {Dimensions,StyleSheet} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    MainContainer : {
        backgroundColor:CommonStyle.pureWhite,
        width:windowWidth*1.0,
        height:windowHeight*1.0,
    },
   
    container:{
        width:289,
        height:90,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        marginTop:50
    },
    ImagesStyle: {
        width:'100%',
        height:'100%'
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
        marginVertical:10

      },
    InputStyleMains:{
        
        marginVertical:10,
        // height:50,
        width:'90%',
        borderRadius:10,
        alignSelf:'center',
        backgroundColor:CommonStyle.AppThemeLight
    },
    inputContainer:{
        marginVertical:25
    }
})
export default styles;