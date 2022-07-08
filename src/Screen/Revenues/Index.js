import { View, Text, ScrollView, FlatList, TouchableOpacity,Dimensions, TouchableHighlight } from 'react-native'
import React,{useState, useEffect} from 'react'
import styles from './Styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as CommonStyle from '../../helper/CommonStyle';

import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {LineChart,BarChart} from "react-native-chart-kit";


const Index = (props) => {
  const [state, setSate] = useState(true);
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43]
          }
        ]
      };
    const [List, setList] = useState([
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
      ]);
    const renderItem = () => {
        return(
            <TouchableOpacity>
                <View style={styles.headerBox}>
                    <Text style={{color:CommonStyle.AppThemeLight}}>mois</Text>

                </View>
            </TouchableOpacity>
        )
    }
    const renderItems = () => {
        return(
           <View style={{marginVertical:10}}>
            <View style={{flexDirection:'row',justifyContent: 'space-between',alignItems: 'center',marginBottom:12}}>
                <Text style={{color:'grey',fontSize:20}}>Coiffures</Text>
                <View>
                    <Text style={{color:'grey',fontSize:20,textAlign: 'center'}}>9</Text>
                    <Text style={{color:'grey',fontSize:20}}>clientes</Text>
                </View>
                <Text style={{color:'grey',fontSize:20}}>€300,00</Text>
                <AntDesign name="exclamationcircleo" color="#69C9C6" size={24} style={{marginLeft:-40}}/>
            </View>
            <View style={{borderBottomColor:'grey',borderBottomWidth:.5,width:'99%',alignSelf: 'center'}} />
            </View>
            
        )
    }
  return (
    <SafeAreaView styles={styles.mainContainer}>
        <ScrollView>
            <View style={styles.header}>
                <View style={{flexDirection:'row',alignItems:'center',width:'100%'}}>
                    <Feather name='chevron-left' size={26} color={CommonStyle.AppThemeLight} onPress={()=>props.navigation.goBack()}/>
                    <Text style={styles.heading}>mes revenues</Text>
                </View>
                <View style={styles.conditioning}>
                  <TouchableOpacity style={state?styles.innerLeft :{justifyContent: 'center',alignItems:'center',width:'50%'}} onPress={()=>setSate(true)} >
                    <View>
                        <Text style={{color:state?'#84e2d4':'#fff'}}>revenues</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={state?{justifyContent: 'center',alignItems:'center',width:'50%'}:styles.innerRight} onPress={()=>setSate(false)} >
                    <View >
                        <Text style={{color:state?'#fff':'#84e2d4'}}>statistiques</Text>
                    </View>
                  </TouchableOpacity>
                </View>
            <FlatList
            data={List}
            renderItem={renderItem}
            horizontal
            style={{marginTop:10}}
            />
            </View>

            <View style={styles.graphContainer}>
            <BarChart
    data={{
      labels: ["Jan", "Fev", "Mar", "Avr","Mai","juin","Juil"],
      datasets: [
        {
          data: [
            30,
            40,
            30,
            40,
            59,
            40,
            45,
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={300}
    showBarTops={false}
    withInnerLines={false} 
    chartConfig={{
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 99) => `rgba(119,206,206, ${opacity})`,
    labelColor: (opacity = 99) => `rgba(119,206,206, ${opacity})`,
    style: {
      borderRadius: 16,
      backgroundColor:'red',
    },
    strokeWidth:90,
     
    }}
    
  />
            </View>
            <Text style={{color:CommonStyle.dark, fontSize:20,marginLeft:13,marginVertical:20}}>Avril 2019</Text>
           
            <View style={styles.monthlyContainer}>
                <View>
                    <Text style={{color:'#69C9C6',fontSize:30,marginBottom:10}}>€340,00</Text>
                    <TouchableOpacity style={{width:110,height:40,backgroundColor:'#9DD890',justifyContent:'center',borderRadius:900}}>
                        <Text style={{color:CommonStyle.AppThemeLight,textAlign:'center',fontSize:20}}>+100,00€</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{color:'#000000',fontSize:24,textAlign:'right'}}>11</Text>
                    <Text style={{color:'grey',fontSize:20}}>clintes</Text>
                </View>
            </View>

            <View style={styles.flatListContainer}>
                <FlatList
                data={List}
                renderItem={renderItems} 
                />
            </View>


        </ScrollView>
    </SafeAreaView>
  )
}

export default Index