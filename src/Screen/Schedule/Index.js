import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import { Modal, Portal, Button, Provider } from 'react-native-paper';
import ButtonS from '../../Components/Button/index';
import * as CommonStyle from '../../helper/CommonStyle';
import styles from './styles';
import Bars from '../../../Image/bars.png';
import {useTranslation} from 'react-i18next';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import '../../config/i18n/index';
import auth from "@react-native-firebase/auth"
import database from "@react-native-firebase/database"

import Entypo from 'react-native-vector-icons/dist/Entypo';
import Feather from 'react-native-vector-icons/dist/Feather';
import Material from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { Avatar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
const Index = props => {
  const [visible, setVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('')

  const {t, i18n} = useTranslation();
  const [List, setList] = useState([
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
  ]);
  const [Data, setData] = useState([])
  const [Loader, setLoader] = useState(false)
  const [state, setState] = useState(false)
  // useEffect(() => { 
    
  //   const uid = auth().currentUser.uid
  //   database()
  // .ref(`user/${uid}/MyResevations`)
  // .once('value')
  // .then(snapshot => {
  //   let data = snapshot.val();
  //   if(snapshot.val()===null){
  //     setLoader(false)
  //     setState(false)
  //   }
  //   else{
  //     setLoader(false)
  //     setState(true)
  //   }
      
  //   console.log("Data is : ",data)
  //   let Items = Object.values(data)
  //   Items.forEach(item=>{
  //     console.log("fdsdas",item)
  //     Data.push(item)
      
      
  //   })
    
  // });
 
  // // setLoader(false)
  // // console.log("dfsdfsdfsdfsdf",Data)
  // }, [])
  const [color, setColor] = useState(false);
  const windowHeight = Dimensions.get('window').height;
  const [coutures, setCoutures] = useState(false);
  const Next = () => {
    props.navigation.navigate('History');
  };

  const FlatListViews = ({item, index}) => {
    return (
      
        <View
          style={{
            width: '100%',
            marginVertical: 10,
            paddingBottom: 10,
            borderBottomColor: '#1C1C1C',
            borderBottomWidth: 0.5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 3,
            }}>
            <Text
              style={{
                fontFamily: CommonStyle.Regular,
                fontSize: 12,
                color: 'rgba(28,28,28,0.4)',
              }}>
              {item.CustomerName}
            </Text>
            <Text
              style={{
                fontFamily: CommonStyle.Bold,
                fontSize: 14,
                color: '#2A2AC0',
              }}>
             {item.Date}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
              <View>
              {item.Services.map(data=>{
                return(
                <Text
              style={{
                fontFamily: CommonStyle.Bold,
                fontSize: 14,
                color: 'rgb(28,28,28)',
              }}>
              {t(data.service_name)}
            </Text>
                )
              })}
            </View>
            <Text
              style={{
                fontFamily: CommonStyle.Bold,
                fontSize: 14,
                color: '#2A2AC0',
              }}>
              {item.Hours}:{item.Minutes}
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.ButtonContainer}>
              <TouchableOpacity
                style={{
                  width: 140,
                  alignSelf: 'center',
                  height: 35,
                  marginTop: windowHeight * 0.007,
                  borderRadius: 8,
                  backgroundColor: CommonStyle.BlueButton,
                  justifyContent: 'center',
                }}
                onPress={Next}>
                <Text style={styles.Buttontexts}>
                  {t('Envoyer un message')}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.ButtonContainer}>
              <TouchableOpacity
                onPress={Next}
                style={{
                  width: 130,
                  alignSelf: 'center',
                  height: 35,
                  marginTop: windowHeight * 0.007,
                  borderRadius: 8,
                  backgroundColor: CommonStyle.RedButton,
                  justifyContent: 'center',
                }}>
                <Text style={styles.Buttontexts}>{t('Annuler')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    
    );
  };
  const FlatListView = ({item, index}) => {
    return (
      <TouchableOpacity onPress={()=>setVisible(!visible)}>
      <View style={{flexDirection:'row',justifyContent: 'center',alignItems: 'center',marginBottom:15}}>
      <View style={{backgroundColor:"#F4F4F4",height:100,width:"80%",borderRadius:30,alignItems: "center",flexDirection: "row",marginLeft:50}}>
        <View style={{backgroundColor:"#B7B6BA",height:90,width:90,borderRadius:3000,alignItems: "center",justifyContent: "center",marginLeft:-40}}>
        <Avatar.Image size={80} source={{uri:'https://placeimg.com/140/140/any'}}  />
        </View>
        <View style={{marginHorizontal:15}}>
        <Text style={{color:'#69C9C6',fontSize:18}}>€69,00</Text>
        <Text style={{color:'grey',fontSize:18,fontWeight:"900"}}>Sabine Sa. </Text>
        <Text style={{color:'grey',fontSize:18}}>Natttes Colles</Text>
        </View>
        <View>
        <Text style={{color:'grey',fontSize:18}}>€23,00</Text>
        </View>
        <View style={{backgroundColor:'#69C9C6',height:40,width:40,borderRadius:900,justifyContent:'center',alignItems: 'center' ,marginHorizontal:10}}>
          <Feather name="mail" size={26} color={CommonStyle.white}/>
        </View>

      </View>
      <View>
      <Feather name="more-vertical" size={26} color='#B7B6BA'/>
      </View>

    </View>
    </TouchableOpacity>
    );
  };
  const New = () => {};
  return (
    <SafeAreaView style={styles.MainContainer}>
      {
        Loader===true?
        <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator/>
        </View>
      :
      <ScrollView>
        <View style={styles.HeaderContainer}>
            <Text
              style={{
                color: CommonStyle.BlueColor,
                fontSize: 35,
                fontFamily: CommonStyle.Bold,
                marginTop:30
              }}>
              Planning
            </Text>
        </View>
        <View style={styles.tabContainer}>
          <TouchableOpacity onPress={() => setCoutures(true)}>
            <View
              style={
                coutures === false
                  ? styles.noSelected
                  : styles.tabContainer2
              }>
              <Text style={{color: CommonStyle.AppThemeDark}}>{t('Disponibilités')}</Text>
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={()=>setCoutures(true)> */}
          <TouchableOpacity onPress={() => setCoutures(false)}>
            <View
              style={
                coutures === false
                  ? styles.tabContainer2
                  : styles.noSelected
              }>
              <Text style={{color: CommonStyle.AppThemeDark}}>{t('Réservations')}</Text>
            </View>
          </TouchableOpacity>
        </View>
        {coutures === false ? (
          <>
            <View style={{marginHorizontal: 25, marginVertical: 12}}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: CommonStyle.Bold,
                  color: CommonStyle.dark,
                }}>
                {t('Réservations à venir')}
              </Text>
            </View>
            <View style={{height:375, backgroundColor:'#FCF6F6',borderBottomLeftRadius:25,borderBottomRightRadius:25}}>
              <Calendar
              style={{backgroundColor:'#FCF6F6'}}
              theme={{
                backgroundColor: '#FF7066', // Not change nothing
                calendarBackground: 'transparent', // If change it, change all calendar bg
              }}
               markedDates={selectedDate}
                minDate={'2022-05-01'}
                onDayPress={day => {
                  console.log('selected day', day);
                  setSelectedDate({[day.dateString]:{selected: true, selectedColor: '#EC6D74'}})
                }}
                onMonthChange={month => {
                  console.log('month changed', month);
                }}
                disableAllTouchEventsForDisabledDays={true}
                enableSwipeMonths={true}
              />

            </View>
      <View style={{flexDirection:'row',justifyContent: 'center',alignItems: 'center',justifyContent: 'space-between',margin:20}}>
        <Text style={{color:'grey',fontSize:18}}>Jeudi 11 juillet </Text>
        <Text style={{color:'#69C9C6',fontSize:18}}>€69,00</Text>
      </View>
        <FlatList
        data={List}
        renderItem={FlatListView}
        />
             

          </>
        ) : (
          <>
          <TouchableOpacity>
            <View style={styles.selectTime}>
              <View style={{width:"70%"}}>
              <Text style={{color:CommonStyle.AppThemeLight,fontSize:25,textAlign: "center"}}>Sélectionner un jour</Text>
              </View>
              <Entypo name="chevron-down" color={CommonStyle.AppThemeLight} size={30} />
            </View>
          </TouchableOpacity>

          <View style={styles.Container}>
            <View style={{flexDirection:"row",justifyContent:"space-around", alignItems:'center',marginRight:30}}>
                <View style={{width:30,height:30,borderWidth:8,borderColor:CommonStyle.dark,marginRight:20}}/>
                <Text style={{color:CommonStyle.dark,fontSize:25,fontWeight:'bold'}}>Ouvert</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-around", alignItems:'center',marginLeft:30}}>
                <View style={{width:30,height:30,backgroundColor:CommonStyle.dark,marginRight:20}}/>
                <Text style={{color:CommonStyle.dark,fontSize:25,fontWeight:'bold'}}>Ferme</Text>
            </View>
            <View>
            </View>

          </View>
          <View style={{flexDirection:'row',marginBottom:30}}>
            <View style={{width:"45%",marginHorizontal:10}}>
                <Text style={{color:CommonStyle.BlueButton,fontSize:30,fontWeight:'bold',textAlign:'center',marginBottom:15}}>De</Text>
                <View style={styles.chooseTime}>
                  <TextInput keyboardType='number-pad' placeholder='8' placeholderTextColor={CommonStyle.AppThemeLight} style={{backgroundColor:CommonStyle.dark,color:CommonStyle.AppThemeLight,fontSize:27,paddingBottom:1}}/>
                  <Text style={{color:CommonStyle.AppThemeLight,fontSize:27,fontWeight:'500'}}>h</Text>
                </View>
              </View>

              <View style={{width:"45%",marginHorizontal:10}}>
                <Text style={{color:CommonStyle.BlueButton,fontSize:30,fontWeight:'bold',textAlign:'center',marginBottom:15}}>A</Text>
                <View style={styles.chooseTime}>
                  <TextInput keyboardType='number-pad' placeholder='12' placeholderTextColor={CommonStyle.AppThemeLight} style={{backgroundColor:CommonStyle.dark,color:CommonStyle.AppThemeLight,fontSize:27,paddingBottom:1}}/>
                  <Text style={{color:CommonStyle.AppThemeLight,fontSize:27,fontWeight:'500'}}>h</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity>
            <View style={[styles.selectTime,{width:"45%",height:55}]}>
              <View style={{width:"50%"}}>
              <Text style={{color:CommonStyle.AppThemeLight,fontSize:20,textAlign: "center"}}>Ajouter horaires</Text>
              </View>
  
            </View>
          </TouchableOpacity>
          <View flexDirection="row" style={{justifyContent: "center",alignItems: "center",marginVertical:30}}>
          <Text style={{color:CommonStyle.dark,fontSize:22,fontWeight:'500'}}>Créneaux de</Text>
          <View flexDirection="row" justifyContent="space-between" style={{marginVertical:15,width:"60%",marginLeft:30}}>
            <TouchableOpacity>
              <View style={{backgroundColor:CommonStyle.dark,width:100,height:35,flexDirection:'row',justifyContent:'center',alignItems:'center',borderRadius:299}}>
              <Text style={{color:CommonStyle.AppThemeLight,fontSize:22,fontWeight:'500',marginLeft:25}}>2</Text>
              <Entypo name="chevron-down" color={CommonStyle.AppThemeLight} size={30} style={{marginLeft:10}} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{backgroundColor:CommonStyle.dark,width:100,height:35,flexDirection:'row',justifyContent:'center',alignItems:'center',borderRadius:299}}>
              <Text style={{color:CommonStyle.AppThemeLight,fontSize:22,fontWeight:'500',marginLeft:25}}>h</Text>
              <Entypo name="chevron-down" color={CommonStyle.AppThemeLight} size={30} style={{marginLeft:10}} />
              </View>
            </TouchableOpacity>
          </View>
          </View>
          <ButtonS ButtonStyle="red" ButtonText="Valider " />
          </>
        )}
      </ScrollView>
      
}
<Provider>
    <Portal>
      <Modal visible={visible} onDismiss={()=>setVisible(!visible)} contentContainerStyle={styles.containerStyle}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
      <View style={{backgroundColor:"#B7B6BA",height:80,width:80,borderRadius:3000,alignItems: "center",justifyContent: "center",marginLeft:-35,marginTop:15}}>
        <Avatar.Image size={70} source={{uri:'https://placeimg.com/140/140/any'}}  />
      </View>
      <View style={{marginHorizontal:15}}>
        <Text style={{color:'#69C9C6',fontSize:18}}>en attente</Text>
        <Text style={{color:'grey',fontSize:18,fontWeight:"900"}}>Sabine Sa. </Text>
        <Text style={{color:'grey',fontSize:18}}>Natttes Colles</Text>
      </View>
      <View>
        <Text style={{color:'grey',fontSize:18}}>€23,00</Text>
        </View>
        <View style={{backgroundColor:'#69C9C6',height:40,width:40,borderRadius:900,justifyContent:'center',alignItems: 'center' ,marginHorizontal:10}}>
          <Feather name="mail" size={26} color={CommonStyle.white}/>
        </View>
    </View>

    <View style={{borderBottomColor:'#D8D8D8',borderBottomWidth:2,marginVertical:10,width:"80%",alignSelf:'center'}}/>
      
    <View style={{marginHorizontal:15}}>
      <View style={{flexDirection:'row',alignItems:'center',marginVertical:8}}>
        <Material name='clock-time-three-outline' color="grey" size={23} />
        <Text style={{color:'grey',fontSize:16,marginHorizontal:10}}>13h00</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',marginVertical:8}}>
        <Ionicons name='location-outline' color="grey" size={23} />
        <Text style={{color:'grey',fontSize:16,marginHorizontal:10}}>11 rue de penthievre 75008 Paris</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',marginVertical:8}}>
        <Entypo name='mobile' color="grey" size={23} />
        <Text style={{color:'grey',fontSize:16,marginHorizontal:10}}>06 56 78 90 56 </Text>
      </View>
      </View>

      <View style={{flexDirection:'row',justifyContent: 'space-evenly',alignItems:'center',marginTop:'auto'}}>
        <TouchableOpacity>
      <Text style={{color:'#DB656B',fontSize:18,}}>Refuser</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={{color:'#69C9C6',fontSize:18,}}>Transferer</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={{color:'#A1CF98',fontSize:18,}}>Accepter</Text>
      </TouchableOpacity>
      </View>
    
      </Modal>
    </Portal>
  </Provider> 
    </SafeAreaView>
   
  );
};
export default Index;
