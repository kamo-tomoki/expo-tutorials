import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="async-storage" />
      <Stack.Screen name="secure-store" />
      <Stack.Screen name="sqlite" />
    </Stack>
  );
}
