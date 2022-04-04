import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Octicons';
import Logo from '../../../Image/logo.png';
import BGPIC from '../../../Image/skip1.png';
import abc from '../../../Image/skip2.png';
import def from '../../../Image/skip3.png';
import {SliderBox} from 'react-native-image-slider-box'

const Screen1 = (props) => {
  
  const [Images, setImages] = useState([BGPIC,abc,def]);
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        <View style={styles.container}>
          <Image source={Logo} style={styles.ImagesStyle} />
          <View style={{marginTop: 25}} />
          <View>
            <Text style={styles.Content}>Cherchez</Text>
          </View>
          <View style={{marginTop:150}}>
          <SliderBox 
                    images={Images}
                    sliderBoxHeight={500}
                    resizeMode={'contain'}
                    ImageComponentStyle={styles.ImagesStyle}
                />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.BottomLeft}>
            </View>
            {/* <View style={styles.Middle}>
              <Icon
                name="dot-fill"
                size={20}
                color="#14213D"
                style={styles.DotIcon}
              />
              <Icon
                name="dot-fill"
                size={20}
                color="lightgray"
                style={styles.DotIcon}
              />
              <Icon
                name="dot-fill"
                size={20}
                color="lightgray"
                style={styles.DotIcon}
              />
            </View> */}
            <View style={styles.BottomRight}>
              <TouchableOpacity onPress={()=>props.navigation.navigate('LoginSignUp')}>
                <Text style={styles.RightText}>Suivant</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Screen1;// 
// import React, {Component} from 'react';
// import {View, SafeAreaView, ScrollView, Text, Image, TouchableOpacity} from 'react-native';

// import { SliderBox } from "react-native-image-slider-box";
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       images: [
//         "https://source.unsplash.com/1024x768/?nature",
//         "https://source.unsplash.com/1024x768/?water",
//         "https://source.unsplash.com/1024x768/?girl",
//         "https://source.unsplash.com/1024x768/?tree", //        // Local image
//       ]
//     };
//   }
// render() {
//   return (
//       <View >
//           <SliderBox
//               images={this.state.images}
//               sliderBoxHeight={500}
//               onCurrentImagePressed={index =>
//                   console.warn(`image ${index} pressed`)
//               }
//               parentWidth={this.state.width}
//           />
//       </View>
//   );
// }
// }