import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Modal() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  useEffect(() => {
    return () => {
      console.log("Unmounted");
    };
  }, []);

  console.log("Rendered");

  return (
    <View style={styles.container}>
      <Text>Modal</Text>
    </View>
  );
}
