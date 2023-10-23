import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { logout } from '../../actions/AuthAction'
import { useDispatch ,useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native'

const ProfileLogout = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch();
  // LOGOUT
  const logoutHandler = () => {
    dispatch(logout())
    navigation.navigate('LoginScreen')
  }

    return(
        <TouchableOpacity 
        onPress={logoutHandler}
        style={{
          flexDirection: 'row',
          height:52,
          borderRadius: 26,
          alignItems: 'center',
          justifyContent:'center',
          paddingHorizontal: 20,
          marginTop: 40,
          backgroundColor:'#202020'
        }}>
            <FontAwesomeIcon
            icon='right-from-bracket'
            size={20}
            color='#d0d0d0'
            style={{marginRight:12}}/>
          <Text style={{
            color:'#d0d0d0',
            fontWeight:'bold'
          }}> Logout</Text>
        </TouchableOpacity>
      )
}

export default ProfileLogout

