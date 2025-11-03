import { inputTextAtom } from "@/atoms/inputText";
import { router } from "expo-router";
import { useAtom } from "jotai";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const [inputText, setInputText] = useAtom(inputTextAtom);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: 25,
    },
    textInput: {
      marginTop: 100,
      padding: 15,
      borderRadius: 15,
      borderWidth: 1,
      width: 300,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{inputText}</Text>
      <TextInput
        style={styles.textInput}
        value={inputText}
        onChangeText={setInputText}
      />
      <Button
        title="Another Page"
        onPress={() => router.navigate("/another-page")}
      />
      <Button title="Modal" onPress={() => router.navigate("/modal")} />
    </View>
  );
}
