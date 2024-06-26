import { Feather, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from ".";
import HeaderLogo from "../../components/app/HeaderLogo";
import AroundScreen from "./around";
import ProfileScreen from "./profile";

const Tab = createBottomTabNavigator();

export default Layout = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingTop: 5,
          paddingBottom: 5,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => <HeaderLogo />,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Around me"
        component={AroundScreen}
        options={{
          header: () => <HeaderLogo />,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="location-dot" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="My profile"
        component={ProfileScreen}
        options={{
          header: () => <HeaderLogo />,
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
