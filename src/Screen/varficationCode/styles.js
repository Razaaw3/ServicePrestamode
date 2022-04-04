import {Dimensions,StyleSheet} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    MainContainer : {
        backgroundColor:CommonStyle.AppThemeDark,
        width:windowWidth*1.0,
        height:windowHeight*1.0,
        paddingBottom:15
    },
    ImagesStyle: {
        marginTop: 50,
        width: windowWidth * 0.8,
        alignSelf: 'center',
        height: windowHeight * 0.3,
      },
    Content:{
        fontSize:24,
        marginTop:4,
        fontFamily:CommonStyle.Bold,
        color:CommonStyle.BlueColor,
        textAlign:'center'
    },
    ContentDes:{
        fontSize:14,
        marginTop:10,
        fontFamily:CommonStyle.Regular,
        color:CommonStyle.BlueButton,
        textAlign:'center'
    },
    InputStyleMain:{
        flexDirection:'row',
        marginTop:25,
        width:windowHeight*.5,
        borderRadius:10,
        alignSelf:'center',
        marginBottom:25,
        backgroundColor:CommonStyle.AppThemeLight
    },
    InputStyle:{
        marginLeft:windowHeight*.05,
        width:windowHeight*.33,
        alignSelf:'center',
        marginBottom:10,
        backgroundColor:CommonStyle.AppThemeLight
    },
    root:{
        flex: 1,
        padding: 20
    },
    title:{
        textAlign: 'center', 
        fontSize: 30
    },
    codeFieldRoot:{
        //marginTop: 20
    },
    cell: {
        width: 30,
        height: 36,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 1,
        borderBottomColor:'lightgray',
        borderColor:'white',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: 'white',
        backgroundColor:'white'
    },
    LastLeft:{
        fontSize:14,
        fontFamily:CommonStyle.Regular,
        color:CommonStyle.BlueColor
    },
    LastRight:{
        fontSize:14,
        textAlign:'right',
        fontFamily:CommonStyle.Regular,
        color:CommonStyle.BlueColor
    },



    PhoneCode:{
        fontSize:16,
        fontFamily:CommonStyle.Regular,
        marginTop:8,
        color:CommonStyle.BlueColor
    },
    ChangesLanguageCon:{
        flexDirection:'row',
        marginLeft:windowWidth*.09,
        marginTop:12,
        alignItems:'center'
    },
    ChangesLanguageCon2:{
        marginTop:12
    },
    ChangesLanguageText:{
        fontSize:12,
        fontFamily:CommonStyle.Bold,
        marginLeft:windowWidth*.04,
    },
    ChangeContainer:{
        flex:1,
        width:windowWidth*1.0,
        height:windowHeight*1.0,
        backgroundColor:CommonStyle.AppThemeDark,
        opacity:.84,
        // marginBottom:20
    },
    ChangeSubContainer:{
        width:windowWidth*1.0,
        height:windowHeight*.48,
        marginTop:windowHeight*.52,
        backgroundColor:'#fff',
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
    },
})
export default styles;