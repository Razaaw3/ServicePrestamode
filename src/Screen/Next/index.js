import React, { useState } from 'react';
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Text
} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import styles from './styles';
import Next1 from '../../../Image/Next1.png';
import Next2 from '../../../Image/Next2.png';
import Next3 from '../../../Image/Next3.png';
import Button from '../../Components/Button/index';
import TextContainer from '../../Components/Text/index';
const NextScreen1 = (props) => {
    const RoutNext = () => {
        props.navigation.navigate('UserAgreement')
        // LoginSignUp
    }
    const [Images, setImages] = useState([Next1,Next2,Next3]);
    const [Content, setContent] = useState('We will provide best services, instant response and best online counselling regarding your medical problems');
    return ( 
        <SafeAreaView style={styles.MainContainer}>
            <View style={styles.container}>
                <SliderBox images={Images}
                    sliderBoxHeight={300}
                    resizeMode={'cover'}
                    ImageComponentStyle={styles.ImagesStyle}
                />
                <View>
                    <TextContainer ContentText={Content}/>
                </View>
                <View style={{marginTop:25}}>
                    <Button 
                        ButtonText={'NEXT'} 
                        propsFun={RoutNext}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}
export default NextScreen1;