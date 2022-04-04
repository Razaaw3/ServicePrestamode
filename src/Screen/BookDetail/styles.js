import {Dimensions,StyleSheet} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    MainContainer : {
        backgroundColor:CommonStyle.AppThemeDark,
        // backgroundColor:'red',
        // height:windowHeight*1.0,
        height:'100%',
    },
    HeaderContainer:{
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    profileContainer:{
        width:'90%',
        heigh:110,
        alignSelf:'center',
        // backgroundColor:'green',
        flexDirection:'row'
    },
    date:{
        flexDirection:'row',
        backgroundColor:CommonStyle.white,
        width:230,
        height:52,
        alignSelf:'center',
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:12
    },
    tabContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomColor:CommonStyle.dark,
        borderBottomWidth:0.8,
        marginVertical:10,
        marginHorizontal:15,
        paddingRight:20
        
    }
        
    
})
export default styles;