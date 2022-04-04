import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Octicons';
import Cal from 'react-native-vector-icons/AntDesign';
import User from 'react-native-vector-icons/FontAwesome';
import Back from 'react-native-vector-icons/Ionicons';
import Logo from '../../../Image/logo.png';
import Profile from '../../../Image/profile.png';
import Button from '../../Components/Button/index';
import {Rating, AirbnbRating} from 'react-native-ratings';
const LeaveComment = props => {
  const [List, setList] = useState([
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
  ]);
  const Next = () => {
    props.navigation.navigate('Drawer');
  };
  const FlatListView = ({item, index}) => {
    return (
      <ScrollView>
        <View style={styles.ListMenu}>
          <View style={styles.ListLeft}>
            <Text style={styles.DateList}>18/02/2020</Text>
            <Text style={styles.ListDes}>Coiffeur - Emmanuel Macron</Text>
          </View>
          <View style={styles.ListRight}>
            <Icon
              name="download"
              size={26}
              color="#181461"
              style={styles.DrawerIcon}
            />
            <Text style={styles.FeatureStyle}>Facture</Text>
          </View>
        </View>
        <View style={styles.Line} />
      </ScrollView>
    );
  };
  const New = () => {
    props.navigation.navigate('BookService')
  };
  return (
    <SafeAreaView style={styles.MainContainer}>
      <View style={styles.HeaderContainer}>
        <Back
          name="chevron-back"
          size={28}
          color="#EF233C"
          style={styles.BackIcon}
        />
        <User name="user-o" size={24} color="#EF233C" style={styles.UserIcon} onPress={Next}/>
      </View>
      <View style={styles.UpperContainer}>
        <View style={styles.ImageContainer}>
          <Image source={Profile} style={styles.ImageStyle} />
          <View>
            <Text style={styles.NameStyle}>Emmanuel Macron</Text>
            <Text style={styles.DesStyle}>Coiffeur</Text>
            <Text style={styles.DesStyle}>Elysée Paris 8ème</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginLeft: 8, marginTop: 8}}>
                <AirbnbRating
                  showRating={false}
                  count={5}
                  defaultRating={5}
                  size={16}
                  selectedColor="#F8A200"
                />
              </View>
              <Text style={styles.ratingStyle}>(3)</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.MainDrawer}>
        <View style={styles.FlatListContainer}></View>
        <View>
          <AirbnbRating
            showRating={false}
            count={5}
            defaultRating={5}
            size={30}
            selectedColor="#F8A200"
          />
        </View>
        <View>
          <TextInput
            placeholder="Ecrivez votre commentaire…"
            multiline={true}
            style={styles.CommentStyle}
          />
        </View>
        <Button ButtonText={'Valider'} propsFun={New} ButtonStyle={'red'} />
      </View>
    </SafeAreaView>
  );
};
export default LeaveComment;
