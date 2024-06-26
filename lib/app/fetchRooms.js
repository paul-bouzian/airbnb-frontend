import axios from "axios";

export default fetchRooms = async () => {
  try {
    const response = await axios.get(
      "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms"
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
