import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {SignInScreen} from '../screens/SignInScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sign In Screen" component={LoginScreen}  options={{headerShown: false}} />
    </Stack.Navigator>
  );
};
