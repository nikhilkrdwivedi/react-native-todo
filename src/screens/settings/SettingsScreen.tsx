import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { CSS_CONSTANTS } from '../../constants/css-constants'
import MatIcon from 'react-native-vector-icons/MaterialIcons'
import Intro from '../../components/Intro'
import { useAuth } from '../../contexts/Auth'
import { Image } from 'react-native'
import { ScrollView } from 'react-native'
import Input from '../../components/Input'
import { showMessage } from 'react-native-flash-message'
import axios from 'axios'

export default function SettingsScreen({ navigation }: any) {
  const { authData, signOut }: any = useAuth();
  const [form, setForm] = useState(authData?.user || {})
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Intro navigation={navigation} name={authData?.user?.name || '👋'} />
      <ScrollView>
      <ImageBackground
        source={require('../../assests/myImg.jpg')}
        style={styles.container}>
        <View style={styles.overlay}>
          <Image source={require('../../assests/myImg.jpg')}
            style={styles.avatarStyle} />
          <Text style={{ fontSize: 24, fontWeight: '700', color: CSS_CONSTANTS.colors.white, alignSelf: 'center', marginVertical: CSS_CONSTANTS.marginVertical * 3 }}>{authData?.user?.name}</Text>

        </View>
      </ImageBackground>
      <View style={{ backgroundColor: 'white', marginVertical: CSS_CONSTANTS.marginVertical*2}}>
        
       <Input onChange={(value:string)=>setForm({...form, name: value})} placeholder="Enter @name" value={form?.name}  />
       <Input onChange={(value:string)=>setForm({...form, email: value})} placeholder="Enter @email"  value={form?.email}/>
       <TouchableOpacity style={{ 
        backgroundColor: '#7dffa0', borderColor:'#00e63d', 
        borderWidth: 0.5, 
        padding: CSS_CONSTANTS.padding.sm, 
        borderRadius: CSS_CONSTANTS.borderRadius.xs,
        margin: CSS_CONSTANTS.marginVertical, 
        justifyContent:'center', alignItems:"center" }}>
        <Text style={{fontSize:16, fontWeight: '500', color: 'black'}}>Update Details</Text>
        </TouchableOpacity> 
      </View>
      
      </ScrollView>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {

  },
  overlay: {
    // backgroundColor: 'rgba(255,0,0,0.5)',
    backgroundColor: 'rgba(8, 7, 81, 0.72)',
    // backgroundColor: 'rgba(198, 18, 222, 0.63)',
    padding: 10
  },
  avatarStyle: {
    width: 175,
    height: 175,
    marginTop: 20,
    borderRadius: 100,
    alignSelf: 'center',
    objectFit: 'fill'
    // transform: [
    //   { scaleX: -1 }
    // ]
  },
  textStyle: {
    marginTop: 10,
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  balanceContainer: {
    padding: 10,
  }
});
