import {Dimensions, StyleSheet} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: CommonStyle.AppThemeDark,
    width: windowWidth * 1.0,
    height: windowHeight * 1.0,
  },
  MarginTOP: {
    marginTop: windowHeight * 0.7,
  },
  WellcomeText: {
    marginTop: 20,
    marginBottom: 40,
    textAlign: 'center',
    fontFamily: CommonStyle.Bold,
    fontSize: 18,
    color: CommonStyle.BlueButton,
  },
  ImagesStyle: {
    marginTop: 50,
    width: windowWidth * 0.8,
    alignSelf: 'center',
    height: windowHeight * 0.3,
  },
  LastText: {
    marginTop: windowHeight * 0.3,
    fontSize: 14,
    fontFamily: CommonStyle.Regular,
    textAlign: 'center',
  },
});
export default styles;
