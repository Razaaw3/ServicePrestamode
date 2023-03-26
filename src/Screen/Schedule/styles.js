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
    backgroundColor: CommonStyle.pureWhite,
    height: '100%',
    paddingBottom:60
  },
  header: {
    height: 126,
    width: '100%',
    backgroundColor: CommonStyle.pureWhite,
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
  tabContainer: {
    width: '90%',
    backgroundColor: '#DCE5F4',
    alignSelf: 'center',
    height: 38,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 40,
  },
  activeTab: {
    backgroundColor: CommonStyle.pureWhite,
    height: 26,
    borderRadius: 10,
    width: 105,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  tabText: {
    color: CommonStyle.BlueButton,
    fontSize: 12,
  },

  Ouvert: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 9,
    marginVertical: 10,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 5,
  },
  Timebox: {
    width: 140,
    height: 37,
    backgroundColor: CommonStyle.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    borderRadius: 3,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  dropdown: {
    backgroundColor: CommonStyle.BlueButton,
    width: 125,
    padding: 8,
    color: CommonStyle.pureWhite,
    borderRadius: 5,
    marginVertical: 5,
  },
  placeholderStyle: {
    color: CommonStyle.pureWhite,
  },
  ResHeading: {
    marginHorizontal: 20,
    marginTop: 20,
    fontSize: 18,
    color: CommonStyle.BlueButton,
  },
  card: {
    width: '90%',
    alignSelf: 'center',
    // backgroundColor:'red',
    marginVertical: 9,
    borderBottomColor: 'rgba(25,25,25,0.2)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
  },
  button: {
    width: 130,
    height: 32,
    // justifyContent: 'center',
    paddingTop:2,
    backgroundColor: CommonStyle.BlueButton,
    alignItems: 'center',
    borderRadius: 5,
    marginTop:5
  },
});
export default styles;
