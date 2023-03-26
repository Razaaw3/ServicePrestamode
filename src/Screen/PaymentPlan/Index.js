import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import {Avatar, Card, Title, Paragraph} from 'react-native-paper';
import * as CommonStyle from '../../helper/CommonStyle';
import BGPIC from '../../../Image/logo.png';

// import { TextInput } from 'react-native-paper';
const CELL_COUNT = 4;
const Index = Routprops => {
  const [List, setList] = useState([{id: 1}, {id: 2}, {id: 3}, {id: 4}]);
  const CHECK = () => {
    Routprops.navigation.navigate('Subscription');
  };
  const {t, i18n} = useTranslation();
  const FlatListView = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => Routprops.navigation.navigate('Subscription')}>
        <Card
          style={{
            width: 138,
            height: 200,
            backgroundColor: CommonStyle.BlueButton,
            margin: 9,
          }}>
          <Card.Content>
            <Paragraph
              style={{
                textAlign: 'center',
                fontFamily: CommonStyle.Regular,
                fontSize: 13,
                color: CommonStyle.AppThemeLight,
                marginBottom: 17,
              }}>
              {t('Abonnement')}
            </Paragraph>
            <Paragraph
              style={{
                textAlign: 'center',
                fontFamily: CommonStyle.Regular,
                fontSize: 9,
                color: CommonStyle.AppThemeLight,
                marginVertical: -4,
              }}>
              {t('Avantage')} 1
            </Paragraph>
            <Paragraph
              style={{
                textAlign: 'center',
                fontFamily: CommonStyle.Regular,
                fontSize: 9,
                color: CommonStyle.AppThemeLight,
                marginVertical: -4,
              }}>
              {t('Avantage')} 1
            </Paragraph>
            <Paragraph
              style={{
                textAlign: 'center',
                fontFamily: CommonStyle.Regular,
                fontSize: 9,
                color: CommonStyle.AppThemeLight,
                marginVertical: -4,
              }}>
              {t('Avantage')} 1
            </Paragraph>
            <Paragraph
              style={{
                textAlign: 'center',
                fontFamily: CommonStyle.Regular,
                fontSize: 9,
                color: CommonStyle.AppThemeLight,
                marginVertical: -4,
              }}>
              {t('Avantage')} 1
            </Paragraph>
            <Title
              style={{
                textAlign: 'center',
                fontFamily: CommonStyle.Bold,
                fontSize: 18,
                color: CommonStyle.AppThemeLight,
                marginTop: 19,
              }}>
              {t('99,99€')}
            </Title>
            <Title
              style={{
                textAlign: 'center',
                fontFamily: CommonStyle.Bold,
                fontSize: 13,
                color: CommonStyle.AppThemeLight,
                marginTop: -12,
              }}>
              /{t('mois')}
            </Title>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        <View style={styles.container}>
          <Image source={BGPIC} style={styles.ImagesStyle} />
        </View>
        <View style={{width: '100%', alignItems: 'center'}}>
          <FlatList
            // key={'_'}
            data={List}
            renderItem={FlatListView}
            numColumns={2}
          />
        </View>
        <View
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Text
            style={{
              fontFamily: CommonStyle.Regular,
              fontSize: 13,
              color: CommonStyle.dark,
            }}>
            {t('Abonnement actuel')} :
          </Text>
          <Text
            style={{
              fontFamily: CommonStyle.Regular,
              fontSize: 13,
              color: CommonStyle.dark,
            }}>
            {t('aucun')}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Index;
