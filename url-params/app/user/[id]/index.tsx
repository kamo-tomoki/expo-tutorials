import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const { id, oauth } = useLocalSearchParams<{
    id: string;
    oauth: string;
  }>();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: 20,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ユーザーID：{id}</Text>
      <Text style={styles.text}>OAuthログイン：{oauth}</Text>
    </View>
  );
}
