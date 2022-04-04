import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/dist/Ionicons';
const AuthHeader = (props) => {
    return ( 
        <SafeAreaView style={styles.MainContainer}>
            <TouchableOpacity style={styles.BackContainer} onPress={()=>props.BackNavigation.goBack()}>
                <Icon name="chevron-back" size={20} color="white" style={styles.IconStye}/>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
export default AuthHeader;
const styles = StyleSheet.create({
    MainContainer : {
        // backgroundColor:CommonStyle.AppThemeDark,
        width:windowWidth*1.0,
        height:windowHeight*.075,
    },
    BackContainer:{
        width:windowWidth*.09,
        backgroundColor:CommonStyle.HeaderButton,
        height:windowHeight*.045,
        borderRadius:8,
        marginTop:windowHeight*.032,
        marginLeft:windowWidth*.056,
    },
    IconStye:{
        alignSelf:'center',
        marginTop:6,
    },
})