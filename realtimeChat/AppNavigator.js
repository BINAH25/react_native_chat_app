// AppNavigator.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/splash/Index';
import HomeScreen from './src/screens/home/Index';
import LoginScreen from './src/screens/login/Index';
import SearchScreen from './src/screens/search/Index';
import SignUpScreen from './src/screens/signup/Index';
import MessageScreen from './src/screens/message/Index';
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
        
        <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
    
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown:false}}/>
    
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="SearchScreen" component={SearchScreen} options={{headerShown:false}}/>
        <Stack.Screen name="MessageScreen" component={MessageScreen} options={{headerShown:false}}/>
        
    </Stack.Navigator>
  );
}

export default AppNavigator;
