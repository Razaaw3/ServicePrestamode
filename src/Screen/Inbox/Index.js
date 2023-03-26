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
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database';
const Index = props => {
  const [List, setList] = useState([]);
  const [id, setID] = useState('')
  const [Name, setName] = useState('')
  const {t, i18n} = useTranslation();
  useEffect(() => {
    // const userid=auth().currentUser.uid;
  
    database()
      .ref(`prestamodeUser`)
      .once('value')
      .then(snapshot => {
        let data = snapshot.val();
        let Items = Object.values(data);
        Items.forEach(ls=>{
        
          setList((oldData)=>[...oldData,ls])
          setID(ls.UserID)
          setName(ls.Name)
    
          console.log("list is ",List)
        })
      });
  }, [])
  const Next = (id,name) =>{
    props.navigation.navigate('Chat',{
      _id:id,
      name:name
    })
  }
  const FlatListView = ({item, index}) => {
    return (
      <TouchableOpacity onPress={()=>Next(item.UserID,item.Name)}>
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
                {t(item.Name)}
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
