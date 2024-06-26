import axios from "axios";

export default fetchLogin = async (email, password, setCredentialsError) => {
  try {
    const response = await axios.post(
      "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in",
      {
        email,
        password,
      }
    );
    return 200;
  } catch (error) {
    setCredentialsError(error.response.data.error);
    return 500;
  }
};
