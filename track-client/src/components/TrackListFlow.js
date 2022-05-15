import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TrackListScreen from '../screens/TrackListScreen'
import TrackDetailsScreen from '../screens/TrackDetailsScreen'

const Stack = createNativeStackNavigator()

const TrackListFlow = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='TrackList' component={TrackListScreen} />
      <Stack.Screen name='TrackDetails' component={TrackDetailsScreen} />
    </Stack.Navigator>
  )
}

export default TrackListFlow

const styles = StyleSheet.create({})
