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
      <Button title="Login" onPress={() => router.push("/home/top")} />
    </View>
  );
}
