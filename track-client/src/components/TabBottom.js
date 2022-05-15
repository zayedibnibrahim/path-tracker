import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TrackListScreen from '../screens/TrackListScreen'
import AccountScreen from '../screens/AccountScreen'
import TrackListFlow from './TrackListFlow'
import TrackCreateScreen from '../screens/TrackCreateScreen'

const Tab = createBottomTabNavigator()

const TabBottom = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name='TrackListFlow' component={TrackListFlow} />
      <Tab.Screen name='TrackCreate' component={TrackCreateScreen} />
      <Tab.Screen name='Account' component={AccountScreen} />
    </Tab.Navigator>
  )
}

export default TabBottom

const styles = StyleSheet.create({})
