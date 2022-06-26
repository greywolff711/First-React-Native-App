import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../app/components/HomeScreen';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})