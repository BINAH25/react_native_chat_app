import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Input = ({title}) => {
  return (
    <View>
      <Text
      style={{
        color:'#70747a',
        marginVertical: 6,
        paddingLeft: 16,
    }}>
        {title}
        </Text>
      <TextInput
      style={{
        backgroundColor:'#e1e2e4',
        borderRadius: 26,
        height:52,
        paddingHorizontal: 16,
        fontSize: 16
      }}
      />
    </View>
  )
}

export default Input

