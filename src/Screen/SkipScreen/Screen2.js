import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, ScrollView, Text, Image,TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Octicons';
import Logo from '../../../Image/logo.png';
import BGPIC from '../../../Image/skip2.png';
const Screen2 = (props) => {
  const previous = () => {
    props.navigation.navigate('Screen1');
  }
  const Next = () => {
    props.navigation.navigate('Screen3');
  }
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        <View style={styles.container}>
          <Image source={Logo} style={styles.ImagesStyle} />
          <View style={{marginTop: 25}} />
          <View>
            <Text style={styles.Content}>Filtrez</Text>
          </View>
          <View>
            <Image source={BGPIC} style={styles.ImageStyle} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.BottomLeft}>
              <TouchableOpacity onPress={previous}>
                <Text style={styles.LeftText}>Précédent</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Middle}>
              <Icon
                name="dot-fill"
                size={20}
                color="lightgray"
                style={styles.DotIcon}
              />
              <Icon
                name="dot-fill"
                size={20}
                color="#14213D"
                style={styles.DotIcon}
              />
              <Icon
                name="dot-fill"
                size={20}
                color="lightgray"
                style={styles.DotIcon}
              />
            </View>
            <View style={styles.BottomRight}>
              <TouchableOpacity onPress={Next}>
                <Text style={styles.RightText}>Suivant</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Screen2;
