import React, { useState } from 'react'
import { StatusBar, StatusBarStyle, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CSS_CONSTANTS } from '../constants/css-constants';
import LogoutIcon from './icons/LogoutIcon';
import { useAuth } from '../contexts/Auth';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
type IntroProps = {
    name?: string;
    navigation?: any;
}

const STYLES = ['default', 'dark-content', 'light-content'] as const;
const TRANSITIONS = ['fade', 'slide', 'none'] as const;

export default function Intro({navigation, name}:IntroProps) {
  // console.log({navigation: Object.keys(navigation)})
    const {authData, signOut} : any= useAuth();
 
  
  return (
    <>
    <View style={{ backgroundColor: 'white', width: '100%', padding: CSS_CONSTANTS.padding.sm, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Text style={{ fontSize: CSS_CONSTANTS.fontSize.sm, fontWeight: 'bold', color: CSS_CONSTANTS.colors.navy_blue, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}><AntDesignIcon name='menuunfold' size={20} color={'#243c5a'} /></Text>
        </TouchableOpacity>
        <Text style={{ fontSize: CSS_CONSTANTS.fontSize.lg, fontWeight: "bold" }}>Hi, {name}</Text>
        {/* <LogoutIcon /> */}
        <TouchableOpacity onPress={signOut}>
          <Text style={{ fontSize: CSS_CONSTANTS.fontSize.sm, fontWeight: 'bold', color: CSS_CONSTANTS.colors.dark_pink }}><MatIcon name='logout' size={24} color={'#243c5a'} /></Text>
        </TouchableOpacity>
      </View></>
  )
}
;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1',
  },
  buttonsContainer: {
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8,
  },
});