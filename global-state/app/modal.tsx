import { inputTextAtom } from "@/atoms/inputText";
import { useAtom } from "jotai";
import { StyleSheet, Text, View } from "react-native";

export default function Modal() {
  const [inputText] = useAtom(inputTextAtom);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Text>{inputText}</Text>
    </View>
  );
}
