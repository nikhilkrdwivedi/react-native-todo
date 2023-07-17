import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import Splash from '../_screens/Splash';
import Parent from '../_screens/Parent';
import AddToDoScreen from '../screens/AddToDoScreen';

const Stack = createStackNavigator();

export const AppStack = () => {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="Home Screen" component={HomeScreen} options={{ headerShown: false }} /> */}
            {/* <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} /> */}
            <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name='AddTodo' component={AddToDoScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};
