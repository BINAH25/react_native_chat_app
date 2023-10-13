
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import { StatusBar } from 'react-native';

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content'/>
      <AppNavigator/>
    </NavigationContainer>
  );
}



export default App;
