import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/Input'
import TouchableOpacityButton from '../components/TouchableOpacityButton';
// import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios';
import { CSS_CONSTANTS } from '../constants/css-constants';
import {useAuth} from '../contexts/Auth';
type LoginProps = {
    email: string;
    password: string;
}
export default function LoginScreen() {
    const [form, setFormValue] = useState<LoginProps>({ email: 'authornikhildwivedi@gmail.com', password: '123Nikhil@Nikhil123' });
    const auth = useAuth();
    const submitForm = async () => {
        try {
             await auth.signIn(form.email, form.password)
        } catch (error) {
            console.log( error )
        }
    }
    return (
            <View style={{flex: 1,
                justifyContent: "center",
                // alignItems: "center",
                backgroundColor: "#f9ebff",}}>
                <View style={{ marginVertical: 8, paddingHorizontal: 10 }}>
                    <Text style={{ fontSize: CSS_CONSTANTS.fontSize.xlg, fontWeight: 'bold', marginVertical: 4 }}>👋 There,</Text>
                    <Text style={{ fontSize: CSS_CONSTANTS.fontSize.md, fontWeight: 'bold', marginVertical: 4 }}>Welcome to login screen</Text>
                </View>
                <Input placeholder='Enter @email' onChange={(value: string) => setFormValue({ ...form, email: value })} value={form.email} />
                {/* <Text>{form?.username}</Text> */}
                <Input placeholder='Enter @password' onChange={(value: string) => setFormValue({ ...form, password: value })} value={form.password} />
                {/* <Text>{form?.password}</Text> */}
                <TouchableOpacityButton onPress={submitForm} />
            </View>
        // </SafeAreaView>
    )
}