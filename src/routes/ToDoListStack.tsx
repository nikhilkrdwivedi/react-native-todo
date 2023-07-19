import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
// import Splash from '../_screens/Splash';
// import Parent from '../_screens/Parent';
import AddToDoScreen from '../screens/AddToDoScreen';
import BottomNavigator from './BottomTabNavigator';
import MainBottomNavigator from './MainBottomNavigator';
import DrawerNavigator from './DrawerNavigator';
import Parent from './Parent';

const Stack = createStackNavigator();

export const ToDoListStack = () => {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="Home Screen" component={HomeScreen} options={{ headerShown: false }} /> */}
            {/* <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} /> */}
            <Stack.Screen name='List' component={HomeScreen} options={{ headerShown: false }} />
            {/* <Stack.Screen name='HomeTodoList' component={HomeScreen} options={{ headerShown: false }} /> */}
            <Stack.Screen name='AddTodo' component={AddToDoScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};
