import {SafeAreaView, StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './profile.style'
import ProfileLogout from './ProfileLogout'
import useGlobal from '../../global/Global'

const Profile = () => {

  const user = useGlobal(state => state.user)
  return (
    <View style={styles.view}>
      <Image source={require('../../assets/666201.png')}
          style={{ width:180, height:180, borderRadius: 90, backgroundColor:'#e0e0e0', marginBottom:20}}/>
      <Text style={styles.name}>{user.first_name} {user.last_name}</Text>
      <Text style={styles.username}>@{user.username}</Text>
      <ProfileLogout/>
    </View>
  )
}

export default Profile

