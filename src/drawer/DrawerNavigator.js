import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from './Main';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Main" component={Main} options={{headerShown:false}}/>
      <Drawer.Screen name="Test" component={Main} options={{headerShown:false}} />
    </Drawer.Navigator>
  )
}