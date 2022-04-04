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
        marginTop: 30,
        width: windowWidth * 0.8,
        alignSelf: 'center',
        height: windowHeight * 0.3,
      },
      InputContainer:{
        width:'90%',
        height:43,
        borderRadius:6,
        backgroundColor:'#fff',
        alignSelf:'center',
        shadowColor: "#000",
        marginBottom:20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        
        elevation: 6,
      }
})
export default styles;