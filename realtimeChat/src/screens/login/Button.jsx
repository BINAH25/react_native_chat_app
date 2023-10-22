import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './login.style'

const Button = ({title, onPress, loading}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.button_text}>{title} {loading && <ActivityIndicator color='green'/>}</Text>
    </TouchableOpacity>
  )
}

export default Button

