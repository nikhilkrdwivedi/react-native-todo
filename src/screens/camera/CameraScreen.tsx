import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useCameraDevices, Camera } from 'react-native-vision-camera'
import { Loading } from '../../components/Loading'
import Intro from '../../components/Intro'
import { CSS_CONSTANTS } from '../../constants/css-constants'
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native'
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

export default function CameraScreen({ navigation }: any) {
    const [photo, setPhoto] = useState('')
    const [openFrontCamera, setOpenFrontCamera] = useState(true)
    const [flash, setFlash] = useState(true)
    const devices = useCameraDevices()
    const device = devices[openFrontCamera ? 'front': 'back']
    console.log({devices: Object.keys(devices)})
    const cameraRef = useRef<any>(null)
    // console.log({device})
    useEffect(()=>{
        console.log({date: Date.now()})
    },[])
    if (device == null) return <Loading />
    const takePicture = async () => {
        if (cameraRef != null) {
            const _photo = await cameraRef.current.takePhoto({
                flash: flash ? 'on' : 'off'
            });
            console.log({ _photo })
            setPhoto('file://' + _photo?.path)
        }
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'rgba(52, 52, 52, 0.8)' }}>
            {/* <Text>HI </Text> */}
            <Intro navigation={navigation} />
            
            <View style={{ flex: 1 }}>
            <View style={{ position: 'absolute', top: 0, flexDirection: 'row', padding: CSS_CONSTANTS.padding.md, zIndex:100}}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                         
                    <TouchableOpacity style={{alignItems: 'flex-start', justifyContent: 'center' }} onPress={()=>navigation.navigate('List')}>
                    <AntDesignIcon name='arrowleft' size={36} color={'white'} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'flex-end', justifyContent: 'center' }} onPress={()=>setFlash(!flash)}>
                            <IonicIcon name={flash ?'flash-off-outline' :'flash-outline' } color={'white'} size={36} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Camera
                    ref={cameraRef}
                    style={StyleSheet.absoluteFill}
                    device={device}
                    isActive={true}
                    photo={true}
                    enableZoomGesture
                    enableDepthData
                    enableHighQualityPhotos
                    enablePortraitEffectsMatteDelivery

                />

                <View style={{ position: 'absolute', bottom: 0, flexDirection: 'row', padding: CSS_CONSTANTS.padding.md }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ height: 60, width: 60, borderRadius: 30, backgroundColor: '#fff' }} onPress={() => navigation.navigate('ViewMedia', { path: photo })}>
                            {/* {photo?.length ? : } */}
                            {/* {console.log} */}
                            <Image source={photo?.length ? { uri: photo } : require('../../assests/myImg.jpg')}
                                style={{ height: 60, width: 60, borderRadius: 60, objectFit: 'fill' }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 60, width: 60, borderRadius: 30, backgroundColor: '#fff' }} onPress={() => takePicture()}></TouchableOpacity>

                        <TouchableOpacity style={{ height: 60, width: 60, borderRadius: 30, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }} onPress={()=>setOpenFrontCamera(!openFrontCamera)}>
                            <MatIcon name='camera-flip-outline' color={'black'} size={36} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}