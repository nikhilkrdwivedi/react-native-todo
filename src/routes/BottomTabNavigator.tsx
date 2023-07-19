import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import UserProfile from '../screens/profile/UserProfileScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import { AppStack } from './AppStack';
import { ToDoListStack } from './ToDoListStack';


const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="To Do"  component={ToDoListStack} options={{headerShown: false, tabBarIcon:()=>{
        return <AntDesignIcon name='home' size={28} color={'black'} />
      }}} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{headerShown: false, tabBarIcon:()=>{
        return <AntDesignIcon name='setting' size={28} color={'black'} />
      }}}  />
        <Tab.Screen name="Profile" component={UserProfile} options={{headerShown: false, tabBarIcon:()=>{
        return <AntDesignIcon name='smileo' size={28} color={'black'} />
      }}}  />
    </Tab.Navigator>
  );
}