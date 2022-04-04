import React, { useState , useEffect} from 'react';
import {
    View,
    SafeAreaView,
    ScrollView,
    Text,
    Image,
    TextInput
} from 'react-native';
import styles from '../varficationCode/styles';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
    
  } from 'react-native-confirmation-code-field';
import Button from '../../Components/Button/index';
import Header from '../../Components/AuthHeader/index';
import Icon from 'react-native-vector-icons/AntDesign';
import IconDown from 'react-native-vector-icons/Entypo';

import BGPIC from '../../../Image/logo.png';
const CELL_COUNT = 4;
const VarificationCode = (Routprops) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [time,settime] = useState('');
    const CHECK = () => {
        Routprops.navigation.navigate('VerificationCode')
    }
    // return <Text>Example {time}</Text>
    return ( 
        <SafeAreaView style={styles.MainContainer}>
            <ScrollView>
                <View style={styles.container}>
                <Image source={BGPIC} style={styles.ImagesStyle} />
                    <View style={{marginTop:25}}/>
                    <View>
                        <Text style={styles.Content}>Numéro de téléphone</Text>
                    </View>
                    <Text style={styles.ContentDes}>Un code vous sera envoyé</Text>
                    <View style={styles.InputStyleMain}>
                    <View style={[styles.InputStyle,{flexDirection:'row',marginLeft:20}]}>
                    <View style={{marginRight:1,marginTop:5}}>
                    <Text style={styles.PhoneCode}>+32</Text>
                    </View>
                    <IconDown name="chevron-small-down" size={25} color="#181461" style={{marginTop:10}}/>
                        <TextInput style={{width:'90%',height:37,marginTop:2,backgroundColor:'#fff',borderColor:'#fff',fontSize:16,marginLeft:10}}
                            placeholder='6 55 23 27 43'
                        />
                    </View>
                    <Icon name="close" size={20} color="lightgray" style={{marginLeft:52,marginTop:15}}/>
                    </View>
                    <Button
                        ButtonText={'Valider'} 
                        propsFun={CHECK}
                    /> 
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default VarificationCode;