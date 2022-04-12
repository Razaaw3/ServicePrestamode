import {Dimensions, StyleSheet} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: CommonStyle.AppThemeDark,
    height: '100%',
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
  },
  tabContainer: {
    paddingHorizontal: 40,
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
  Buttontext: {
    fontSize: 14,
    textAlign: 'center',
    color: CommonStyle.white,
    fontFamily: CommonStyle.Regular,
  },
});
export default styles;
