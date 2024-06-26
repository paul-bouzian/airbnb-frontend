import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";

export default Layout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  );
};
