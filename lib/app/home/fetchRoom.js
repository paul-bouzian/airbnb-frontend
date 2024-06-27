import axios from "axios";

export default fetchRoom = async (id) => {
  try {
    const response = await axios.get(
      `https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms/${id}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
