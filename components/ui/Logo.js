import { Image } from "react-native";

const Logo = ({ className }) => {
  return (
    <Image
      source={require("../../assets/img/airbnb-logo.png")}
      className={className}
      resizeMode="contain"
    />
  );
};

export default Logo;
