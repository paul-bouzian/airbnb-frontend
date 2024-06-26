import { Image, Text, View } from "react-native";
import RatingStar from "./RatingStar";

const Room = ({ picture, price, title, rating, reviews, profilePicture }) => {
  return (
    <View className="border-b border-gray-300">
      <View className="relative h-56">
        <Image source={{ uri: picture }} className="h-full w-full" />
        <View className="absolute bottom-2 left-0 py-2 px-4 bg-black">
          <Text className="text-white text-2xl">{price}&nbsp;€</Text>
        </View>
      </View>

      <View className="py-2 flex-row justify-between gap-2">
        <View className="flex-1 py-2">
          <Text numberOfLines={1} className="text-2xl">
            {title}
          </Text>
          <View className="flex-row items-center gap-2 py-2">
            <RatingStar rating={rating} />
            <Text className="text-gray-500">{reviews} reviews</Text>
          </View>
        </View>
        <View>
          <Image
            source={{ uri: profilePicture }}
            className="h-20 w-20 rounded-full"
          />
        </View>
      </View>
    </View>
  );
};

export default Room;
