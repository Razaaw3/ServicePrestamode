import {Dimensions, StyleSheet} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: CommonStyle.AppThemeDark,
  },
  header: {
    height: 190,
    backgroundColor: '#F68388',
    paddingTop:10
  },
  heading: {
    color: CommonStyle.AppThemeLight,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 16,
    fontWeight: '600',
  },
  conditioning:{
    height:40,
    borderColor:CommonStyle.AppThemeLight,
    borderWidth:1,
    width:"90%",
    alignSelf: 'center',
    borderRadius:900,
    marginTop:20,
    flexDirection:'row',
  },
  innerLeft:{
    backgroundColor:CommonStyle.AppThemeLight,
    width:'50%',
    borderTopLeftRadius:900,
    borderBottomLeftRadius:900,
    justifyContent:'center',
    alignItems:'center',
  },
  innerRight:{
    backgroundColor:CommonStyle.AppThemeLight,
    width:'50%',
    borderTopRightRadius:900,
    borderBottomRightRadius:900,
    justifyContent:'center',
    alignItems:'center',
  },
  headerBox:{
    height:40,
    borderColor:CommonStyle.AppThemeLight,
    borderWidth:1.7,
    width:100,
    borderRadius:900,
    marginTop:20,
    justifyContent:'center',
    alignItems: 'center',
    marginHorizontal:15,

  },
  monthlyContainer:{
    width:"95%",
    height:130,
    borderRadius:25,
    backgroundColor:CommonStyle.AppThemeLight,
    alignSelf:'center',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    padding:20,

    borderRadius:15,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginBottom:30
  },
  flatListContainer:{
    width:"95%",
    backgroundColor:'#Fdfdfd',
    padding:20,
    alignSelf: 'center',
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  },
  graphContainer:{
    justifyContent:'center',
    alignItems: 'center',
    paddingRight:'auto',
  }
});
export default styles;
