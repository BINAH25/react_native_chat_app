import {SafeAreaView, StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './profile.style'
import ProfileLogout from './ProfileLogout'
import { useSelector} from 'react-redux';

const Profile = () => {

  const user_login = useSelector(state => state.user_login);
  const { userInfo } = user_login;
  return (
    <View style={styles.view}>
      <Image source={require('../../assets/666201.png')}
          style={{ width:180, height:180, borderRadius: 90, backgroundColor:'#e0e0e0', marginBottom:20}}/>
      <Text style={styles.name}>{userInfo.first_name} {userInfo.last_name}</Text>
      <Text style={styles.username}>@{userInfo.username}</Text>
      <ProfileLogout/>
    </View>
  )
}

export default Profile

