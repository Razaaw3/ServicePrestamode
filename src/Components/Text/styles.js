import {Dimensions,StyleSheet} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    TextContainer : {
        width:windowWidth*.8,
        marginLeft:windowWidth*.10,
    },
    Maintext:{
        fontSize:14,
        textAlign:'center',
        color:CommonStyle.dark,
        fontFamily:CommonStyle.Bold,
        
    }
})
export default styles;