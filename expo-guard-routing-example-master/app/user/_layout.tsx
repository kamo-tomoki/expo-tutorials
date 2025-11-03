import { userAtom } from "@/atoms/user";
import { router, Stack } from "expo-router";
import { useAtomValue } from "jotai";

export default function UserLayout() {
  const user = useAtomValue(userAtom);

  if (!user) {
    router.back();
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
