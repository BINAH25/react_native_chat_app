import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Request from '../request/Index';
import Profile from '../profile/Index';
import Friends from '../friends/Index';
const HomeScreen = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
    initialRouteName='Request'
    activeColor='EB6A58'
    inactiveColor='#3e2465'
    headerShown={false}
    barStyle={{paddingBottom: 48}}>
      <Tab.Screen name="Request" component={Request} options={{}} />
      <Tab.Screen name="Friends" component={Friends} options={{}} />
        <Tab.Screen name="Profile" component={Profile} options={{}} />
    </Tab.Navigator>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})