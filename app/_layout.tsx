import ReduxProvider from "@/store/Provider";
import { Stack } from "expo-router";
import React from "react";
// Import your global CSS file
import "../global.css";

function RootLayout() {
  return (
    <ReduxProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "ios",
          orientation: "portrait",
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="users/[id]" />
      </Stack>
    </ReduxProvider>
  );
}

export default RootLayout;
