import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './profile.style';
import ProfileLogout from './ProfileLogout';
import { useSelector } from 'react-redux';

const Profile = () => {
  // Use useSelector to get user information from the Redux store
  const userLogin = useSelector((state) => state.user_login);
  const { userInfo } = userLogin;

  // Check if userInfo is available
  if (userInfo) {
    const { username, first_name, last_name } = userInfo.user;

    return (
      <View style={styles.view}>
        <Image
          source={require('../../assets/666201.png')}
          style={{
            width: 180,
            height: 180,
            borderRadius: 90,
            backgroundColor: '#e0e0e0',
            marginBottom: 20,
          }}
        />
        <Text style={styles.name}>{`${first_name} ${last_name}`}</Text>
        <Text style={styles.username}>{`@${username}`}</Text>
        <ProfileLogout />
      </View>
    );
  } else {
    // Handle the case when userInfo is not available (user not logged in)
    return (
      <View style={styles.view}>
        <Text style={styles.name}>User not logged in</Text>
      </View>
    );
  }
};

export default Profile;
