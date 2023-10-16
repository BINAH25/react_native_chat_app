import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from '../../commons/input/Index'
import Button from '../login/Button'
import styles from './signup.style'
import { useNavigation } from '@react-navigation/native'
import Title from '../../commons/title/Index'
const SignUpScreen = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.safe_area}>
      <View style={styles.view}>
        <Title text='Sign Up' color='#202020'/>
        <Input title='Username'/>
        <Input title='First Name'/>
        <Input title='Last Name'/>
        <Input title='Password'/>
        <Input title='Retype Password'/>
        <Button title='Sign Up'/>
        <Text style={{textAlign :'center', marginTop:40}}>
          Already have an account? <Text 
          style={{color:'blue'}}
          onPress={()=>navigation.navigate('LoginScreen') }
          >
            login</Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen

