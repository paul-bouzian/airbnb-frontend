export default checkForm = (email, password, setCredentialsError) => {
  if (email === "" || password === "") {
    setCredentialsError("All fields are required");
    return false;
  }
  if (!email.includes("@")) {
    setCredentialsError("Invalid email");
    return false;
  }
  return true;
};
