import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Octicons';
import Cal from 'react-native-vector-icons/AntDesign';
import User from 'react-native-vector-icons/FontAwesome';
import Back from 'react-native-vector-icons/Ionicons';
import Logo from '../../../Image/logo.png';
import Profile from '../../../Image/profile.png';
import Button from '../../Components/Button/index';
const Drawer = props => {
  const [List , setList] = useState([
    {id:1},{id:1},{id:1},{id:1},{id:1},{id:1},
    {id:1},{id:1},{id:1},{id:1},{id:1},{id:1}
  ])
  const Next = () => {
    props.navigation.navigate('LeaveComment');
  };
  const FlatListView = ({item,index}) => {
    return(
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
                  color='#181461'
                  style={styles.DrawerIcon}
                />
                <Text style={styles.FeatureStyle}>Facture</Text>
              </View>
            </View>
            <View style={styles.Line}/>
      </ScrollView>
    )
  }
  const New = () => {

  } 
  return (
    <SafeAreaView style={styles.MainContainer}>
        <View style={styles.HeaderContainer}>
        <Back
        name="chevron-back"
        size={28}
        color="#EF233C"
        style={styles.BackIcon}
      />
      <User
                  name="user-o"
                  size={24}
                  color="#EF233C"
                  style={styles.UserIcon}
                />
        </View>
          <View style={styles.MainDrawer}>
            <Text style={styles.NameStyle}>Mes réservations</Text>
            <View style={styles.FlatListContainer}>
            <FlatList
            data={List}
            renderItem={FlatListView}
            keyExtractor={(item,index)=>index.toString()}
            />
            </View>
            <View style={{height:'11%',}}>
            <Button
                        ButtonText={'Valider'} 
                        propsFun={Next}
                        ButtonStyle={'blue'}
                    />
            </View>
             
          </View>
    </SafeAreaView>
  );
};
export default Drawer;
