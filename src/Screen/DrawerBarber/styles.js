import {Dimensions,StyleSheet} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    MainContainer : {
        backgroundColor:CommonStyle.AppThemeLight,
        width:windowWidth*1.0,
        height:windowHeight*1.0,
        // paddingBottom:15
    },
    ImageContainer:{
      backgroundColor:CommonStyle.RedButton,
      width:140,
      height:140,
      borderRadius:350,
      alignItems: "center",
      justifyContent: "center",
      marginLeft:'auto',
      marginRight:'auto',
      marginTop:80,
    },
  container:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent: 'center',
  },
  box:{
    backgroundColor:CommonStyle.BlueButton,
    height:127,
    width:127,
    borderRadius:8,
    justifyContent: 'center',
    margin:5,

  },
  text:{
    color:CommonStyle.AppThemeDark,
    alignSelf:'center',
    fontSize:20,
    marginTop:10
  },
  Image:{
    backgroundColor:'white'
  }
})
export default styles;