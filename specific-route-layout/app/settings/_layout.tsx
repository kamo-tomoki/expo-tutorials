import SettingsFooter from "@/components/SettingsFooter";
import { Stack } from "expo-router";

export default function SettingsLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="language" options={{ headerShown: false }} />
        <Stack.Screen name="profile" options={{ headerShown: false }} />
      </Stack>
      <SettingsFooter />
    </>
  );
}
