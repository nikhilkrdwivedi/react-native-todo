import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {SignInScreen} from '../screens/SignInScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignInScreen" component={LoginScreen}  options={{headerShown: false}} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen}  options={{headerShown: false}} />
    </Stack.Navigator>
  );
};
