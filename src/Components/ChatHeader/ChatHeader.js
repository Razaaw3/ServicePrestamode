import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Text,
    View,
    Image
} from 'react-native';
import * as CommonStyle from '../../helper/CommonStyle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Heart from 'react-native-vector-icons/dist/MaterialIcons';
import Video from 'react-native-vector-icons/dist/FontAwesome5';

const ChatHeader = (props) => {
    return ( 
        <SafeAreaView style={styles.MainContainer}>
            <TouchableOpacity style={styles.BackContainer} onPress={()=>props.BackNavigation.goBack()}>
                <Icon name="chevron-back" size={18} color="white" style={styles.IconStye}/>
            </TouchableOpacity>
            <Image source={props.Img} style={styles.ImageContainer}/>
            <View style={styles.HeadingContainer}>
                <Text style={styles.HeadingText}>{props.Heading.toUpperCase()}</Text>
            </View>
            <TouchableOpacity onPress={props.Calling}>
                <Heart name="add-call" size={25} color="black" style={styles.CallIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={props.Calling}>
                <Video name="video" size={25} color="black" style={styles.CallIcon} />
            </TouchableOpacity>
        </SafeAreaView>
    );
}
export default ChatHeader;
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
        width:windowWidth*.42,
        height:windowHeight*.050,
        borderRadius:8,
        marginTop:windowHeight*.010,
    },
    HeadingText:{
        textAlign:'center',
        fontFamily:CommonStyle.SamiBold,
        fontSize:17,
        marginTop:10
    },
    ImageContainer:{
        width:windowWidth*.1,
        height:windowHeight*.06,
        borderRadius:50,
        marginLeft:windowWidth*.05,
        marginTop:6
    },
    CallIcon:{
        marginLeft:windowWidth*.04,
        marginTop:15
    },
})