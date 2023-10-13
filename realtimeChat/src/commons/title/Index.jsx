import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = ({text, color}) => {
  return (
    <Text style={{
    color: color,
    textAlign: 'center',
    fontSize: 48,
    marginHorizontal: 20,
    }}>{text}
    </Text>
    
  )
}

export default Title

