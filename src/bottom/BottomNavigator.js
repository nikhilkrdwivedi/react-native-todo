import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false, tabBarIcon:()=>{
        return <Image source={require('../assests/abc.png')} style={{width:24, height:24}} />
      }}} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{headerShown: false, tabBarIcon:()=>{
        return <Image source={require('../assests/abc.png')} style={{width:24, height:24}} />
      }}}  />
        <Tab.Screen name="Profile" component={SettingsScreen} options={{headerShown: false, tabBarIcon:()=>{
        return <Image source={require('../assests/abc.png')} style={{width:24, height:24}} />
      }}}  />
    </Tab.Navigator>
  );
}