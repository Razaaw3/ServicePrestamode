import React, { useState , useEffect,useRef} from 'react';
import {
    View,
    SafeAreaView,
    ScrollView,
    Text,
    Image,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';
import styles from './styles';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
    
  } from 'react-native-confirmation-code-field';
import Button from '../../Components/Button/index';
import * as CommonStyle from '../../helper/CommonStyle'
import Header from '../../Components/AuthHeader/index';
import Icon from 'react-native-vector-icons/AntDesign';
import IconDown from 'react-native-vector-icons/Entypo';
var validator = require('validator');
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
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [firstName, setFirstName] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')

  // const [name, setName] = useState('')
  const [Password,setPassword] = useState('');
  let dropDownAlertRef = useRef(null);
    const CHECK = () => {
        
    
    const ComEmail=validator.isEmpty(email);
        const ValEmail=validator.isEmail(email);
        const ComFullName=validator.isEmpty(name);
        const ComPassword=validator.isEmpty(Password);
        const Comdate=validator.isEmpty(address);
        const ComselectedGender=validator.isEmpty(firstName);
         if(ComFullName===true){
          setError('Name is Empty');
        }
        else if(ComselectedGender===true){
          setError('FirstName is Empty');
      }
        else if(ComEmail===true){
            setError('Email is Empty');
        }
        else if(ValEmail===false){
            setError('Email is invalid');
        }
      
        else if(Comdate===true){
            setError('Address is Empty');
        }
        else if(ComPassword===true){
            setError('Password is Empty');
        }
        else{
          Routprops.navigation.navigate('PhoneNumber')
        }
    }
    return ( 
        <SafeAreaView style={styles.MainContainer}>
                  <KeyboardAvoidingView
                  style={{flex:1}}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
            <ScrollView>
    
                <View style={styles.container}>
                <Image source={BGPIC} style={styles.ImagesStyle} />
                    <View style={styles.InputContainer}>
                      <TextInput style={{marginLeft:20}}
                        placeholder='Nom'
                        onChangeText={name=>setName(name)}
                      />
                    </View>
                    <View style={styles.InputContainer}>
                      <TextInput style={{marginLeft:20}}
                        placeholder='Prénom'
                        onChangeText={name=>setFirstName(name)}
                      />
                    </View>
                    <View style={styles.InputContainer}>
                      <TextInput style={{marginLeft:20}}
                        placeholder='E-mail'
                        onChangeText={name=>setEmail(name)}
                      />
                    </View>
                    <View style={styles.InputContainer}>
                      <TextInput style={{marginLeft:20}}
                        placeholder='Adresse'
                        onChangeText={name=>setAddress(name)}
                      />
                    </View>
                    <View style={styles.InputContainer}>
                      <TextInput style={{marginLeft:20}}
                        placeholder='mot de pass'
                        onChangeText={name=>setPassword(name)}
              
                      />
                    </View>
                    <View style={styles.InputContainer}>
                      <TextInput style={{marginLeft:20}}
                        placeholder='Photo de profil'
                      />
                    </View>
                    
                    <Text style={{alignSelf:'center',color:'red',fontFamily:CommonStyle.Regular,fontSize:12}}>{error}</Text>                
                    <View style={{marginTop:30}}/>
                    <Button
                        ButtonText={'Valider'} 
                        propsFun={CHECK}
                        ButtonStyle={'red'}
                    /> 
                </View>
               
            </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
export default VarificationCode;