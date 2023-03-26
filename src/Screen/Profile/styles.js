import {Dimensions,StyleSheet} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    MainContainer : {
        backgroundColor:CommonStyle.pureWhite,
        width:windowWidth*1.0,
        height:windowHeight*1.0,
    },
    HeaderContainer:{
        backgroundColor:CommonStyle.white,
        height:126,
        width:'100%',shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
        paddingHorizontal:20,
        paddingVertical:15
    },
    ImagesStyle: {
        width:'100%',
        height:'100%'
      },
      inputFields:{
          width:'90%',
          height: 43,
          backgroundColor:CommonStyle.pureWhite,
          alignSelf:'center',
          borderRadius:7,
          shadowColor: "#000",
          shadowOffset: {
              width: 0,
              height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          
          elevation: 4,
        marginVertical:10

      },
      inputField:{
        width:'90%',
        height: 43,
        backgroundColor:CommonStyle.AppThemeLight,
        alignSelf:'center',
        borderRadius:7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
      marginVertical:10,
      flexDirection:'row',
      alignItems:'center'

    },
      inputContainer:{
          marginVertical:20
      },
      inputFieldsText:{
        fontFamily: CommonStyle.Regular,
        fontSize: 16,
        width: '85%',
        alignSelf: 'center',
        color: CommonStyle.dark
      },
      InputContainer:{
        width:'90%',
        height:45,
        borderRadius:6,
        backgroundColor:'#fff',
        alignSelf:'center',
        shadowColor: "#000",
        marginVertical:10,
        shadowColor: "#000",
          shadowOffset: {
              width: 0,
              height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          
          elevation: 4,
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
        width: windowWidth * 0.6,
        backgroundColor: '#fff',
        fontFamily: CommonStyle.regular,
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
        marginLeft:8
      },
})
export default styles;