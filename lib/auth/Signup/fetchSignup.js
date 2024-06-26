import axios from "axios";

export default fetchSignup = async (
  email,
  username,
  description,
  password,
  setCredentialsError
) => {
  try {
    const response = await axios.post(
      "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/sign_up",
      {
        email,
        username,
        description,
        password,
      }
    );
    return { id: response.data.id, token: response.data.token };
  } catch (error) {
    setCredentialsError(error.response.data.error);
    return null;
  }
};
