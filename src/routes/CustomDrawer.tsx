import { View, Text } from 'react-native'
import React from 'react'
import { CSS_CONSTANTS } from '../constants/css-constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { useAuth } from '../contexts/Auth'
export default function CustomDrawer({navigation}:any) {
  const {authData, signOut} : any= useAuth();
  return (
 <View style={{flex: 1,flexDirection: 'column', justifyContent:'space-between',backgroundColor: 'rgba(219, 254, 223, 0.58)' }}>
  <View>
     <View style={{flexDirection:'row', alignItems:'center',backgroundColor:'rgba(161, 0, 101, 1)', padding:CSS_CONSTANTS.padding.md}}>
      <FontAwesomeIcon name='user-circle-o' size={28} color={'white'}/>
      <Text style={{color:'white', fontSize: 16, fontWeight: '700', paddingHorizontal:CSS_CONSTANTS.padding.xs}}>{authData?.user?.name}</Text>
     </View>
     <TouchableOpacity onPress={()=>navigation.navigate('To Do')}  style={{flexDirection:'row',alignItems:'center',backgroundColor: 'white', padding: CSS_CONSTANTS.padding.md, borderBottomWidth:1, borderColor:'gray'}}>
     <FontAwesomeIcon name='list-ul' size={20} color={'rgba(35, 20, 77, 1)'}/>
      <Text style={{color:'rgba(35, 20, 77, 1)', fontSize: 16, fontWeight: '700', paddingHorizontal:CSS_CONSTANTS.padding.xs}}>Todo list</Text>
      </TouchableOpacity>
     <TouchableOpacity onPress={()=>navigation.navigate('Profile')}  style={{flexDirection:'row',alignItems:'center',backgroundColor: 'white', padding: CSS_CONSTANTS.padding.md, borderBottomWidth:1, borderColor:'gray'}}>
     <FontAwesomeIcon name='vcard-o' size={20} color={'rgba(77, 20, 58, 1)'}/>
      <Text style={{color:'rgba(77, 20, 58, 1)', fontSize: 16, fontWeight: '700', paddingHorizontal:CSS_CONSTANTS.padding.xs}}>Profile</Text>
      </TouchableOpacity>
     <TouchableOpacity onPress={()=>navigation.navigate('Settings')}  style={{flexDirection:'row',alignItems:'center',backgroundColor: 'white', padding: CSS_CONSTANTS.padding.md, borderBottomWidth:1, borderColor:'gray'}}>
     <FontAwesomeIcon name='gear' size={20} color={'rgba(20, 43, 77, 1)'}/>
      <Text style={{color:'rgba(20, 43, 77, 1)', fontSize: 16, fontWeight: '700', paddingHorizontal:CSS_CONSTANTS.padding.xs}}>Settings</Text>
      </TouchableOpacity>
    </View>
    <View>
    <TouchableOpacity onPress={()=>signOut()}  style={{flexDirection:'row',alignItems:'center',backgroundColor: 'white', padding: CSS_CONSTANTS.padding.md, borderBottomWidth:1, borderColor:'gray'}}>
     <FontAwesomeIcon name='list-ul' size={20} color={'rgba(35, 20, 77, 1)'}/>
      <Text style={{color:'rgba(35, 20, 77, 1)', fontSize: 16, fontWeight: '700', paddingHorizontal:CSS_CONSTANTS.padding.xs}}>Logout</Text>
      </TouchableOpacity>
    </View>
    </View>
 
  )
}