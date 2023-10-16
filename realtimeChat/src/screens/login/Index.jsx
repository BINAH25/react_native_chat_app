import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './login.style'
import Title from '../../commons/title/Index'
import Input from '../../commons/input/Index'
import Button from './Button'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.safe_area}>
      <View style={styles.view}>
        <Title text='Real Time Chat' color='#202020'/>
        <Input title='Username'/>
        <Input title='Password'/>
        <Button title='Login'/>
        <Text style={{textAlign :'center', marginTop:40}}>
          Don't have a account? <Text 
          style={{color:'blue'}}
          onPress={()=>navigation.navigate('SignUpScreen') }
          >
            Sign up</Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen

