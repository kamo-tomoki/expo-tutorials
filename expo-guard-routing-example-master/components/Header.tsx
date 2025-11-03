import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  const styles = StyleSheet.create({
    header: {
      backgroundColor: "blue",
      padding: 40,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      color: "white",
      fontSize: 20,
      paddingTop: 30,
    },
  });

  return (
    <View style={styles.header}>
      <Text style={styles.title}>Header</Text>
    </View>
  );
}
