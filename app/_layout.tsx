import "../tamagui-web.css";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import {
  PlayfairDisplay_400Regular,
  PlayfairDisplay_400Regular_Italic,
} from "@expo-google-fonts/playfair-display";
import { Eater_400Regular } from "@expo-google-fonts/eater";
import { Stack } from "expo-router";
import { ToastProvider, ToastViewport } from "@tamagui/toast";

import { useColorScheme } from "react-native";

import { TamaguiProvider } from "tamagui";
import { tamaguiConfig } from "../tamagui.config";
import { useEffect } from "react";
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_400Regular_Italic,
    Eater_400Regular,
  });

  useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    // add this

    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        <ToastProvider>
          <ToastViewport />
        </ToastProvider>
      </ThemeProvider>
    </TamaguiProvider>
  );
}
