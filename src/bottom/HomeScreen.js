import { View, Text } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize: 30}} onPress={()=>{
        navigation.openDrawer('')
      }}>Home Screen</Text>
    </View>
  )
}