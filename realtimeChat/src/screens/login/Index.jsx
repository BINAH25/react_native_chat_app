import { ActivityIndicator, Keyboard, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState, useEffect} from 'react'
import styles from './login.style'
import Title from '../../commons/title/Index'
import Input from '../../commons/input/Index'
import Button from './Button'
import { useNavigation } from '@react-navigation/native'
import { useDispatch ,useSelector} from 'react-redux';
import { login } from '../../actions/AuthAction'

// MAIN FUNCTION 
const LoginScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  // LOGIN
  const user_login = useSelector(state => state.user_login)
  const { error, loading, userInfo } = user_login

  const OnSignIn = async () =>{
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
    dispatch(login(username,password))
    
  }

  useEffect(() => {
    if (userInfo)  {
        setShowSuccessMessage(true);
        setPassword('')
        setUsername('')
// Delay the redirection to allow the user to see the message
        const timer = setTimeout(() => {
          navigation.navigate('HomeScreen') ;
        }, 1000); 
        return () => clearTimeout(timer);
    } else if (error){
        setShowErrorMessage(true)
        const timer = setTimeout(() => {
            setShowErrorMessage(false); 
        }, 1000); 

        return () => clearTimeout(timer);
    }
}, [userInfo ,error]);
    
  return (
    <SafeAreaView style={styles.safe_area}>
      <KeyboardAvoidingView behavior='height' style ={{flex:1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.view}>
            <Title text='Real Time Chat' color='#202020'/>
            <Text 
            style={{
              textAlign :'center',
              fontSize:20,
              color:'red'
              }}>
             {showErrorMessage && <Text>{error}</Text> }
            </Text>
            <Text 
            style={{
              textAlign :'center',
              fontSize:20,
              color:'green'
              }}>
             {showSuccessMessage && <Text>Login Successful</Text> }
            </Text>
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

            <Button title="Login" onPress={OnSignIn} loading={loading}/>
             
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

