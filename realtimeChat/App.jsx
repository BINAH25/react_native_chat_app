
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import { StatusBar } from 'react-native';
import './src/fontAwosome/FontAwosome'
import { Provider } from 'react-redux';
import store from './src/store/Store';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle='dark-content' />
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}



export default App;
