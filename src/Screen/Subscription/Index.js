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
        Routprops.navigation.navigate('DrawerBarber')
    }
    // return <Text>Example {time}</Text>
    return ( 
        <SafeAreaView style={styles.MainContainer}>
            <ScrollView>
                <View style={styles.container}>
                <Image source={BGPIC} style={styles.ImagesStyle} />
                </View>
                <View style={{width:252,height:110,alignSelf:'center',paddingHorizontal:15,paddingVertical:5,marginVertical:15}}>
                    <Text style={{textAlign:'center',fontFamily:CommonStyle.Bold,fontSize:24,color:CommonStyle.BlueButton}}>Dernière étape avant de proposer vos services</Text>
                </View>
                <View style={{width:243,height:53,alignSelf:'center',marginBottom:30}}>
                    <Text style={{textAlign:'center',fontFamily:CommonStyle.Regular,fontSize:14,color:'#181461'}}>Accédez à notre réseau de clients sans commission en souscrivant à notre</Text>
                    <Text style={{textAlign:'center',fontFamily:CommonStyle.Bold,fontSize:16,color:'#181461'}}>abonnement mensuel de 100€</Text>
                </View>
                <View style={styles.whiteContainer}>
                    <Text style={{textAlign:'center',color:'#1C1939',marginVertical:10}}>Coordonnées de paiement</Text>
                {/* <View style={{  borderBottomWidth:2,borderBottomColor:'#E4EBF9',}}> */}
                    <View style={styles.borderContainer}>
                        <View style={{width:'10%',}}>
                        <Image source={CB}/>
                        </View>
                        <TextInput placeholderTextColor='E4EBF9' placeholder='Numéro de carte bancaire' style={{width:'90%'}}/>
                        {/* <Text style={{color:'E4EBF9',}}>Numéro de carte bancaire</Text> */}
                    </View>
                    <View style={styles.borderContainer}>
                        <View style={{width:'10%',}}>
                        <Image source={Calender}/>
                        </View>
                        <TextInput placeholderTextColor='E4EBF9' placeholder='Date d’expiration' style={{width:'90%'}}/>
                        {/* <Text style={{color:'E4EBF9',}}>Numéro de carte bancaire</Text> */}
                    </View>
                    <View style={styles.borderContainer}>
                        <View style={{width:'10%',}}>
                        <Image source={Crypto}/>
                        </View>
                        <TextInput placeholderTextColor='E4EBF9' placeholder='Date d’expiration' style={{width:'90%'}}/>
                        {/* <Text style={{color:'E4EBF9',}}>Numéro de carte bancaire</Text> */}
                    </View>
                    </View>
                    <View style={{marginVertical:15}}>
                        <Button propsFun={CHECK} ButtonText='Payer et commencer' ButtonStyle = 'red' />
                    </View>
                    <View>
                        <Text style={{textAlign:'center'}}>En cliquant sur valider vous acceptez nos conditions</Text>
                    </View>
                    
                {/* </View> */}
            </ScrollView>
        </SafeAreaView>
    );
}
export default Index;