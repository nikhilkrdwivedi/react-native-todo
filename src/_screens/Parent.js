import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import DrawerNavigator from '../drawer/DrawerNavigator'

export default function Parent() {
  return (
    <SafeAreaView style={{flex:1}}>
        <DrawerNavigator />
    </SafeAreaView>
  )
}