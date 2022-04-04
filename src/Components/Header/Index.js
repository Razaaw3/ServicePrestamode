import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import bars from '../../../Image/bars.png'
import avatar from '../../../Image/avatar.png'

const Index = (props) => {
  return (
    <View style={styles.mainContainer}>
        <TouchableOpacity>
        <Image source={bars} onPress={props.onPress}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onPress}>
        <Image source={avatar}/>
        </TouchableOpacity>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
    }
})