import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Logo from '../../../Image/logo.png';
import BGPIC from '../../../Image/skip1.png';
import abc from '../../../Image/skip2.png';
import def from '../../../Image/skip3.png';
import {SliderBox} from 'react-native-image-slider-box'
import {useTranslation} from 'react-i18next';

import '../../config/i18n/index'

const Screen1 = (props) => {
  const {t,i18n} = useTranslation(); 
  const [Images, setImages] = useState([BGPIC,abc,def]);
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
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
              <TouchableOpacity onPress={()=>props.navigation.navigate('Screen2')}>
                <Text style={styles.RightText}>{t("Suivant")}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Screen1;