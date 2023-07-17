import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { CSS_CONSTANTS } from '../constants/css-constants';
import LogoutIcon from './icons/LogoutIcon';
import { useAuth } from '../contexts/Auth';
import MatIcon from 'react-native-vector-icons/MaterialIcons'
type IntroProps = {
    name?: string;
}
export default function Intro({name}:IntroProps) {
    const {authData, signOut} : any= useAuth();
  return (
    <View style={{backgroundColor: 'white', width: '100%', padding: CSS_CONSTANTS.padding.sm, flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}}>
        <Text style={{fontSize: CSS_CONSTANTS.fontSize.lg, fontWeight: "bold"}}>Hi, {name}</Text>
        {/* <LogoutIcon /> */}
        <TouchableOpacity  onPress={signOut} >
            <Text style={{fontSize: CSS_CONSTANTS.fontSize.sm, fontWeight: 'bold', color: CSS_CONSTANTS.colors.navy_blue}}><MatIcon name='logout'  size={24} color={'#243c5a'}/></Text>
        </TouchableOpacity>
    </View>
  )
}
