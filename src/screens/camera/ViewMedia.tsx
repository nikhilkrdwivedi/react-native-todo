import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import Intro from '../../components/Intro';
import { CSS_CONSTANTS } from '../../constants/css-constants';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
export default function ViewMedia({ navigation, route }: any) {
    const { path } = route?.params || {};
    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: 'white', width: '100%', padding: CSS_CONSTANTS.padding.sm, flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
                    <Text style={{ fontSize: CSS_CONSTANTS.fontSize.sm, fontWeight: 'bold', color: CSS_CONSTANTS.colors.navy_blue, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}><AntDesignIcon name='arrowleft' size={24} color={'#243c5a'} /></Text>
                </TouchableOpacity>
                <Text style={{ fontSize: CSS_CONSTANTS.fontSize.lg, fontWeight: "bold" }}> Media Preview </Text>

            </View>
            <View style={{ flex: 1, justifyContent:'center', alignItems: 'center', margin:CSS_CONSTANTS.marginVertical}}>
                {/* <Text>{path}</Text> */}
                <Image source={path?.length ? { uri: path } : require('../../assests/myImg.jpg')}
                    style={{height: '100%', width: '95%', borderRadius: CSS_CONSTANTS.borderRadius.sm, objectFit: 'cover' }} />
            </View>

        </View>
    )
}