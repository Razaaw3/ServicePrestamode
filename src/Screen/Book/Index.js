import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import * as CommonStyle from '../../helper/CommonStyle';
import Bars from '../../../Image/bars.png';
const Index = Routprops => {
  const [List, setList] = useState([{id: 1}, {id: 2}, {id: 3}, {id: 4}]);
  const {t, i18n} = useTranslation();
  const windowWidth = Dimensions.get('window').width;
  const FlatListView = ({item, index}) => {
    return (
      <View
        style={{
          width: '48%',
          height: 150,
          marginVertical: 10,
          alignSelf: 'center',
        }}>
        <View style={{width: '100%', height: 150}}>
          <Image
            source={require('../../../Image/Image.png')}
            style={{width: '100%', height: '100%', borderRadius: 10}}
            resizeMode="contain"
          />
        </View>
      </View>
    );
  };
  const CHECK = () => {
    Routprops.navigation.navigate('DrawerBarber');
  };
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        <View style={styles.HeaderContainer}>
          <TouchableOpacity
            onPress={() => Routprops.navigation.push('DrawerBarber')}>
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
              {t('Book')}
            </Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputField}>
            <TextInput
              numberOfLines={7}
              multiline={true}
              placeholder={t('Description')}
              placeholderTextColor="rgba(28,28,28,0.2)"
              style={{
                fontFamily: CommonStyle.Regular,
                fontSize: 16,
                width: '85%',
                alignSelf: 'center',
              }}
            />
          </View>
        </View>
        <View style={{alignSelf: 'center', width: '90%', marginLeft: 12}}>
          <FlatList data={List} renderItem={FlatListView} numColumns={2} />
        </View>
        <View style={{marginTop: 14}}>
          <View style={styles.ButtonContainer}>
            <TouchableOpacity
              style={{
                width: windowWidth * 0.9,
                alignSelf: 'center',
                height: 43,
                borderRadius: 8,
                backgroundColor: CommonStyle.BlueButton,
                justifyContent: 'center',
              }}>
              <Text style={styles.Buttontext}>{t('Ajouter une image')}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ButtonContainer}>
            <TouchableOpacity
              style={{
                width: windowWidth * 0.9,
                alignSelf: 'center',
                height: 43,
                borderRadius: 8,
                backgroundColor: CommonStyle.RedButton,
                justifyContent: 'center',
              }}
              onPress={CHECK}>
              <Text style={styles.Buttontext}>{t('Valider')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Index;
