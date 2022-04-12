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
    
})
export default styles;