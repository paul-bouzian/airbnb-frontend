import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import RatingStar from "./RatingStar";
import RoomSwiper from "./RoomSwiper";

const Room = ({
  pictures,
  price,
  title,
  description,
  rating,
  reviews,
  profilePicture,
  size,
}) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <View className={`${size === "large" ? "" : "border-b border-gray-300"}`}>
      <View className={`relative h-56 ${size === "large" ? "h-96" : ""}`}>
        {size === "large" ? (
          <RoomSwiper pictures={pictures} />
        ) : (
          <Image source={{ uri: pictures[0].url }} className="h-full w-full" />
        )}
        <View className="absolute bottom-2 left-0 py-2 px-4 bg-black">
          <Text className="text-white text-2xl">{price}&nbsp;€</Text>
        </View>
      </View>

      <View className={`${size === "large" ? "px-4" : ""}`}>
        <View className={`py-2 flex-row justify-between gap-2`}>
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
        {size === "large" && (
          <Pressable onPress={() => setShowDescription(!showDescription)}>
            <Text numberOfLines={showDescription ? 0 : 3}>{description}</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default Room;
