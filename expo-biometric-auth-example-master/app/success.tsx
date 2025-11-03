import { StyleSheet, Text, View } from "react-native";

export default function Success() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Text>Authentication successful</Text>
    </View>
  );
}
