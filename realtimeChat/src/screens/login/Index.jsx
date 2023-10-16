import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from './login.style'
import Title from '../../commons/title/Index'
import Input from '../../commons/input/Index'
import Button from './Button'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
  const navigation = useNavigation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')


  const OnSignIn = () =>{
    console.log(`Username:${username}, Password: ${password}`)
// CHECK USERNAME
    const failUsername = !username
    if(failUsername){
      setUsernameError("Username not provided")
    }
// CHECK PASSWORD
    const failPassword = !password
    if(failPassword){
      setPasswordError("Password not provided")
    }
// BREAK OUT OF THE FUNCTION IF THERE WERE ANY ISSUES
    if(failUsername || failPassword){
      return
    }
  }
  
  return (
    <SafeAreaView style={styles.safe_area}>
      <View style={styles.view}>
        <Title text='Real Time Chat' color='#202020'/>

        <Input 
        title='Username'
        value={username}
        setValue={setUsername}
        error={usernameError}
        setError={setUsernameError}
        />
        <Input 
        title='Password'
        value={password}
        setValue={setPassword}
        error={passwordError}
        setError={setPasswordError}
        />


        <Button title='Login' onPress={OnSignIn}/>
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

