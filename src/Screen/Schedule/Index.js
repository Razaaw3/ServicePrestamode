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
} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
import styles from './styles';
import Bars from '../../../Image/bars.png';
import {useTranslation} from 'react-i18next';
const Index = props => {
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
  const windowHeight = Dimensions.get('window').height;
  const [coutures, setCoutures] = useState(false);
  const {t, i18n} = useTranslation();
  const Next = () => {
    props.navigation.navigate('Inbox');
  };
  const FlatListViews = ({item, index}) => {
    return (
      <TouchableOpacity>
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
              {t('Emmanuel Macron')}
            </Text>
            <Text
              style={{
                fontFamily: CommonStyle.Bold,
                fontSize: 14,
                color: '#2A2AC0',
              }}>
              {t('12/01/2019')}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <Text
              style={{
                fontFamily: CommonStyle.Bold,
                fontSize: 14,
                color: 'rgb(28,28,28)',
              }}>
              {t('Extension de cils')}
            </Text>
            <Text
              style={{
                fontFamily: CommonStyle.Bold,
                fontSize: 14,
                color: '#2A2AC0',
              }}>
              {t('14:30')}
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
                <Text style={styles.Buttontext}>{t('Envoyer un message')}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.ButtonContainer}>
              <TouchableOpacity
                style={{
                  width: 130,
                  alignSelf: 'center',
                  height: 35,
                  marginTop: windowHeight * 0.007,
                  borderRadius: 8,
                  backgroundColor: CommonStyle.RedButton,
                  justifyContent: 'center',
                }}>
                <Text style={styles.Buttontext}>{t('Annuler')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        <View style={styles.HeaderContainer}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('DrawerBarber')}>
            <View
              style={{height: 20, width: 20, marginBottom: 20, marginTop: 6}}>
              <Image
                source={Bars}
                resizeMode="contain"
                style={{width: '100%', height: '100%'}}
              />
            </View>
          </TouchableOpacity>
          <View>
            <Text
              style={{
                color: CommonStyle.BlueColor,
                fontSize: 24,
                fontFamily: CommonStyle.Bold,
              }}>
              Planning
            </Text>
          </View>
        </View>
        <View style={styles.tabContainer}>
          <TouchableOpacity onPress={() => setCoutures(true)}>
            <View
              style={
                coutures === false
                  ? {flexDirection: 'row'}
                  : styles.tabContainer2
              }>
              <Text style={{color: '#707070'}}>{t('Disponibilités')}</Text>
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={()=>setCoutures(true)> */}
          <TouchableOpacity onPress={() => setCoutures(false)}>
            <View
              style={
                coutures === false
                  ? styles.tabContainer2
                  : {flexDirection: 'row'}
              }>
              <Text style={{color: '#707070'}}>{t('Réservations')}</Text>
            </View>
          </TouchableOpacity>
        </View>
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
        <View style={{marginHorizontal: 25}}>
          <FlatList data={List} renderItem={FlatListViews} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Index;
