import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import Room from "../../components/app/Home/Room";
import fetchRooms from "../../lib/app/fetchRooms";

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const loadRooms = async () => {
      setLoading(true);
      const response = await fetchRooms();
      setRooms(response.data);
      setLoading(false);
    };
    loadRooms();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" className="mt-16" />;
  }

  return (
    <FlatList
      data={rooms}
      renderItem={({ item }) => (
        <Room
          picture={item.photos.length > 0 ? item.photos[0].url : ""}
          price={item.price}
          title={item.title}
          rating={item.ratingValue}
          reviews={item.reviews}
          profilePicture={item.user.account.photo.url}
        />
      )}
      keyExtractor={(item) => item.id}
      className="p-6 bg-white"
      contentContainerStyle={{
        gap: 20,
        paddingBottom: 20,
      }}
    />
  );
};

export default HomeScreen;
