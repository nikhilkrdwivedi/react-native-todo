import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { CSS_CONSTANTS } from '../constants/css-constants';
import MatIcon from 'react-native-vector-icons/MaterialIcons'
import { DrawerActions } from '@react-navigation/native';
export default function Splash({navigation}:any) {
  // console.log({navigation: Object.keys(navigation)})
  
    useEffect(()=>{
        // setTimeout(()=>{
        //     navigation.navigate('Parent');
        // },2000)
    }, []);
  return (
    <View style={{backgroundColor: 'red', flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text style={{color: 'black'}}>Splash Screen</Text>
      <View style={{width: '100%', height:'100%', backgroundColor: 'red'}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Parent')}>
          <Text>Click to navigation.navigate('Parent'); </Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=> navigation.dispatch(DrawerActions.openDrawer())} >
            <Text style={{fontSize: CSS_CONSTANTS.fontSize.sm, fontWeight: 'bold', color: CSS_CONSTANTS.colors.navy_blue}}><MatIcon name='logout'  size={24} color={'#243c5a'}/></Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}