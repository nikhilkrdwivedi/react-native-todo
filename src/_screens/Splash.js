import { View, Text } from 'react-native';
import React, { useEffect } from 'react';

export default function Splash({navigation}) {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Parent');
        },2000)
    }, []);
  return (
    <View style={{backgroundColor: 'red', flex:1}}>
      <Text style={{color: 'black'}}>Splash Screen</Text>
      <View style={{width: '100%', height:'100%', backgroundColor: 'red'}}>
        {[1,2,3,4,5,6,6,7,8,9,0].map((item, index)=>{
            <Text style={{fontSize:20}}>{index} - {item}</Text>
        })}
      </View>
    </View>
  )
}