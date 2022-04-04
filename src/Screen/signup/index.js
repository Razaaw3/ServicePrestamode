import React, { useState , useEffect} from 'react';
import {
    View,
    SafeAreaView,
    ScrollView,
    Text,
    Image,
    TextInput
} from 'react-native';
import styles from './styles';
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
    const [Content, setContent] = useState('Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod');
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [time,settime] = useState('');
    const CHECK = () => {
        Routprops.navigation.navigate('PhoneNumber')
    }
    // return <Text>Example {time}</Text>
    return ( 
        <SafeAreaView style={styles.MainContainer}>
            <ScrollView>
                <View style={styles.container}>
                <Image source={BGPIC} style={styles.ImagesStyle} />
                    <View style={styles.InputContainer}>
                      <TextInput style={{marginLeft:20}}
                        placeholder='Nom'
                      />
                    </View>
                    <View style={styles.InputContainer}>
                      <TextInput style={{marginLeft:20}}
                        placeholder='Prénom'
                      />
                    </View>
                    <View style={styles.InputContainer}>
                      <TextInput style={{marginLeft:20}}
                        placeholder='E-mail'
                      />
                    </View>
                    <View style={styles.InputContainer}>
                      <TextInput style={{marginLeft:20}}
                        placeholder='Adresse'
                      />
                    </View>
                    <View style={styles.InputContainer}>
                      <TextInput style={{marginLeft:20}}
                        placeholder='Photo de profil'
                      />
                    </View>
                    <View style={{marginTop:90}}/>
                    <Button
                        ButtonText={'Valider'} 
                        propsFun={CHECK}
                        ButtonStyle={'red'}
                    /> 
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default VarificationCode;