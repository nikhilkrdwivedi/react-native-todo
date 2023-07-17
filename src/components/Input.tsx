import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { CSS_CONSTANTS } from '../constants/css-constants';
type InputProps = {
    placeholder?: string;
    onChange?: any;
    value?: any;
}
export default function Input({placeholder, onChange,value}:InputProps) {
    return (
        <View style={{ paddingHorizontal: CSS_CONSTANTS.paddingHorizontal*1.5 }}>
            <TextInput placeholder={placeholder} style={{ borderColor: 'black', borderWidth: 0.5, paddingHorizontal: CSS_CONSTANTS.paddingHorizontal, paddingVertical: CSS_CONSTANTS.paddingVertical, borderRadius: CSS_CONSTANTS.borderRadius, fontSize:CSS_CONSTANTS.fontSize.md, marginVertical: CSS_CONSTANTS.marginVertical }} onChangeText={(value) => onChange(value) }
                // keyboardType='numeric'
                value={value}
            />
        </View>
    )
}