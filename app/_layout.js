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
    if (!user && !location.includes("(auth)")) {
      console.log("user is not logged in");
      console.log("slotprovider > location : ", location);
      console.log("-----------------");
      router.replace("/login");
    }
    if (user && !location.includes("(app)")) {
      console.log("user is logged in");
      router.replace("/");
    }
  }, [user, location]);

  return <Slot />;
};
