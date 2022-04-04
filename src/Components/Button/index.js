import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ButtonContainer = props => {
  return (
    <View style={styles.ButtonContainer}>
      <TouchableOpacity
        style={{
          width: windowWidth * 0.9,
          alignSelf: 'center',
          height: 43,
          marginTop: windowHeight * 0.007,
          borderRadius: 8,
          backgroundColor:
            props.ButtonStyle === 'red'
              ? CommonStyle.RedButton
              : CommonStyle.BlueButton,
          justifyContent: 'center',
        }}
        onPress={props.propsFun}>
        <Text style={styles.Buttontext}>{props.ButtonText}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ButtonContainer;
const styles = StyleSheet.create({
  ButtonContainer: {
    width: windowWidth * 1.0,
    height: windowHeight * 0.08,
  },
  Buttontext: {
    fontSize: 16,
    textAlign: 'center',
    color: CommonStyle.white,
    fontFamily: CommonStyle.Regular,
  },
});
