import { View, Text, SafeAreaView, TouchableOpacity, Button, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/Input'
import TouchableOpacityButton from '../components/TouchableOpacityButton';
// import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios';
import { CSS_CONSTANTS } from '../constants/css-constants';
import { useAuth } from '../contexts/Auth';
import { authService } from '../services/authService';
import FlashMessage, { showMessage } from 'react-native-flash-message';
type LoginProps = {
    email: string;
    password: string;
    name: string;
}
export default function RegisterScreen({ navigation }: any) {
    const [form, setFormValue] = useState<LoginProps>({ email: 'authornikhildwivedi@gmail.com', password: '123Nikhil@Nikhil123', name: "Nikhil Kumar" });
    const auth = useAuth();
    function handlePress() {
        showMessage({
            message: 'Hello flashbars!'
        });
    }
    const submitForm = async () => {
        try {
            const data:any = await authService.register(form.name, form.email, form.password);
            showMessage({
                message: "Registration successful",
                description: data.message,
                type: "success",
              });
        } catch (error: any) {
            const { data: { message }, status } = error;
            let errorMsg: string = 'Something went wrong';
            if (status === 409) {
                errorMsg = 'Registration info invalid';
            }
            if (status === 400) {
                errorMsg = 'Bad Request';
            }
            showMessage({
                message: 'Registration error',
                description: message,
                type: "danger",
            });
        }
    }
    return (
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding': 'height'} style={{flex:1}}>
                <ScrollView 
                // ref={(ref)=> (scrollView = ref)}
                contentContainerStyle={{flex:1}} bounces={false}>
        <View style={{
            flex: 1,
            justifyContent: "center",
            // alignItems: "center",
            backgroundColor: "white",
        }}>
            <View style={{ marginVertical: 8, paddingHorizontal: 10 }}>
                <Text style={{ fontSize: CSS_CONSTANTS.fontSize.xlg, fontWeight: 'bold', marginVertical: 4 }}>👋 There,</Text>
                <Text style={{ fontSize: CSS_CONSTANTS.fontSize.md, fontWeight: 'bold', marginVertical: 4 }}>Welcome to login screen</Text>
            </View>
            <Input placeholder='Enter @name' onChange={(value: string) => setFormValue({ ...form, name: value })} value={form.name} />
            <Input placeholder='Enter @email' onChange={(value: string) => setFormValue({ ...form, email: value })} value={form.email} />
            {/* <Text>{form?.username}</Text> */}
            <Input placeholder='Enter @password' onChange={(value: string) => setFormValue({ ...form, password: value })} value={form.password} />
            {/* <Text>{form?.password}</Text> */}
            <TouchableOpacityButton onPress={submitForm} />
            <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => navigation.navigate('SignInScreen')}>
                <Text style={{ color: CSS_CONSTANTS.colors.navy_blue, fontWeight: '500', fontSize: CSS_CONSTANTS.fontSize.md }}>Sign In here!</Text>
            </TouchableOpacity>
            {/* <Button
                title="Show alert"
                onPress={handlePress} /> */}
            {/* <FlashMessage duration={5000} /> */}
        </View>
         </ScrollView>
         </KeyboardAvoidingView>
    )
}