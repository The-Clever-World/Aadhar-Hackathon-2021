import React, { useState } from 'react'
import { View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

const EKYC = ({ navigation }) => {
  return (
    <View>
      <div style={{ padding: '1rem', marginTop: '5rem' }}>
        <TextInput
          placeholder='Enter UID'
          mode='outlined'
          secureTextEntry={true}
          style={{ marginTop: '1rem' }}
        />
        <TextInput
          placeholder='Enter OTP'
          mode='outlined'
          style={{ marginTop: '1rem' }}
        />
        <TextInput
          placeholder='Enter Sharecode for eKYC'
          mode='outlined'
          secureTextEntry={true}
          style={{ marginTop: '1rem' }}
        />
        <div style={{ marginTop: '1rem' }}>
          <Button mode='contained'>Download eKYC</Button>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <Button mode='contained'>Proceed to User Authentication</Button>
        </div>
      </div>
    </View>
  )
}

export default EKYC
