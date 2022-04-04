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
        flexDirection:'row',
        backgroundColor:CommonStyle.AppThemeDark,
        marginTop:20
    },
    BackIcon:{
        width:'86%',
        marginLeft:6
    },
    UserIcon:{
    },
    UpperContainer:{
      backgroundColor:CommonStyle.AppThemeDark
    },
    ImageContainer:{
      flexDirection:'row',
      marginTop:25,
      marginBottom:30,
      
    },
    ImageStyle:{
      width:'25%',
      height:100,
      borderRadius:8,
      marginLeft:'5%'
    },
    NameStyle:{
      width:windowWidth*.4,
      color:CommonStyle.BlueButton,
      fontSize:16,
      fontFamily:CommonStyle.Bold,
      marginTop:5,
      marginLeft:windowWidth*.03,
    },
    DesStyle:{
      width:windowWidth*.4,
      color:'gray',
      fontSize:11,
      fontFamily:CommonStyle.Regular,
      marginTop:4,
      marginLeft:windowWidth*.025,
    },
    ratingStyle:{
      marginTop:8,
      marginLeft:4,
      fontSize:14,
      fontFamily:CommonStyle.Regular,
    },
    CommentStyle:{
      marginTop:30,
      width:windowWidth*.92,
      height:200,
      backgroundColor:'#fff',
      alignSelf:'center',
      borderRadius:10,
      marginBottom:35

    },
})
export default styles;