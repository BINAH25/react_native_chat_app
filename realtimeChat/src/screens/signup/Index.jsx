import {Keyboard, SafeAreaView, StyleSheet, Text, View,KeyboardAvoidingView,TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import Input from '../../commons/input/Index'
import Button from '../login/Button'
import styles from './signup.style'
import { useNavigation } from '@react-navigation/native'
import Title from '../../commons/title/Index'
import { register } from '../../actions/AuthAction'
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
  const [user, setUser] = useState(null)
  //MESSAGE
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  // REGISTRATION
  const user_registrstion = useSelector(state => state.user_registrstion)
  const { error, loading, userInfo } = user_registrstion
 
  useEffect(() => {
    if (userInfo) {
      setUser(userInfo.user);
    }
  }, [userInfo]);
  useEffect(() => {
    if (user) {
      setShowSuccessMessage(true);
      setPassword('');
      setUsername('');
  
      // Delay the redirection to allow the user to see the message
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
        navigation.navigate('HomeScreen');
        setUser(null);
      }, 500);
  
      return () => clearTimeout(timer);
    } else if (error) {
      setShowErrorMessage(true);
  
      const timer = setTimeout(() => {
        setShowErrorMessage(false);
      }, 1000);
  
      return () => clearTimeout(timer);
    }
  }, [user, error]);


  const OnSignUP = ()=>{
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
    dispatch(register(firstName, lastName, username, password));

  }
  return (
    <SafeAreaView style={styles.safe_area}>
      <KeyboardAvoidingView behavior='height' style ={{flex:1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.view}>
            <Title text='Sign Up' color='#202020'/>
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
             {showSuccessMessage && <Text>Registration Successful</Text> }
            </Text>
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

