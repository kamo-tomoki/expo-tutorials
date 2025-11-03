import { userAtom } from "@/atoms/user";
import { router } from "expo-router";
import { useAtom } from "jotai";
import { Button, StyleSheet, Text, View } from "react-native";

export default function User() {
  const [user, setUser] = useAtom(userAtom);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  const logout = () => {
    setUser(null);
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text>{user?.email}</Text>
      <Text>{user?.username}</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}
