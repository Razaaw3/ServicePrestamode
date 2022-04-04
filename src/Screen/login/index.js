import React, { useState , useEffect} from 'react';
import {
    View,
    SafeAreaView,
    ScrollView,
    Text,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import styles from './styles';
import {             
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
import * as CommonStyle from '../../helper/CommonStyle';
import Bars from '../../../Image/bars.png'
import Button from '../../Components/Button/index';
import Header from '../../Components/AuthHeader/index';
import Icon from 'react-native-vector-icons/AntDesign';
import BGPIC from '../../../Image/logo.png';
import CB from '../../../Image/CB.png'
import Calender from '../../../Image/calendar.png'
import Crypto from '../../../Image/crypto.png'
// import { TextInput } from 'react-native-paper';
const CELL_COUNT = 4;
const Index = (Routprops) => {
    const [Content, setContent] = useState('Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod');
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [time,settime] = useState('');
    const CHECK = () => {
        Routprops.navigation.navigate('DrawerBarber')
    }
    // return <Text>Example {time}</Text>
    return ( 
        <SafeAreaView style={styles.MainContainer}>
            <ScrollView>
            <View style={styles.container}>
                <Image source={BGPIC} style={styles.ImagesStyle} />
                </View>
        <View style={styles.inputContainer}>
                <View style={styles.inputField}>
                    <Text style={{fontFamily:CommonStyle.Regular,fontSize:16,width:'15%',color:'#2A2AC0',textAlign:'center'}}>+33</Text>
                    <TextInput placeholder='6 55 23 27 43' placeholderTextColor='rgba(28,28,28,0.2)' style={{fontFamily:CommonStyle.Regular,fontSize:16,width:'85%',alignSelf:'center'}}/>
                </View>  
                <View style={styles.inputFields}>
                    <TextInput placeholder='Mot de passe' placeholderTextColor='rgba(28,28,28,0.2)' style={{fontFamily:CommonStyle.Regular,fontSize:16,width:'85%',alignSelf:'center'}}/>
                </View>                   
        </View>
                    
            </ScrollView>
            <View style={{marginVertical:15,}}>
                        <Button ButtonStyle = 'red' ButtonText='Se connecter' propsFun={CHECK} />
                    </View>
           
        </SafeAreaView>
    );
}
export default Index;