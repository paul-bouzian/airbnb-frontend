import { View } from "react-native";
import Logo from "../ui/Logo";

const HeaderLogo = () => {
  return (
    <View className="items-center border-b border-gray-200 pb-2 bg-white">
      <Logo className="w-10 h-10" />
    </View>
  );
};

export default HeaderLogo;
