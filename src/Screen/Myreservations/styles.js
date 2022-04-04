import {Dimensions,StyleSheet} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    MainContainer : {
        backgroundColor:CommonStyle.AppThemeDark,
        // width:windowWidth*1.0,
        // height:windowHeight*1.0,
    },
    MainDrawer:{
      width:'100%',
      // height:windowHeight*1.0,
      backgroundColor:CommonStyle.AppThemeDark
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
      marginTop:80,
      marginBottom:60,
      
    },
    ImageStyle:{
      width:'25%',
      height:80,
      borderRadius:40,
      marginLeft:'5%'
    },
    FlatListContainer:{
        // width:windowWidth*1.0,
        // height:windowHeight*.8,
        width:'100%',
        height:'80%'

    },
    NameStyle:{
      width:windowWidth*.4,
      color:CommonStyle.BlueButton,
      fontSize:16,
      fontFamily:CommonStyle.Bold,
      marginTop:20,
      marginLeft:windowWidth*.045,
    },
    DesStyle:{
      width:windowWidth*.4,
      color:CommonStyle.BlueColor,
      fontSize:11,
      fontFamily:CommonStyle.Regular,
      marginTop:4,
      marginLeft:windowWidth*.025,
    },
    ListMenu:{
      marginTop:18,
      marginLeft:'5%',
      flexDirection:'row'
    },
    ListLeft:{
        width:windowWidth*.68,
    },
    ListRight:{
        flexDirection:'row',
        marginTop:5
    },
    DrawerIcon:{
      marginTop:5
    },
    DateList:{
      fontSize:12,
      fontFamily:CommonStyle.Regular,
      marginTop:9,
      color:CommonStyle.Date
    },
    ListDes:{
        fontSize:14,
        fontFamily:CommonStyle.Bold,
        marginTop:4,
        marginLeft:2,
        color:CommonStyle.Date
    },
    FeatureStyle:{
        fontSize:14,
        fontFamily:CommonStyle.Bold,
        marginTop:4,
        marginLeft:2,
        color:CommonStyle.BlueColor,
        marginLeft:5,
        marginTop:7
    },
    Line:{
        width:windowWidth*.9,
        alignSelf:'center',
        marginTop:10,
        height:0.3,
        backgroundColor:'gray'
    },
})
export default styles;