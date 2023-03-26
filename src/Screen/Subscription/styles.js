import {Dimensions,StyleSheet} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    MainContainer : {
        backgroundColor:CommonStyle.pureWhite,
        width:windowWidth*1.0,
        height:windowHeight*1.0,
        // paddingBottom:15
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
          paddingVertical:15,
        
      }
    
})
export default styles;