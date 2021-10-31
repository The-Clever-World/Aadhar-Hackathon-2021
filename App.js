import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "./pages/Landing";
import OTP from "./pages/OTP";
import EKYC from "./pages/eKYC";
import SystemChecker from "./pages/SystemChecker";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Home Page"
          component={Landing}
        />
        <Stack.Screen name="Generate OTP" component={OTP} />
        <Stack.Screen name="Generate eKYC XML" component={EKYC} />
        <Stack.Screen name="Check System" component={SystemChecker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
