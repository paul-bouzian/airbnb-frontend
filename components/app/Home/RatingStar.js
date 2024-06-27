import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";

const RatingStar = ({ rating }) => {
  return (
    <View className="flex-row">
      {[...Array(rating)].map((_, index) => (
        <AntDesign name="star" key={index} size={22} color="#FFB100" />
      ))}
      {[...Array(5 - rating)].map((_, index) => (
        <AntDesign name="star" key={index} size={22} color="#BBBBBB" />
      ))}
    </View>
  );
};

export default RatingStar;
