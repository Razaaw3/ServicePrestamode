import {Dimensions,StyleSheet} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    MainContainer : {
        backgroundColor:CommonStyle.AppThemeDark,
        height:'100%',
    },
    HeaderContainer:{
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    profileContainer:{
        width:'50%',
        heigh:43,
        // backgroundColor:'green',
        marginHorizontal:20
    },
    date:{
        flexDirection:'row',
        backgroundColor:CommonStyle.white,
        width:230,
        height:52,
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:12,
        marginHorizontal:20
    },
    Location:{
        flexDirection:'row',
        width:173,
        height:48,
        marginHorizontal:20
    },
    tabContainer:{
        borderBottomColor:CommonStyle.dark,
        borderBottomWidth:0.8,
        opacity:0.2,
        marginVertical:10,
        marginHorizontal:20,
        // paddingRight:2
        
    },
    counterContainer:{
        flexDirection:'row',
        marginHorizontal:20,
        marginVertical:12
    },
    circle:{
        width:30,
        height:30,
        borderRadius:200,
        backgroundColor:'#DFE8F2',
        marginHorizontal:8,
        justifyContent:'center',
        alignItems:'center'
    }
        
    
})
export default styles;