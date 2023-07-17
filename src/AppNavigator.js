import React from 'react'
import { SafeAreaView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './_screens/Splash';
import Parent from './_screens/Parent';
import {
    SafeAreaProvider,
    useSafeAreaInsets,
  } from 'react-native-safe-area-context';
  
const Stack = createStackNavigator();
export default function AppNavigator() {
  return (
    // <SafeAreaProvider>
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}}  />
            <Stack.Screen name='Parent' component={Parent} options={{headerShown: false}}  />
            </Stack.Navigator>
        </NavigationContainer>
    // </SafeAreaProvider>
  )
}
