import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text>TrackListScreen</Text>

      <Button
        title='Track Details'
        onPress={() => navigation.navigate('TrackDetails')}
      />
    </View>
  )
}

export default TrackListScreen

const styles = StyleSheet.create({})
