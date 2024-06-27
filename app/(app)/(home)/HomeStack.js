import { Entypo } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, View } from "react-native";
import HomeScreen from ".";
import HeaderLogo from "../../../components/app/HeaderLogo";
import RoomScreen from "./DetailsRoom";

const Stack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ header: () => <HeaderLogo /> }}
      />
      <Stack.Screen
        name="DetailsRoom"
        component={RoomScreen}
        options={{
          header: ({ navigation }) => (
            <View className="relative">
              <TouchableOpacity
                className="absolute left-1 top-1/2 -translate-y-1/2 z-10"
                onPress={() => navigation.goBack()}
              >
                <Entypo name="chevron-left" size={38} color="gray" />
              </TouchableOpacity>
              <HeaderLogo />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
