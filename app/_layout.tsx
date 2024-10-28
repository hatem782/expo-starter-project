import { Stack } from "expo-router";
import React from "react";

function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        animation: "ios",
        orientation: "portrait",
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="users/[id]" />
    </Stack>
  );
}

export default RootLayout;
