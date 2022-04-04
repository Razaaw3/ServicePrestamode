import React, { useState , useEffect} from 'react';
import {
    View,
    SafeAreaView,
    ScrollView,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList
} from 'react-native';
import styles from './styles';
import {             
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
  import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import * as CommonStyle from '../../helper/CommonStyle';
import Button from '../../Components/Button/index';
import Header from '../../Components/AuthHeader/index';
import Icon from 'react-native-vector-icons/AntDesign';
import BGPIC from '../../../Image/logo.png';
import CB from '../../../Image/CB.png'
import Calender from '../../../Image/calendar.png'
import Crypto from '../../../Image/crypto.png'
// import { TextInput } from 'react-native-paper';
const CELL_COUNT = 4;
const Index = (Routprops) => {
    const [Content, setContent] = useState('Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod');
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [List , setList] = useState([
    {id:1},{id:2},{id:3},{id:4},
  ])
  const [time,settime] = useState('');
    const CHECK = () => {
        Routprops.navigation.navigate('Subscription')
    }
    const FlatListView = ({item,index}) => {
        return(
        <TouchableOpacity onPress={()=>Routprops.navigation.navigate('Subscription')}>
          <Card style={{width:138,height:200,backgroundColor:'#00437A',margin:9}}>
    <Card.Content>
    <Paragraph style={{textAlign:'center',fontFamily:CommonStyle.Regular,fontSize:13,color:CommonStyle.AppThemeLight,marginBottom:17}}>Abonnement</Paragraph>
    <Paragraph style={{textAlign:'center',fontFamily:CommonStyle.Regular,fontSize:9,color:CommonStyle.AppThemeLight,marginVertical:-4}}>Avantage 1</Paragraph>
    <Paragraph style={{textAlign:'center',fontFamily:CommonStyle.Regular,fontSize:9,color:CommonStyle.AppThemeLight,marginVertical:-4}}>Avantage1</Paragraph>
    <Paragraph style={{textAlign:'center',fontFamily:CommonStyle.Regular,fontSize:9,color:CommonStyle.AppThemeLight,marginVertical:-4}}>Avantage1</Paragraph>
    <Paragraph style={{textAlign:'center',fontFamily:CommonStyle.Regular,fontSize:9,color:CommonStyle.AppThemeLight,marginVertical:-4}}>Avantage1</Paragraph>
      <Title style={{textAlign:'center',fontFamily:CommonStyle.Bold,fontSize:18,color:CommonStyle.AppThemeLight,marginTop:19}}>99,99€</Title>
      <Title style={{textAlign:'center',fontFamily:CommonStyle.Bold,fontSize:13,color:CommonStyle.AppThemeLight,marginTop:-12}}>/mois</Title>

    </Card.Content>
  </Card>
  </TouchableOpacity>
        )
      }
    return ( 
        <SafeAreaView style={styles.MainContainer}>
            <ScrollView>
                <View style={styles.container}>
                <Image source={BGPIC} style={styles.ImagesStyle} />
                </View>
                <View style={{width:'100%',alignItems:'center'}}>
                <FlatList
            // key={'_'}
            data={List}
            renderItem={FlatListView}
            numColumns={2}
          />
                </View>
                <View style={{alignSelf:'center',alignItems:'center',marginVertical:10}}>
                    <Text style={{fontFamily:CommonStyle.Regular,fontSize:13,color:CommonStyle.dark}}>Abonnement actuel :</Text>
                    <Text style={{fontFamily:CommonStyle.Regular,fontSize:13,color:CommonStyle.dark}}>aucun</Text>
                </View>
                
            </ScrollView>
        </SafeAreaView>
    );
}
export default Index;