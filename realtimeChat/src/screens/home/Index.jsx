import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import Request from '../request/Index';
import Profile from '../profile/Index';
import Friends from '../friends/Index';

const HomeScreen = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
    screenOptions={({route, navigation}) => ({
      tabBarIcon:({focused, color, size}) =>{
        const icons ={
          Request:'bell',
          Friends:'inbox',
          Profile:'user'
        }
        const icon = icons[route.name]
        return(
          <FontAwesomeIcon icon={icon} size={28} color={color}/>
        )
      },
      tabBarActiveTintColor:'#202020'
    })}
    >
      <Tab.Screen name="Request" component={Request} options={{}} />
      <Tab.Screen name="Friends" component={Friends} options={{}} />
        <Tab.Screen name="Profile" component={Profile} options={{}} />
    </Tab.Navigator>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})