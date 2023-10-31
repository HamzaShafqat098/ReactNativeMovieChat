import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignupScreen from "./screens/SignupScreen";
import MoviesList from "./screens/MoviesList";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sign Up" component={SignupScreen} />
        <Stack.Screen name="Movies List" component={MoviesList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}