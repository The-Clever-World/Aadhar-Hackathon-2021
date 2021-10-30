import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen   name="Landing" component={LandingScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}


