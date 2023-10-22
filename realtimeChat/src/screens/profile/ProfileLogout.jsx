import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import useGlobal from '../../global/Global'

const ProfileLogout = () => {
    const logout = useGlobal(state => state.logout)

    return(
        <TouchableOpacity 
        onPress={logout}
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

