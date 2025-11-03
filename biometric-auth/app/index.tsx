import * as LocalAuthentication from "expo-local-authentication";
import { router } from "expo-router";
import { Button, StyleSheet, View } from "react-native";

export default function Index() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  const authenticate = async () => {
    const biometricAvailable = await LocalAuthentication.hasHardwareAsync();

    if (!biometricAvailable) {
      console.error(
        "Biometric authentication is not available on this device."
      );
      return;
    }

    const enrolled = await LocalAuthentication.isEnrolledAsync();

    if (!enrolled) {
      console.error("No biometric credentials are enrolled on this device.");
      return;
    }

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate to go /success",
    });

    if (!result.success) {
      console.error("Authentication failed.");
      return;
    }

    router.navigate("/success");
  };

  return (
    <View style={styles.container}>
      <Button title="Authenticate" onPress={authenticate} />
    </View>
  );
}
