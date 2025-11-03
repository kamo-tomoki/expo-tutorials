import Header from "@/components/Header";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="settings" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
