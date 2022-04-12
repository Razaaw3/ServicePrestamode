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
import {Provider} from 'react-native-paper';
import MultiSelect from 'react-native-multiple-select';
import {useTranslation} from 'react-i18next';
import * as CommonStyle from '../../helper/CommonStyle';
import styles from './styles';
import Back from 'react-native-vector-icons/Ionicons';
import ButtonS from '../../Components/Button/index';

const Index = props => {
  const {t, i18n} = useTranslation();
  const [tabSelected, setTabSelected] = useState(false);
  const [coiffure, setCoiffure] = useState(false);
  const [coutures, setCoutures] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const items = [
    {
      id: '92iijs7yta',
      name: 'Ondo',
    },
    {
      id: 'a0s0a8ssbsd',
      name: 'Ogun',
    },
    {
      id: '16hbajsabsd',
      name: 'Calabar',
    },
    {
      id: 'nahs75a5sg',
      name: 'Lagos',
    },
    {
      id: '667atsas',
      name: 'Maiduguri',
    },
    {
      id: 'hsyasajs',
      name: 'Anambra',
    },
    {
      id: 'djsjudksjd',
      name: 'Benue',
    },
    {
      id: 'sdhyaysdj',
      name: 'Kaduna',
    },
    {
      id: 'suudydjsjd',
      name: 'Abuja',
    },
    {
      id: 'a0s0a8ssbsd',
      name: 'Ogun',
    },
    {
      id: '16hbajsabsd',
      name: 'Calabar',
    },
    {
      id: 'nahs75a5sg',
      name: 'Lagos',
    },
    {
      id: '667atsas',
      name: 'Maiduguri',
    },
    {
      id: 'hsyasajs',
      name: 'Anambra',
    },
    {
      id: 'djsjudksjd',
      name: 'Benue',
    },
    {
      id: 'sdhyaysdj',
      name: 'Kaduna',
    },
    {
      id: 'suudydjsjd',
      name: 'Abuja',
    },
  ];
  const maxVal = 1900;
  const Next = () => {
    props.navigation.navigate('DrawerBarber');
  };
  const FlatListView = ({item, index}) => {
    return (
      <View style={styles.listStyle}>
        <Text
          style={{
            fontFamily: CommonStyle.Regular,
            fontSize: 16,
            color: CommonStyle.dark,
          }}>
          {t(item)}
        </Text>
        <Back name="checkmark-circle" size={26} color={CommonStyle.RedButton} />
      </View>
    );
  };
  const onSelectedItemsChange = selectedItems => {
    setSelectedItems(selectedItems);
    console.log(selectedItems);
  };
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        <View style={styles.HeaderContainer}>
          <View>
            <Text
              style={{
                color: CommonStyle.dark,
                fontSize: 24,
                fontFamily: CommonStyle.Bold,
              }}>
              {t('Métier')}
            </Text>
          </View>
        </View>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            onPress={() => {
              setTabSelected(true);
              setCoiffure(false);
              setCoutures(true);
            }}>
            <View
              style={
                coutures === false
                  ? {flexDirection: 'row'}
                  : styles.tabContainer2
              }>
              <View style={{width: 20, height: 20, marginHorizontal: 5}}>
                <Image
                  source={require('../../../Image/sewing.png')}
                  resizeMode="contain"
                  style={{width: '100%', height: '100%', color: '#707070'}}
                />
              </View>
              <Text style={{color: '#707070'}}>{t('Coutures')}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setTabSelected(true);
              setCoiffure(true);
              setCoutures(false);
            }}>
            <View
              style={
                coiffure === false
                  ? {flexDirection: 'row'}
                  : styles.tabContainer2
              }>
              <View style={{width: 20, height: 20, marginHorizontal: 5}}>
                <Image
                  source={require('../../../Image/barber.png')}
                  resizeMode="contain"
                  style={{width: '100%', height: '100%', color: '#707070'}}
                />
              </View>
              <Text style={{color: '#707070'}}>{t('Coiffure')}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setTabSelected(false);
              setCoiffure(false);
              setCoutures(false);
            }}>
            <View
              style={
                tabSelected === false
                  ? styles.tabContainer2
                  : {flexDirection: 'row'}
              }>
              <View style={{width: 20, height: 20, marginHorizontal: 5}}>
                <Image
                  source={require('../../../Image/nail.png')}
                  resizeMode="contain"
                  style={{width: '100%', height: '100%', color: '#707070'}}
                />
              </View>
              <Text style={{color: '#707070'}}>{t('Esthétique')}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Provider style={{width: '100%', backgroundColor: 'green'}}>
          <MultiSelect
            hideTags
            items={items}
            uniqueKey="name"
            onSelectedItemsChange={onSelectedItemsChange}
            selectedItems={selectedItems}
            selectText="Pick Items"
            searchInputPlaceholderText="Search Items..."
            onChangeInput={text => console.log(text)}
            altFontFamily="ProximaNova-Light"
            tagRemoveIconColor="#CCC"
            tagBorderColor="#CCC"
            tagTextColor="#CCC"
            selectedItemTextColor="#CCC"
            selectedItemIconColor="#CCC"
            itemTextColor="#000"
            displayKey="name"
            searchInputStyle={{color: '#CCC'}}
            submitButtonColor="#CCC"
            submitButtonText="Submit"
            styleMainWrapper={{width: '95%', alignSelf: 'center'}}
            styleListContainer={{width: '100%', height: 300}}
          />
          <View style={{marginHorizontal: 30}}>
            <Text
              style={{
                fontFamily: CommonStyle.Bold,
                fontSize: 24,
                color: '#181461',
                marginVertical: 5,
              }}>
              {t('Expertise')}
            </Text>
            <Text
              style={{
                fontFamily: CommonStyle.Regular,
                fontSize: 14,
                color: CommonStyle.Date,
                marginVertical: 10,
                marginHorizontal: 8,
              }}>
              {t('Beauté visage')}
            </Text>
          </View>
        </Provider>
        <View style={styles.listContainer}>
          <FlatList
            // key={'_'}
            data={selectedItems}
            renderItem={FlatListView}
          />
        </View>
      </ScrollView>
      <View>
        <ButtonS ButtonStyle="red" ButtonText="Valider " propsFun={Next} />
      </View>
    </SafeAreaView>
  );
};
export default Index;
