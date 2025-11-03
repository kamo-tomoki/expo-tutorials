import { StyleSheet, Text, View } from "react-native";

export default function SettingsFooter() {
  const styles = StyleSheet.create({
    footer: {
      justifyContent: "center",
      alignItems: "center",
      padding: 40,
      backgroundColor: "green",
    },
    title: {
      color: "white",
    },
  });

  return (
    <View style={styles.footer}>
      <Text style={styles.title}>Footer</Text>
    </View>
  );
}
