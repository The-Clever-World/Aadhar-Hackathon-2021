import React, { useState } from 'react'
import { View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { generateCaptcha } from '../api/API'

const OTP = ({ navigation }) => {
  const [captcha, setCaptcha] = useState("")

  const captchaHandler = () => {
    generateCaptcha().then((data) => {
      console.log(data)
      setCaptcha(data.captchaBase64String)
    })
  }

  return (
    <View>
      {captcha &&
        <img src={`data:image/png;base64, ${captcha}`} />
      }
      <div style={{ padding: '1rem', marginTop: '5rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <Button mode='contained' onPress={() => captchaHandler()}>
            Generate Captcha
          </Button>
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
