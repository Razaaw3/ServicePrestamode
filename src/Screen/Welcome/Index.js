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
        Routprops.navigation.navigate('PaymentPlan')
    }
    // return <Text>Example {time}</Text>
    return ( 
        <SafeAreaView style={styles.MainContainer}>
            <ScrollView>
                <View style={styles.container}>
                <Image source={BGPIC} style={styles.ImagesStyle} />
                </View>
                <View style={{width:252,height:40,alignSelf:'center',paddingHorizontal:15,paddingVertical:5,marginVertical:15}}>
                    <Text style={{textAlign:'center',fontFamily:CommonStyle.Bold,fontSize:24,color:CommonStyle.BlueButton}}>Bienvenue !</Text>
                </View>
                <View style={{width:243,height:53,alignSelf:'center',marginVertical:25}}>
                    <Text style={{textAlign:'center',fontFamily:CommonStyle.Regular,fontSize:14,color:'#181461'}}>Dernière vérification, veuillez fournir une pièce d’identité pour vérification</Text>
                </View>
              
                    <View style={{marginVertical:15,}}>
                        <Button ButtonText='Sélectionner un fichier' propsFun={CHECK} />
                    </View>
                    <View style={{width:'80%',alignSelf:'center'}}>
                        <Text style={{textAlign:'center'}}>Document acceptés : carte d’identité, passeport, titre de séjour, permis de conduire</Text>
                    </View>
                    
                {/* </View> */}
            </ScrollView>
            <View style={{width:'80%',alignSelf:'center',marginBottom:35}}>
                <TouchableOpacity>
                        <Text style={{textAlign:'center'}}>Envoyer plus tard</Text>
                </TouchableOpacity>
                    </View>
        </SafeAreaView>
    );
}
export default Index;