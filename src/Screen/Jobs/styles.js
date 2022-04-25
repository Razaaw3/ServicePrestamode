import {Dimensions, StyleSheet} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: CommonStyle.AppThemeDark,
    height: '100%',
  },
  MainDrawer: {
    width: '100%',
    backgroundColor: CommonStyle.AppThemeDark,
  },
  HeaderContainer: {
    backgroundColor: CommonStyle.white,
    height: 126,
    width: '100%',
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
    backgroundColor: '#DCE5F4',
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
    backgroundColor: 'white',
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
height: 3,
},
shadowOpacity: 0.29,
shadowRadius: 4.65,

elevation: 7,

},
inputField:{

},
});
export default styles;
