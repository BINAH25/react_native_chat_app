import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { launchImageLibrary } from 'react-native-image-picker'
import { uploadThumbnail } from '../../actions/SocketAction'
import { useDispatch} from 'react-redux';

const ProfileImage = () => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity 
    style ={{ marginBottom: 20}}
    onPress={()=>{
        launchImageLibrary({includeBase64:true},(response)=>{
            if (response.didCancel) return
            const file = response.assets[0]
            dispatch(uploadThumbnail(file))
        })
    }}
    >
      <Image
          source={require('../../assets/666201.png')}
          style={{
            width: 180,
            height: 180,
            borderRadius: 90,
            backgroundColor: '#e0e0e0',
          }}
        />
        <View
        style={{
            backgroundColor:'#202020',
            width:40,
            height:40,
            borderRadius:20,
            alignItems:'center',
            justifyContent:'center',
            position:'absolute',
            right:0,
            bottom:0,
            borderWidth:3,
            borderColor:"#ffffff"
        }}
        >
            <FontAwesomeIcon
            icon='pencil'
            size={15}
            color='#d0d0d0'/>
        </View>
    </TouchableOpacity>
  )
}

export default ProfileImage

