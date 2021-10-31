import React, { useState } from 'react'
import { View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { generateCaptcha } from '../api/captcha'
import { generateOTP } from '../api/generateOTP'
import { v4 as uuidv4 } from 'uuid';

const OTP = ({ navigation }) => {
  const [captcha, setCaptcha] = useState({})
  const [uid, setUid] = useState({})
  const [captchaValue, setCaptchaValue] = useState({})

  const captchaHandler = () => {
    generateCaptcha().then((data) => {
      console.log(data)
      setCaptcha(data)
    })
  }

  const generateOTPHandler = (navigation) => {
    if (captcha) {
      const transactionId = uuidv4();
      generateOTP(uid, captcha.captchaTxnId, captchaValue, transactionId).then((data) => {
        console.log(data);
        alert("OTP Generated")
        navigation.navigate("Generate eKYC XML");
      })
    }
  }

  return (
    <View>
      {captcha && captcha.captchaBase64String &&
        <img src={`data:image/png;base64, ${captcha.captchaBase64String}`} />
      }
      <div style={{ padding: '1rem', marginTop: '5rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <Button mode='contained' onPress={() => captchaHandler()}>
            {!captcha.captchaBase64String ? "Generate Captcha" : "Regenerate Captcha"}
          </Button>
        </div>

        <TextInput
          placeholder='Enter Captcha'
          mode='outlined'
          onChangeText={(text) => setCaptchaValue(text)}
        />
        <TextInput
          placeholder='Enter UID'
          mode='outlined'
          secureTextEntry={true}
          style={{ marginTop: '1rem' }}
          onChangeText={(text) => setUid(text)}
        />

        <div style={{ marginTop: '1rem' }}>
          <Button
            mode='contained'
            onPress={() => generateOTPHandler(navigation)}
            disabled={!captcha.captchaBase64String}
          >
            Generate OTP
          </Button>
        </div>
      </div>
    </View>
  )
}

export default OTP
