import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import styles from './styles';
const TextContainer = (props) => {
    return ( 
        <View style={styles.TextContainer}>
            <Text style={[styles.Maintext,{marginTop:25}]}>
                {props.ContentText}
            </Text>
        </View>
    );
}
export default TextContainer;