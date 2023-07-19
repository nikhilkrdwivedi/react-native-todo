
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { CSS_CONSTANTS } from '../../constants/css-constants'
import MatIcon from 'react-native-vector-icons/MaterialIcons'
import Intro from '../../components/Intro'
import { useAuth } from '../../contexts/Auth'
import { Image } from 'react-native'
import { ScrollView } from 'react-native'

export default function UserProfile({ navigation }: any) {
  const { authData, signOut }: any = useAuth();
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Intro navigation={navigation} name={authData?.user?.name || '👋'} />
      <ScrollView>
      <ImageBackground
        source={require('../../assests/myImg.jpg')}
        style={styles.container}>
        <View style={styles.overlay}>
          {/* <Text style = {[styles.textStyle, {paddingTop: 10}]} >My Account</Text> */}
          <Image source={require('../../assests/myImg.jpg')}
            style={styles.avatarStyle} />
          <Text style={{ fontSize: 24, fontWeight: '700', color: CSS_CONSTANTS.colors.white, alignSelf: 'center', marginVertical: CSS_CONSTANTS.marginVertical * 3 }}>{authData?.user?.name}</Text>

        </View>
      </ImageBackground>
      <View style={{ backgroundColor: 'white', padding: CSS_CONSTANTS.padding.md }}>
        <Text style={{ fontSize: 20, fontWeight: '700', color: CSS_CONSTANTS.colors.dark_blue }}>📧 {authData?.user?.email}</Text>
        <Text style={{ fontSize: 20, fontWeight: '700', color: CSS_CONSTANTS.colors.dark_blue }}>⏱️ {authData?.user?.createdAt?.substr(0, 10)}</Text>
      </View>
      <View style={{ backgroundColor: 'white', padding: CSS_CONSTANTS.padding.md }}>
        <Text style={{ fontSize: 20, fontWeight: '700', color: CSS_CONSTANTS.colors.dark_blue }}>👨‍🏫 About Me</Text>
        <Text style={{ fontSize: 16, fontWeight: '500', color: CSS_CONSTANTS.colors.light_black, paddingVertical: CSS_CONSTANTS.padding.sm }}>
          A curious learner and creative team player, interested in the job role of Software Developer, where I can utilize my understanding of coding and
          software development to efficiently fulfill the requirements of organization.
        </Text>
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
