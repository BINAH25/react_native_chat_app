import { Keyboard, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import styles from './login.style'
import Title from '../../commons/title/Index'
import Input from '../../commons/input/Index'
import Button from './Button'
import { useNavigation } from '@react-navigation/native'
import api from '../../utils/api'
// MAIN FUNCTION 
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

    api({
      method:"POST",
      url:"chat/auth/login/",
      data:{
        username: username,
        password: password
      }
    }).then(response => {
      console.log(response.data)
    }).catch(error => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    })
  }

  return (
    <SafeAreaView style={styles.safe_area}>
      <KeyboardAvoidingView behavior='height' style ={{flex:1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            secureTextEntry={true}
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
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen

