import React from 'react'
import { View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

const OfflineEKYC = () => {
  const ekycSubmitHandler = () => {
    const data = new FormData()
    data.append('file', {
      name: file.name,
      type: file.type,
      uri: Platform.OS === 'ios' ? file.uri.replace('file://', '') : file.uri,
    })
  }
  return (
    <View
      style={{
        display: 'flex',
        flex: 0.5,
        flexFlow: 'column wrap',
        justifyContent: 'center',
      }}
    >
      <div style={{ padding: '1rem' }}>
        <Button
          icon='attachment'
          mode='contained'
          onPress={() => ekycSubmitHandler()}
        >
          Attach eKYC XML
        </Button>
        <Button mode='contained' style={{ marginTop: '2rem' }}>
          Face Capture
        </Button>
      </div>
    </View>
  )
}

export default OfflineEKYC
