import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-paper'

export default function Landing({ navigation }) {
  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        flexFlow: 'column wrap',
        justifyContent: 'center',
      }}
    >
      <div style={{ padding: '1rem' }}>
        <Button
          mode='contained'
          onPress={() => navigation.navigate('Generate OTP')}
          style={{ marginBottom: '1rem' }}
        >
          Online eKYC
        </Button>
        <Button
          mode='contained'
          style={{ marginBottom: '1rem' }}
          onPress={() => navigation.navigate('Offline eKYC')}
        >
          Offline eKYC
        </Button>
        <Button mode='contained' style={{ marginBottom: '1rem' }}>
          Authenticate User
        </Button>
        <Button
          mode='contained'
          onPress={() => navigation.navigate('Check System')}
          style={{ marginBottom: '1rem' }}
        >
          Check System
        </Button>
      </div>
    </View>
  )
}
