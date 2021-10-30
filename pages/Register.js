import React from 'react'
import { View, Button, TextInput } from "react-native";

function Register() {
    return (
           <View>
          <h1> Register Page </h1>
        <TextInput
          placeholder="email"
          //onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          placeholder="password"
          secureTextEntry={true}
         // onChangeText={(password) => this.setState({ password })}
        />

        <Button onPress={() => this.onSignUp()} title="Sign In" />
      </View> 
   )
}

export default Register
