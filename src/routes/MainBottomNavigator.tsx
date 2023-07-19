import { View, Text } from 'react-native'
import React from 'react'
import BottomNavigator from './BottomTabNavigator'

export default function Main() {
  return (
    <View style={{flex:1}}>
      <BottomNavigator />
    </View>
  )
}