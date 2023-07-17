import React from 'react';
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
    return (
        <NavigationContainer>
            <SafeAreaView style={{
                flex: 1,
                justifyContent: "center",
                // alignItems: "center",
                backgroundColor: "#f9ebff",
            }}>

                {authData ? <AppStack /> : <AuthStack />}
            </SafeAreaView>
        </NavigationContainer>
    );
};
