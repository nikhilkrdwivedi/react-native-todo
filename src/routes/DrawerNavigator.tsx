import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from './MainBottomNavigator';
import CustomDrawer from './CustomDrawer';
import Test from '../screens/Test';

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props:any) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Main" component={Main} options={{headerShown:false}}/>
      {/* <Drawer.Screen name="Test" component={Test} options={{headerShown:false}} /> */}
    </Drawer.Navigator>
  )
}