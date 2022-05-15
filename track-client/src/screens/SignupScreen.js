import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text, Input } from '@rneui/base'
import Spacer from '../components/Spacer'

const SignupScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up For Tracker</Text>
      </Spacer>
      <Input
        label='Email'
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Input
        secureTextEntry
        label='Password'
        value={password}
        onChangeText={setPassword}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Spacer>
        <Button title='Sign Up' />
      </Spacer>
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden',
  },
})
