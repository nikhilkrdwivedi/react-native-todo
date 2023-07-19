import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';
import { useAuth } from '../contexts/Auth';
import { Loading } from '../components/Loading';
import { SafeAreaView } from 'react-native';
export const Router = () => {
    const { authData, loading } = useAuth();

    if (loading) {
        return <Loading />;
    }
 
  
    // useEffect(() => {
    //   const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
    //     const offline = !(state.isConnected && state.isInternetReachable);
    //     setOfflineStatus(offline);
    //   });
    
    // //   fetchUsers();
    
    //   return () => removeNetInfoSubscription();
    // }, []);
  
    return (
        <NavigationContainer>
            <SafeAreaView style={{
                flex: 1,
                justifyContent: "center",
                // alignItems: "center",
                backgroundColor: "white",
            }}>
                {/* {isOffline  ? <NoNetworkStack /> : authData ? <AppStack /> : <AuthStack />} */}
                {authData ? <AppStack /> : <AuthStack />}
            </SafeAreaView>
        </NavigationContainer>
    );
};
