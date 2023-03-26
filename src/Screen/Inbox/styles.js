import {Dimensions,StyleSheet} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const styles = StyleSheet.create({
    MainContainer : {
        backgroundColor:CommonStyle.pureWhite,
        height:'100%',
    },
    HeaderContainer:{
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    message:{
        marginHorizontal:20,
        marginTop:12,
        marginBottom:25
    },
    chatContainer:{
        backgroundColor:CommonStyle.pureWhite,
        flexDirection:'row',
        height:80
    },
    chatHeading:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'space-between',
        width:'80%',
        paddingHorizontal:20,
        // backgroundColor:'pink',
        height:40,
        alignItems:'center'

    },
    chat:{
        width:'80%',
        paddingHorizontal:20,
        height:40,
    },
 
        
    
})
export default styles;