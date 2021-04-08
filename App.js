import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import Input from './components/Input';
import Home from './views/Home';
import Drink from './views/Drink';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: 'Home', 
            headerLargeTitle: true,
            headerLargeStyle: {backgroundColor: 'blue'}
          }}
        >
        </Stack.Screen>
        <Stack.Screen
          name='Drink'
          component={Drink}
          options={{
            title: 'Drink', 
            headerLargeTitle: true,
            headerLargeStyle: {backgroundColor: 'blue'}
          }}
        >
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
