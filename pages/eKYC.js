import React, { useState } from 'react'
import { View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { eKYC } from '../api/eKYC'
import { v4 as uuidv4 } from "uuid"

const EKYC = ({ navigation }) => {
  const [otp, setOtp] = useState("")
  const [uid, setUid] = useState("")
  const [ shareCode, setShareCode ] = useState("")

  const ekycHandler = () => {
    const txnNumber = uuidv4();
    eKYC(txnNumber, otp, shareCode, uid).then((data) => {
      console.log(data)
      alert("eKYC details sent")
    })
  }

  return (
    <View>
      <div style={{ padding: '1rem', marginTop: '5rem' }}>
        <TextInput
          placeholder='Enter UID'
          mode='outlined'
          secureTextEntry={true}
          style={{ marginTop: '1rem' }}
          onChangeText={(text) => setUid(text)}
        />
        <TextInput
          placeholder='Enter OTP'
          mode='outlined'
          style={{ marginTop: '1rem' }}
          onChangeText={(text) => setOtp(text)}
        />
        <TextInput
          placeholder='Enter Sharecode for eKYC'
          mode='outlined'
          secureTextEntry={true}
          style={{ marginTop: '1rem' }}
          onChangeText={(text) => setShareCode(text)}
        />
        <div style={{ marginTop: '1rem' }}>
          <Button mode='contained'>Download eKYC</Button>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <Button
            mode='contained'
            onPress={() => ekycHandler()}
          >
            Proceed to User Authentication
          </Button>
        </div>
      </div>
    </View>
  )
}

export default EKYC
