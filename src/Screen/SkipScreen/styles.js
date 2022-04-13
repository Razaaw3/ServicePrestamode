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
    ImagesStyle: {
        marginTop: 40,
        width: windowWidth * 0.8,
        alignSelf: 'center',
        height: windowHeight * 0.2,
      },
      Content:{
        textAlign:'center',
        fontSize:22,
        color:CommonStyle.BlueColor
      },
      ImageStyle:{
        marginTop:windowHeight * 0.29,
        marginBottom:60,
        width:'50%',
        height:160,
        alignSelf:'center'
      },
      BottomLeft:{

        width:'43%',
        height:30,
        marginTop:90
      },
      LeftText:{
        marginTop:3,
        marginLeft:20
      },
      RightText:{
        marginTop:3,
        // textAlign:'right',
        marginRight:30,
        color:CommonStyle.dark
      },
      Middle:{
        flexDirection:'row',
        width:'14%',
        height:30,
        marginTop:4
      },
      DotIcon:{
        marginLeft:5
      },
      BottomRight:{
        marginLeft:'auto',
        marginRight:20,
        marginTop:85,
      },
      BottomRights:{
        flexDirection:'row',
        marginRight:'auto',
        marginLeft:'auto',
        marginTop:85,
        justifyContent:'space-between',
        width:'80%'
      },
})
export default styles;