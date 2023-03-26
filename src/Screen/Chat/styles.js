import {
    Dimensions,
    StyleSheet
} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    chatHeader: {
        width: '100%',
        height: 100,
        backgroundColor: '#F7F8FB',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
zIndex:1
        
    },
    uploadImage:{
        alignSelf:'center',
        marginLeft:10
    }

})
export default styles;