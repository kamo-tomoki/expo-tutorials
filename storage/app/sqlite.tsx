import * as SQLite from "expo-sqlite";
import { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

export default function SqliteTest() {
  const [db, setDb] = useState<SQLite.SQLiteDatabase | null>(null);
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    const initialize = async () => {
      const openDb = await SQLite.openDatabaseAsync("test");

      await openDb.execAsync(`
            PRAGMA journal_mode = WAL;
            CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, age INTEGER);
            `);

      setDb(openDb);
    };

    initialize();
  }, []);

  const save = async () => {
    try {
      if (db === null) {
        Alert.alert("Database not initialized");
        return;
      }

      if (typeof key !== "string" || typeof value !== "string") {
        Alert.alert("Key and value must be string");
        return;
      }

      await db.execAsync(
        `INSERT INTO students (name, age) VALUES ('${key}', ${value});`
      );

      Alert.alert("Saved");
    } catch (error) {
      console.error(error);
    }
  };

  const read = async () => {
    try {
      if (db === null) {
        Alert.alert("Database not initialized");
        return;
      }

      const result = await db.getAllAsync("SELECT * FROM students");
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

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
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Name"
        onChangeText={setKey}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Age"
        onChangeText={setValue}
      />
      <Button title="Save" onPress={save} />
      <Button title="Read" onPress={read} />
    </View>
  );
}
