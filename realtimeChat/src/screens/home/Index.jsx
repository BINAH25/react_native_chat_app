import { SafeAreaView, StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import Request from '../request/Index';
import Profile from '../profile/Index';
import Friends from '../friends/Index';
import SearchScreen from '../search/Index';

const HomeScreen = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
    screenOptions={({route, navigation}) => ({
      headerLeft: ()=> (
        <View style={{marginLeft: 16}}>
          <Image source={require('../../assets/666201.png')}
          style={{ width:28, height:28, borderRadius: 14, backgroundColor:'#e0e0e0'}}/>
        </View>
      ),
      tabBarIcon:({focused, color, size}) =>{
        const icons ={
          Request:'bell',
          Friends:'inbox',
          SearchScreen:'magnifying-glass',
          Profile:'user'
        }
        const icon = icons[route.name]
        return(
          <FontAwesomeIcon icon={icon} size={28} color={color}/>
        )
      },
      tabBarActiveTintColor:'#202020',
      tabBarShowLabel:false
    })}
    >
      <Tab.Screen name="Request" component={Request} options={{}} />
      <Tab.Screen name="Friends" component={Friends} options={{}} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} options={{}} />
      <Tab.Screen name="Profile" component={Profile} options={{}} />
    </Tab.Navigator>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})