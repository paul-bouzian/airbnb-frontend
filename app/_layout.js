import { Slot, router, useSegments } from "expo-router";
import { useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext, UserProvider } from "../context/UserContext";
import "../global.css";

export default function RootLayout() {
  return (
    <UserProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <SlotProvider />
      </SafeAreaView>
    </UserProvider>
  );
}

const SlotProvider = () => {
  const { user } = useContext(UserContext);
  const location = useSegments();

  useEffect(() => {
    console.log("the new location is ", location);
    if (!user && !location.includes("(auth)")) {
      router.replace("/login");
    }
    if (user && !location.includes("(app)")) {
      router.replace("/profile");
    }
  }, [user, location]);

  return <Slot />;
};
