import React, { useState , useEffect,useRef} from 'react';
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
import * as CommonStyle from '../../helper/CommonStyle'
import PhoneInput from "react-native-phone-number-input";
import BGPIC from '../../../Image/logo.png';
const CELL_COUNT = 4;
var validator = require('validator');
const VarificationCode = (Routprops) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('')
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [Value, setvalue] = useState("");
    const phoneinput = useRef(null);
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [time,settime] = useState('');
    const CHECK = () => {
        if(validator.isEmpty(Value)===true){
            setError('Phone Number is Empty')
        }
        else{
            Routprops.navigation.navigate('VerificationCode')
            setError('')
        }
        // 
        // const checkValid = phoneinput.current?.isValidNumber(value);
        // setShowMessage(true);
        // setValid(checkValid ? checkValid : false);
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
                    <View style={styles.InputStyleMains}>
                    <View >
                    {/* <View style={{marginRight:1,marginTop:5}}>
                    <Text style={styles.PhoneCode}>+32</Text>
                    </View>
                    
                    <IconDown name="chevron-small-down" size={25} color="#181461" style={{marginTop:10}}/>
                        <TextInput style={{width:'90%',height:37,marginTop:2,backgroundColor:'#fff',borderColor:'#fff',fontSize:16,marginLeft:10}}
                            placeholder='6 55 23 27 43'
                        /> */}
                        <PhoneInput
            defaultValue={Value}
            defaultCode="DM"
            layout="first"
            onChangeText={(text) => {
              setvalue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            style={styles.InputStyles}
          />
                    </View>
                    </View>
                    {/* {showMessage && (
            <View>
              <Text>Value : {Value}</Text>
              <Text>Formatted Value : {formattedValue}</Text>
              <Text>Valid : {valid ? "true" : "false"}</Text>
            </View>
          )} */}
                              <Text style={{marginBottom:9,alignSelf:'center',color:'red',fontFamily:CommonStyle.Regular,fontSize:12}}>{error}</Text>                

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