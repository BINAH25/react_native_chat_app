import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './login.style'

const Button = ({title}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.button_text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

