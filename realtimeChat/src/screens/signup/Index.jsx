import {Keyboard, SafeAreaView, StyleSheet, Text, View,KeyboardAvoidingView,TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import Input from '../../commons/input/Index'
import Button from '../login/Button'
import styles from './signup.style'
import { useNavigation } from '@react-navigation/native'
import Title from '../../commons/title/Index'
import api from '../../utils/api'

// MAIN FUNCTION
const SignUpScreen = () => {
  const navigation = useNavigation()
  const [username, setUsername] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPasswor2] = useState('')

  const [usernameError, setUsernameError] = useState('')
  const [firstNameError, setFirstNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [password2Error, setPassword2Error] = useState('')


  const OnSignUP = ()=>{
    console.log('*** creating user account ***')
// USERNAME CHECK
    const failUsername = !username || username.length < 4
    if(failUsername){
      setUsernameError('Username must be at least 4 characters')
    }
    // FIRST NAME CHECK
    const failFirstName = !firstName 
    if(failFirstName){
      setFirstNameError('First Name not provided')
    }
    // LAST NAME CHECK
    const failLastName = !lastName 
    if(failLastName){
      setLastNameError('Last Name not provided')
    }
    // PASSWORD CHECK
    const failPassword = !password || password.length < 4
    if(failPassword){
      setPasswordError('Password must be at least four characters')
    }
    // RETYPE PASSWORD CHECK
    const failPassword2 = password !== password2 
    if(failPassword2){
      setPassword2Error('Password don\'t  Match')
    }

    // BREAK OUT IF ANY OF THESE IS TRUE
    if(failUsername ||failFirstName || failLastName || failPassword || failPassword2){
      return
    }
    // MAKE REQUEST
    api({
      method:"POST",
      url:"chat/auth/sign_up/",
      data:{
        username: username,
        last_name: lastName,
        first_name: firstName,
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
            <Title text='Sign Up' color='#202020'/>
            <Input 
            title='Username'
            value={username}
            setValue={setUsername}
            error={usernameError}
            setError={setUsernameError}
            />
            <Input 
            title='First Name'
            value={firstName}
            setValue={setFirstName}
            error={firstNameError}
            setError={setFirstNameError}
            />
            <Input 
            title='Last Name'
            value={lastName}
            setValue={setLastName}
            error={lastNameError}
            setError={setLastNameError}
            />
            <Input 
            title='Password'
            value={password}
            setValue={setPassword}
            error={passwordError}
            setError={setPasswordError}
            secureTextEntry={true}
            />
            <Input 
            title='Retype Password'
            value={password2}
            setValue={setPasswor2}
            error={password2Error}
            setError={setPassword2Error}
            secureTextEntry={true}
            />
            <Button 
            title='Sign Up'
            onPress={OnSignUP}
            />
            <Text style={{textAlign :'center', marginTop:40}}>
              Already have an account? <Text 
              style={{color:'blue'}}
              onPress={()=>navigation.goBack() }
              >
                Sign In</Text>
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SignUpScreen

