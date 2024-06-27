import { Image } from "react-native";
import Swiper from "react-native-swiper";

export default RoomSwiper = ({ pictures }) => {
  return (
    <Swiper dotColor="#696969" activeDotColor="#000000">
      {pictures.map((picture, index) => (
        <Image
          key={index}
          source={{ uri: picture.url }}
          resizeMode="cover"
          className="h-full w-full"
        />
      ))}
    </Swiper>
  );
};
