import * as SecureStore from "expo-secure-store";
import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

export default function SecureStoreTest() {
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [readKey, setReadKey] = useState("");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    textInput: {
      padding: 15,
      borderRadius: 15,
      borderWidth: 1,
      width: 300,
    },
    readKeyInput: {
      marginTop: 30,
    },
  });

  const save = async () => {
    let saveValue = value;
    if (typeof value !== "string") {
      saveValue = JSON.stringify(value);
    }

    try {
      await SecureStore.setItemAsync(key, saveValue);
      Alert.alert("Saved");
    } catch (error) {
      console.error(error);
    }
  };

  const read = async () => {
    try {
      const data = await SecureStore.getItemAsync(readKey);

      if (data === null) {
        Alert.alert("No data found");
        return;
      }

      console.log(JSON.parse(data));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Key"
        onChangeText={setKey}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Value"
        onChangeText={setValue}
      />
      <Button title="Save" onPress={save} />
      <TextInput
        style={[styles.textInput, styles.readKeyInput]}
        placeholder="Read Key"
        onChangeText={setReadKey}
      />
      <Button title="Read" onPress={read} />
    </View>
  );
}
