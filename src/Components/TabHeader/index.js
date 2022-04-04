import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Text,
    View
} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/dist/Ionicons';
const TabHeader = (props) => {
    return ( 
        <SafeAreaView style={styles.MainContainer}>
            <TouchableOpacity style={styles.BackContainer} onPress={()=>props.BackNavigation.goBack()}>
                <Icon name="chevron-back" size={18} color="white" style={styles.IconStye}/>
            </TouchableOpacity>
            <View style={styles.HeadingContainer}>
                {/* <Text style={styles.HeadingText}>{props.Heading.toUpperCase()}</Text> */}
                <Text style={styles.HeadingText}>{props.Heading}</Text>
            </View>
        </SafeAreaView>
    );
}
export default TabHeader;
const styles = StyleSheet.create({
    MainContainer : {
        flexDirection:'row',
        backgroundColor:'#ffffff',
        width:windowWidth*1.0,
        height:windowHeight*.075,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    BackContainer:{
        width:windowWidth*.09,
        backgroundColor:CommonStyle.HeaderButton,
        height:windowHeight*.045,
        borderRadius:14,
        marginTop:windowHeight*.015,
        marginLeft:windowWidth*.056,
    },
    IconStye:{
        alignSelf:'center',
        marginTop:7,
    },
    HeadingContainer:{
        width:windowWidth*.69,
        height:windowHeight*.050,
        borderRadius:8,
        marginTop:windowHeight*.010,
    },
    HeadingText:{
        textAlign:'center',
        fontFamily:CommonStyle.SamiBold,
        fontSize:17,
        marginTop:10
    }
})