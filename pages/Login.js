import React, { useState } from "react";
import { View, Button, TextInput } from "react-native";

function Login() {
  return (
      <View>
          <h1> Login Page </h1>
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
  );
}

export default Login;
