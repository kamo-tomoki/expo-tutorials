import { router } from "expo-router";
import { Button, StyleSheet, View } from "react-native";

export default function Index() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Button
        title="Async Storage"
        onPress={() => router.push("/async-storage")}
      />
      <Button
        title="Secure Store"
        onPress={() => router.push("/secure-store")}
      />
      <Button title="SQLite" onPress={() => router.push("/sqlite")} />
    </View>
  );
}
