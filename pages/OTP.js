import React from 'react'
import { View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

const OTP = ({ navigation }) => {
  return (
    <View>
      <div style={{ padding: '1rem', marginTop: '5rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <Button mode='contained'>Generate Captcha</Button>
        </div>
        <TextInput placeholder='Enter Captcha' mode='outlined' />
        <TextInput
          placeholder='Enter UID'
          mode='outlined'
          secureTextEntry={true}
          style={{ marginTop: '1rem' }}
        />

        <div style={{ marginTop: '1rem' }}>
          <Button
            mode='contained'
            onPress={() => navigation.navigate('Generate eKYC XML')}
          >
            Generate OTP
          </Button>
        </div>
      </div>
    </View>
  )
}

export default OTP
