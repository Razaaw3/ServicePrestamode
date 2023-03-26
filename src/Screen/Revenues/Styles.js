import {Dimensions, StyleSheet} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  //     MainContainer : {
  //         backgroundColor:CommonStyle.AppThemeLight,
  //         // height:windowHeight*1.0,
  //         height:'100%',
  //     },
  //     MainDrawer:{
  //       width:'100%',
  //       // height:windowHeight*1.0,
  //       backgroundColor:CommonStyle.AppThemeDark
  //     },
  //     HeaderContainer:{
  //         height:126,
  //         width:'100%',
  //         paddingHorizontal:20,
  //         paddingVertical:15
  //     },
  //     noSelected:{
  //       flexDirection:'row',
  //       height:36,
  //       width:120,
  //       backgroundColor:CommonStyle.BlueButton,
  //       borderRadius:18,
  //       justifyContent:'center',
  //       alignItems: 'center',
  //     paddingHorizontal:5,
  //     },
  //     tabContainer:{
  //         paddingHorizontal:40,
  //         flexDirection:'row',
  //         justifyContent:'space-between',
  //         alignItems:'center',
  //         width:'87%',
  //         marginLeft:'auto',
  //         marginRight:'auto',
  //         marginVertical:20,
  //         borderRadius:7
  //     },
  //     tabContainer2:{
  //     flexDirection:'row',
  //     height:36,
  //     width:120,
  //     backgroundColor:CommonStyle.RedButton,
  //     borderRadius:18,
  //     justifyContent:'center',
  //     alignItems: 'center',
  // paddingHorizontal:5,

  //     },
  //     ButtonContainer: {
  //         // width: windowWidth * 1.0,
  //         // height: windowHeight * 0.08,
  //       },
  //       Buttontext: {
  //         fontSize: 14,
  //         // textAlign: 'center',
  //         color: CommonStyle.dark,
  //         fontFamily: CommonStyle.Regular,
  //       },
  //       Buttontexts: {
  //         fontSize: 14,
  //         textAlign: 'center',
  //         color: CommonStyle.white,
  //         fontFamily: CommonStyle.Regular,
  //       },
  //       time:{backgroundColor:'white',height:55,width:150,justifyContent:'center',alignItems:'center',margin:15,shadowColor: "#000",
  //       shadowOffset: {
  //           width: 0,
  //           height: 1,
  //       },
  //       shadowOpacity: 0.22,
  //       shadowRadius: 2.22,

  //       elevation: 3,
  //       },
  //       textContainer:{
  //         width:'90%',
  //         height:windowHeight*.6,
  //         alignSelf:'center',
  //         justifyContent:'center',
  //         alignItems:'center'

  //       },
  //       selectTime:{
  //         backgroundColor:CommonStyle.dark,
  //         width:'80%',
  //         height:70,
  //         borderRadius:900,
  //         alignSelf:'center',
  //         justifyContent:'center',
  //         alignItems:'center',
  //         flexDirection:'row',
  //         marginTop:20
  //       },
  //       Container:{
  //         height:96,
  //         alignItems:'center',
  //         flexDirection:"row",
  //         justifyContent: 'center',
  //       },
  //       chooseTime:{
  //         backgroundColor:CommonStyle.dark,
  //         width:"80%",
  //         height:40,
  //         justifyContent:'center',
  //         alignItems:'center',
  //         flexDirection:'row',
  //         borderRadius:50,
  //         alignSelf: 'center',
  //       },
  //       containerStyle:{
  //         backgroundColor: 'white',
  //         paddingLeft:6,
  //         height:320,
  //         width:"80%",
  //         alignSelf: 'center',
  //         borderTopLeftRadius:30,
  //         borderTopRightRadius:30,
  //         justifyContent:'flex-start',
  //         paddingVertical:20,
  //         shadowColor: "#000",
  // shadowOffset: {
  // 	width: 0,
  // 	height: 1,
  // },
  // shadowOpacity: 0.22,
  // shadowRadius: 2.22,

  // elevation: 3,
  //       }
  MainContainer: {
    backgroundColor: CommonStyle.white,
    height:'100%'
  },
  header: {
    height: 126,
    width: '100%',
    backgroundColor:CommonStyle.pureWhite,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  headerHeading: {
    marginTop: 15,
    fontFamily: CommonStyle.Bold,
    fontSize: 24,
    color: CommonStyle.BlueButton,
  },
  tabContainer:{
    width:'70%',
    height:88,
    backgroundColor:CommonStyle.pureWhite,
    alignSelf:'center',
    borderRadius:10,
   justifyContent:'flex-start',
   alignItems: 'center',
    marginTop:40,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
flexDirection:'row',

  },
  activeTab:{
    
  },
  tabText:{
    color:CommonStyle.BlueButton,
    fontSize:12
  },
  
  Ouvert: {
    width:'90%',
    alignSelf:'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 9,
    marginVertical: 10,
    paddingHorizontal: 15,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.18,
shadowRadius: 1.00,

elevation: 5,
  },
  Timebox:{
    width:140,
    height:37,
    backgroundColor:CommonStyle.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
    borderRadius:3,
    justifyContent: 'center',
    paddingHorizontal:15
  },
  dropdown:{
    backgroundColor:CommonStyle.BlueButton,
    width:125,
    padding:8,
    color:CommonStyle.pureWhite,
    borderRadius:5,
    marginVertical:5
    
  },
  placeholderStyle:{
    color:CommonStyle.pureWhite
  }
});
export default styles;
