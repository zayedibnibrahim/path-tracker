import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AccountScreen from './src/screens/AccountScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import TrackDetailsScreen from './src/screens/TrackDetailsScreen'
import TabBottom from './src/components/TabBottom'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Signup'>
        <Stack.Screen
          name='Signup'
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='Signin' component={SigninScreen} />
        <Stack.Screen name='AfterLogin' component={TabBottom} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
