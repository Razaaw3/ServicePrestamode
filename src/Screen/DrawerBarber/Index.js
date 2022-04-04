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
import Icon from 'react-native-vector-icons/MaterialIcons';
import BGPIC from '../../../Image/logo.png';
import CB from '../../../Image/CB.png'
import Calender from '../../../Image/calendar.png'
import Crypto from '../../../Image/crypto.png'
import Logo from '../../../Image/logo.png'
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
        Routprops.navigation.navigate('Benifits')
    }
    // return <Text>Example {time}</Text>
    return ( 
        <SafeAreaView style={styles.MainContainer}>
            <ScrollView>
            <View style={styles.HeaderContainer}>
            <View style={styles.container}>
                <Image source={Logo} style={styles.ImagesStyle} />
                </View>
        </View>
        <View style={styles.inputContainer}>
            <TouchableOpacity onPress={()=>Routprops.navigation.navigate('Profile')}>
                <View style={styles.inputFields}>
                   <Text style={{fontFamily:CommonStyle.Regular,fontSize:14,width:'80%',alignSelf:'center',color:'#042C5C',marginLeft:25}}>Profil</Text>
                    <Icon name='keyboard-arrow-right' size={26} style={{alignSelf:'center'}}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Routprops.navigation.navigate('Benifits')}>
                <View style={styles.inputFields}>
                   <Text style={{fontFamily:CommonStyle.Regular,fontSize:14,width:'80%',alignSelf:'center',color:'#042C5C',marginLeft:25}}>Prestations</Text>
                    <Icon name='keyboard-arrow-right' size={26} style={{alignSelf:'center'}}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Routprops.navigation.navigate('Book')}>
                <View style={styles.inputFields}>
                   <Text style={{fontFamily:CommonStyle.Regular,fontSize:14,width:'80%',alignSelf:'center',color:'#042C5C',marginLeft:25}}>Book</Text>
                    <Icon name='keyboard-arrow-right' size={26} style={{alignSelf:'center'}}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Routprops.navigation.navigate('Schedule')}>
                <View style={styles.inputFields}>
                   <Text style={{fontFamily:CommonStyle.Regular,fontSize:14,width:'80%',alignSelf:'center',color:'#042C5C',marginLeft:25}}>Planning</Text>
                    <Icon name='keyboard-arrow-right' size={26} style={{alignSelf:'center'}}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Routprops.navigation.navigate('Inbox')}>
                <View style={styles.inputFields}>
                   <Text style={{fontFamily:CommonStyle.Regular,fontSize:14,width:'80%',alignSelf:'center',color:'#042C5C',marginLeft:25}}>Messagerie</Text>
                    <Icon name='keyboard-arrow-right' size={26} style={{alignSelf:'center'}}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Routprops.navigation.navigate('History')}>
                <View style={styles.inputFields}>
                   <Text style={{fontFamily:CommonStyle.Regular,fontSize:14,width:'80%',alignSelf:'center',color:'#042C5C',marginLeft:25}}>Historique</Text>
                    <Icon name='keyboard-arrow-right' size={26} style={{alignSelf:'center'}}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Routprops.navigation.navigate('Welcome')}>
                <View style={styles.inputFields}>
                   <Text style={{fontFamily:CommonStyle.Regular,fontSize:14,width:'80%',alignSelf:'center',color:'#042C5C',marginLeft:25}}>Abonnement</Text>
                    <Icon name='keyboard-arrow-right' size={26} style={{alignSelf:'center'}}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.inputField}>
                   <Text style={{fontFamily:CommonStyle.Regular,fontSize:14,width:'80%',alignSelf:'center',color:'#042C5C',marginLeft:25}}>Déconnexion</Text>
                </View>
            </TouchableOpacity>
        </View>
                    
            </ScrollView>           
        </SafeAreaView>
    );
}
export default Index;