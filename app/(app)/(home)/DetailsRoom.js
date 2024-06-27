import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import Room from "../../../components/app/Home/Room";
import fetchRoom from "../../../lib/app/home/fetchRoom";

const DetailsRoomScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const loadRoom = async () => {
      const response = await fetchRoom(id);
      setRoom(response.data);
      setLoading(false);
    };
    loadRoom();
  }, [id]);

  if (loading) return <ActivityIndicator size="large" className="mt-16" />;

  return (
    <View className="bg-white flex-1">
      <Room
        pictures={room.photos}
        price={room.price}
        title={room.title}
        description={room.description}
        rating={room.ratingValue}
        reviews={room.reviews}
        profilePicture={room.user.account.photo.url}
        size="large"
      />
    </View>
  );
};

export default DetailsRoomScreen;
