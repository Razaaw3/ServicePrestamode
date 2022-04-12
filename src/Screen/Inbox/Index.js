import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';

import * as CommonStyle from '../../helper/CommonStyle';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import Back from 'react-native-vector-icons/Ionicons';
import avatar from '../../../Image/avatar.png';
import {Avatar} from 'react-native-paper';
const Index = props => {
  const [List, setList] = useState([
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
  ]);
  const {t, i18n} = useTranslation();
  const FlatListView = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => props.navigation.navigate('Chat')}>
        <View style={styles.chatContainer}>
          <View style={{width: '20%'}}>
            <Avatar.Image
              size={70}
              source={require('../../../Image/logo.png')}
              style={{backgroundColor: 'transparent'}}
            />
          </View>
          <View style={{flexDirection: 'column', width: '100%'}}>
            <View style={styles.chatHeading}>
              <Text
                style={{
                  fontFamily: CommonStyle.Bold,
                  fontSize: 15,
                  color: CommonStyle.dark,
                }}>
                {t('Julian Dasilva')}
              </Text>
              <Text style={{fontFamily: CommonStyle.Regular, fontSize: 12}}>
                {t('1h ago')}
              </Text>
            </View>
            <View style={styles.chat}>
              <Text>{t('Hi Julian! See you after work?')}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      // </ScrollView>
    );
  };
  const New = () => {};
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        <View style={styles.HeaderContainer}>
          <Back
            onPress={() => props.navigation.goBack(null)}
            name="chevron-back"
            size={26}
            color="#707070"
          />
          <TouchableOpacity>
            <Image source={avatar} />
          </TouchableOpacity>
        </View>
        <View style={styles.message}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: CommonStyle.Bold,
              color: CommonStyle.dark,
            }}>
            {t('Messagerie')}
          </Text>
        </View>
        <View>
          <FlatList data={List} renderItem={FlatListView} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Index;
