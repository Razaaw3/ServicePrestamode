import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, ScrollView, Text, Image, TouchableOpacity,Dimensions} from 'react-native';
import styles from './styles';
import Logo from '../../../Image/logo.png';
import BGPIC from '../../../Image/skip1.png';
import abc from '../../../Image/skip2.png';
import def from '../../../Image/skip3.png';
import {SliderBox} from 'react-native-image-slider-box'
import {useTranslation} from 'react-i18next';
import Screen2 from '../SkipScreen/Screen2';
import Screen3 from '../SkipScreen/Screen3';
import '../../config/i18n/index'
import { useNavigation } from '@react-navigation/native';

const Screen1 = (props) => {
  const navigation = useNavigation();
  const [sliderState, setSliderState] = useState({ currentPage: 0 })
  const { width, height } = Dimensions.get('window');

  const setSliderPage = (event) => {
    const { currentPage } = sliderState;
    console.log("currentPage",currentPage)
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    console.log("indexOfNextScreen",indexOfNextScreen)
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };
  const { currentPage: pageIndex } = sliderState;
  const {t,i18n} = useTranslation(); 
  const [Images, setImages] = useState([BGPIC,abc,def]);
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={(event) => {

            setSliderPage(event);
          }}>
        <View style={styles.container}>
          <Image source={Logo} style={styles.ImagesStyle} />
          <View style={{marginTop: 25}} />
          <View>
            <Text style={styles.Content}>{t("Cherchez")}</Text>
          </View>
          <View style={{marginTop:150}}>
          <SliderBox 
                    images={Images}
                    sliderBoxHeight={500}
                    resizeMode={'contain'}
                    ImageComponentStyle={styles.ImagesStyle}
                />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.BottomRight}>
              <TouchableOpacity onPress={()=>navigation.navigate('LoginSignUp')}>
                <Text style={styles.RightText}>{t("Suivant")}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <Screen2/>
        </View>
        <View>
          <Screen3/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Screen1;