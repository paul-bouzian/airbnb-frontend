import * as Location from "expo-location";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import fetchAround from "../../lib/app/aroundme/fetchAround";

const AroundScreen = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [markers, setMarkers] = useState([]);
  const [coords, setCoords] = useState();

  useEffect(() => {
    const askPermission = async () => {
      setIsLoading(true);
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError(
          "Vous devez autoriser l'application à utiliser votre position pour afficher les lieux près de chez vous."
        );
        setIsLoading(false);
        return;
      }
      if (status === "granted") {
        let location = await Location.getCurrentPositionAsync();
        const coords = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        };
        setCoords(coords);
        const markers = await fetchAround(coords);
        if (markers) {
          setMarkers(markers);
          setIsLoading(false);
        }
      }
    };
    askPermission();
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#000" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
      }}
      showsUserLocation={true}
    >
      {markers.map((marker) => (
        <Marker
          key={marker._id}
          coordinate={{
            latitude: marker.location[1],
            longitude: marker.location[0],
          }}
          title={marker.title}
          description={marker.description}
          onPress={() => {
            router.navigate({
              pathname: "/details",
              params: { id: marker._id },
            });
          }}
        />
      ))}
    </MapView>
  );
};

export default AroundScreen;
