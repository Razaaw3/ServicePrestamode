import {Dimensions,StyleSheet} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    MainContainer : {
        backgroundColor:CommonStyle.AppThemeLight,
        width:windowWidth*1.0,
        height:windowHeight*1.0,
        paddingBottom:15
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
      },
      modal:{
        height:130,
        width:"100%",
        backgroundColor:"white",
        marginTop:"auto",
        justifyContent:'space-evenly',
        alignItems:'center',
        flexDirection:'row'
      },
      textStyle: {
        padding: 10,
        color: 'black',
        textAlign: 'center',
      },
      phoneContainer: {
        // width: '75%',
        width: windowWidth * 0.75,
        height: "100%",
        backgroundColor: '#fff',
        elevation: 0,
        // backgroundColor:'red',
        borderRadius:12
      },
      textInput: {
        paddingVertical: 0,
        // backgroundColor: 'gold',
        width: windowWidth * 0.6,
        backgroundColor: '#fff',
        // fontFamily: CommonStyle.regular,
        color: '#000',
      },
      codeTextStyle: {
        // fontFamily: CommonStyle.regular,
        fontSize: 15,
        // backgroundColor: 'gold',
        // width: windowWidth * 0.1,
        textAlign: 'center',
        textAlignVertical: 'center',
      },
      countryPickerButtonStyle: {
        height:"100%",  
        width: 70,
      },
})
export default styles;