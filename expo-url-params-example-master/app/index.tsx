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
        title="User 3"
        onPress={() => router.navigate("/user/3?oauth=true")}
      />
      <Button
        title="User 12"
        onPress={() => router.navigate("/user/12?oauth=false")}
      />
    </View>
  );
}
