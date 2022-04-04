import {Dimensions,StyleSheet} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    MainContainer : {
        backgroundColor:CommonStyle.AppThemeLight,
        width:windowWidth*1.0,
        height:windowHeight*1.0,
        justifyContent:'center'
    },
    LogoStyle:{
        width:windowWidth*.8,
        alignSelf:'center',
        height:windowHeight*.14,
    },
})
export default styles;