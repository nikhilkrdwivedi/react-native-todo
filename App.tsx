/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AppNavigator from './src/AppNavigator';
import LoginScreen from './src/screens/LoginScreen';
import { AuthProvider } from './src/contexts/Auth';
import { Router } from './src/routes/Router';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import NetInfo from "@react-native-community/netinfo";





function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };
//   const unsubscribe = NetInfo.addEventListener(state => {
//     console.log("Connection type", state.type);
//     console.log("Is connected?", state.isConnected);
//     if(!state.isConnected){
//       showMessage({
//         message: "Please enable Network",
//                 description: 'Looks like Internet/WiFi is not enable',
//                 type: "danger",
//                 duration:1000
//       })
//     }

// });
  return (
    <AuthProvider>
      <FlashMessage />
      <Router />
    </AuthProvider>
    // <LoginScreen />
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
