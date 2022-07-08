import {Dimensions,StyleSheet} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    chatHeader:{
        width:'100%',
        height:80,
        backgroundColor:'#F7F8FB',
        flexDirection:'row',
        alignItems:'center'
    }   
    
})
export default styles;