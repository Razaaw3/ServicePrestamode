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
import Arrow from 'react-native-vector-icons/MaterialIcons';
import MultiSelect from 'react-native-multiple-select';
import {useTranslation} from 'react-i18next';
import * as CommonStyle from '../../helper/CommonStyle';
import styles from './styles';
import Back from 'react-native-vector-icons/Ionicons';
import ButtonS from '../../Components/Button/index';
import * as Services from '../../config/JSONS/Services'

const Index = props => {
  const {t, i18n} = useTranslation();
  const [tabSelected, setTabSelected] = useState(false);
  const [coiffure, setCoiffure] = useState(false);
  const [coutures, setCoutures] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [width, setWidth] = useState(false)

  const [services, setServices] = useState('');

  // ARRAYS 
  const [coutureServices, setcoutureServices] = useState(Services.couture)
  const [coiffureServices, setcoiffureServices] = useState(Services.coiffure)
  const [esthetiqueServices, setesthetiqueServices] = useState(Services.esthetique)


  const [servicesHandler, setservicesHandler] = useState(Services.esthetique)
  const [serviceAray, setServiceAray] = useState([])
  const serviceArrayHandler = (item) =>{
    // console.log(item)
    // setServices(item)
    setServices("wa")
      // setServiceAray((olddata)=>{
      //     return[item,...olddata]
      // })
    //   console.log(serviceAray)
    serviceAray.push(item)
    console.log(serviceAray)
  }
const FlatListViews = ({item,index})=>{
  return(

    <View>
   <Text
        style={{
          paddingHorizontal:15,
          fontSize: 16,
          fontFamily: CommonStyle.Bold,
          color: CommonStyle.dark,
          marginVertical:10
        }}>
          {item.heading}
      </Text>
      {item.services.map((item,index)=>{
                return(
                  <TouchableOpacity onPress={serviceArrayHandler.bind(this,item)}>
                  <Text
              style={{
                fontSize: 14,
                fontFamily: CommonStyle.Regular,
                color: CommonStyle.dark,
                paddingHorizontal:30,
                paddingVertical:4
              }}>
                  {item} 
                  </Text>
                  </TouchableOpacity>
                )

              })} 
  </View>
 
  )
}
  const maxVal = 1900;
  const Next = () => {
    props.navigation.navigate('Benifits',{
      selectedServices:serviceAray
    });
  }
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
              setservicesHandler(coutureServices)
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
              setservicesHandler(coiffureServices)
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
              setservicesHandler(esthetiqueServices)
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
          {/* <MultiSelect
            hideTags
            items={servicesHandler}
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
          /> */}
          
             {width===false?<TouchableOpacity onPress={()=>setWidth(!width)}>
             <View style={[styles.inputFields,{flexDirection:'row'}]}>              
             
            <View
              style={{width: '90%', height: '100%', justifyContent: 'center'}}>
             <Text
                  style={{
                    backgroundColor: CommonStyle.white,
                    color: CommonStyle.dark,
                    paddingHorizontal:15
                  }}>
                  {t('Pick up services...')}
                </Text>
            </View>
            <View
              style={{
                width: '10%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Arrow name="keyboard-arrow-down" size={24} color="#EF233C" />
            </View>
          </View>
          </TouchableOpacity>
          :
          <>
          <View style={[styles.inputFields,{height:'auto'}]}>
            
            <View style={{height:'10%',alignItems:'center',flexDirection:'row',paddingHorizontal:10}}>      
            <TouchableOpacity onPress={()=>setWidth(!width)} style={{flexDirection:'row',flexDirection:'row',justifyContent:'space-around'}}>       
          <View
            style={{ justifyContent: 'center'}}>
           <Text
                style={{
                  backgroundColor: CommonStyle.white,
                  color: CommonStyle.dark,
                  paddingHorizontal:15
                }}>
                {t('Pick up services...')}
              </Text>
          </View>
          <View>
            <Arrow name="keyboard-arrow-down" size={24} color="#EF233C" />
          </View>
          </TouchableOpacity>
       
         
        </View>
        <View style={{width: '90%',height:'auto',zIndex:900, justifyContent: 'center'}}>
          <FlatList
          data={servicesHandler}
          renderItem={FlatListViews}
        />
          </View> 
        </View>
       
        </>
          }
          
        
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
            data={serviceAray}
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
