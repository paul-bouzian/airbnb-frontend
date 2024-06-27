import { Slot, router, useSegments } from "expo-router";
import { useContext, useEffect } from "react";
import { UserContext, UserProvider } from "../context/UserContext";
import "../global.css";

export default function RootLayout() {
  return (
    <UserProvider>
      <SlotProvider />
    </UserProvider>
  );
}

const SlotProvider = () => {
  const { user } = useContext(UserContext);
  const location = useSegments();

  useEffect(() => {
    if (!user && !location.includes("(auth)")) {
      router.replace("/login");
    }
    if (user && !location.includes("(app)")) {
      router.replace("/");
    }
  }, [user, location]);

  return <Slot />;
};
