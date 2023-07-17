import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { CSS_CONSTANTS } from '../constants/css-constants'
type TouchableOpacityButtonProps ={
  onPress?: any;
}
export default function TouchableOpacityButton({onPress}: TouchableOpacityButtonProps) {
  return (
    <View style={{ paddingHorizontal: CSS_CONSTANTS.paddingHorizontal*1.5 }}>
      <TouchableOpacity style={{ backgroundColor: '#7dffa0', borderColor:'#00e63d', borderWidth: 0.5, paddingHorizontal: CSS_CONSTANTS.paddingHorizontal, paddingVertical: CSS_CONSTANTS.paddingVertical, borderRadius: CSS_CONSTANTS.borderRadius,marginVertical: CSS_CONSTANTS.marginVertical, justifyContent:'center', alignItems:"center" }} onPress={onPress}>
        <Text style={{fontSize:16, fontWeight: '700', color: 'rgb(107, 33, 168)'}}>Click to submit</Text>
        </TouchableOpacity> 
    </View>
  )
}