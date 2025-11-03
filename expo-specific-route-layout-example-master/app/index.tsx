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
        title="Language Setting"
        onPress={() => router.navigate("/settings/language")}
      />
      <Button
        title="Profile Setting"
        onPress={() => router.navigate("/settings/profile")}
      />
    </View>
  );
}
