import {Dimensions, StyleSheet} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: CommonStyle.white,
    height: '100%',
  },
  MainDrawer: {
    width: '100%',
    backgroundColor: CommonStyle.AppThemeDark,
  },
  HeaderContainer: {
    backgroundColor: CommonStyle.pureWhite,
    height: 126,
    width: '100%',
    marginBottom:10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    // alignItems:'center'
    justifyContent: 'center',
  },
  tabContainer: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: CommonStyle.BlueButton,
    height: 34,
    width: '87%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 20,
    borderRadius: 7,
  },
  tabContainer2: {
    flexDirection: 'row',
    height: 26,
    backgroundColor: CommonStyle.RedButton,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },

  listContainer: {
    width: '85%',
    alignSelf: 'center',
    height: 'auto',
  },
  listStyle: {
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
shadowOpacity: 0.20,
shadowRadius: 1.90,

elevation: 2,
  },
  inputFields:{
    backgroundColor:CommonStyle.white,
    height:43,
    width:'85%',
    marginLeft:'auto',
    marginRight:'auto',
    borderRadius:9,
    // flexDirection:'row',
    marginVertical:5,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.22,
shadowRadius: 2.22,

elevation: 3,
},
inputField:{

},
});
export default styles;
