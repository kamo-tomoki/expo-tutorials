import { userAtom } from "@/atoms/user";
import { router } from "expo-router";
import { useSetAtom } from "jotai";
import { Button, StyleSheet, View } from "react-native";

export default function Index() {
  const setUser = useSetAtom(userAtom);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  const login = () => {
    // ログインが成功したと仮定
    setUser({
      email: "hogehoge@example.com",
      username: "hogehoge",
    });
    router.navigate("/user");
  };

  return (
    <View style={styles.container}>
      <Button title="Login" onPress={login} />
      <Button
        title="Go to user page without login"
        onPress={() => router.navigate("/user")}
      />
    </View>
  );
}
