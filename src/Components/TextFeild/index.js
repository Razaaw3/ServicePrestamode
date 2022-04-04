import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    TextInput
} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const TextFeild = (props) => {
    const data = props.Data;
    // const onChangeText = (key, value) => {
    //     console.log(key,value)
    //     value(key)
    //     // this.setState({[key]: value});
    // };
    return ( 
        <SafeAreaView >
            <TextInput placeholder={props.Heading}  
                onChangeText={data => props.setData(props.Data)}
                style={styles.InputStyle}
            />
            {console.log(props.Data)}
        </SafeAreaView>
        
    );
}
export default TextFeild;
const styles = StyleSheet.create({
    MainContainer : {
        // backgroundColor:CommonStyle.AppThemeDark,
        width:windowWidth*1.0,
        height:windowHeight*.075,
    },
    InputStyle:{
        width:windowWidth*.78,
        height:windowHeight*.052,
        // backgroundColor:'green',
        borderBottomWidth:1.5,
        borderColor:CommonStyle.AppThemeDark,
        alignSelf:'center',
        fontSize:14,
        fontFamily:CommonStyle.SamiBold,
    },
    IconStye:{
        alignSelf:'center',
        marginTop:6,
    },
})