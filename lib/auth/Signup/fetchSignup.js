import axios from "axios";

export default fetchSignup = async (
  username,
  description,
  password,
  email,
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
    return 201;
  } catch (error) {
    setCredentialsError(error.response.data.error);
    return 500;
  }
};
