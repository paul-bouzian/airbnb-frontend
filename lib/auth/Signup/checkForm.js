export default checkForm = (
  username,
  email,
  description,
  password,
  confirmPassword,
  setCredentialsError
) => {
  if (
    username === "" ||
    email === "" ||
    description === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    setCredentialsError("All fields are required");
    return false;
  }
  if (password !== confirmPassword) {
    setCredentialsError("Passwords do not match");
    return false;
  }
  if (!email.includes("@")) {
    setCredentialsError("Invalid email");
    return false;
  }
  return true;
};
