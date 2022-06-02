import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import RootStackNavigator from "./navigators/StackNavigator/RootStack";

const MainApp = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
      <StatusBar />
    </SafeAreaProvider>
  )
}

export default MainApp