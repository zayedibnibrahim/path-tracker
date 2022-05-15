import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, Text } from '@rneui/base'
import Spacer from '../components/Spacer'

const SigninScreen = ({ navigation }) => {
  return (
    <View>
      <Spacer>
        <Text h3>SigninScreen</Text>
      </Spacer>
      <Button
        title='To account'
        onPress={() => navigation.navigate('AfterLogin')}
        buttonStyle={{ width: 150 }}
        containerStyle={{ margin: 5 }}
      />
    </View>
  )
}

export default SigninScreen

const styles = StyleSheet.create({})
