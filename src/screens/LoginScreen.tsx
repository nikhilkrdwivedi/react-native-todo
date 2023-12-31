import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/Input'
import TouchableOpacityButton from '../components/TouchableOpacityButton';
// import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios';
import { CSS_CONSTANTS } from '../constants/css-constants';
import { useAuth } from '../contexts/Auth';
import { TouchableOpacity } from 'react-native';
import FlashMessage, { showMessage } from 'react-native-flash-message';
type LoginProps = {
    email: string;
    password: string;
}
export default function LoginScreen({ navigation }: any) {
    const [form, setFormValue] = useState<LoginProps>({ email: 'authornikhildwivedi@gmail.com', password: '123Nikhil@Nikhil123' });
    const auth = useAuth();
    const submitForm = async () => {
        try {
            const data = await auth.signIn(form.email, form.password)
            console.log("=====> ", { data })
            showMessage({
                message: "Login successful",
                description: data.message,
                type: "success",
                duration:1000
            });
        } catch (error: any) {
            console.log("error-------", error)
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
        <View style={{
            flex: 1,
            justifyContent: "center",
            // alignItems: "center",
            backgroundColor: "white",
        }}>
            {/* <FlashMessage /> */}
            <View style={{ marginVertical: 8, paddingHorizontal: 10 }}>
                <Text style={{ fontSize: CSS_CONSTANTS.fontSize.xlg, fontWeight: 'bold', marginVertical: 4 }}>👋 There,</Text>
                <Text style={{ fontSize: CSS_CONSTANTS.fontSize.md, fontWeight: 'bold', marginVertical: 4 }}>Welcome to login screen</Text>
            </View>
            <Input placeholder='Enter @email' onChange={(value: string) => setFormValue({ ...form, email: value })} value={form.email} />
            {/* <Text>{form?.username}</Text> */}
            <Input placeholder='Enter @password' onChange={(value: string) => setFormValue({ ...form, password: value })} value={form.password} />
            {/* <Text>{form?.password}</Text> */}
            <TouchableOpacityButton onPress={submitForm} />
            <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => navigation.navigate('RegisterScreen')}>
                <Text style={{ color: CSS_CONSTANTS.colors.navy_blue, fontWeight: '500', fontSize: CSS_CONSTANTS.fontSize.md }}>Register here!</Text>
            </TouchableOpacity>
        </View>
        // </SafeAreaView>
    )
}