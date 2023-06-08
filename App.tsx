import React from "react";
import * as SplashScreen from "expo-splash-screen";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/routes/stack.routes";

import {
  WorkSans_400Regular,
  WorkSans_600SemiBold,
  useFonts,
} from "@expo-google-fonts/work-sans";

import { ThemeProvider } from "styled-components";
import theme from "./src/style/theme";


export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    WorkSans_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  SplashScreen.hideAsync();

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <RootNavigator />
      </ThemeProvider>
    </NavigationContainer>
  );
}
