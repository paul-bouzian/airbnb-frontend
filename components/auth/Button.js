import { ActivityIndicator, Pressable, Text } from "react-native";
import "../../global.css";

const AuthButton = ({ title, loading, onPress }) => {
  return (
    <Pressable
      style={{
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#F9575D",
        padding: 14,
        width: 200,
        alignItems: "center",
      }}
      onPress={onPress}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator size="small" color="#F9575D" />
      ) : (
        <Text className="text-2xl text-gray-500 font-semibold">{title}</Text>
      )}
    </Pressable>
  );
};

export default AuthButton;
