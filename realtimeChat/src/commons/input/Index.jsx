import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Input = ({title, value,setValue,error, setError, secureTextEntry=false}) => {
  return (
    <View>
      <Text
      style={{
        color: error? '#ff5555' :'#70747a',
        marginVertical: 6,
        paddingLeft: 16,
    }}>
        {error? error : title}
        </Text>
      <TextInput
      secureTextEntry={secureTextEntry}
      autoCapitalize='none'
      autoComplete='off'
      style={{
        backgroundColor:'#e1e2e4',
        borderRadius: 26,
        height:52,
        paddingHorizontal: 16,
        fontSize: 16
      }}
      value={value}
      onChangeText={text =>{
        setValue(text)
        if(error){
          setError('')
        }
      }}
      />
    </View>
  )
}

export default Input

