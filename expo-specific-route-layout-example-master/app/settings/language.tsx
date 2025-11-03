import { StyleSheet, Text, View } from "react-native";

export default function Language() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Text>Language Setting</Text>
    </View>
  );
}
