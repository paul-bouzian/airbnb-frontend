import axios from "axios";

export default fetchAround = async (coords) => {
  try {
    const response = await axios.get(
      `https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms/around`,
      {
        params: {
          latitude: coords.latitude,
          longitude: coords.longitude,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
