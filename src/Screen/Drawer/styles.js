import {Dimensions,StyleSheet} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    MainContainer : {
        backgroundColor:'gray',
        width:windowWidth*1.0,
        height:windowHeight*1.0,
    },
    MainDrawer:{
      width:'75%',
      height:windowHeight*1.0,
      backgroundColor:'#fff'
    },
    UpperContainer:{
      backgroundColor:CommonStyle.AppThemeDark
    },
    ImageContainer:{
      flexDirection:'row',
      marginTop:80,
      marginBottom:60,
      
    },
    ImageStyle:{
      width:'25%',
      height:80,
      borderRadius:40,
      marginLeft:'5%'
    },
    NameStyle:{
      width:windowWidth*.4,
      color:CommonStyle.BlueColor,
      fontSize:13,
      fontFamily:CommonStyle.Bold,
      marginTop:20,
      marginLeft:windowWidth*.025,
    },
    DesStyle:{
      width:windowWidth*.4,
      color:CommonStyle.BlueColor,
      fontSize:11,
      fontFamily:CommonStyle.Regular,
      marginTop:4,
      marginLeft:windowWidth*.025,
    },
    DrawerManu:{
      marginTop:18,
      marginLeft:'8%',
      flexDirection:'row'
    },
    DrawerIcon:{
      marginTop:5
    },
    DrawerManuHeading:{
      fontSize:14,
      fontFamily:CommonStyle.Bold,
      marginTop:9,
      marginLeft:8
    },
})
export default styles;