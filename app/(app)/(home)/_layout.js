import { Stack } from "expo-router";
import HeaderLogo from "../../../components/app/HeaderLogo";

export default function HomeStackScreen() {
  return (
    <Stack
      screenOptions={{
        headerTitle: () => {
          return <HeaderLogo />;
        },
        headerBackTitleVisible: false,
        headerTintColor: "grey",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="details" />
    </Stack>
  );
}
