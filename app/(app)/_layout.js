import { Entypo, Feather, FontAwesome5 } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default Layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={size} color={color} />
          ),
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="around"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="location-pin" size={size} color={color} />
          ),
          title: "Around me",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
          title: "My profile",
        }}
      />
    </Tabs>
  );
};
